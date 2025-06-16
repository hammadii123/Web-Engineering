import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
    
      <h1>Task1:</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <br/> <br/> <br/> <br/> 
    </div>
    
  );
}

export default Counter;
