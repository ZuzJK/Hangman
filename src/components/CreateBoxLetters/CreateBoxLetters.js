import React, { useState,useEffect } from 'react';
import BoxItem from './BoxItem/BoxItem';
import { initData, findLetter, userCorrectLetters } from '../../helpers';
import styles from './CreateBoxLetters.module.scss';
const CreateBoxLetters = ({currentKey, word, handleCorrect}) => {

const [data,setData] = useState([]);
const [correct, setCorrect] = useState(0);
const [numberDisabledBox, setNumberDisabledBox] = useState(0);

let disabledBox = Array(numberDisabledBox).fill(0);

useEffect(() => {
    //setData(initData(word));
    initData(word,setData);
    console.log(`Data is ${data}`)
    setCorrect(0);    
},[word]);

useEffect(()=>{
    setNumberDisabledBox(11 - data.length);
},[data]);  

useEffect(()=>{
    findLetter(data, currentKey, setData);
    userCorrectLetters(word, currentKey, setCorrect, correct);
},[currentKey]);

useEffect(()=>{
    handleCorrect(correct);
},[correct]);

    return (
        <div className={styles.flex}>
            {
                disabledBox.concat(data).map(({letter,hidden},i) => letter ? 
                <BoxItem 
                        letter={letter} 
                        hidden={hidden}
                        key={i}/> : <BoxItem disabled key={i} />)
            } 
        </div>
    );
};

export default CreateBoxLetters;