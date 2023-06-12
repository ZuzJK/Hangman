import React from 'react';

const GameOverMsg = ({isWin, correct}) => {
    if (correct === 0) {
        return <h2>Play Game</h2>;
    }
    else if (isWin) {
        return <h2>You Won</h2>;
    }
    else {
        return <h2>You Lost</h2>;
    }
};

export default GameOverMsg;