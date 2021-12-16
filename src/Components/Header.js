import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header__logo}>Employee Management System</h1>
      </div>
    </>
  );
};

export default Header;
