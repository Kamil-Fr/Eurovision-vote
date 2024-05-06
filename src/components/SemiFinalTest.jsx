import React, { useState, useEffect } from 'react';
import supabase from '../config/SupabaseClient';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';


function Test() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [votes, setVotes] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 10: '', 12: '' });

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    let { data: countries, error } = await supabase.from('Countries').select('*');
    if (error) console.log("Data loading error", error);
    else setCountries(countries);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleVoteChange = (points, country) => {
    setVotes(prevState => ({...prevState, [points]: country}));
  };

  return (
    <div>
      <h1>Semi Final 1</h1>
      {countries.map((country, index) => (
        <button key={index} onClick={() => handleCountryClick(country)}>
          {country.name}
        </button>
      ))}

      {selectedCountry && (
        <div>
          <h2>Votes from {selectedCountry.name}</h2>
          {Object.entries(votes).map(([points, country]) => (
            <div key={points}>
              <label>{points} points</label>
              <select value={country} onChange={(e) => handleVoteChange(points, e.target.value)}>
                <option value=''>Choose a country</option>
                {countries.map((c, idx) => (c.name !== selectedCountry.name &&
                  <option key={idx} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Test;
