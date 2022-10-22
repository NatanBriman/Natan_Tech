import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import { MdOutlineAddComment } from 'react-icons/md';
import {
  isRatingValid,
  isThereEmptyField,
  showAlert,
} from '../../Helpers/Helpers';
import {
  REVIEW_CONTENT_INPUT_PROPS,
  REVIEWֹ_RATING_INPUT_PROPS,
} from '../../Helpers/Constants';
import api from '../../Api/Api';
import Review from './Review';
import InputForm from '../Form/InputForm';
import ActionButton from '../Utils/Buttons/ActionButton';

const addReview = async (review) => {
  try {
    await api.reviews.addReview(review);

    showAlert('success', 'הביקורת נוספה בהצלחה');
  } catch (error) {
    showAlert('error', 'קרתה שגיאה בהוספת הביקורת');
  }
};

const ReviewsList = ({ product, reviews }) => {
  const user = useSelector((state) => state.user.user);
  const [isShowNewReview, setIsShowNewReview] = useState(false);
  const contentRef = useRef();
  const ratingRef = useRef();
  const [error, setError] = useState('');

  const toggleModal = () => setIsShowNewReview((isShow) => !isShow);

  const inputFields = [
    {
      inputValue: contentRef,
      inputProps: REVIEW_CONTENT_INPUT_PROPS,
      invalidFeedback: 'אורך הביקורת חייב להיות גדול מאחד',
      validation: (content) => content.length > 1,
      key: 'content',
    },
    {
      inputValue: ratingRef,
      invalidFeedback: 'הדירוג לא יכול להיות קטן מאפס או גדול מחמש',
      label: 'דירוג',
      inputProps: REVIEWֹ_RATING_INPUT_PROPS,
      validation: isRatingValid,
      key: 'rating',
    },
  ];

  const newReview = {
    user,
    product,
    date: new Date(),
    rating: ratingRef.current?.value,
  };
  const isNoReviews = isEmpty(reviews);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentContent = contentRef.current.value;
    const currentRating = ratingRef.current.value;
    const nonEmptyValues = [currentContent, currentRating];

    if (isThereEmptyField(...nonEmptyValues))
      return setError('נא למלא את כל השדות');

    const review = {
      ...newReview,
      content: currentContent,
      rating: currentRating,
    };

    await addReview(review);
    toggleModal();
    reviews.push(review);
  };

  const inputFormProps = {
    handleSubmit,
    inputFields,
    error,
    submitButtonText: 'הוספה',
    message: 'נא לשים לב למילוי ביקורת מתאימה',
  };

  return (
    <Card
      className='p-0 shadow border border-2 border-success'
      style={{ height: '100%' }}
      bg='secondary'
    >
      <Card.Header className='d-flex justify-content-between'>
        <ActionButton
          color='success'
          text='הוספת ביקורת'
          small
          icon={<MdOutlineAddComment />}
          onClick={toggleModal}
        />

        <Card.Title as='h1'>
          <b>ביקורות</b>
        </Card.Title>
      </Card.Header>

      <Card.Body style={{ height: '20%' }}>
        <Container style={{ height: '100%', overflowY: 'scroll' }}>
          {isShowNewReview && (
            <Row className='me-2'>
              <Review review={newReview}>
                <InputForm {...inputFormProps} />
              </Review>
            </Row>
          )}

          {isNoReviews ? (
            <h1 className='mt-5 text-center'>
              😥 אין ביקורות על המוצר הזה כרגע
            </h1>
          ) : (
            <>
              {reviews.map((review) => (
                <Row className='me-2' key={review._id}>
                  <Review review={review} />
                </Row>
              ))}
            </>
          )}
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ReviewsList;
