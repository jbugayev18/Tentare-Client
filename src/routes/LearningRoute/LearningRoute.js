import React, { Component } from "react";
import LanguageApiService from "../../services/language-api-service";
import LearnWord from "../../components/LearnWord/LearnWord";
import GuessResponse from "../../components/GuessResponse/GuessResponse";

class LearningRoute extends Component {
  async componentDidMount() {
    try {
      const res = await LanguageApiService.getHeadWord();
      this.setState({
        word: res.nextWord,
        totalScore: res.totalScore,
        wordCorrectCount: res.wordCorrectCount,
        wordIncorrectCount: res.wordIncorrectCount,
      });
      console.log(this.state.word);
    } catch (err) {
      this.setState({
        error: err.message,
      });
    }
  }

  state = {
    displayReponse: false,
    response: {},
    guess: '',
  };

  handleGuess = (e) => {
    e.preventDefault();
    const userGuess = e.target['learn-guess-input'].value;
    LanguageApiService.postGuess({guess: userGuess})
      .then((res) => {
        const response = this.state.response
        response.nextWord = this.state.word
        response.totalScore = res.totalScore
        response.wordCorrectCount = res.wordCorrectCount
        response.wordIncorrectCount = res.wordIncorrectCount
        response.answer = res.answer
        response.isCorrect = res.isCorrect

        this.setState({
          response: response,
          displayReponse: true,
          guess: userGuess,
          totalScore: response.totalScore,
          nextWord: res.nextWord
        })
      })
  }

  handleNextWord = () => {
    LanguageApiService.getHeadWord()
      .then((res) => {
        this.setState({
          word: this.state.nextWord,
          wordCorrectCount: res.wordCorrectCount,
          wordIncorrectCount: res.wordIncorrectCount,
          totalScore: this.state.response.totalScore,
          displayReponse: false,
        })
      })
    
  }

  render() {
    const {
      word,
      totalScore,
      wordCorrectCount,
      wordIncorrectCount,
      response,
      guess
    } = this.state;
    return this.state.displayReponse ? (
      <section>
        <GuessResponse 
          response = {response}
          guess = {guess}
          handleNextWord = {this.handleNextWord}
        />
      </section>
    ) : (
      <section>
        <LearnWord
          word={word}
          ts={totalScore}
          wordCc={wordCorrectCount}
          wordIc={wordIncorrectCount}
          handleGuess = {this.handleGuess}
        />
      </section>
    );
  }
}

export default LearningRoute;
