import axios from 'axios';

export const getData = async (API, setter) => {
    try {
        const {data: {word}} = await axios.get(API);
        console.log(word)
        console.log('hi')
        setter(word.toLowerCase())
    }
    catch (e) {
        console.log(e)
        const msg = 'We can\'t get a word, check internet';
    }
}

export const initData = (word, setter) => setter([...word.toLowerCase()].map(letter => ({letter,hidden:true})));

export const findLetter = (state,key,setter) => setter(state.map(
        item =>
            item.letter.includes(key)?({letter:key,hidden:false}):(item)
        ))

export const userCorrectLetters = (word, key, setter, setterValue) => {
    if(word.length>1) {
      let count = word.split('').filter(x => x === key).length;
      setter(setterValue + count);
    }
  }
