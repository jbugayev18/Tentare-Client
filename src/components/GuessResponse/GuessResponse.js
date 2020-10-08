import React, { Component } from "react";

class GuessResponse extends Component {
  renderResponse(isCorrect) {
    if (isCorrect) {
      return `You were correct! :D`;
    } else {
      return `Good try, but not quite right :(`;
    }
  }

  render() {
    const { response, guess, handleNextWord} = this.props;
    const { nextWord, totalScore, isCorrect, answer } = response;
    return (
      <section>
        <main>
          <div >
            <p className="DisplayScore">Your total score is: {totalScore}</p>
          </div>
          <h2>{this.renderResponse(isCorrect)}</h2>
          <div className="DisplayFeedback">
            <p>The correct translation for {nextWord} was {answer} and you chose {guess}!</p>
          </div>
          <button onClick={() => handleNextWord()}>Try another word!</button>
        </main>
      </section>
    );
  }
}

export default GuessResponse;
