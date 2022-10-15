import { Card, Image, Ratio } from 'react-bootstrap';
import { getDateString } from '../../Helpers/Helpers';
import Rating from './Rating';

const Review = ({ review }) => {
  const avgRating = 3;

  return (
    <Card
      bg='secondary'
      className='p-0 shadow mb-4 me-2 border border-2 border-info'
    >
      <Card.Header
        dir='rtl'
        className='d-flex align-items-center justify-content-between'
      >
        <div className='d-flex align-items-center justify-content-start'>
          <Ratio style={{ height: '4em', width: '4em' }}>
            <Image
              src={review.user.image}
              roundedCircle
              alt='Profile Picture'
              className='shadow border border-2 border-dark'
            />
          </Ratio>

          <Card.Title className='me-2 mt-1'>
            <h2>{review.user.username}</h2>
          </Card.Title>
        </div>

        <Card.Subtitle>{getDateString(review.date)}</Card.Subtitle>
      </Card.Header>

      <Card.Body dir='rtl'>
        <article className='my-2'>{review.content}</article>
      </Card.Body>

      <Card.Footer>
        <Rating rating={avgRating} text='דירוג' />
      </Card.Footer>
    </Card>
  );
};

export default Review;
