import { Col, Row } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { MAX_RATING } from '../../Helpers/Constants';

const Rating = ({ rating, text }) => {
  return (
    <Row className='d-flex justify-content-between align-items-center'>
      <Col>
        {[...Array(MAX_RATING)].map((star, index) => (
          <BsStarFill className='me-2' key={index} color={index < rating ? 'yellow' : 'black'} />
        ))}
      </Col>

      <Col className='text-end'>
        <h3>
          <b>{text}</b>
        </h3>
      </Col>
    </Row>
  );
};

export default Rating;
