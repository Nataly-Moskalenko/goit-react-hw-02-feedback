import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  function onMouseDown(e) {
    e.target.style.backgroundColor = 'blue';
  }
  function onMouseUp(e) {
    e.target.style.backgroundColor = 'white';
  }
  return (
    <ul className={css.feedbackList}>
      {options.map(option => (
        <li key={option} className={css.feedbackItem}>
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
