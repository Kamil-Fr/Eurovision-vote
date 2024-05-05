import React, { useState, useEffect } from 'react';
import supabase from '../config/SupabaseClient';
import VotingSemiFinal from './votingSemiFinal';

const SemiFinal1 = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [availableCountries, setAvailableCountries] = useState([]);

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
      setAvailableCountries(data.map(country => country.name)); // Ustawienie dostępnych państw na początku
    } catch (error) {
      console.error('Error fetching countries:', error.message);
    }
  };

  const handleCountryClick = (countryName) => {
    setSelectedCountry(countryName);
    setAvailableCountries(availableCountries.filter(country => country !== countryName)); // Usunięcie wybranego państwa z listy dostępnych państw
  };

  return (
    <div>
      {countries.map((country, index) => (
        <button key={index} onClick={() => handleCountryClick(country.name)}>
          {country.name}
        </button>
      ))}
      {selectedCountry && <VotingSemiFinal countryName={selectedCountry} availableCountries={availableCountries} />} {/* Przekazanie listy dostępnych państw */}
    </div>
  );
};

export default SemiFinal1;


