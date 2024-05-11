import React, { useEffect, useState } from 'react';
import './scss/App.scss';
import SemiFinal1 from './components/semiFinalFirst';
import supabase from './config/SupabaseClient';
import SemiFinal2 from './components/votingSemiFinal';
import Test2 from './components/Test 2';
import Test3 from './components/Test3';

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
      <Test2 />
      <Test3 />
      
 </>

export default App;
