import { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastName: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

function FormUsingReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);

  return (
    <form>
      <label>First Name </label>
      <input
        type="text"
        value={state.firstName}
        onChange={(e) =>
          dispatch({
            type: "firstName",
            payload: e.target.value
          })
        }
      />
      <label>Last Name </label>
      <input
        type="text"
        value={state.lastName}
        onChange={(e) =>
          dispatch({
            type: "lastName",
            payload: e.target.value
          })
        }
      />
      <label>Email </label>
      <input
        type="email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "email",
            payload: e.target.value
          })
        }
      />
      <label>Password </label>
      <input
        type="password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "password",
            payload: e.target.value
          })
        }
      />
    </form>
  );
}

export default FormUsingReducer;
