import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={css.statistics}>
      <h2 className={css.statisticsTitle}>Statictics</h2>
      {total ? (
        <ul className={css.statisticsList}>
          <li className={css.statisticsItem}>Good: {good ? good : 0}</li>
          <li className={css.statisticsItem}>
            Neutral: {neutral ? neutral : 0}
          </li>
          <li className={css.statisticsItem}>Bad: {bad ? bad : 0}</li>
          <li className={css.statisticsItem}>Total: {total ? total : 0}</li>
          <li className={css.statisticsItem}>
            Positive feedback:{' '}
            {positivePercentage ? Math.round(positivePercentage) : 0}%
          </li>
        </ul>
      ) : null}
    </div>
  );
}
