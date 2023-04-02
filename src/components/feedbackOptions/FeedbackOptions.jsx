export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  )
}

// export default function FeedbackOptions({
//   handleIncrementGood,
//   handleIncrementNeutral,
//   handleIncrementBad,
// }) {
//   return (
//     <ul>
//       <li>
//         <button type="button" onClick={handleIncrementGood}>
//           Good
//         </button>
//       </li>
//       <li>
//         <button type="button" onClick={handleIncrementNeutral}>
//           Neutral
//         </button>
//       </li>
//       <li>
//         <button type="button" onClick={handleIncrementBad}>
//           Bad
//         </button>
//       </li>
//     </ul>
//   );
// }
