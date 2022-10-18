import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import ActionButton from './ActionButton';
import DecisionModal from '../DecisionModal';

const DecisionButton = ({
  action,
  icon,
  withModal = true,
  modalText,
  text,
}) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => setIsShowModal((isShowModal) => !isShowModal);
  const handleClick = () => (withModal ? toggleModal() : action());

  const actionAndClose = () => {
    action();

    toggleModal();
  };

  return (
    <>
      <ActionButton
        onClick={handleClick}
        color='danger'
        text={text}
        icon={icon}
      />

      {withModal && (
        <DecisionModal
          isShow={isShowModal}
          text={modalText}
          closeAction={toggleModal}
        >
          <ActionButton
            onClick={actionAndClose}
            text='כן'
            color='danger'
            icon={icon}
          />

          <ActionButton
            onClick={toggleModal}
            text='לא'
            icon={<BsArrowRight />}
          />
        </DecisionModal>
      )}
    </>
  );
};

export default DecisionButton;
