import React, { useState, useEffect } from 'react';
import supabase from '../config/SupabaseClient';

const VotingSemiFinal = () => {
  const [showPoints, setShowPoints] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState({});
  const [totalPoints, setTotalPoints] = useState(0); // Nowy stan do przechowywania sumy punktów

  useEffect(() => {
    fetchCountries();
    sumPoints(); // Po załadowaniu komponentu, obliczamy sumę punktów
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
  };

  const handleSavePoints = async () => {
    // Zapisz punkty dla każdego wybranego państwa
    try {
      const promises = Object.keys(selectedCountries).map(async (index) => {
        const countryName = selectedCountries[index];
        const points = parseInt(index);
        await supabase.from('VotingResults').insert([{ country: countryName, points }]);
      });

      await Promise.all(promises);
      console.log('Points saved successfully!');
      sumPoints(); // Po zapisaniu punktów, obliczamy ponownie sumę punktów
    } catch (error) {
      console.error('Error saving points:', error.message);
    }
  };

  const sumPoints = async () => {
    // Oblicz sumę punktów dla wszystkich państw
    try {
      const { data, error } = await supabase
        .from('VotingResults')
        .select('points')
        .sum('points');

      if (error) {
        throw error;
      }

      setTotalPoints(data[0].sum);
    } catch (error) {
      console.error('Error summing points:', error.message);
    }
  };

  const handleEditCountry = (index) => {
    setSelectedCountries({ ...selectedCountries, [index]: '' });
  };

  return (
    <div>
      <button onClick={handleShowPoints}>Pokaż punkty</button>
      {showPoints && (
        <div>
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
          <button onClick={handleSavePoints}>Zapisz punkty</button>
          <p>Suma punktów: {totalPoints}</p> {/* Wyświetlanie sumy punktów */}
        </div>
      )}
    </div>
  );
};

export default VotingSemiFinal;

