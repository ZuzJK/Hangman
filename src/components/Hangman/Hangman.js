import React from 'react';
import styles from './Hangman.module.scss';

const Hangman = ({mistake}) => {
const man = [
        'head',
        'neck',
        'body',
        'armRight',
        'armLeft',
        'palmRight',
        'palmLeft',
        'legRight',
        'legLeft',
        'footRight',
        'footLeft'
];
    return (
        <div className={styles.man}>
            <span className={styles.noose}></span>
            {
                man.filter((el,i)=>i<mistake).map((el,i)=>
                <div 
                    className={`${styles[el]}`}
                    key={i}>
                </div>)
            }
        </div>
    );
};

export default Hangman;