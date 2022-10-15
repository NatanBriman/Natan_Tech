import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import { userActions } from '../../../Redux/Features/UserSlice';
import {
  isPasswordValid,
  isThereEmptyField,
  handleGettingUser,
} from '../../../Helpers/Helpers';
import {
  EMAIL_INPUT_PROPS,
  PASSWORD_INPUT_PROPS,
  STORE_ROUTE,
} from '../../../Helpers/Constants';
import api from '../../../Api/Api';
import InputForm from '../../../Components/Form/InputForm';

const getUserByEmailAndPassword = async (email, password) => {
  const user = await api.users.loginUser(email, password);

  return user;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [error, setError] = useState('');

  const handleError = (error) => setError(error);

  const handleUser = (user) => {
    const { setUser } = userActions;

    dispatch(setUser(user));
    navigate(STORE_ROUTE);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentEmail = emailRef.current.value;
    const currentPassword = passwordRef.current.value;

    if (isThereEmptyField(currentEmail, currentPassword))
      return setError('כל השדות חייבים להיות מלאים');

    const getUserByCurrentValues = () =>
      getUserByEmailAndPassword(currentEmail, currentPassword);

    handleGettingUser(getUserByCurrentValues, handleUser, handleError);
  };

  const inputFields = [
    {
      inputValue: emailRef,
      invalidFeedback: 'מייל לא תקין',
      label: 'אימייל',
      inputProps: { ...EMAIL_INPUT_PROPS, autoFocus: true },
      validation: isEmail,
    },
    {
      inputValue: passwordRef,
      invalidFeedback: 'סיסמה לא תקינה',
      label: 'סיסמה',
      inputProps: { ...PASSWORD_INPUT_PROPS },
      validation: isPasswordValid,
    },
  ];

  const inputFormProps = {
    handleSubmit,
    inputFields,
    error,
    submitButtonText: 'כניסה',
    message: '!לא נשתף את הפרטים האלה',
  };

  return <InputForm {...inputFormProps} />;
};

export default LoginForm;
