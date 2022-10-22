import { useRef, useState } from 'react';
import { MANUFACTURER_INPUT_PROPS } from '../../../Helpers/Constants';
import { isNameValid, showAlert } from '../../../Helpers/Helpers';
import { isEmpty } from 'lodash';
import api from '../../../Api/Api';
import InputForm from '../../../Components/Form/InputForm';

const addManufacturer = async (manufacturer) => {
  try {
    await api.manufacturers.addManufacturer(manufacturer);
  } catch (error) {
    showAlert('error', 'קרתה שגיאה בהוספת היצרן');
  }
};

const AddManufacturer = () => {
  const nameRef = useRef();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentName = nameRef.current.value;

    if (isEmpty(currentName)) return setError('נא למלא את שם היצרן');

    const manufacturer = { name: currentName };

    addManufacturer(manufacturer);
    showAlert('success', 'היצרן נוסף בהצלחה');
  };

  const inputFields = [
    {
      inputValue: nameRef,
      invalidFeedback: 'שם היצרן חייב להיות בין 4-12 אותיות',
      label: 'שם',
      inputProps: { ...MANUFACTURER_INPUT_PROPS, autoFocus: true },
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

export default AddManufacturer;
