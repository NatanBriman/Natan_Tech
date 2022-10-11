import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Card } from 'react-bootstrap';
import isEmail from 'validator/lib/isEmail';
import { userActions } from '../../Redux/Store';
import {
  isEmpty,
  isPasswordValid,
  isThereEmptyField,
  handleGettingUser,
} from '../../Helpers/Helpers';
import {
  EMAIL_INPUT_PROPS,
  PASSWORD_INPUT_PROPS,
  STORE_ROUTE,
} from '../../Helpers/Constants';
import InputField from '../Form/InputField';
import api from '../../Api/Api';

const getUserByEmailAndPassword = async (email, password) => {
  const user = await api.users.getUserByEmailAndPassword(email, password);

  return user;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const password = useRef();
  const email = useRef();
  const [error, setError] = useState('');

  const handleUser = (user) => {
    const { setUser } = userActions;

    dispatch(setUser(user));
    navigate(STORE_ROUTE);
  };

  const handleError = (error) => setError(error.response.data);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentEmail = email.current.value;
    const currentPassword = password.current.value;

    if (isThereEmptyField(currentEmail, currentPassword)) {
      setError('כל השדות חייבים להיות מלאים');

      return;
    }

    const getUserByCurrentValues = () =>
      getUserByEmailAndPassword(currentEmail, currentPassword);

    handleGettingUser(getUserByCurrentValues, handleUser, handleError);
  };

  return (
    <Card bg='light' className='shadow text-center'>
      <Card.Header>
        <Card.Title>
          <h1>
            <b>התחברות</b>
          </h1>
        </Card.Title>
      </Card.Header>

      <Card.Body>
        <Form onSubmit={handleSubmit} noValidate>
          <InputField
            inputValue={email}
            invalidFeedback='מייל לא תקין'
            label='אימייל'
            inputProps={EMAIL_INPUT_PROPS}
            validation={isEmail}
          />

          <InputField
            inputValue={password}
            invalidFeedback='סיסמה לא תקינה'
            label='סיסמה'
            inputProps={PASSWORD_INPUT_PROPS}
            validation={isPasswordValid}
          />

          {!isEmpty(error) && (
            <Form.Group className='mb-3'>
              <Form.Text>
                <h5>
                  <b>{error}</b>
                </h5>
              </Form.Text>
            </Form.Group>
          )}

          <Button className='shadow' variant='success' type='submit'>
            כניסה
          </Button>

          <Form.Group className='mt-3'>
            <Form.Text>
              <h5>!לא נשתף את הפרטים האלה עם אף אחד</h5>
            </Form.Text>
          </Form.Group>
        </Form>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between'>
        <Button className='shadow' variant='danger'>
          ?שכחתי סיסמה
        </Button>
        <Button className='shadow' variant='primary'>
          ?לא נרשמתי
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default LoginForm;
