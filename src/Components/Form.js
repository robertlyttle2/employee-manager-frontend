import { useRef } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import styles from "./Form.module.css";

const AppForm = (props) => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const dateOfBirthInputRef = useRef();
  const contactNumberInputRef = useRef();
  const emailInputRef = useRef();
  const genderInputRef = useRef();
  const jobTitleInputRef = useRef();
  const departmentInputRef = useRef();
  const salaryInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredDateOfBirth = dateOfBirthInputRef.current.value;
    const enteredContactNumber = contactNumberInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredGender = genderInputRef.current.value;
    const enteredJobTitle = jobTitleInputRef.current.value;
    const enteredDepartment = departmentInputRef.current.value;
    const enteredSalary = salaryInputRef.current.value;

    const employee = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      dateOfBirth: enteredDateOfBirth,
      contactNumber: enteredContactNumber,
      personalEmail: enteredEmail,
      gender: enteredGender,
      jobTitle: enteredJobTitle,
      department: enteredDepartment,
      annualSalary: enteredSalary,
    };

    if (props.isEditing) {
      props.save(props.employee.id, employee);
    }

    props.save(employee);
    props.close();
  };

  const { close, save, isEditing, ...rest } = props;

  return (
    <Modal
      {...rest}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={close}>
        <Modal.Title
          className={styles.title}
          id="contained-modal-title-vcenter"
        >
          {isEditing ? "Edit employee" : "Add new employee"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className={styles.form} onSubmit={submitHandler}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className={styles.form__label}>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                required
                ref={firstNameInputRef}
                defaultValue={isEditing ? props.employee.firstName : ""}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className={styles.form__label}>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                required
                ref={lastNameInputRef}
                defaultValue={isEditing ? props.employee.lastName : ""}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className={styles.form__label}>
                Date of Birth
              </Form.Label>
              <Form.Control
                type="date"
                required
                min="1920-01-01"
                max="2005-01-01"
                ref={dateOfBirthInputRef}
                defaultValue={isEditing ? props.employee.dateOfBirth : ""}
                readOnly={isEditing}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className={styles.form__label}>
                Contact Number
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Contact Number"
                required
                maxLength="14"
                ref={contactNumberInputRef}
                defaultValue={isEditing ? props.employee.contactNumber : ""}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className={styles.form__label}>
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                required
                ref={emailInputRef}
                defaultValue={isEditing ? props.employee.personalEmail : ""}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className={styles.form__label}>Gender</Form.Label>
              <Form.Select
                required
                ref={genderInputRef}
                defaultValue={isEditing ? props.employee.gender : "MALE"}
              >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className={styles.form__label}>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Title"
                required
                ref={jobTitleInputRef}
                defaultValue={isEditing ? props.employee.jobTitle : ""}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className={styles.form__label}>Department</Form.Label>
              <Form.Select
                required
                ref={departmentInputRef}
                defaultValue={isEditing ? props.employee.department : "FINANCE"}
              >
                <option value="FINANCE">Finance</option>
                <option value="HR">HR</option>
                <option value="MARKETING">Marketing</option>
                <option value="SALES">Sales</option>
                <option value="IT">IT</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className={styles.form__label}>Salary (£)</Form.Label>
              <Form.Control
                type="number"
                required
                ref={salaryInputRef}
                defaultValue={isEditing ? props.employee.annualSalary : 0}
              />
            </Form.Group>
          </Row>

          <Button variant="info" type="submit">
            {isEditing ? "Save Employee" : "Add Employee"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AppForm;
