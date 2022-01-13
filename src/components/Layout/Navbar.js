import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo/aerolab-logo.svg";
import coin from "../../assets/coin.svg";
import UserContext from "../../store/user-context";

const Navbar = () => {
  const userCtx = useContext(UserContext);
  console.log(userCtx);

  return (
    <div className={styles.navCtn}>
      <div>
        <img src={logo} alt="Aerolab logo" />
      </div>
      <div className={styles.navUser}>
        <p>dsadsa</p>

        <button className={styles.btn} onClick={() => userCtx.addCoin(1000)}>
          <p>{userCtx.points}</p>
          <img src={coin} alt="coin" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
