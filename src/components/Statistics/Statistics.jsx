import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <>
                <div>
                    <p className={css.textStatistics}>Good: {good}</p>
                    <p className={css.textStatistics}>Neutral: {neutral}</p>
                    <p className={css.textStatistics}>Bad: {bad}</p>
                    <p className={css.textStatistics}>Total: {total}</p>
                    <p className={css.textStatistics}>Positive feedback: {positivePercentage} %</p>
                </div></>
}

export default Statistics;