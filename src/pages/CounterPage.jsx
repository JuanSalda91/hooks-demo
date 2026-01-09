//imports//
import { useState } from "react";

function CounterPage() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    return (
        <section>
        <h2>useState – Counter</h2>
        <p>Count: {count}</p>
  
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={e => setStep(Number(e.target.value))}
          />
        </label>
  
        <button onClick={() => setCount(c => c + step)}>Increment</button>
        <button onClick={() => setCount(c => c - step)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>
    );
}

export default CounterPage;