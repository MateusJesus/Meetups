import classes from "./layout.module.css";
import MainNavigation from "../MainNavigation";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <div className={classes.main}>{children}</div>
    </div>
  );
};

export default Layout;
