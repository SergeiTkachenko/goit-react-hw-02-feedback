import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const All = ({
  FeedBackList: { good, neutral, bad },
  TotalFidback,
  PositiveFeedback,
  onLeaveFeedback,
  options,
}) => {
  const optionKeys = Object.keys(options);
  return (
    <div>
      <h2>Please leave feadback</h2>
      <button type="button" onClick={() => onLeaveFeedback(optionKeys[0])}>
        {optionKeys[0]}
      </button>
      <button type="button" onClick={() => onLeaveFeedback(optionKeys[1])}>
        {optionKeys[1]}
      </button>
      <button type="button" onClick={() => onLeaveFeedback(optionKeys[2])}>
        {optionKeys[2]}
      </button>
      <h2>Statistics</h2>
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>Total:{TotalFidback}</p>
        <p>PositiveFeedback:{PositiveFeedback}%</p>
      </div>
    </div>
  );
};
