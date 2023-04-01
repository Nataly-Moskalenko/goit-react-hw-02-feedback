import React, { Component } from 'react';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(state => {
      return {
        good: state.good + 1,
      };
    });
  };

  handleIncrementNeutral = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    this.total = this.state.bad + this.state.neutral + this.state.good;
    return this.total;
  };

  countPositiveFeedbackPercentage = () => {
    this.positivePercentage =
      (this.state.good /
        (this.state.bad + this.state.neutral + this.state.good)) *
      100;
    return this.positivePercentage;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleIncrementGood={this.handleIncrementGood}
            handleIncrementBad={this.handleIncrementBad}
            handleIncrementNeutral={this.handleIncrementNeutral}
          ></FeedbackOptions>
          {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
          <Notification message="There is no feedback"></Notification>
        </Section>
      </div>
    );
  }
}
