import React, { useState, useEffect } from 'react';
import supabase from '../config/SupabaseClient';
import votingSemiFinal from './votingSemiFinal';

const SemiFinal1 = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

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

  const handleCountryClick = (countryName) => {
    setSelectedCountry(countryName);
  };

  return (
    <div>
      {countries.map((country, index) => (
        <button key={index} onClick={() => handleCountryClick(country.name)}>
          {country.name}
        </button>
      ))}
      {selectedCountry && <votingSemiFinal countryName={selectedCountry} />}
    </div>
  );
};

export default SemiFinal1;




