import Modal from 'react-bootstrap/Modal';

const DecisionModal = ({ isShow, closeAction, text, children }) => {
  const isLongText = text.length > 15;

  return (
    <Modal
      size={isLongText ? 'lg' : ''}
      backdrop='static'
      centered
      show={isShow}
      onHide={closeAction}
    >
      <Modal.Header closeButton />

      <h1 className='display-3 text-center'>{text}</h1>

      <Modal.Body className='d-flex justify-content-around align-items-center'>
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default DecisionModal;
