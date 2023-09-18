import React from "react";
import css from './Feedback.module.css'

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    statisticIncrementGood = () => {
        this.setState({
            good: this.state.good +1,
        })
    }
     statisticIncrementNeutral = () => {
        this.setState({
            neutral: this.state.neutral +1,
        })
    }
     statisticIncrementBad = () => {
        this.setState({
            bad: this.state.bad +1,
        })
    }
    render() {
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
                </div>
            </>
        )
    }
  }


export default Feedback;