import React from 'react';

const Icon = props => (
  <svg className={props.className + ' -icon'}>
    <use xlinkHref={props.icon}/>
  </svg>
);
export default Icon;