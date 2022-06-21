import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {




  const animals = [
    { vrsta: 'Pas', name: 'Boni', datumRodjenja: new Date() },
    { vrsta: 'Majmun', name: 'Moni', datumRodjenja: new Date() },
    { vrsta: 'Pingvin', name: 'Riki', datumRodjenja: new Date() },
    { vrsta: 'Zirafa', name: 'Spongi', datumRodjenja: new Date() },
    { vrsta: 'Konj', name: 'Poni', datumRodjenja: new Date() },
  ];

  const [items, setItems] = useState(animals);
  const deleteItem = (index) => () =>
    setItems((items) => items.filter((_, i) => i !== index));


  return (
    <div>
      <h1>Zivotinje</h1>
      <table>

        {animals.map((animal, index) => (


          <tr key={index}>
            <td>{animal.vrsta}</td>
            <td>{animal.name}</td>
            {animal.datumRodjenja !== null ?
              <td>{animal.datumRodjenja.toDateString()}</td> :
              <p>Nepoznato</p>
            }
            <td>
              <button onClick={deleteItem(index)}>Remove</button>
            </td>
          </tr>



        ))}
      </table>

    </div>
  );
}

export default App;
