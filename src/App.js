import './App.css';
import date from 'date-and-time';
import { useEffect, useState } from 'react';
import logo from './logo.svg';

function App() {
  const [dateNow, setDateNow] = useState(new Date());
  const futureDate = new Date(2022, 8, 28);
  const daysUntil = date.subtract(futureDate, dateNow).toDays();
  const hoursUntil = date.subtract(futureDate, dateNow).toHours();
  const minutesUntil = date.subtract(futureDate, dateNow).toMinutes();
  const secondsUntil = date.subtract(futureDate, dateNow).toSeconds();
  console.log(secondsUntil);
  // useEffect(() => {}, [dateNow]);
  setTimeout(() => setDateNow(new Date()), 1000);
  if (secondsUntil >= 0) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            {daysUntil} - {hoursUntil} : {minutesUntil} : {secondsUntil}
          </p>
        </header>
      </div>
    );
  } else {
    return <p>Awesome</p>;
  }
}

export default App;
