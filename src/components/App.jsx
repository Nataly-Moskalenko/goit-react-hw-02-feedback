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

  onLeaveFeedback = option => {
    this.setState(state => {
      return {
        [option]: state[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.total = good + neutral + bad;
    return this.total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    this.positivePercentage =
      (good /
        (good + neutral + bad)) *
      100;
    return this.positivePercentage;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          padding: '80px 40px 40px',          
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statictics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
        <Notification
          total={this.total}
          message="There is no feedback"
        ></Notification>
      </div>
    );
  }
}
