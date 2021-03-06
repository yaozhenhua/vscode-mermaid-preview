import React from 'react';

const Help = ({ content }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: 'block'
    }}
  >
    <div
      style={{
        width: '50%',
        height: '50%',
        paddingTop: '25%',
        margin: 'auto'
      }}
    >
      <code>
        <pre>{content}</pre>
      </code>
    </div>
  </div>
);

export default Help;
