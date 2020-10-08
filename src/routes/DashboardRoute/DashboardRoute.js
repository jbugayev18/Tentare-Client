import React, { Component } from "react";
import LanguageApiService from "../../services/language-api-service";
import { Link } from "react-router-dom";

class DashboardRoute extends Component {
  state = {
    language: {},
    words: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const dashboardData = await LanguageApiService.getLanguageAndWords();
      this.setState({
        language: dashboardData.language,
        words: dashboardData.words,
      });
      console.log(dashboardData);
    } catch (err) {
      this.setState({
        error: err.message,
      });
    }
  }

  renderWordList = (words) => {
    return words.map((word, i) => {
      return (
        <li className="word" key={i}>
          <h4>{word.original}</h4>
          <div className="count">
            <div className="correct"> Correct Count: {word.correct_count} </div>
            <div className="incorrect">
              Incorrect Count: {word.incorrect_count}
            </div>
          </div>
        </li>
      );
    });
  };

  render() {
    const { language, words } = this.state;

    return (
      <section>
        <div className="language">
          <h2>{language.name}</h2>
          {/* {console.log(language)} */}
          <h2 className="Total correct answers">
            {" "}
            Total correct answers: {language.total_score}
          </h2>
        </div>
        <ul>
          <h3>Words to practice</h3>
          {this.renderWordList(words)}
        </ul>
        <Link to="/learn">Start</Link>
      </section>
    );
  }
}

export default DashboardRoute;
