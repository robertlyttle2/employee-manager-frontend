import { Modal, Button, Col, Row } from "react-bootstrap";
import styles from "./ViewModal.module.css";

const ViewModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      variant="dark"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={props.onClose}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.modal__title}
        >
          {props.employee.firstName} {props.employee.lastName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <p>
              <span>Position:</span> {props.employee.jobTitle}{" "}
            </p>

            <p>
              <span>Department: </span>
              {props.employee.department}{" "}
            </p>
            <p>
              <span>Company Email: </span> {props.employee.companyEmail}{" "}
            </p>
            <p>
              <span>Annual Salary: </span> £{props.employee.annualSalary}{" "}
            </p>
            <p>
              <span>Personal Email: </span> {props.employee.personalEmail}{" "}
            </p>
            <p>
              <span>Date of Birth: </span>
              {props.employee.dateOfBirth}
            </p>
            <p>
              <span>Contact Number: </span>
              {props.employee.contactNumber}{" "}
            </p>
            <p>
              <span>Gender: </span> {props.employee.gender}
            </p>
          </Col>
          <Col>
            <img
              className="rounded-circle z-depth-2"
              width="300"
              height="300"
              alt="Employee"
              src="https://i.pravatar.cc/300"
              data-holder-rendered="true"
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewModal;
