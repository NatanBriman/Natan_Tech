import { Button, Modal } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import DeleteButton from './DeleteButton';

const DeleteModal = ({ isShow, deleteAction, closeAction, text }) => {
  const deleteAndClose = () => {
    deleteAction();

    closeAction();
  };

  return (
    <Modal backdrop='static' centered show={isShow} onHide={closeAction}>
      <Modal.Header closeButton />
      <h1 className='display-3 text-center'>{text}</h1>

      <Modal.Body className='d-flex justify-content-around align-items-center'>
        <DeleteButton onDelete={deleteAndClose}>כן</DeleteButton>

        <Button
          onClick={closeAction}
          style={{ color: 'black', height: '100%' }}
          className='border border-dark border-3 shadow text-center d-flex justify-content-between align-items-center'
        >
          <h1>לא</h1>

          <h1 className='ms-2'>
            <BsArrowRight />
          </h1>
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
