import logo from './logo.svg';
import './App.css';

function App() {




  const animals = [
    { vrsta: 'Pas', name: 'Boni', datumRodjenja: new Date() },
    { vrsta: 'Majmun', name: 'Moni', datumRodjenja: new Date() },
    { vrsta: 'Pingvin', name: 'Riki', datumRodjenja: new Date() },
    { vrsta: 'Zirafa', name: 'Spongi', datumRodjenja: new Date() },
    { vrsta: 'Konj', name: 'Poni', datumRodjenja: new Date() },
  ];

  return (
    <div>
      <h1>Zivotinje</h1>

      {animals.map((animal, index) => (
        <table>

          <tr key={index}>
            <td>{animal.vrsta}</td>
            <td>{animal.name}</td>
            <td>{animal.datumRodjenja.toDateString()}</td>
          </tr>

        </table>

      ))}

    </div>
  );
}

export default App;
