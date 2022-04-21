import Nav from "./Nav";

import Classes from "../assets/styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={Classes.main}>
        <div className={Classes.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
