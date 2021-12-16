import { Button, Pagination } from "react-bootstrap";
import styles from "./AppPagination.module.css";

const AppPagination = (props) => {
  const totalPages = props.pageableData.totalPages;
  const totalRecords = props.pageableData.totalElements;

  let active;
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Button
        className={styles.pagination__buttons}
        variant="info"
        size="sm"
        key={number}
        active={number === active}
        onClick={() => props.onSetPageNumber(number - 1)}
      >
        {number}
      </Button>
    );
  }

  return (
    <div className={styles.pagination}>
      <Pagination className={styles.pagination__block}>{items}</Pagination>
      <p className={styles.records}>Total number of records: {totalRecords} </p>
    </div>
  );
};

export default AppPagination;
