import React from 'react';
import './CircularProgressBar.scss';

interface Props {
  skill: string;
  percent: number;
}

const CircularProgressBar: React.FC<Props> = ({ skill, percent }) => {
  const circleStyle: any = {
    '--stroke-dashoffset': `calc(440 - (440 * ${percent}) / 100)` // Use custom property here
  };

  return (
    <div className={"circularProgressBar"}>
    <div className="progressbar">
      <div className="container__progressbars">
        <div className={`progressbar circle-1`} style={circleStyle}>
          <svg className="progressbar__svg">
            <circle
              cx="80"
              cy="80"
              r="70"
              className={`progressbar__svg-circle circle-1`}
            ></circle>
          </svg>
          <span className={`progressbar__text`}>{percent}%</span>
        </div>
      </div>
    </div>
      <div className='skillName'>{skill}</div>
    </div>
  );
};

export default CircularProgressBar;
