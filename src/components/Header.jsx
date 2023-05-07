import { Link } from 'react-router-dom'

const Header = ({ games }) => {
  console.log(games);
  const nextGame = games && games.find(game => new Date(game.date) > new Date());

  return (
    <div className='header'>
      
      <h1>GRIA SIEL/WEL 2023 SEASON GAMES.</h1>
      <h2>MARCH 4TH TO JULY 30TH</h2>
      KEY CONTACTS
         
GRIA SIEL LEAGUES OPERATIONS OFFICE
HEAD OF COMMUNICATIONS: PAUL MACHARIA
MOBILE: +254 723242389
EMAIL: pmacharia@sielwelleague.co.ke

OPERATION MANAGER: SHEM OTIENO
MOBILE: +254 713 403 251
EMAIL: somuta@sielwelleague.co.ke

OFFICIAL LEAGUE COMMUNICATIONS
EMAIL: infor@sielwellleague.co.ke

      {nextGame && (
        <div>
          <p>Next Game:</p>
          <div>
            <span>{nextGame.AWAY}</span> vs <span>{nextGame.HOME}</span> - <span>{nextGame.score1}</span>:{nextGame.score2}
          </div>





        </div>
      )}
    </div>
  )
}

export default Header;