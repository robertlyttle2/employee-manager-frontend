import { Button, Modal } from "react-bootstrap";

const ConfirmModal = (props) => {
  const confirmHandler = () => {
    props.onDelete(props.employee.id);
    props.onClose();
  };

  return (
    <>
      <Modal
        show={props.show}
        onClose={props.onClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete employee {props.employee.firstName}{" "}
          {props.employee.lastName} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            No
          </Button>
          <Button variant="primary" onClick={confirmHandler}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
