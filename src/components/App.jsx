import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { All } from './all/all';

export class App extends Component {
  state = {
    good: 2,
    neutral: 2,
    bad: 3,
  };

  addFeedback = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, bad } = this.state;
    const percent = (good / (good + bad)) * 100;
    return percent.toFixed(0);
  }

  render() {
    return (
      <Layout>
        <All
          FeedBackList={this.state}
          TotalFidback={this.countTotalFeedback()}
          PositiveFeedback={this.countPositiveFeedbackPercentage()}
          options={this.state}
          onLeaveFeedback={this.addFeedback}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
