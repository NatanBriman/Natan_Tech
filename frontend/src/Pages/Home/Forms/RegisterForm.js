import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import { userActions } from '../../../Redux/Features/UserSlice';
import {
  isPasswordValid,
  isThereEmptyField,
  handleGettingUser,
  isUsernameValid,
} from '../../../Helpers/Helpers';
import {
  EMAIL_INPUT_PROPS,
  IMAGE_INPUT_PROPS,
  PASSWORD_INPUT_PROPS,
  STORE_ROUTE,
  USERNAME_INPUT_PROPS,
} from '../../../Helpers/Constants';
import api from '../../../Api/Api';
import InputForm from '../../../Components/Form/InputForm';

const registerUser = async (username, email, password, image) => {
  const user = await api.users.registerUser({
    username,
    email,
    password,
    image,
  });

  return user;
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const imageRef = useRef();
  const [error, setError] = useState('');

  const handleError = (error) => setError(error);

  const handleUser = (user) => {
    console.log(user);
    const { setUser } = userActions;

    dispatch(setUser(user));
    navigate(STORE_ROUTE);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentUsername = usernameRef.current.value;
    const currentEmail = emailRef.current.value;
    const currentPassword = passwordRef.current.value;
    const currentImage = imageRef.current.value;

    const currentValues = [
      currentUsername,
      currentEmail,
      currentPassword,
      currentImage,
    ];

    if (isThereEmptyField(...currentValues))
      return setError('כל השדות חייבים להיות מלאים');

    const registerUserByCurrentValues = () => registerUser(...currentValues);

    handleGettingUser(registerUserByCurrentValues, handleUser, handleError);
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
      inputValue: emailRef,
      invalidFeedback: 'מייל לא תקין',
      label: 'אימייל',
      inputProps: EMAIL_INPUT_PROPS,
      validation: isEmail,
    },
    {
      inputValue: passwordRef,
      invalidFeedback: 'הסיסמה חייבת להיות בין 6 ל-12 אותיות',
      label: 'סיסמה',
      inputProps: PASSWORD_INPUT_PROPS,
      validation: isPasswordValid,
    },
    {
      inputValue: imageRef,
      invalidFeedback: 'הקובץ אינו תקין',
      label: 'תמונת פרופיל',
      inputProps: IMAGE_INPUT_PROPS,
      validation: () => {},
    },
  ];

  const inputFormProps = {
    handleSubmit,
    inputFields,
    error,
    submitButtonText: 'סיום',
    message: '!לא נשתף את הפרטים האלה',
  };

  return <InputForm {...inputFormProps} />;
};

export default RegisterForm;