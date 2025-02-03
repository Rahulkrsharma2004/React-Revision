// The useReducer hook is useful when you need more complex state logic compared to useState, such as handling multiple state variables or managing state transitions based on specific actions.

// Use Case Example: Counter with Multiple Actions
// This example shows a counter app where you can increment, decrement, and reset the count.

// How It Works
// The reducer function handles state transitions based on the action.type.
// dispatch({ type: "increment" }) triggers the corresponding state update.
// We use buttons to increment, decrement, or reset the counter.

// Why Use useReducer?
// Better for complex state logic than useState
// Easier to manage state transitions with multiple action types
// Scalable for applications with sophisticated state needs like form handling or large component states


import React, { useReducer } from "react";
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Invalid action type");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl">Count: {state.count}</h1>
      <div className="space-x-4 mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
