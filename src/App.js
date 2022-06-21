import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {




  const animals = [
    { type: 'Pas', name: 'Boni', dateOfBirth: new Date() },
    { type: 'Majmun', name: 'Moni', dateOfBirth: new Date() },
    { type: 'Pingvin', name: 'Riki', dateOfBirth: new Date() },
    { type: 'Zirafa', name: 'Spongi', dateOfBirth: new Date() },
    { type: 'Konj', name: 'Poni', dateOfBirth: new Date() },
  ];

  const removeProduct = (index) => {
    setProductsArray([
      ...products.slice(0, index),
      ...products.slice(index + 1, products.length)
    ]);
  }


  return (
    <div>
      <h1>Zivotinje</h1>
      <table>

        {animals.map((animal, index) => (


          <tr key={index}>
            <td>{animal.type}</td>
            <td>{animal.name}</td>
            {animal.dateOfBirth !== null ?
              <td>{animal.dateOfBirth.toDateString()}</td> :
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
