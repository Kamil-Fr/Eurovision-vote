import React, { useState, useEffect } from 'react';

const Kraje = ["Sweden","Ukraine","Germany","Luxembourg","Netherlands", "Israel","Lithuania", "Spain","Estonia", "Ireland", "Latvia", "Greece", "United Kingdom", "Norway", "Italy", "Serbia","Finland","Portugal", "Armenia", "Cyprus", "Switzerland", "Slovenia", "Croatia", "Georgia","France", "Austria", "Poland",  "Iceland",   "Moldova", "Azerbaijan", "Australia",     "Rest of the World",  "Albania", "Czechia", "San Marino", "Denmark", "Malta", "Belgium" ];
const MozliwePunkty = [12, 10, 8, 7, 6, 5, 4, 3, 2, 1];

const Test3 = () => {
  const [punkty, setPunkty] = useState(JSON.parse(localStorage.getItem('punkty')) || {});
  const [historia, setHistoria] = useState(JSON.parse(localStorage.getItem('historia')) || []);
  const [filtrKraju, setFiltrKraju] = useState('');
  const [krajPrzyznajacy, setKrajPrzyznajacy] = useState('');
  const [najwiecejPunktowVisible, setNajwiecejPunktowVisible] = useState(false);
  const [wszystkieKrajeVisible, setWszystkieKrajeVisible] = useState(false);

  // Funkcja do przyznawania punktów
  const przyznajPunkty = (krajPrzyznajacy, punkty, krajOdbierajacy) => {
    setPunkty(prevPunkty => ({
      ...prevPunkty,
      [krajOdbierajacy]: (prevPunkty[krajOdbierajacy] || 0) + punkty
    }));
    setHistoria(prevHistoria => [...prevHistoria, { krajPrzyznajacy, punkty, krajOdbierajacy }]);
  };

  // Zapisywanie danych do localStorage po zmianie stanu
  useEffect(() => {
    localStorage.setItem('punkty', JSON.stringify(punkty));
    localStorage.setItem('historia', JSON.stringify(historia));
  }, [punkty, historia]);

  // Funkcja do filtrowania historii po kraju przyznającym punkty
  const filtrujHistorie = (kraj) => {
    setFiltrKraju(kraj);
  };

  // Funkcja do zmiany kraju przyznającego punkty
  const zmienKrajPrzyznajacy = (kraj) => {
    setKrajPrzyznajacy(kraj);
  };

  // Pokaż 10 krajów z największą liczbą punktów (losowo) ułożonych alfabetycznie
  const pokazNajwiecejPunktow = () => {
    const losoweKraje = Object.keys(punkty).sort().slice(0, 10);
    return losoweKraje.map(kraj => <li key={kraj}>{kraj}: {[]}</li>);
  };

  // Pokaż wszystkie kraje z punktami ułożone malejąco
  const pokazWszystkieKraje = () => {
    return Object.keys(punkty).sort((a, b) => punkty[b] - punkty[a]).map(kraj => <li key={kraj}>{kraj}: {punkty[kraj]}</li>);
  };

  // Funkcja do czyszczenia historii przyznawania punktów
  const wyczyscHistorie = () => {
    setHistoria([]);
  };

  // Funkcja do zerowania sumy punktów
  const zerujSumePunktow = () => {
    setPunkty({});
  };

  return (
    <div>
      <h1>Przyznawanie punktów dla krajów</h1>
      <div>
        <h2>Wybierz kraj przyznający punkty:</h2>
        <select id="krajPrzyznajacy" onChange={(e) => zmienKrajPrzyznajacy(e.target.value)}>
          {Kraje.map((kraj, index) => <option key={kraj} style={{fontWeight: index < 26 ? 'bold' : 'normal'}}>{kraj}</option>)}
        </select>
        <h2>Wybierz punkty:</h2>
        <select id="punkty">
          {MozliwePunkty.map(punkty => <option key={punkty}>{punkty}</option>)}
        </select>
        <h2>Wybierz kraj odbierający punkty:</h2>
        <select id="krajOdbierajacy">
  {Kraje.filter(kraj => kraj !== krajPrzyznajacy).map((kraj, index) => (
    <option key={kraj} style={{fontWeight: index < 26 ? 'bold' : 'normal'}}>{kraj}</option>
  ))}
</select>
        <button onClick={() => {
          const punkty = parseInt(document.getElementById('punkty').value);
          const krajOdbierajacy = document.getElementById('krajOdbierajacy').value;
          przyznajPunkty(krajPrzyznajacy, punkty, krajOdbierajacy);
        }}>Przyznaj punkty</button>
      </div>
      <div>
        <h2>Historia przyznawania punktów:</h2>
        <div>
          <h3>Filtruj po kraju przyznającym punkty:</h3>
          <select onChange={(e) => filtrujHistorie(e.target.value)}>
            <option value="">Wszystkie kraje</option>
            {Kraje.map(kraj => <option key={kraj}>{kraj}</option>)}
          </select>
        </div>
        <button onClick={wyczyscHistorie}>Wyczyść historię</button> {/* Przycisk czyszczący historię */}
        <ul>
          {historia
            .filter(entry => filtrKraju ? entry.krajPrzyznajacy === filtrKraju : true)
            .map((wpis, index) => (
              <li key={index}>
                {wpis.krajPrzyznajacy} przyznał {wpis.punkty} punktów dla {wpis.krajOdbierajacy}
              </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Aktualne punkty dla każdego kraju:</h2>
        <div className="punkty-wrapper">
          <div className="punkty-buttons">
            <button onClick={() => setNajwiecejPunktowVisible(!najwiecejPunktowVisible)}>Najwięcej punktów</button>
            {najwiecejPunktowVisible && (
              <ul>
                {pokazNajwiecejPunktow()}
              </ul>
            )}
            <button onClick={() => setWszystkieKrajeVisible(!wszystkieKrajeVisible)}>Wszystkie kraje</button>
            {wszystkieKrajeVisible && (
              <ul>
                {pokazWszystkieKraje()}
              </ul>
            )}
            <button onClick={zerujSumePunktow}>Zeruj sumę punktów</button> {/* Przycisk zerujący sumę punktów */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test3;

