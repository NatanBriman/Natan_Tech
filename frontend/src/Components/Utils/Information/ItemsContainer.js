import { Card, Col, Container } from 'react-bootstrap';
import ItemsList from './ItemsList';
import ValueBox from './ValueBox';

const ItemsContainer = ({
  items,
  title,
  emptyText,
  component,
  isShowLength = true,
  children,
  color = 'success',
}) => {
  const itemsWithKeys = items.map((item) => {
    return { ...item, key: item._id };
  });

  const itemsLength = items.length;

  return (
    <Card
      bg='secondary'
      style={{ width: '100%', height: '100%' }}
      className={`mt-5 p-0 shadow border border-2 border-${color}`}
    >
      <Card.Header style={{ width: '100%' }}>
        <Card.Title
          as='h1'
          className='d-flex justify-content-between align-items-center text-end'
        >
          {!!itemsLength && isShowLength && (
            <Col sm={2}>
              <ValueBox text={itemsLength} color='info' />
            </Col>
          )}

          <Col>
            <b>{title}</b>
          </Col>
        </Card.Title>
      </Card.Header>

      <Card.Body style={{ width: '100%' }}>
        {!!!itemsLength && <h2 className='text-center'>{emptyText}</h2>}

        <Container fluid>
          <ItemsList items={itemsWithKeys} component={component} />
        </Container>
      </Card.Body>

      {children}
    </Card>
  );
};

export default ItemsContainer;
