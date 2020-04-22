const team = {
  _players: [
    {
    firstName: 'Charles',
    lastName: 'Sanchez',
    age: 25
    },
    {
    firstName: 'Randall',
    lastName: 'Isaacs',
    age: 38
    },
    {
    firstName: 'Alexander',
    lastName: 'Asimov',
    age: 33
    }
  ],
  _games: [
    {
    opponent: 'Chucks',
    teamPoints: 44,
    opponentPoints: 25
    },
     {
    opponent: 'Packers',
    teamPoints: 54,
    opponentPoints: 65
    },
     {
    opponent: 'Jets',
    teamPoints: 88,
    opponentPoints: 100
    }
  ],
  get games(){
    return this._games
  },
  get players(){
    return this._players
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player)
  },
  addGame(opponentName, teamPoints, opponentPoints)
  {
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(game)
  }
}

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa','Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

//console.log(team.players)

team.addGame('Rams', 55, 77)
team.addGame('Dolphins', 48, 27)
team.addGame('Vikings', 15, 7)

console.log(team.games)
 
  