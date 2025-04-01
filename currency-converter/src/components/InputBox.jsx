import React, { useId } from "react";
import './InputBox.css';

export const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisabled = false,
  currencyDisabled = false,
  className = ""
}) => {
  const amountInputId = useId();

  return (
    <div className={`input-container ${className}`}>
      <div className="amount-section">
        <label htmlFor={amountInputId} className="label">
          {label}
        </label>
        <input
          id={amountInputId}
          className="amount-input"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="currency-section">
        <p className="currency-label">Currency Type</p>
        <select
          className="currency-dropdown"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
