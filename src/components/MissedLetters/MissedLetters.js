import React from 'react';
import styles from './MissedLetters.module.scss';

const MissedLetters = ({missedLetters}) => 

    <section className={styles.missedLetters}>
        <h2 className={styles.title}>You Missed:</h2>
        <p className={styles.content}>{missedLetters}</p>
    </section>

export default MissedLetters;