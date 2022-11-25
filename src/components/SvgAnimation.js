import React from 'react';
import './SvgAnimation.scss';

function SvgAnimation(props) {
  return (
    <div>
      <svg className="svg-animation" viewBox="0 0 200 100">
        <symbol id="s-text">
          <text textAnchor="middle"
            x="50%"
            y="60%"
            className="text--line"
          >
            Black Valentine
          </text>
        </symbol>
        <g className="g-ants">
          <use href="#s-text"
            className="text-copy"></use>
          <use href="#s-text"
            className="text-copy"></use>
          <use href="#s-text"
            className="text-copy"></use>
          <use href="#s-text"
            className="text-copy"></use>
          <use href="#s-text"
            className="text-copy"></use>
        </g>
      </svg>
    </div>
  );
}

export default SvgAnimation;