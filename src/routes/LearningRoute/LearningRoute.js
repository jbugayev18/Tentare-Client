import React, { Component } from "react";
import LanguageApiService from "../../services/language-api-service";

class LearningRoute extends Component {
  state = {
    nextWord: "",
  };

  async componentDidMount() {
    try {
      const res = await LanguageApiService.getWords();
      this.setState({
        nextWord: res.next,
      });
      console.log(this.state.nextWord);
    } catch (err) {
      this.setState({
        error: err.message,
      });
    }
  }

  render() {
    return <section>LEARN ROUTE</section>;
  }
}

export default LearningRoute;
