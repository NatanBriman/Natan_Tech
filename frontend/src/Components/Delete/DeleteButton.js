import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { RiDeleteBinLine } from 'react-icons/ri';
import DeleteModal from './DeleteModal';

const DeleteButton = ({ onDelete, withModal = false, children, text = '' }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => setIsShowModal((isShowModal) => !isShowModal);
  const handleDelete = () => (withModal ? toggleModal() : onDelete());

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
          <RiDeleteBinLine />
        </h1>
      </Button>

      {withModal && (
        <DeleteModal
          isShow={isShowModal}
          deleteAction={onDelete}
          closeAction={toggleModal}
          text={text}
        />
      )}
    </>
  );
};

export default DeleteButton;
