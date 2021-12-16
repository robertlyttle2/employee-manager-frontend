import { useState } from "react";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import ViewModal from "./ViewModal";
import ConfirmModal from "./ConfirmModal";
import AppForm from "./Form";

import styles from "./EmployeeTable.module.css";

const EmployeeTable = (props) => {
  const [selectedEmployee, setSelectedEmployee] = useState([]);

  // View Modal
  const [viewModalIsOpen, setViewModalIsOpen] = useState(false);
  const openViewModalHandler = (employee) => {
    setSelectedEmployee(employee);
    setViewModalIsOpen(true);
  };

  const closeViewModalHandler = () => {
    setSelectedEmployee([]);
    setViewModalIsOpen(false);
  };

  // Edit Modal
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const openEditModalHandler = (employee) => {
    setSelectedEmployee(employee);
    setEditModalIsOpen(true);
  };

  const closeEditModalHandler = () => {
    setEditModalIsOpen(false);
  };

  // Delete Modal
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const openConfirmModalHandler = (employee) => {
    setSelectedEmployee(employee);
    setConfirmModalIsOpen(true);
  };

  const closeConfirmModalHandler = () => setConfirmModalIsOpen(false);

  return (
    <>
      <Table
        responsive
        striped
        bordered
        hover
        variant="dark"
        className={styles.table}
      >
        <thead className={styles.table__head}>
          <tr className={styles.table__row}>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          {props.employees.map((employee) => (
            <tr key={employee.id} className={styles.table__row}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.department}</td>
              <td>
                <ButtonGroup className={styles["button-group"]}>
                  <Button
                    variant="info"
                    className={styles.button}
                    onClick={() => openViewModalHandler(employee)}
                  >
                    View
                  </Button>
                  <Button
                    variant="info"
                    className={styles.button}
                    onClick={() => openEditModalHandler(employee)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="info"
                    className={styles.button}
                    onClick={() => openConfirmModalHandler(employee)}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ViewModal
        show={viewModalIsOpen}
        onClose={closeViewModalHandler}
        employee={selectedEmployee}
      />
      <AppForm
        show={editModalIsOpen}
        close={closeEditModalHandler}
        employee={selectedEmployee}
        save={props.save}
        isEditing={true}
      />
      <ConfirmModal
        show={confirmModalIsOpen}
        onClose={closeConfirmModalHandler}
        employee={selectedEmployee}
        onDelete={props.onDelete}
      />
    </>
  );
};

export default EmployeeTable;
