// import React, { useState, useEffect } from 'react';

// const KrajePrzyznajace = ["Cyprus", "Serbia", "Lithuania", "Ireland", "Ukraine", "Poland", "Croatia", "Iceland", "Slovenia", "Finland", "Moldova", "Azerbaijan", "Australia", "Portugal", "Luxembourg", "Germany", "United Kingdom", "Sweden"];
// const KrajeOdbierajace = ["Cyprus", "Serbia", "Lithuania", "Ireland", "Ukraine", "Poland", "Croatia", "Iceland", "Slovenia", "Finland", "Moldova", "Azerbaijan", "Australia", "Portugal", "Luxembourg"];

// const MozliwePunkty = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

// const App = () => {
//   const [punkty, setPunkty] = useState(JSON.parse(localStorage.getItem('punkty')) || {});
//   const [historia, setHistoria] = useState(JSON.parse(localStorage.getItem('historia')) || {});
//   const [filtrKraju, setFiltrKraju] = useState('');
//   const [krajPrzyznajacy, setKrajPrzyznajacy] = useState('');
//   const [najwiecejPunktowVisible, setNajwiecejPunktowVisible] = useState(false);
//   const [wszystkieKrajeVisible, setWszystkieKrajeVisible] = useState(false);

//   // Funkcja do przyznawania punktów
//   const przyznajPunkty = (krajOdbierajacy, punkty) => {
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
//   console.log('historia:', historia);
//   return (
//     <div>
//       <h1>Przyznawanie punktów dla krajów</h1>
//       <div>
//         <h2>Wybierz kraj przyznający punkty:</h2>
//         <select id="krajPrzyznajacy" onChange={(e) => zmienKrajPrzyznajacy(e.target.value)}>
//           {KrajePrzyznajace.map(kraj => <option key={kraj}>{kraj}</option>)}
//         </select>
//       </div>
//       {MozliwePunkty.map((punkty, index) => (
//         <div key={index}>
//           <h2>Wybierz {punkty} punkt(y):</h2>
//           <select>
//             {KrajeOdbierajace.map((kraj, index) => (
//               <option key={index}>{kraj}</option>
//             ))}
//           </select>
//         </div>
//       ))}
//       <button onClick={() => {
//         const punkty = parseInt(document.getElementById('punkty').value);
//         const krajOdbierajacy = document.getElementById('krajOdbierajacy').value;
//         przyznajPunkty(krajPrzyznajacy, punkty, krajOdbierajacy);
//       }}>Przyznaj wszystkie punkty</button>
//       <div>
//         <h2>Historia przyznawania punktów:</h2>
//         <div>
//           <h3>Filtruj po kraju przyznającym punkty:</h3>
//           <select onChange={(e) => filtrujHistorie(e.target.value)}>
//             <option value="">Wszystkie kraje</option>
//             {KrajePrzyznajace.map(kraj => <option key={kraj}>{kraj}</option>)}
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
//         <div className="punkty-wrapper">
//           <div className="punkty-buttons">
//             <button onClick={() => setNajwiecejPunktowVisible(!najwiecejPunktowVisible)}>Najwięcej punktów</button>
//             {najwiecejPunktowVisible && (
//               <ul>
//                 {pokazNajwiecejPunktow()}
//               </ul>
//             )}
//             <button onClick={() => setWszystkieKrajeVisible(!wszystkieKrajeVisible)}>Wszystkie kraje</button>
//             {wszystkieKrajeVisible && (
//               <ul>
//                 {pokazWszystkieKraje()}
//               </ul>
//             )}
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect } from 'react';

// const KrajePrzyznajace = ["Polska", "USA", "Niemcy", "Francja", "Wielka Brytania", "Chiny", "Rosja", "Japonia", "Indie", "Kanada", "Australia", "Brazylia", "Włochy", "Hiszpania", "Korea Południowa"];
// const KrajeOdbierajace = ["Cypr", "Serbia", "Litwa", "Irlandia", "Ukraina", "Polska", "Chorwacja", "Islandia", "Słowenia", "Finlandia", "Mołdawia", "Azerbejdżan", "Australia", "Portugalia", "Luxemburg"];

// const MozliwePunkty = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

// const App = () => {
//   const [punkty, setPunkty] = useState(JSON.parse(localStorage.getItem('punkty')) || {});
//   const [historia, setHistoria] = useState(JSON.parse(localStorage.getItem('historia')) || {});
//   const [filtrKraju, setFiltrKraju] = useState('');
//   const [krajPrzyznajacy, setKrajPrzyznajacy] = useState('');
//   const [najwiecejPunktowVisible, setNajwiecejPunktowVisible] = useState(false);
//   const [wszystkieKrajeVisible, setWszystkieKrajeVisible] = useState(false);

//   // Funkcja do przyznawania punktów
//   const przyznajPunkty = (krajOdbierajacy, punkty) => {
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

//   // Wyczyść wszystkie punkty
//   const wyczyscPunkty = () => {
//     setPunkty({});
//   };

//   // Wyczyść wszystkie punkty z historii
//   const wyczyscHistorie = () => {
//     setHistoria([]);
//   };
// // Sprawdź, czy historia jest obiektem
// if (typeof historia === 'object' && !Array.isArray(historia)) {
//   // Jeśli tak, zamień ją na tablicę
//   setHistoria(Object.entries(historia).map(([k, v]) => ({ ...v, id: k })));
// }
//   console.log('historia:', historia);

//   return (
//     <div>
//       <h1>Przyznawanie punktów dla krajów</h1>
//       <div>
//         <h2>Wybierz kraj przyznający punkty:</h2>
//         <select id="krajPrzyznajacy" onChange={(e) => zmienKrajPrzyznajacy(e.target.value)}>
//           {KrajePrzyznajace.map(kraj => <option key={kraj}>{kraj}</option>)}
//         </select>
//       </div>
//       {MozliwePunkty.map((punkty, index) => (
//         <div key={index}>
//           <h2>Wybierz {punkty} punkt(y):</h2>
//           <select>
//             {KrajeOdbierajace.map((kraj, index) => (
//               <option key={index}>{kraj}</option>
//             ))}
//           </select>
//         </div>
//       ))}
//       <button onClick={() => {
//         const punkty = parseInt(document.getElementById('punkty').value);
//         const krajOdbierajacy = document.getElementById('krajOdbierajacy').value;
//         przyznajPunkty(krajPrzyznajacy, punkty, krajOdbierajacy);
//       }}>Przyznaj wszystkie punkty</button>
//       <button onClick={wyczyscPunkty}>Wyczyść punkty</button>
//       <div>
//         <h2>Historia przyznawania punktów:</h2>
//         <div>
//           <h3>Filtruj po kraju przyznającym punkty:</h3>
//           <select onChange={(e) => filtrujHistorie(e.target.value)}>
//             <option value="">Wszystkie kraje</option>
//             {KrajePrzyznajace.map(kraj => <option key={kraj}>{kraj}</option>)}
//           </select>
//         </div>
//         <button onClick={wyczyscHistorie}>Wyczyść historię</button>
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
//         <div className="punkty-wrapper">
//           <div className="punkty-buttons">
//             <button onClick={() => setNajwiecejPunktowVisible(!najwiecejPunktowVisible)}>Najwięcej punktów</button>
//             {najwiecejPunktowVisible && (
//               <ul>
//                 {pokazNajwiecejPunktow()}
//               </ul>
//             )}
//             <button onClick={() => setWszystkieKrajeVisible(!wszystkieKrajeVisible)}>Wszystkie kraje</button>
//             {wszystkieKrajeVisible && (
//               <ul>
//                 {pokazWszystkieKraje()}
//               </ul>
//             )}
//           </div>
//           <ul>
//             {posortowaneKraje.map((kraj, index) => (
//               <li key={index}>{kraj}: {punkty[kraj]}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect, useRef } from 'react';

// const KrajePrzyznajace = ["Polska", "USA", "Niemcy", "Francja", "Wielka Brytania", "Chiny", "Rosja", "Japonia", "Indie", "Kanada", "Australia", "Brazylia", "Włochy", "Hiszpania", "Korea Południowa"];
// const KrajeOdbierajace = ["Cypr", "Serbia", "Litwa", "Irlandia", "Ukraina", "Polska", "Chorwacja", "Islandia", "Słowenia", "Finlandia", "Mołdawia", "Azerbejdżan", "Australia", "Portugalia", "Luxemburg"];

// const MozliwePunkty = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

// const App = () => {
//   const [punkty, setPunkty] = useState(JSON.parse(localStorage.getItem('punkty')) || {});
//   const [historia, setHistoria] = useState(JSON.parse(localStorage.getItem('historia')) || {});
//   const [filtrKraju, setFiltrKraju] = useState('');
//   const [krajPrzyznajacy, setKrajPrzyznajacy] = useState('');
//   const [najwiecejPunktowVisible, setNajwiecejPunktowVisible] = useState(false);
//   const [wszystkieKrajeVisible, setWszystkieKrajeVisible] = useState(false);

//   // Definiujemy referencje do elementów formularza
//   const krajOdbierajacyRef = useRef(null);
//   const punktyRef = useRef(null);

//   // Funkcja obsługująca kliknięcie przycisku
//   const przyznajPunkty = () => {
//     // Pobieramy wartości z referencji do elementów formularza
//     const punkty = parseInt(punktyRef.current.value);
//     const krajOdbierajacy = krajOdbierajacyRef.current.value;

//     // Dodajemy punkty do kraju odbierającego
//     setPunkty(prevPunkty => ({
//       ...prevPunkty,
//       [krajOdbierajacy]: (prevPunkty[krajOdbierajacy] || 0) + punkty
//     }));

//     // Dodajemy wpis do historii
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

//   // Wyczyść historię
//   const wyczyscHistorie = () => {
//     setHistoria([]);
//   };

//   return (
//     <div>
//       <h1>Przyznawanie punktów dla krajów</h1>
//       <div>
//         <h2>Wybierz kraj przyznający punkty:</h2>
//         <select id="krajPrzyznajacy" onChange={(e) => zmienKrajPrzyznajacy(e.target.value)}>
//           {KrajePrzyznajace.map(kraj => <option key={kraj}>{kraj}</option>)}
//         </select>
//       </div>
//       {MozliwePunkty.map((punkty, index) => (
//         <div key={index}>
//           <h2>Wybierz {punkty} punkt(y):</h2>
//           <select>
//             {KrajeOdbierajace.map((kraj, index) => (
//               <option key={index}>{kraj}</option>
//             ))}
//           </select>
//         </div>
//       ))}
//       <button onClick={przyznajPunkty}>Przyznaj punkty</button>
//       <div>
//         <h2>Historia przyznawania punktów:</h2>
//         <div>
//           <h3>Filtruj po kraju przyznającym punkty:</h3>
//           <select onChange={(e) => filtrujHistorie(e.target.value)}>
//             <option value="">Wszystkie kraje</option>
//             {KrajePrzyznajace.map(kraj => <option key={kraj}>{kraj}</option>)}
//           </select>
//         </div>
//         <button onClick={wyczyscHistorie}>Wyczyść historię</button>
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
//         <div className="punkty-wrapper">
//           <div className="punkty-buttons">
//             <button onClick={() => setNajwiecejPunktowVisible(!najwiecejPunktowVisible)}>Najwięcej punktów</button>
//             {najwiecejPunktowVisible && (
//               <ul>
//                 {pokazNajwiecejPunktow()}
//               </ul>
//             )}
//             <button onClick={() => setWszystkieKrajeVisible(!wszystkieKrajeVisible)}>Wszystkie kraje</button>
//             {wszystkieKrajeVisible && (
//               <ul>
//                 {pokazWszystkieKraje()}
//               </ul>
//             )}
//           </div>
//           <ul>
//             {posortowaneKraje.map((kraj, index) => (
//               <li key={index}>{kraj}: {punkty[kraj]}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

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

//   // Elementy JSX dla listy rozwijalnej krajów odbierających punkty
//   const rozwijalneListy = MozliwePunkty.map((punkty, index) => (
//     <div key={index}>
//       <h2>Wybierz {punkty} punkt(y):</h2>
//       <select>
//         {krajeOdbierajace.map((kraj, index) => (
//           <option key={index}>{kraj}</option>
//         ))}
//       </select>
//       <button onClick={() => {
//         const krajOdbierajacy = document.querySelectorAll('select')[index].value;
//         przyznajPunkty(krajPrzyznajacy, punkty, krajOdbierajacy);
//       }}>Przyznaj punkty</button>
//     </div>
//   ));

//   // Sortowanie krajów malejąco według liczby punktów
//   const posortowaneKraje = Object.keys(punkty).sort((a, b) => punkty[b] - punkty[a]);


  
//   return (
//     <div>
//       <h1>Przyznawanie punktów dla krajów</h1>
//       <div>
//         <h2>Wybierz kraj przyznający punkty:</h2>
//         <select id="krajPrzyznajacy" onChange={(e) => zmienKrajPrzyznajacy(e.target.value)}>
//           {Kraje.map(kraj => <option key={kraj}>{kraj}</option>)}
//         </select>
//       </div>
//       <div>
//         {rozwijalneListy}
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
//         <div className="punkty-wrapper">
//           <ul>
//             {posortowaneKraje.map((kraj, index) => (
//               <li key={index}>{kraj}: {punkty[kraj]}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

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

//   // Elementy JSX dla listy rozwijalnej krajów odbierających punkty
//   const rozwijalneListy = MozliwePunkty.map((punkty, index) => (
//     <div key={index}>
//       <h2>Wybierz {punkty} punkt(y):</h2>
//       <select>
//         {krajeOdbierajace.map((kraj, index) => (
//           <option key={index}>{kraj}</option>
//         ))}
//       </select>
//       <button onClick={() => {
//         const krajOdbierajacy = document.querySelectorAll('select')[index].value;
//         przyznajPunkty(krajPrzyznajacy, punkty, krajOdbierajacy);
//       }}>Przyznaj punkty</button>
//     </div>
//   ));

//   // Sortowanie krajów malejąco według liczby punktów
//   const posortowaneKraje = Object.keys(punkty).sort((a, b) => punkty[b] - punkty[a]);

//   // Funkcja do czyszczenia historii przyznawania punktów
//   const wyczyscHistorie = () => {
//     setHistoria([]);
//   };

//   return (
//     <div>
//       <h1>Przyznawanie punktów dla krajów</h1>
//       <div>
//         <h2>Wybierz kraj przyznający punkty:</h2>
//         <select id="krajPrzyznajacy" onChange={(e) => zmienKrajPrzyznajacy(e.target.value)}>
//           {Kraje.map(kraj => <option key={kraj}>{kraj}</option>)}
//         </select>
//       </div>
//       <div>
//         {rozwijalneListy}
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
//         <button onClick={wyczyscHistorie}>Wyczyść historię</button>
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
//         <div className="punkty-wrapper">
//           <ul>
//             {posortowaneKraje.map((kraj, index) => (
//               <li key={index}>{kraj}: {punkty[kraj]}</li>
//             ))}
//           </ul>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

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
//         <div className="punkty-wrapper">
//           <div className="punkty-buttons">
//             <button onClick={() => alert('W tym miejscu wyświetl 10 krajów z największą liczbą punktów')}>Najwięcej punktów</button>
//             <button onClick={() => alert('W tym miejscu wyświetl wszystkie kraje z punktami ułożone malejąco')}>Wszystkie kraje</button>
//           </div>
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

  // Wybierz kraj odbierający punkty
  const krajeOdbierajace = Kraje.filter(kraj => kraj !== krajPrzyznajacy);

  // Sortowanie krajów malejąco według liczby punktów
  const posortowaneKraje = Object.keys(punkty).sort((a, b) => punkty[b] - punkty[a]);

  // Pokaż 10 krajów z największą liczbą punktów (losowo)
  const pokazNajwiecejPunktow = () => {
    const losoweKraje = posortowaneKraje.slice(0, 10).sort();
    return losoweKraje.map(kraj => <li key={kraj}>{kraj}: {[] || 0}</li>);
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
