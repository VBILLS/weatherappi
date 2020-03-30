import React from 'react';
import './App.css';

async function fetchData() {
  const res = await fetch(
    'https://api.darksky.net/forecast/64ba8a3916e562da1c3038e0e454a0e8/'
  )
    .then(res => console.log(res.json()))
    .catch(err => console.log(err));
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello!</h1>
        <button onClick={fetchData}>Click</button>
      </header>
    </div>
  );
}

export default App;
