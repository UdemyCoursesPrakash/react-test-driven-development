import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';

export class UnConnectedGuessWordInput extends Component {

    state = {
        currentGuess : ''
    }

    handleSubmit = () =>{
        const currentGuess = this.state.currentGuess;
        if(currentGuess && currentGuess.length){
            this.props.guessWord(currentGuess);
            this.setState({
                currentGuess : ''
            })
        }
    }

    render(){
        const content = this.props.success ?
        null
        :
        (
            <div>
                <input data-test='input-box' value={this.state.currentGuess} onChange={(event) => this.setState({currentGuess : event.target.value})} type="text" />
                <input data-test='submit-button' disabled = {!(!!this.state.currentGuess.length)} type="submit" onClick={this.handleSubmit} value="Submit" />                
            </div>
        )
        return (
            <div data-test='guess-word-input'>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    success : state.success
})

const mapDispatchToProps = (dispatch) =>({
    guessWord : (guessedWord) => dispatch(guessWord(guessedWord))
})


export default connect(mapStateToProps , mapDispatchToProps)(UnConnectedGuessWordInput);
