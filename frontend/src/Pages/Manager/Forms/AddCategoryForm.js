import { useRef, useState } from 'react';
import { CATEGORY_INPUT_PROPS } from '../../../Helpers/Constants';
import { isNameValid, showAlert } from '../../../Helpers/Helpers';
import { isEmpty } from 'lodash';
import api from '../../../Api/Api';
import InputForm from '../../../Components/Form/InputForm';

const addCategory = async (category) => {
  try {
    await api.categories.addCategory(category);
  } catch (error) {
    showAlert('error', 'קרתה שגיאה בהוספת הקטגוריה');
  }
};

const AddCategoryForm = () => {
  const nameRef = useRef();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentName = nameRef.current.value;

    if (isEmpty(currentName)) return setError('נא למלא את שם הקטגוריה');

    const category = { name: currentName };

    addCategory(category);
    showAlert('success', 'הקטגוריה נוספה בהצלחה');
  };

  const inputFields = [
    {
      inputValue: nameRef,
      invalidFeedback: 'שם הקטגוריה חייב להיות בין 4-12 אותיות',
      label: 'שם',
      inputProps: { ...CATEGORY_INPUT_PROPS, autoFocus: true },
      validation: isNameValid,
      key: 'name',
    },
  ];

  const inputFormProps = {
    handleSubmit,
    inputFields,
    error,
    submitButtonText: 'הוספה',
    message: 'נא לשים לב למילוי פרטים נכונים',
  };

  return <InputForm {...inputFormProps} />;
};

export default AddCategoryForm;
