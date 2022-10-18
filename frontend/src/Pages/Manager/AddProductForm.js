import { useRef, useState } from 'react';
import {
  PRODUCT_NAME_INPUT_PROPS,
  PRODUCT_PRICE_INPUT_PROPS,
  PRODUCT_PRODUCTION_DATE_INPUT_PROPS,
  PRODUCT_UNITS_INPUT_PROPS,
} from '../../Helpers/Constants';
import {
  isDateValid,
  isNameValid,
  isNumberPositive,
  isThereEmptyField,
  showAlert,
} from '../../Helpers/Helpers';
import api from '../../Api/Api';
import InputForm from '../../Components/Form/InputForm';

const getAllCategories = async () => {
  try {
    const categories = await api.categories.getAllCategories();

    return categories;
  } catch (error) {
    showAlert('error', 'קרתה שגיאה בקבלת הקטגוריות');
  }
};

const getAllManufacturers = async () => {
  try {
    const manufacturers = await api.manufacturers.getAllManufacturers();

    return manufacturers;
  } catch (error) {
    showAlert('error', 'קרתה שגיאה בקבלת היצרנים');
  }
};

const addProduct = async (product) => {
  try {
    await api.products.addProduct(product);
  } catch (error) {
    showAlert('error', 'קרתה שגיאה בהוספת המוצר');
  }
};

const createProduct = (name, price, productionDate, unitsInStock) => {
  return { name, price, productionDate, unitsInStock };
};

const AddProductForm = () => {
  const nameRef = useRef();
  const prodDateRef = useRef();
  const priceRef = useRef();
  const unitsRef = useRef();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentName = nameRef.current.value;
    const currentProdDate = prodDateRef.current.value;
    const currentPrice = priceRef.current.value;
    const currentUnits = unitsRef.current.value;

    const nonEmptyValues = [
      currentName,
      currentPrice,
      currentProdDate,
      currentUnits,
    ];

    if (isThereEmptyField(...nonEmptyValues))
      return setError('כל השדות חייבים להיות מלאים');

    const product = createProduct(...nonEmptyValues);

    addProduct(product);
  };

  const inputFields = [
    {
      inputValue: nameRef,
      invalidFeedback: 'שם המוצר חייב להיות בין 4-12 אותיות',
      label: 'שם',
      inputProps: { ...PRODUCT_NAME_INPUT_PROPS, autoFocus: true },
      validation: isNameValid,
    },
    {
      inputValue: prodDateRef,
      invalidFeedback: 'התאריך לא יכול להיות בעתיד',
      label: 'תאריך ייצור',
      inputProps: PRODUCT_PRODUCTION_DATE_INPUT_PROPS,
      validation: isDateValid,
    },
    {
      inputValue: priceRef,
      invalidFeedback: 'המחיר לא יכול להיות שלילי',
      label: 'מחיר ליחידה',
      inputProps: PRODUCT_PRICE_INPUT_PROPS,
      validation: isNumberPositive,
    },
    {
      inputValue: unitsRef,
      invalidFeedback: 'מספר היחידות לא יכול להיות שלילי',
      label: 'יחידות במלאי',
      inputProps: PRODUCT_UNITS_INPUT_PROPS,
      validation: isNumberPositive,
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

export default AddProductForm;
