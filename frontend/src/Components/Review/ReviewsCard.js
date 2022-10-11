import { Container, Row, Card } from 'react-bootstrap';
import { isEmpty } from '../../Helpers/Helpers';
import Review from './Review';

const ReviewsCard = ({ reviews }) => {
  const EXAMPLE = [
    {
      user: {
        username: 'נתן ברימן',
        image: 'Assets/Profile.jpg',
      },
      product: {
        name: 'Iphone',
        manufacturer: {
          name: 'Apple',
        },
        price: 100,
        category: {
          name: 'Smartphones',
        },
        addDate: new Date(),
        productionDate: new Date(),
      },
      content:
        'וואלה אהבתי, יכול היה להיות יותר טוב. קניתי לפני שבועיים לאחיין שלי והוא די התלהב',
      rating: 3,
      date: new Date(),
    },
    {
      user: {
        username: 'נתן ברימן',
        image: 'Assets/Profile.jpg',
      },
      product: {
        name: 'Iphone',
        manufacturer: {
          name: 'Apple',
        },
        price: 100,
        category: {
          name: 'Smartphones',
        },
        addDate: new Date(),
        productionDate: new Date(),
      },
      content:
        'וואלה אהבתי, יכול היה להיות יותר טוב. קניתי לפני שבועיים לאחיין שלי והוא די התלהב',
      rating: 3,
      date: new Date(),
    },
    {
      user: {
        username: 'נתן ברימן',
        image: 'Assets/Profile.jpg',
      },
      product: {
        name: 'Iphone',
        manufacturer: {
          name: 'Apple',
        },
        price: 100,
        category: {
          name: 'Smartphones',
        },
        addDate: new Date(),
        productionDate: new Date(),
      },
      content:
        'וואלה אהבתי, יכול היה להיות יותר טוב. קניתי לפני שבועיים לאחיין שלי והוא די התלהב',
      rating: 3,
      date: new Date(),
    },
  ];

  const isNoReviews = isEmpty(EXAMPLE);

  return (
    <Card
      className='p-0 shadow border border-2 border-success'
      style={{ height: '100%' }}
      bg='light'
    >
      <Card.Header className='text-center'>
        <Card.Title>
          <h1>
            <b>ביקורות</b>
          </h1>
        </Card.Title>
      </Card.Header>

      <Card.Body style={{ height: '20%' }}>
        <Container style={{ height: '100%', overflowY: 'scroll' }}>
          {isNoReviews ? (
            <h1 className='mt-5 text-center'>
              😥 אין ביקורות על המוצר הזה כרגע
            </h1>
          ) : (
            EXAMPLE.map((review, index) => (
              <Row className='me-2' key={index}>
                <Review review={review} />
              </Row>
            ))
          )}
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ReviewsCard;
