import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';

const ItemsCarousel = ({ title, items, component }) => {
  return (
    <div className='mb-4'>
      <h1>
        {title} (<b>{items.length}</b>)
      </h1>

      <Row className='slider'>
        {items.map((item) => (
          <Fragment key={item.key} children={component(item)} />
        ))}
      </Row>
    </div>
  );
};

export default ItemsCarousel;
