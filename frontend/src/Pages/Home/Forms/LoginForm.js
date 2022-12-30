import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../../Api/Api';
import InputForm from '../../../Components/Form/InputForm';
import {
  PASSWORD_INPUT_PROPS,
  STORE_ROUTE,
  USERNAME_INPUT_PROPS,
} from '../../../Helpers/Constants';
import {
  handleGettingUser,
  isPasswordValid,
  isThereEmptyField,
  isUsernameValid,
} from '../../../Helpers/Helpers';
import { userActions } from '../../../Redux/Features/User/UserSlice';

const loginUser = async (username, password) => {
  const user = await api.users.loginUser(username, password);

  return user;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const [error, setError] = useState('');

  const handleError = (error) => setError(error);

  const handleUser = (user) => {
    const { setUser } = userActions;

    dispatch(setUser(user));
    navigate(STORE_ROUTE);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentUsername = usernameRef.current.value;
    const currentPassword = passwordRef.current.value;

    if (isThereEmptyField(currentUsername, currentPassword))
      return setError('כל השדות חייבים להיות מלאים');

    const getUserByCurrentValues = () => loginUser(currentUsername, currentPassword);

    handleGettingUser(getUserByCurrentValues, handleUser, handleError);
  };

  const inputFields = [
    {
      inputValue: usernameRef,
      invalidFeedback: 'שם המשתמש חייב להיות בין 4-12 אותיות',
      label: 'שם משתמש',
      inputProps: { ...USERNAME_INPUT_PROPS, autoFocus: true },
      validation: isUsernameValid,
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
