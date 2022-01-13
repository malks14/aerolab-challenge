import { useContext } from "react";

import "./App.css";
import Layout from "./components/Layout/Layout";
import UserProvider from "./store/UserProvider";
import UserContext from "./store/user-context";

function App() {
  const userCtx = useContext(UserContext);
  console.log(userCtx);
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
}

export default App;
