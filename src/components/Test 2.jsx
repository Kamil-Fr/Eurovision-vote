// import React, { useState, useEffect } from 'react';

// const Kraje = ["Polska", "USA", "Niemcy", "Francja", "Wielka Brytania", "Chiny", "Rosja", "Japonia", "Indie", "Kanada", "Australia", "Brazylia", "Włochy", "Hiszpania", "Korea Południowa"];
// const MozliwePunkty = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

// const App = () => {
//   const [punkty, setPunkty] = useState(JSON.parse(localStorage.getItem('punkty')) || {});
//   const [historia, setHistoria] = useState(JSON.parse(localStorage.getItem('historia')) || []);
//   const [filtrKraju, setFiltrKraju] = useState('');
//   const [krajPrzyznajacy, setKrajPrzyznajacy] = useState('');

//   // Funkcja do przyznawania punktów
//   const przyznajPunkty = (krajPrzyznajacy, punkty, krajOdbierajacy) => {
//     setPunkty(prevPunkty => ({
//       ...prevPunkty,
//       [krajOdbierajacy]: (prevPunkty[krajOdbierajacy] || 0) + punkty
//     }));
//     setHistoria(prevHistoria => [...prevHistoria, { krajPrzyznajacy, punkty, krajOdbierajacy }]);
//   };

//   // Zapisywanie danych do localStorage po zmianie stanu
//   useEffect(() => {
//     localStorage.setItem('punkty', JSON.stringify(punkty));
//     localStorage.setItem('historia', JSON.stringify(historia));
//   }, [punkty, historia]);

//   // Funkcja do filtrowania historii po kraju przyznającym punkty
//   const filtrujHistorie = (kraj) => {
//     setFiltrKraju(kraj);
//   };

//   // Funkcja do zmiany kraju przyznającego punkty
//   const zmienKrajPrzyznajacy = (kraj) => {
//     setKrajPrzyznajacy(kraj);
//   };

//   // Wybierz kraj odbierający punkty
//   const krajeOdbierajace = Kraje.filter(kraj => kraj !== krajPrzyznajacy);

//   // Sortowanie krajów malejąco według liczby punktów
//   const posortowaneKraje = Object.keys(punkty).sort((a, b) => punkty[b] - punkty[a]);

//   // Pokaż 10 krajów z największą liczbą punktów (losowo)
//   const pokazNajwiecejPunktow = () => {
//     const losoweKraje = posortowaneKraje.slice(0, 10);
//     return losoweKraje.map(kraj => <li key={kraj}>{kraj}: {punkty[kraj]}</li>);
//   };

//   // Pokaż wszystkie kraje z punktami ułożone malejąco
//   const pokazWszystkieKraje = () => {
//     return posortowaneKraje.map(kraj => <li key={kraj}>{kraj}: {punkty[kraj]}</li>);
//   };

//   return (
//     <div>
//       <h1>Przyznawanie punktów dla krajów</h1>
//       <div>
//         <h2>Wybierz kraj przyznający punkty:</h2>
//         <select id="krajPrzyznajacy" onChange={(e) => zmienKrajPrzyznajacy(e.target.value)}>
//           {Kraje.map(kraj => <option key={kraj}>{kraj}</option>)}
//         </select>
//         <h2>Wybierz punkty:</h2>
//         <select id="punkty">
//           {MozliwePunkty.map(punkty => <option key={punkty}>{punkty}</option>)}
//         </select>
//         <h2>Wybierz kraj odbierający punkty:</h2>
//         <select id="krajOdbierajacy">
//           {krajeOdbierajace.map(kraj => <option key={kraj}>{kraj}</option>)}
//         </select>
//         <button onClick={() => {
//           const punkty = parseInt(document.getElementById('punkty').value);
//           const krajOdbierajacy = document.getElementById('krajOdbierajacy').value;
//           przyznajPunkty(krajPrzyznajacy, punkty, krajOdbierajacy);
//         }}>Przyznaj punkty</button>
//       </div>
//       <div>
//         <h2>Historia przyznawania punktów:</h2>
//         <div>
//           <h3>Filtruj po kraju przyznającym punkty:</h3>
//           <select onChange={(e) => filtrujHistorie(e.target.value)}>
//             <option value="">Wszystkie kraje</option>
//             {Kraje.map(kraj => <option key={kraj}>{kraj}</option>)}
//           </select>
//         </div>
//         <ul>
//           {historia
//             .filter(entry => filtrKraju ? entry.krajPrzyznajacy === filtrKraju : true)
//             .map((wpis, index) => (
//               <li key={index}>
//                 {wpis.krajPrzyznajacy} przyznał {wpis.punkty} punktów dla {wpis.krajOdbierajacy}
//               </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Aktualne punkty dla każdego kraju:</h2>
//         <div>
//           <h3>10 krajów z największą liczbą punktów:</h3>
//           <ul>{pokazNajwiecejPunktow()}</ul>
//           <h3>Wszystkie kraje z punktami ułożone malejąco:</h3>
//           <ul>{pokazWszystkieKraje()}</ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';

const Kraje = ["Polska", "USA", "Niemcy", "Francja", "Wielka Brytania", "Chiny", "Rosja", "Japonia", "Indie", "Kanada", "Australia", "Brazylia", "Włochy", "Hiszpania", "Korea Południowa"];
const MozliwePunkty = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

const App = () => {
  const [punkty, setPunkty] = useState(JSON.parse(localStorage.getItem('punkty')) || {});
  const [historia, setHistoria] = useState(JSON.parse(localStorage.getItem('historia')) || []);
  const [filtrKraju, setFiltrKraju] = useState('');
  const [krajPrzyznajacy, setKrajPrzyznajacy] = useState('');

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

  // Wybierz kraj odbierający punkty
  const krajeOdbierajace = Kraje.filter(kraj => kraj !== krajPrzyznajacy);

  // Sortowanie krajów malejąco według liczby punktów
  const posortowaneKraje = Object.keys(punkty).sort((a, b) => punkty[b] - punkty[a]);

  // Pokaż 10 krajów z największą liczbą punktów (losowo)
  const pokazNajwiecejPunktow = () => {
    const losoweKraje = posortowaneKraje.slice(0, 10);
    return losoweKraje.map(kraj => <li key={kraj}>{kraj}: {punkty[kraj]}</li>);
  };

  // Pokaż wszystkie kraje z punktami ułożone malejąco
  const pokazWszystkieKraje = () => {
    return posortowaneKraje.map(kraj => <li key={kraj}>{kraj}: {punkty[kraj]}</li>);
  };

  return (
    <div>
      <h1>Przyznawanie punktów dla krajów</h1>
      <div>
        <h2>Wybierz kraj przyznający punkty:</h2>
        <select id="krajPrzyznajacy" onChange={(e) => zmienKrajPrzyznajacy(e.target.value)}>
          {Kraje.map(kraj => <option key={kraj}>{kraj}</option>)}
        </select>
        <h2>Wybierz punkty:</h2>
        <select id="punkty">
          {MozliwePunkty.map(punkty => <option key={punkty}>{punkty}</option>)}
        </select>
        <h2>Wybierz kraj odbierający punkty:</h2>
        <select id="krajOdbierajacy">
          {krajeOdbierajace.map(kraj => <option key={kraj}>{kraj}</option>)}
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
            <button onClick={() => alert('W tym miejscu wyświetl 10 krajów z największą liczbą punktów')}>Najwięcej punktów</button>
            <button onClick={() => alert('W tym miejscu wyświetl wszystkie kraje z punktami ułożone malejąco')}>Wszystkie kraje</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

