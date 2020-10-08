import React from 'react'
import './guessedWords.scss';
const GuessedWord = (props) => {
    let content;
    if(!props.guessedWords.length){
        content = (
            <div data-test="instructions">
                <span>Try to guess secret word</span>
            </div>
        )
    }else{
        const guessedWordsRow = props.guessedWords.map((word , index)=>(
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        content = (
            <div className="guessedWords" data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr><th>Guess</th><th>Letter Match count</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordsRow}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test="guessed-word-comp">
            {content}
        </div>
    )
}

export default GuessedWord;
