import React from 'react';
import useWindowSize from './useWindowSize';

function WindowSizeComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>Task3:</h1>
      <h2>Window Width: {width}px</h2>
      <h2>Window Height: {height}px</h2>
    </div>
  );
}

export default WindowSizeComponent;
