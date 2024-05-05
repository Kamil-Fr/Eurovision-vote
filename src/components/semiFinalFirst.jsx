import React, { useState, useEffect } from 'react';
import supabase from '../config/SupabaseClient';
import '../scss/_semiFinalFirst.scss';

const SemiFinal1 = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [points, setPoints] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const { data, error } = await supabase
        .from('countries')
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

  const handleVoteClick = (country) => {
    setSelectedCountry(country);
    setShowForm(true);
  };

  const handlePointsChange = (e, country) => {
    const { value } = e.target;
    setPoints({ ...points, [country]: parseInt(value) });
  };

  return (
    <div>
      <h2>Semi Final 1</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <button onClick={() => handleVoteClick(country.name)}>Votes {country.name}</button>
            {showForm && selectedCountry === country.name && (
              <div>
                <select onChange={(e) => handlePointsChange(e, country.name)}>
                  <option value="">Select Points</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((point, index) => (
                    <option key={index} value={point}>
                      {point}
                    </option>
                  ))}
                </select>
                <select>
                  <option value="">Select Country</option>
                  {countries
                    .filter((c) => c.name !== selectedCountry)
                    .map((c, index) => (
                      <option key={index} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SemiFinal1;
