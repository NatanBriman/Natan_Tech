import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BsArrowRight, BsTrash } from 'react-icons/bs';
import DecisionModal from '../Utils/DecisionModal';

const DeleteButton = ({
  deleteAction,
  withModal = false,
  children,
  text = '',
}) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => setIsShowModal((isShowModal) => !isShowModal);
  const handleDelete = () => (withModal ? toggleModal() : deleteAction());

  const deleteAndClose = () => {
    deleteAction();

    toggleModal();
  };

  return (
    <>
      <Button
        onClick={handleDelete}
        variant='danger'
        style={{ color: 'black', height: '100%' }}
        className='d-flex justify-content-between align-items-center border border-dark border-3 shadow'
      >
        <h1>{children}</h1>

        <h1 className={children ? 'ms-2' : ''}>
          <BsTrash />
        </h1>
      </Button>

      {withModal && (
        <DecisionModal
          isShow={isShowModal}
          text={text}
          closeAction={toggleModal}
        >
          <DeleteButton deleteAction={deleteAndClose}>כן</DeleteButton>

          <Button
            onClick={toggleModal}
            style={{ color: 'black', height: '100%' }}
            className='border border-dark border-3 shadow text-center d-flex justify-content-between align-items-center'
          >
            <h1>לא</h1>

            <h1 className='ms-2'>
              <BsArrowRight />
            </h1>
          </Button>
        </DecisionModal>
      )}
    </>
  );
};

export default DeleteButton;
