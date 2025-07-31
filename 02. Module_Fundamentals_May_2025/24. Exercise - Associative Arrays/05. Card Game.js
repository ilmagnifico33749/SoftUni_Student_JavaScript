function cardGameFunction(arrInp) {
    let playersFinalScoreMap = new Map;
    let playersAllDecksCars = new Map;
    let cardsColorPowerMap = new Map([
        ["S", 4], ["H", 3], ["D", 2], ["C", 1]
    ]);
    let cardTypePowerMap = new Map ([
        ["2", 2], ["3", 3], ["4", 4], ["5", 5], ["6", 6], ["7", 7], ["8", 8], ["9", 9], ["10", 10],
        ["J", 11], ["Q", 12], ["K", 13], ["A", 14]
    ])

    function pointsCalculation(card) {
        let cardType = card.slice(0, -1);
        let cardColor = card.slice(-1);
        let cardTypeValue = cardTypePowerMap.get(cardType);
        let cardColorValue = cardsColorPowerMap.get(cardColor);
        let cardPointsValue = cardTypeValue * cardColorValue;
        return cardPointsValue;
    }

    for (let playerInfo of arrInp) {
        let playerInfoDetails = playerInfo.split(": ");
        let [playerName, playerCardsStr] = playerInfoDetails;
        let playerCardsArr = playerCardsStr.split(", ")
        let playerCountedCards = []

        if (playersAllDecksCars.has(playerName)) {
            playerCountedCards = playersAllDecksCars.get(playerName);
        }

        let playerScorePoints = 0;
        for (let card of playerCardsArr) {
            if (!playerCountedCards.includes(card)) {
                playerCountedCards.push(card)
                playerScorePoints += pointsCalculation(card);
            }
        }

        if (!playersFinalScoreMap.has(playerName)) {
            playersFinalScoreMap.set(playerName, playerScorePoints)
        }
        else if (playersFinalScoreMap.has(playerName)) {
            let playerCurrentScore = playersFinalScoreMap.get(playerName);
            let playerNewScore = playerCurrentScore + playerScorePoints;
            playersFinalScoreMap.set(playerName, playerNewScore);
        }
        playersAllDecksCars.set(playerName, playerCountedCards);
    }

    for (let [playerName, playerFinalScore] of playersFinalScoreMap) {
        console.log(`${playerName}: ${playerFinalScore}`);
    }
}


cardGameFunction(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
);

cardGameFunction(
    [
        'John: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John: JD, JD, JD, JD'
    ]
);
