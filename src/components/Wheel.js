import './wheel.css';
import { useEffect, useState } from 'react';

export default function Wheel() {
  const [selectedItem, setSelectedItem] = useState();
  const [prize, setPrize] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const places = [
    'A Massage',
    '1 Prater Diversion Ride',
    'A toothpaste',
    '2 Prater Diversions Rides',
    '3 Prater Diversions Rides',
    'A Massage and 3 Prater Diversions Rides',
  ];

  useEffect(() => {
    setTimeout(() => setPrize(places[selectedItem]), 4000);
  }, [places, selectedItem]);

  let position;
  function selectItem() {
    if (typeof selectedItem === 'undefined') {
      setSelectedItem(Math.floor(Math.random() * places.length));
    } else {
      setSelectedItem(undefined);
      setTimeout(() => {
        position = Math.floor(Math.random() * places.length);
        setSelectedItem(position);
      }, 100);
    }
  }

  const wheelVars = {
    '--nb-item': places.length,
    '--selected-item': selectedItem,
  };
  const spinning = typeof selectedItem !== 'undefined' ? 'spinning' : '';

  return (
    <div className="happyBirthday">
      <h1>🥳 Happy Birthday sweet Anja! 🥳</h1>
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars}>
          {places.map((item, index) => (
            <div
              className="wheel-item"
              key={item}
              style={{ '--item-nb': index }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="btnDiv">
          <button className="spinBtn" onClick={selectItem}>
            <span>Spin*</span> <p className="note">*You have infinite Spins</p>
          </button>
        </div>
        <p>
          {' '}
          You have won: <strong>{prize ? prize : '...'}</strong>
        </p>
      </div>
    </div>
  );
}
