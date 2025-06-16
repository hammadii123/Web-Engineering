import React from 'react';
import Counter from './pages/Counter';
import JokeFetcher from './pages/JokeFetcher';
// import ReducerCounter from './pages/ReducerCounter';
// import ExpensiveCalc from './pages/ExpensiveCalc';
// import CallbackExample from './pages/CallbackExample';

import ThemeProvider from './pages/Theme/ThemeProvider';
import ThemedComponent from './pages/Theme/ThemedComponent';

import WindowSizeComponent from './pages/WindowSize/WindowSizeComponent';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Counter />
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
      <WindowSizeComponent />
      <JokeFetcher />
      {/* <ReducerCounter /> */}
      {/* <ExpensiveCalc /> */}
      {/* <CallbackExample /> */}
    </div>
  );
}

export default App;
