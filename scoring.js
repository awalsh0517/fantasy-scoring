const calculateQB = (playerStats) => {
  const passingYards = playerStats.passing.yards / 25
  const passingTouchdowns = playerStats.passing.touchdowns * 6
  const passingInterceptions = playerStats.passing.interceptions * -3
  const rushingYards = playerStats.rushing.yards / 10
  const rushingTouchdowns = playerStats.rushing.touchdowns * 6
  const rushingFumbles = playerStats.rushing.fumbles * -3

  return (
    passingYards +
    passingTouchdowns +
    passingInterceptions +
    rushingYards +
    rushingTouchdowns +
    rushingFumbles
  )
}

const calculateRB = (playerStats) => {
  const rushingYards = playerStats.rushing.yards / 10
  const rushingTouchdowns = playerStats.rushing.touchdowns * 6
  const rushingFumbles = playerStats.rushing.fumbles * -3
  const receivingReceptions = playerStats.receiving.receptions * 1
  const receivingYards = playerStats.receiving.yards / 10
  const receivingTouchdowns = playerStats.receiving.touchdowns * 6
  const receivingFumbles = playerStats.receiving.fumbles * -3
  const returnKickYards = playerStats.return.kickreturn.yards / 15
  const returnKickTouchdowns = playerStats.return.kickreturn.touchdowns * 6
  const returnKickFumbles = playerStats.return.kickreturn.fumbles * -3
  const returnPuntYards = playerStats.return.puntreturn.yards / 15
  const returnPuntTouchdowns = playerStats.return.puntreturn.touchdowns * 6
  const returnPuntFumbles = playerStats.return.puntreturn.fumbles * -3

  return (
    rushingYards +
    rushingTouchdowns +
    rushingFumbles +
    receivingReceptions +
    receivingYards +
    receivingTouchdowns +
    receivingFumbles +
    returnKickYards +
    returnKickTouchdowns +
    returnKickFumbles +
    returnPuntYards +
    returnPuntTouchdowns +
    returnPuntFumbles
  )
}

const calculateWR = (playerStats) => {
  return calculateRB(playerStats)
}

const calculateTE = (playerStats) => {
  const receivingReceptions = playerStats.receiving.receptions * 1
  const receivingYards = playerStats.receiving.yards / 10
  const receivingTouchdowns = playerStats.receiving.touchdowns * 6
  const receivingFumbles = playerStats.receiving.fumbles * -3

  return (
    receivingReceptions +
    receivingYards +
    receivingTouchdowns +
    receivingFumbles
  )

}

const calculateScore = (player) => {
  switch (player.position) {
    case 'QB':
      return calculateQB(player.stats)

    case 'RB':
      return calculateRB(player.stats)

    case 'WR':
      return calculateWR(player.stats)

    case 'TE':
      return calculateTE(player.stats)

    default:
      return 0
  }
}

module.exports = calculateScore
