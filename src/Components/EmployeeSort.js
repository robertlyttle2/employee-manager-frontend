import { Dropdown, DropdownButton } from "react-bootstrap";

const EmployeeSort = (props) => {
  const employeeSortHandler = (event) => {
    props.sortBy(event);
  };
  return (
    <DropdownButton
      variant="info"
      id="dropdown-basic-button"
      title="Sort by"
      onSelect={employeeSortHandler}
    >
      <Dropdown.Item eventKey="id">Employee ID</Dropdown.Item>
      <Dropdown.Item eventKey="firstName">First Name</Dropdown.Item>
      <Dropdown.Item eventKey="lastName">Last Name</Dropdown.Item>
      <Dropdown.Item eventKey="jobTitle">Job Title</Dropdown.Item>
      <Dropdown.Item eventKey="department">Department</Dropdown.Item>
    </DropdownButton>
  );
};

export default EmployeeSort;
