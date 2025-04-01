import { useState } from 'react'

// Components
import { InputBox } from './components/InputBox'
import './App.css'

// Hooks
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  // States
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Swapping the boxes
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Conversion logic
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="card">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="input-group">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="swap-button-wrapper">
              <button
                type="button"
                className="swap-button"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="input-group">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisabled={true}
              />
            </div>

            <button type="submit" className="convert-button">
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
