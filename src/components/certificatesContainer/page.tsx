"use client"
import * as React from "react";
import { Photo, PhotoAlbum, RenderPhotoProps } from "react-photo-album";
import clsx from "clsx";
import "./certificates.css"

import {
    closestCenter,
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    UniqueIdentifier,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable";

// import photoSet from "./photos";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import pic from "/.jpg"

interface SortablePhoto extends Photo {
    id: string;
    institute?: string;
    date?: string;
    skill?: string;
}

type SortablePhotoProps = RenderPhotoProps<SortablePhoto>;

type PhotoFrameProps = SortablePhotoProps & {
    overlay?: boolean;
    active?: boolean;
    insertPosition?: "before" | "after";
    attributes?: Partial<React.HTMLAttributes<HTMLDivElement>>;
    listeners?: Partial<React.HTMLAttributes<HTMLDivElement>>;
};
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];





const PhotoFrame = React.memo(
    React.forwardRef<HTMLDivElement, PhotoFrameProps>((props, ref) => {
        const { layoutOptions, imageProps, overlay, active, insertPosition, attributes, listeners } = props;
        const { alt, style,src, ...restImageProps } = imageProps;
        return (
            <div
                ref={ref}
                style={{
                    width: overlay ? `calc(100% - ${2 * layoutOptions.padding}px)` : style.width,
                    padding: style.padding,
                    marginBottom: style.marginBottom,
                }}
                className={clsx("photo-frame", {
                    overlay: overlay,
                    active: active,
                    insertBefore: insertPosition === "before",
                    insertAfter: insertPosition === "after",
                })}
                {...attributes}
                {...listeners}
            >
                <img
                    src={src}
                    alt={alt}
                    style={{
                        ...style,
                        width: "100%",
                        height: "auto",
                        padding: 0,
                        marginBottom: 0,
                    }}
                    {...restImageProps}
                />
                <div className="photoDetails">
                    <div className="skill">{props.photo.skill}</div>
                    <div className="instituteDate">
                        <div className="institute">{props.photo.institute}</div>
                        <div className="date">{props.photo.date}</div>
                    </div>
                </div>
            </div>
        );
    })
);
PhotoFrame.displayName = "PhotoFrame";

function SortablePhotoFrame(props: SortablePhotoProps & { activeIndex?: number }) {
    const { photo, activeIndex } = props;
    const { attributes, listeners, isDragging, index, over, setNodeRef } = useSortable({ id: photo.id });

    return (
        <PhotoFrame
            ref={setNodeRef}
            active={isDragging}
            insertPosition={
                activeIndex !== undefined && over?.id === photo.id && !isDragging
                    ? index > activeIndex
                        ? "after"
                        : "before"
                    : undefined
            }
            aria-label="sortable image"
            attributes={attributes}
            listeners={listeners}
            {...props}
        />
    );
}

export default function Certificates({photoSet}:any) {
    
        const [photos, setPhotos] = React.useState(
        (photoSet)?.map((photo:any) => ({
                src: photo.src,
                width: photo.width,
                height: photo.height,
                institute: photo.institute,
                skill: photo.skill,
                date: photo.date,
                srcSet: breakpoints.map((breakpoint) => {
                    const height = Math.round((photo.height / photo.width) * breakpoint);
                    return {
                        src: photo.src,
                        width: breakpoint,
                        height,
                    };
                }),
            id: photo.src,
        }))
    );
    const renderedPhotos = React.useRef<{ [key: string]: SortablePhotoProps }>({});
    const [activeId, setActiveId] = React.useState<UniqueIdentifier | null>(null);
    const activeIndex = activeId ? photos.findIndex((photo:any) => photo.id === activeId) : undefined;

    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 50, tolerance: 10 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const handleDragStart = React.useCallback(({ active }: DragStartEvent) => setActiveId(active.id), []);

    const handleDragEnd = React.useCallback((event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setPhotos((items:any) => {
                const oldIndex = items.findIndex((item:any) => item.id === active.id);
                const newIndex = items.findIndex((item:any) => item.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }, []);

    const renderPhoto = React.useCallback(
        (props: SortablePhotoProps) => {
            renderedPhotos.current[props.photo.id] = props;
            return <SortablePhotoFrame activeIndex={activeIndex} {...props} />;
        },
        [activeIndex]
    );
    const [index, setIndex] = React.useState(-1);
    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={photos} >
                <div style={{ padding: 20 ,paddingLeft: 40, paddingRight: 40 ,paddingBottom: 80, backgroundColor: "#000"}}
                >
                    {/* <div className="galleryHead">Certificates</div> */}
                    <PhotoAlbum photos={photos} layout="rows" spacing={30} padding={20} renderPhoto={renderPhoto} onClick={({ index }) => setIndex(index)} />
                    <Lightbox
                        slides={photos}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                    />
                </div>
            </SortableContext>
            <DragOverlay>{activeId && <PhotoFrame overlay {...renderedPhotos.current[activeId]} />}</DragOverlay>
        </DndContext>
    );
}