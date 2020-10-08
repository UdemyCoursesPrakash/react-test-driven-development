import React, { Component } from 'react'
import Congrats from '../../Components/Congrats/Congrats';
import GuessedWord from '../../Components/GuessedWord/GuessedWord';

export default class wordGame extends Component {
    guessedWords = [
        {
            guessedWord : 'train',
            letterMatchCount : 3
        },
        {
            guessedWord : 'agile',
            letterMatchCount : 1
        },
        {
            guessedWord : 'party',
            letterMatchCount : 5
        }
    ]
    render() {
        return (
            <div>
                <h2>Word Game</h2>
                <Congrats success={true} />
                <GuessedWord guessedWords = {this.guessedWords}/>
            </div>
        )
    }
}
