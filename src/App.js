import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import GameOver from './view/GameOver/GameOver';
import { getData } from './helpers';
import API from './data/API';
import './GlobalStyle.scss';

function App() {
  const [currentKey, setCurrentKey] = useState(null);
  const [word, setWord] = useState([]);

  const [missedLetters, setMissedLetters] = useState("");
  const [usedLetters, setUsedLetters] = useState("");
  const [mistake, setMistake] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [newGame, setNewGame] = useState(1);
  const [isWin, setWin] = useState(false);

  const handleCorrect = correct => setCorrect(correct);

  const handleKeyDown = ({key,code}) =>
  {
    key = key.toLowerCase();
    if(((key === "-" || "'") || code.includes('Key')) && !(usedLetters.includes(key))) {  
      setUsedLetters(usedLetters.concat(key));
      if(word.includes(key)) {
         setCurrentKey(key);
        }
        else {
          setMistake(mistake + 1); 
          setMissedLetters(`${missedLetters} ${key}`);
        } 
    }
  };

  const handleOver = () => {
    setNewGame(!newGame);
    setUsedLetters('');
    setMissedLetters('');
    setMistake(0);
    setCorrect(0);   
    setWin(false);
    setCurrentKey(null);
    /* Can we get back to default value by one line of code? */
  }
  useEffect(()=>{
    getData(API,setWord)
  },[newGame]);
  useEffect(()=>{
    if(word.length === correct) {
      setWin(true)
  }
  },[correct]);
  return (
    <div 
        className="App"
        onKeyDown={(handleKeyDown)}
        tabIndex="0">
      <>
          {
            word.length>2 ? 
            <>
            { ((mistake > 10) || (isWin === true)) && <GameOver isWin={isWin} correct={correct} clickFn={handleOver}/> }
                <Container 
                    mistake={mistake}
                    missedLetters={missedLetters}
                    currentKey={currentKey}
                    word={word}
                    handleCorrect = {handleCorrect}
                    />
                </>
             : 'Loading...'
          }
      </>
    </div>
  );
}

export default App;