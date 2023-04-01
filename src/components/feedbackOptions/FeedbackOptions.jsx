import React, { Component } from 'react';

/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */

export default class FeedbackOptions extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,           
    }));
    // console.log(this.state.good);
  }

  handleIncrementNeutral = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  }

  handleIncrementBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  }

  countTotalFeedback = () => {
    this.total(state => ({
      total: state.bad + state.neutral + state.good,
    }));
  }

  countPositiveFeedbackPercentage = () => {
    this.positivePercentage(state => ({
      positivePercentage:
        (state.bad / (state.bad + state.neutral + state.good)) * 100,
    }));
  }

  render() {
    // const { step } = this.props;

    return (
      <ul>
        <li>
          <button type="button" onClick={this.handleIncrementGood}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={this.handleIncrementBad}>
            Bad
          </button>
        </li>
      </ul>
    );
  }
}
