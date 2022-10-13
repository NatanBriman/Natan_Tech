import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';

const ItemsList = ({ title, items, component }) => {
  return (
    <div className='mb-4' dir='auto'>
      <h1>
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
