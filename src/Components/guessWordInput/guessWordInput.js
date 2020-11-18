import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';

class guessWordInput extends Component {
    render(){
        const content = this.props.success ?
        null
        :
        (
            <div>
                <input data-test='input-box' type="text" />
                <input data-test='submit-button' type="submit" value="Submit" />                
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
    guessWord : () => guessWord()
})


export default connect(mapStateToProps , mapDispatchToProps)(guessWordInput);
