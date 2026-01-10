import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  submitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "change_field":
      return {
        ...state,
        [action.field]: action.value,
        submitted: false,
      };
    case "submit":
      return {
        ...state,
        submitted: true,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function ReducerPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "submit" });
  };

  return (
    <section>
      <h2>useReducer – Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            value={state.name}
            onChange={e =>
              dispatch({
                type: "change_field",
                field: "name",
                value: e.target.value,
              })
            }
          />
        </label>

        <label>
          Email:
          <input
            value={state.email}
            onChange={e =>
              dispatch({
                type: "change_field",
                field: "email",
                value: e.target.value,
              })
            }
          />
        </label>

        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </form>

      {state.submitted && (
        <p>
          Submitted: {state.name} ({state.email})
        </p>
      )}
    </section>
  );
}
