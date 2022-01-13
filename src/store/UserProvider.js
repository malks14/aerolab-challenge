import { useReducer, useState, useEffect } from "react";
import UserContext from "./user-context";
import axios from "../api/shopapi";

const defaultUserState = {
  user: {},
  points: 0,
  redeemHistory: [],
};

const userReducer = (state, action) => {
  if (action.type === "ADD_COINS") {
    state.user.points.concat(action.amount);
  }
  return defaultUserState;
};

const UserProvider = (props) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState();
  const addCoinHandler = (amount) => {
    dispatchUserAction({ type: "ADD_COINS", amount: amount });
  };

  const [loadedUser, setLoadedUser] = useState();
  const fetchUser = async () => {
    //   setIsLoading(true);

    const fetchedUser = await axios
      .get("/user/me")
      .then((response) => console.log(response.data));

    // const responseData = await fetchedUser.json();
    // console.log(responseData);

    // if (!fetchedUser.ok) {
    //   throw new Error(fetchedUser.message);
    // }
    // setLoadedUser(fetchedUser.data);

    // setError(err.message);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const userContext = {
    user: loadedUser,
    points: loadedUser,
    redeemHistory: userState.redeemHistory,
    addCoin: addCoinHandler,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

//switch (action.type) {
//     case "ADD_COINS":
//       return {
//         ...state,
//         user: [...state.user, action.amount],
//       };

//     default:
//       return state;
//   }
