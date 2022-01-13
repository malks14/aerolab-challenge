import React from "react";

const UserContext = React.createContext({
  user: {},
  points: 0,
  redeemHistory: [],
  addCoins: (amount) => {},
});

export default UserContext;
