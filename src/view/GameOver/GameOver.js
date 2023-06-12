import React from 'react';
import GameOverMsg from './GameOverMsg/GameOverMsg';
import Button from '../../components/Button/Button';
import styles from './GameOver.module.scss';

const GameOver = ({isWin = false, correct, clickFn}) => {
    return (
        <div className={styles.container}>
            <GameOverMsg isWin={isWin} correct={correct}/>
            <Button 
                clickFn={clickFn}
                >New Word
            </Button>
        </div>
    );
};

export default GameOver;