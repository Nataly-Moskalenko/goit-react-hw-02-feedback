import Section from './section/Section';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';

export const App = () => {
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
      {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
        <FeedbackOptions />
        <Statistics
          good={FeedbackOptions.handleIncrementGood}
          neutral={FeedbackOptions.handleIncrementNeutral}
          bad={FeedbackOptions.handleIncrementBad}
          total={FeedbackOptions.countTotalFeedback} 
          positivePercentage={FeedbackOptions.countPositiveFeedbackPercentage}
        ></Statistics>      
      </Section>
    </div>
  );
};
