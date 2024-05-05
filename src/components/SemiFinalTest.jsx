import React, { useState, useEffect } from 'react';
import supabase from '../config/SupabaseClient';
import votingSemiFinal from './votingSemiFinal';

const SemiFinalTest = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const { data, error } = await supabase
        .from('Semi Final 1')
        .select('name')
        .order('name');

      if (error) {
        throw error;
      }

      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error.message);
    }
  };

  const handleTelevoteClick = (countryName) => {
      <votingSemiFinal countryName={countryName} />;
  };

  return (
    <div>
      <h2>Lista Państw</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            {country.name}
            <button onClick={() => handleTelevoteClick(country.name)}>Televote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SemiFinalTest;
