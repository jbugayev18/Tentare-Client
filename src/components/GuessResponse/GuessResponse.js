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
    const { totalScore } = res;
    return (
      <main>
        <div className="DisplayScore">
          <p> `Your total score is: {}`</p>
        </div>
        <h2>{this.renderResponse(isCorrect)}</h2>
        <div className="DisplayFeedback">
          <p>`The correct translation for: {}`</p>
        </div>
        <button> Try another word!</button>
      </main>
    );
  }
}

export default GuessResponse;
