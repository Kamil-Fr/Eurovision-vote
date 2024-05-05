import React, { useState, useEffect } from 'react';
import supabase from '../config/SupabaseClient';

const votingSemiFinal = () => {
  const [showPoints, setShowPoints] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState({});

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

  const handleShowPoints = () => {
    setShowPoints(true);
  };

  const handleCountryChange = async (e, index) => {
    const { value } = e.target;

    setSelectedCountries({ ...selectedCountries, [index]: value });

    // Zapis punktów do bazy danych
    try {
      const { data, error } = await supabase
        .from('VotingResults')
        .insert([{ country: value, points: index }])
        .single();

      if (error) {
        throw error;
      }

      console.log('Points saved:', data);
    } catch (error) {
      console.error('Error saving points:', error.message);
    }
  };

  const handleEditCountry = (index) => {
    setSelectedCountries({ ...selectedCountries, [index]: '' });
  };

  return (
    <div>
      <button onClick={handleShowPoints}>Pokaż punkty</button>
      {showPoints && (
        <ul>
          {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((point, index) => (
            <li key={index}>
              {point} punktów
              {selectedCountries[index] && (
                <>
                  <span>{selectedCountries[index]}</span>
                  <button onClick={() => handleEditCountry(index)}>Edytuj</button>
                </>
              )}
              {!selectedCountries[index] && (
                <select onChange={(e) => handleCountryChange(e, index)}>
                  <option value="">Wybierz państwo</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default votingSemiFinal;

