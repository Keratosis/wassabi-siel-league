
# Basketball Live Score Web App

This is a web application that displays live scores and upcoming matches for basketball games. The app is built using React and retrieves data from a REST API.

## Features

- Display live scores for ongoing basketball games
- Display upcoming matches with team logos and dates
- Display season leaders based on total scores
- Delete button to remove games from the list
- Automatic slider to show the details of upcoming matches one by one

## Installation

To run this project, first clone the repository from GitHub:


git clone https://github.com/yourusername/basketball-app.git


Then navigate to the project directory and install the dependencies using npm:


cd basketball-app
npm install


Finally, start the development server…

npm start


## API

This app retrieves data from a REST API hosted at https://siel-data.onrender.com/games. The API returns an array of basketball games with the following properties:

- `ID`: The unique identifier for the game
- `DATE`: The date of the game
- `DAY`: The day of the week for the game
- `HOME`: The name of the home team
- `AWAY`: The name of the away team
- `CONFERENCE`: The conference the game belongs to
- `LOCATION`: The location of the game
- `score1`: The score of the home team
- `score2`: The score of the away team
- `notes`: Any notes about the game
- `IMAGE1`: The URL for the logo of the home team
- `IMAGE2`: The URL for the logo of the away team

## Credits

This project was created by :
contributors
1.Brian Lunalo
2.Gloriah Kadimane
3.Joyce Njoroge
4.Braxton Omondi


 as part of a web development course. The app uses the following libraries and frameworks:

- React
- js
- css
-htmlgit 





## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.