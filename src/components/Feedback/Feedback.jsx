import React from "react";
import css from './Feedback.module.css'

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    statisticIncrementGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good +1,
            }
          
        })
    }
     statisticIncrementNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral +1,
            }
          
        })
    }
     statisticIncrementBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            }
          
        })
    }
    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
        
    }
    countPositiveFeedbackPercentage = () => {

    }
    render() {
        const countTotalFeedback = Object.values(this.state).reduce((acc, state) => acc + state, 0); 
        const countPositiveFeedbackPercentage = Math.round((this.state.good*100)/countTotalFeedback);
        return (<>
                <div className={css.buttonWrapper}>
                    <button type="button" onClick={this.statisticIncrementGood} className={css.button55}>Good</button>
                    <button type="button" onClick={this.statisticIncrementNeutral}className={css.button55}>Neutral</button>
                    <button type="button" onClick={this.statisticIncrementBad}className={css.button55}>Bad</button>
                </div>
                <p className={css.text}>Statistics</p>
                <div>
                    <p className={css.textStatistics}>Good: {this.state.good}</p>
                    <p className={css.textStatistics}>Neutral: {this.state.neutral}</p>
                    <p className={css.textStatistics}>Bad: {this.state.bad}</p>
                    <p className={css.textStatistics}>Total: {countTotalFeedback}</p>
                    <p className={css.textStatistics}>Positive feedback: { countPositiveFeedbackPercentage}</p>
                </div>
            </>
        )
    }
  }


export default Feedback;