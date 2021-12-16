import { useState } from "react";
import { Spinner, Button, Row, Col } from "react-bootstrap";
import EmployeeTable from "./EmployeeTable";
import AppForm from "./Form";
import styles from "./Employees.module.css";
import AppPagination from "./AppPagination";
import EmployeeSort from "./EmployeeSort";

const Employees = (props) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  const openFormHandler = () => {
    setFormIsOpen(true);
  };

  const closeFormHandler = () => {
    setFormIsOpen(false);
  };

  let content;

  if (props.employees.length === 0) {
    content = (
      <div>
        <h4>No employees found.</h4>
      </div>
    );
  }

  if (props.employees.length > 0) {
    content = (
      <EmployeeTable
        employees={props.employees}
        pageableData={props.pageableData}
        onSetPageNumber={props.onSetPageNumber}
        onDelete={props.onDelete}
        save={props.onEdit}
        show={formIsOpen}
        onClose={closeFormHandler}
      />
    );
  }

  return (
    <>
      <Row>
        <Col xs={8}>
          <Button onClick={openFormHandler} variant="info" size="md">
            Add New Employee
          </Button>
        </Col>
        <Col className={styles.actions}>
          <EmployeeSort sortBy={props.sortBy} />
        </Col>
      </Row>

      <AppForm show={formIsOpen} close={closeFormHandler} save={props.save} />

      {content}

      <AppPagination
        pageableData={props.pageableData}
        onSetPageNumber={props.onSetPageNumber}
      />

      {props.isLoading && (
        <div className={styles.spinner}>
          <Spinner animation="border" />
        </div>
      )}
    </>
  );
};

export default Employees;
