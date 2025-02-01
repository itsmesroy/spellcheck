import React, {useState} from 'react'
import './App.css';

const customDictionary={
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
}

function App() {
  const [text, setText]= useState('');
  const [suggestion, setSuggestion]= useState('');

  const handleChange=(e)=>{
    
    const inputText = e.target.value;
    setText(inputText);


    const words = inputText.split(' ');
    const firstMisspelledWord = words.find((word) => customDictionary[word.toLowerCase()]);

    if (firstMisspelledWord) {
      const correctedWord = customDictionary[firstMisspelledWord.toLowerCase()];
      setSuggestion(`Did you mean: ${correctedWord}?`);
    } else {
      setSuggestion('');
    }
  }
  return (
    <div className="App">
      <h1>Spell Check</h1>
      <textarea 
        placeholder="Enter you r text here..."
        value={text}
        onChange={handleChange}
        rows={10}
        cols={50}
      />
  {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default App;
