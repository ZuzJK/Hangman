import React from 'react';
import Hangman from '../Hangman/Hangman';
import MissedLetters from '../MissedLetters/MissedLetters';
import CreateBoxLetters from '../CreateBoxLetters/CreateBoxLetters';
import styles from './Container.module.scss';

const Container = ({mistake, 
    missedLetters,
    currentKey,
    word,
    handleCorrect}) => 
            <main className={styles.card}> 
                <Hangman mistake={mistake} />
                <MissedLetters missedLetters={missedLetters} />
                <CreateBoxLetters currentKey={currentKey} word={word} handleCorrect={handleCorrect}/>
            </main>

export default Container;