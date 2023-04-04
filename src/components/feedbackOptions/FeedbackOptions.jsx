import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const onMouseDown = e => {
    e.target.style.backgroundColor = 'blue';
  };
  const onMouseUp = e => {
    e.target.style.backgroundColor = 'white';
  };
  return (
    <ul className={css.feedbackList}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.feedbackButton}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
