import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Card } from 'react-bootstrap';
import isEmail from 'validator/lib/isEmail';
import { userActions } from '../../Redux/Store';
import {
  isEmpty,
  isPasswordValid,
  isThereEmptyField,
} from '../../Helpers/Helpers';
import {
  EMAIL_INPUT_PROPS,
  PASSWORD_INPUT_PROPS,
} from '../../Helpers/Constants';
import InputField from '../Form/InputField';
import api from '../../Api/Api';

const getUser = async (email, password) => {
  const user = await api.users.getUserByEmailAndPassword(email, password);

  return user;
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const password = useRef();
  const email = useRef();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { setUser } = userActions;
    const currentEmail = email.current.value;
    const currentPassword = password.current.value;

    if (isThereEmptyField(currentEmail, currentPassword)) {
      setError('כל השדות חייבים להיות מלאים');

      return;
    }

    try {
      const user = await getUser(currentEmail, currentPassword);

      dispatch(setUser(user));
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <Card bg='light' className='shadow text-center'>
      <Card.Header>
        <Card.Title>
          <h1>
            <strong>התחברות</strong>
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
                  <strong>{error}</strong>
                </h5>
              </Form.Text>
            </Form.Group>
          )}

          <Button variant='success' type='submit'>
            היידה
          </Button>

          <Form.Group className='mt-3'>
            <Form.Text>
              <h5>!לא נשתף את הפרטים האלה עם אף אחד</h5>
            </Form.Text>
          </Form.Group>
        </Form>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between'>
        <Button variant='danger'>?שכחתי סיסמה</Button>
        <Button variant='primary'>?לא נרשמתי</Button>
      </Card.Footer>
    </Card>
  );
};

export default LoginForm;
