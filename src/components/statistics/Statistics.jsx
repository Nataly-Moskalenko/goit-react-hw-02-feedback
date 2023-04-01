export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <section>
      <h2>Statictics</h2>
      <p>No feedback given</p>
      <ul>
        <li>Good: {good ? good : 0}</li>
        <li>Neutral: {neutral ? neutral : 0}</li>
        <li>Bad: {bad ? bad : 0}</li>
        <li>Total: {total ? total : 0}</li>
        <li>
          Positive feedback: {positivePercentage ? positivePercentage : 0}%
        </li>
      </ul>
    </section>
  );
}
