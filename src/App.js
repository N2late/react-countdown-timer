import './App.css';
import date from 'date-and-time';
import { useState } from 'react';
import Wheel from './components/Wheel';
import image from './img/1639934844493.jpg';

function App() {
  const [dateNow, setDateNow] = useState(new Date());
  const futureDate = new Date(2022, 8, 28);
  let nextDay = date.addDays(dateNow, 1);
  nextDay = date.format(nextDay, 'D');
  const endOfTheDay = new Date(2022, 8, nextDay, '00', '00', '00');

  const minutes = 59 - date.format(dateNow, 'mm');

  const seconds = 59 - date.format(dateNow, 'ss');

  // input time in days, hours, minutes and seconds
  const daysUntil = Math.floor(date.subtract(futureDate, dateNow).toDays());
  const hoursUntilEndOfDay = Math.floor(
    date.subtract(endOfTheDay, dateNow).toHours(),
  );

  // the total amount of seconds until the deadline defined
  const secondsUntil = Math.floor(
    date.subtract(futureDate, dateNow).toSeconds(),
  );
  setTimeout(() => setDateNow(new Date()), 1000);

  return secondsUntil >= 0 ? (
    <div className="App">
      <header className="App-header">
        <h2>Hi Anja 😊</h2>
        <img
          style={{ width: 200, border: '5px solid white' }}
          src={image}
          alt="logo"
        />
        <p>
          {daysUntil} {daysUntil === '1' ? 'day' : 'days'} |{' '}
          {hoursUntilEndOfDay} {hoursUntilEndOfDay > 1 ? 'hours' : 'hour'},{' '}
          {minutes} {minutes > 1 ? 'minutes' : 'minute'} and {seconds}{' '}
          {seconds > 1 ? 'seconds' : 'second'}
        </p>
        <h1>Until your Birthday 🥳</h1>
      </header>
    </div>
  ) : (
    <Wheel />
  );
}

export default App;
