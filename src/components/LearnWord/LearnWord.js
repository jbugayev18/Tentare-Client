import React, { Component } from "react";
import "./LearnWord.css";

class LearnWord extends Component {
  render() {
    const { word, ts, wordCc, wordIc, handleGuess } = this.props;
    return (
      <section className="learn-words">
        <main>
        <div className='translate-word'>
          <h2>Translate the word:</h2>
          </div> 

          <div className='active-word'>
          <span>{word}</span>
          </div>



          <form onSubmit={(e) => handleGuess(e)}>
            <label htmlFor="learn-guess-input">
              What's the translation for this word?
            </label>
            <input id="learn-guess-input" type="text" required />
            <button type="submit">Submit your answer</button>
          </form>

          <div className='answered'>
          <div className=' correct'>
          You have answered this word correctly {wordCc} times.
          </div>
          <br/>

          <div className='incorrect'>
          You have answered this word incorrectly {wordIc} times.
          </div>

          </div>
        </main>

        <p>Your total score is: {ts}</p>
      </section>
    );
  }
}

export default LearnWord;
