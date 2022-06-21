import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';

function App() {




  const animals = [
    { type: 'Pas', name: 'Boni', dateOfBirth: new Date() },
    { type: 'Majmun', name: 'Moni', dateOfBirth: new Date() },
    { type: 'Pingvin', name: 'Riki', dateOfBirth: new Date() },
    { type: 'Zirafa', name: 'Spongi', dateOfBirth: new Date() },
    { type: 'Konj', name: 'Poni', dateOfBirth: new Date() },
  ];

  const [items, setItems] = useState(animals);

  const deleteItem = (index) =>
    setItems((items) => items.filter((_, i) => i !== index));




  return (
    <div>
      <h1>Zivotinje</h1>
      <table>
        <tbody>
          {items.map((animal, index) => (


            <tr key={index}>
              <td>{animal.type} </td>
              <td>{animal.name}</td>
              {animal.dateOfBirth !== null ?
                <td>{animal.dateOfBirth.toDateString()}</td> :
                <p>Nepoznato</p>
              }

              <td>
                <button onClick={() => deleteItem(index)}>delete</button>

              </td>
            </tr>



          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
