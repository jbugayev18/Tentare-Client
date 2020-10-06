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
      const dashboardData = await LanguageApiService.getLanguage();
      this.setState({
        language: dashboardData.language,
        words: dashboardData.words,
      });
      console.log(dashboardData)
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
          <p>{word.original}</p>
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
        {language.name}
        {/* {console.log(language)} */}
        <ul>{this.renderWordList(words)}</ul>
        <div className="totalScore"> Total Score: {language.total_score}</div>
        <Link to="/learn">
          Start
        </Link>
      </section>
    );
  }
}

export default DashboardRoute;
