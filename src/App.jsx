import React, { useEffect, useState } from 'react';
import './App.scss';
import SemiFinal1 from './components/semiFinalFirst';
import supabase from './config/SupabaseClient';
import SemiFinal2 from './components/votingSemiFinal';

function App() {
  console.log(supabase);
  const [count, setCount] = useState(0);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from('countries').select();
    setCountries(data);
  }

  return (
    <>
      <SemiFinal1 />
      <SemiFinal2 />
      {/* <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
    </>
  );
        }

export default App;
