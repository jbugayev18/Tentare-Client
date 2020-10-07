import React, { Component } from "react";
import LanguageApiService from "../../services/language-api-service";
import LearnWord from "../../components/LearnWord/LearnWord";

class LearningRoute extends Component {
  state = {
    nextWord: "",
  };

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

  render() {
    const {
      word,
      totalScore,
      wordCorrectCount,
      wordIncorrectCount,
    } = this.state;
    return (
      <section>
        LEARN ROUTE
        <LearnWord
          word={word}
          ts={totalScore}
          wordCc={wordCorrectCount}
          wordIc={wordIncorrectCount}
        />
      </section>
    );
  }
}

export default LearningRoute;
