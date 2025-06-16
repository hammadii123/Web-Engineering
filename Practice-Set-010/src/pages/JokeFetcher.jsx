import React, { useState, useEffect } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, []);

  return (
    <div>
        <h1>Task4:</h1>
      <h2>Random Joke</h2>
      {!joke ? <p>Loading...</p> : (
        <>
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.punchline}</p>
        </>
      )}
    </div>
  );
}

export default JokeFetcher;
