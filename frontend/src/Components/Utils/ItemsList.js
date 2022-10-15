import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';

const ItemsList = ({ title, items, component, isShowAmount = false }) => {
  return (
    <div className='mb-4 text-center'>
      <h1 dir='auto'>
        {title} {isShowAmount && <b>({items.length})</b>}
      </h1>

      <Row className='mt-2'>
        {items.map((item) => (
          <Fragment key={item.key} children={component(item)} />
        ))}
      </Row>
    </div>
  );
};

export default ItemsList;
