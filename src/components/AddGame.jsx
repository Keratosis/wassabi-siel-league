import React, { useState } from "react";
import "./AddGame.css";

function AddGames() {
  const [gameData, setGameData] = useState({
    GAME: "",
    HOME: "",
    AWAY: "",
    CONFERENCE: "",
    DAY: "",
    DATE: "",
    TIME: "",
    COURT: "",
    LOCATION: "",
    score1: "",
    score2: "",
    notes: "",
    IMAGE1: "",
    IMAGE2: ""
  });

 
  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://siel-data.onrender.com/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(gameData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  return (
    <div>
    <div className="add-games-container">
    <h2 className="add-games-header">Add Games</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="game">
          Game:
          <input
            type="text"
            name="GAME"
            id="game"
            value={gameData.GAME}
            onChange={e => setGameData({ ...gameData,GAME: e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="home-team">
          Home Team:
          <input
            type="text"
            name="HOME"
            id="home-team"
            value={gameData.HOME}
            onChange={e => setGameData({ ...gameData,HOME : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="away-team">
          Away Team:
          <input
            type="text"
            name="AWAY"
            id="away-team"
            value={gameData.AWAY}
            onChange={e => setGameData({ ...gameData,AWAY : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="conference">
          CONFERENCE:
          <input
            type="text"
            name="CONFERENCE"
            id="conference"
            value={gameData.CONFERENCE}
            onChange={e => setGameData({ ...gameData,CONFERENCE : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="day">
          DAY:
          <input
            type="text"
            name="DAY"
            id="day"
            value={gameData.DAY}
            onChange={e => setGameData({ ...gameData,DAY : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="date">
          DATE:
          <input
            type="text"
            name="DATE"
            id="date"
            value={gameData.DATE}
            onChange={e => setGameData({ ...gameData,DATE : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="time">
          TIME:
          <input
            type="text"
            name="TIME"
            id="time"
            value={gameData.TIME}
            onChange={e => setGameData({ ...gameData,TIME : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="court">
          COURT:
          <input
            type="text"
            name="COURT"
            id="court"
            value={gameData.COURT}
            onChange={e => setGameData({ ...gameData,COURT : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="location">
          LOCATION:
          <input
            type="text"
            name="LOCATION"
            id="location"
            value={gameData.LOCATION}
            onChange={e => setGameData({ ...gameData,LOCATION : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="score-1">
          score1:
          <input
            type="text"
            name="score1"
            id="score-1"
            value={gameData.score1}
            onChange={e => setGameData({ ...gameData,score1 : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="score-2">
          score2:
          <input
            type="text"
            name="score2"
            id="score-2"
            value={gameData.score2}
            onChange={e => setGameData({ ...gameData,score2 : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="notes">
          notes:
          <input
            type="text"
            name="notes"
            id="notes"
            value={gameData.notes}
            onChange={e => setGameData({ ...gameData,notes : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="image-1">
          IMAGE1:
          <input
            type="text"
            name="IMAGE1"
            id="image-1"
            value={gameData.IMAGE1}
            onChange={e => setGameData({ ...gameData,IMAGE1 : e.target.value}) }
          />
        </label>
        <br />
        <label htmlFor="image-2">
          IMAGE2:
          <input
            type="text"
            name="IMAGE2"
            id="image-2"
            value={gameData.IMAGE2}
            onChange={e => setGameData({ ...gameData,IMAGE2: e.target.value}) }
          />
        </label>
        <br />
        <button type="submit" className="add-games-btn">Add Game</button>
      </form>
    </div>
    </div>
  );
}

export default AddGames;