import React, { useState } from 'react';

function AddGames({ onAddGame }) {
  const [home, setHome] = useState('');
  const [away, setAway] = useState('');
  const [conference, setConference] = useState('');
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [court, setCourt] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      HOME: home,
      AWAY: away,
      CONFERENCE: conference,
      DAY: day,
      DATE: date,
      TIME: time,
      COURT: court,
      LOCATION: location,
      score1: '',
      score2: '',
      notes: ''
    };
    
    fetch('http://localhost:4002/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGame)
    })
      .then(response => response.json())
      .then(data => {
        onAddGame(data);
       
        setHome('');
        setAway('');
        setConference('');
        setDay('');
        setDate('');
        setTime('');
        setCourt('');
        setLocation('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Game</h2>
      <label>
        Home Team:
        <input type="text" value={home} onChange={(e) => setHome(e.target.value)} />
      </label>
      <label>
        Away Team:
        <input type="text" value={away} onChange={(e) => setAway(e.target.value)} />
      </label>
      <label>
        Conference:
        <input type="text" value={conference} onChange={(e) => setConference(e.target.value)} />
      </label>
      <label>
        Day:
        <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Time:
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <label>
        Court:
        <input type="text" value={court} onChange={(e) => setCourt(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddGames;
