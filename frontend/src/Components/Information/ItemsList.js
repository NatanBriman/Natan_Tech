import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';

const ItemsList = ({ title, items, component }) => {
  return (
    <div className='mb-4 me-5'>
      <h1 dir='auto'>
        {title} (<b>{items.length}</b>)
      </h1>

      <Row>
        {items.map((item) => (
          <Fragment key={item.key} children={component(item)} />
        ))}
      </Row>
    </div>
  );
};

export default ItemsList;
