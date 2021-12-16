import { Alert } from "react-bootstrap";
import styles from "./AppAlert.module.css";

const AppAlert = (props) => {
  const { alertData, ...rest } = props;
  return (
    <Alert
      {...rest}
      variant={alertData.isError ? "danger" : "success"}
      onClose={props.onClose}
      dismissible
    >
      <p className={styles.message}>{props.alertData.message}</p>
    </Alert>
  );
};

export default AppAlert;
