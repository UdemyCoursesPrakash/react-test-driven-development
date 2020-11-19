import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSecretWord } from '../../actions/index';
import Congrats from '../../Components/Congrats/Congrats';
import GuessedWord from '../../Components/GuessedWord/GuessedWord';
import GuessWordInput from '../../Components/guessWordInput/guessWordInput';

export class UnConnectedWordGame extends Component {
    componentDidMount(){
        this.props.getSecretWord();
    }
    render() {
        return (
            <div>
                <h2>Word Game</h2>
                <Congrats success={this.props.success} />
                <GuessWordInput />
                <GuessedWord guessedWords = {this.props.guessedWords}/>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    success : state.success,
    guessedWords : state.guessedWords,
    secretWord : state.secretWord
  })
  
  const mapDispatchToProps = dispatch =>({
    getSecretWord : () => getSecretWord()
  }) 

//   export default connect(mapStateToProps , mapDispatchToProps)(WordGame);
  export default connect(mapStateToProps , mapDispatchToProps)(UnConnectedWordGame);