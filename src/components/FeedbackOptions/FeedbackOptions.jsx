import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <div className={css.buttonWrapper}>
         {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)} className={css.button}>
          {option}
        </button>
      ))}
                {/* <button key = {option} type="button" onClick={()=>this.onLeaveFeedback('good')} className={css.button}>Good</button>
                <button type="button" onClick={()=>this.onLeaveFeedback('neutral')} className={css.button}>Neutral</button>
                <button type="button" onClick={()=>this.onLeaveFeedback('bad')}className={css.button}>Bad</button> */}
            </div>
}

export default FeedbackOptions;