import { Button } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';

const DeleteButton = ({ onDelete, productId }) => {
  const handleDelete = () => onDelete(productId);

  return (
    <Button
      onClick={handleDelete}
      variant='danger'
      style={{ height: '50%' }}
      className='p-1 ms-3 border border-dark border-2 shadow text-center'
    >
      <RiDeleteBinLine
        style={{ color: 'black', height: '100%', width: '100%' }}
      />
    </Button>
  );
};

export default DeleteButton;
