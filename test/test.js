const assert = require('assert')
const AlwaysRock = require('../alwaysRock')
const AlwaysPaper = require('../alwaysPaper')
const AlwaysScissors = require('../alwaysScissors')
const Dwayne = require('../dwayne.js')
const Alpha = require('../deciders/alpha.js')


describe('Rock, Paper, Scissors', function() {
  describe('Paper beats Rock', function() {
    it('Test A vs. B', function() {
      this.timeout(5000)
      const bot1 = new Dwayne()
      const bot2 = new AlwaysRock()
      winCount = runGame(bot1, bot2)
      console.log(bot1.name(), winCount[0], bot2.name(), winCount[1])
    })
  })

  function compareRound(bot1Play, bot2Play){
    // Rock == 1
    // Paper == 2
    // Scissors == 3
    if(bot1Play == bot2Play){
      return null
    } else if(bot1Play == 1 && bot2Play == 2){
      return 1
    }else if(bot1Play == 2 && bot2Play == 3){
      return 1
    }else if(bot1Play == 3 && bot2Play == 1){
      return 1
    }else{
      return 0
    }
      //index of player to award win to
      if(bot1Play > bot2Play){
        lastResult = 0
      } else {
        lastResult = 1
      }


  }

  function runGame(bot1, bot2){
    //Bots should accept null as a decision from previous game (first round) or tie
    let roundWinner = null
    const winCount = [0,0]
    for(let i = 0; i < 1000 ; i++){

      //Get next play from both bots
      const bot1Play = bot1.next(roundWinner ? roundWinner == 0 : null)
      const bot2Play = bot2.next(roundWinner ? roundWinner == 1 : null)

      roundWinner = compareRound(bot1Play, bot2Play)
      winCount[roundWinner] = winCount[roundWinner] + 1
    }
    return winCount
  }
})
