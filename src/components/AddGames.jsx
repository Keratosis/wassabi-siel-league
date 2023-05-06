import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddGames({ onAddGame }) {
  const [inputData, setInputData] = useState({
    home: '',
    away: '',
    conference: '',
    day: '',
    date: '',
    time: '',
    court: '',
    location: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      HOME: inputData.home,
      AWAY: inputData.away,
      CONFERENCE: inputData.conference,
      DAY: inputData.day,
      DATE: inputData.date,
      TIME: inputData.time,
      COURT: inputData.court,
      LOCATION: inputData.location,
      score1: '',
      score2: '',
      notes: ''
    };

    fetch('http://localhost:4003/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGame)
    })
      .then(response => response.json())
      .then((newGame) => {
        onAddGame(newGame);
        alert("Data Posted Successfully");
        navigate('/');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="home">Home:</label>
            <input
              type="text"
              name="home"
              className="form-control"
              value={inputData.home}
              onChange={e => setInputData({ ...inputData, home: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="away">Away:</label>
            <input
              type="text"
              name="Away"
              className="form-control"
              value={inputData.away}
              onChange={e => setInputData({ ...inputData, away: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="conference">Conference:</label>
            <input
              type="text"
              name="conference"
              className="form-control"
              value={inputData.conference}
              onChange={e => setInputData({ ...inputData, conference: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="day">Day:</label>
            <input
              type="text"
              name="day"
              className="form-control"
              value={inputData.day}
              onChange={e => setInputData({ ...inputData, day: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              name="date"
              className="form-control"
              value={inputData.date}
              onChange={e => setInputData({ ...inputData, date: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <input
              type="text"
              name="Time"
              className="form-control"
              value={inputData.time}
              onChange={e => setInputData({ ...inputData, time: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="court">Court:</label>
            <input
              type="text"
              name="court"
              className="form-control"
              value={inputData.court}
              onChange={e => setInputData({ ...inputData, court: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              className="form-control"
              value={inputData.location}
              onChange={e => setInputData({ ...inputData, location: e.target.value })}
            />
          </div>
          <button className="btn btn-gameinfo" type="submit">AddGame</button>
        </form>
      </div>
    </div>
  );
}

export default AddGames;
