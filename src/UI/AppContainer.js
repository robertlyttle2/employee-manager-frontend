import { Container } from "react-bootstrap";
import styles from "./AppContainer.module.css";

const AppContainer = (props) => {
  return <Container className={styles.container}>{props.children}</Container>;
};

export default AppContainer;
