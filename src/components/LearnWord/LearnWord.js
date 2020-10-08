import React, { Component } from "react";

class LearnWord extends Component {
  render() {
    const { word, ts, wordCc, wordIc } = this.props;
    return (
      <section>
        <main>
          <h2>Translate the word:</h2>
          <span>{word}</span>
          <form>
            <label htmlFor="learn-guess-input">
              What's the translation for this word?
            </label>
            <input id="learn-guess-input" type="text" required />
            <button type="submit">Submit your answer</button>
          </form>
         
            You have answered this word correctly {wordCc} times.
            <br />
            You have answered this word incorrectly {wordIc} times.
        
        </main>

        <p>Your total score is: {ts}</p>
      </section>
    );
  }
}




export default LearnWord;
