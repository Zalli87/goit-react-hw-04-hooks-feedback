import PropTypes from 'prop-types';
import s from './Feedback.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
    return (
        <>
            <button className={s.button} onClick={onLeaveFeedback}>
                Good
            </button>
            <button className={s.button} onClick={onLeaveFeedback}>
                Neutral
            </button>
            <button className={s.button} onClick={onLeaveFeedback}>
                Bad
            </button>
        </>
    );
}

FeedbackOptions.protoType = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
