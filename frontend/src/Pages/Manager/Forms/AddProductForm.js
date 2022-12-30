import { useEffect, useRef, useState } from 'react';
import api from '../../../Api/Api';
import InputForm from '../../../Components/Form/InputForm';
import {
  IMAGE_INPUT_PROPS,
  PRODUCT_CATEGORY_INPUT_PROPS,
  PRODUCT_MANUFACTURER_INPUT_PROPS,
  PRODUCT_NAME_INPUT_PROPS,
  PRODUCT_PRICE_INPUT_PROPS,
  PRODUCT_PRODUCTION_DATE_INPUT_PROPS,
  PRODUCT_UNITS_INPUT_PROPS,
} from '../../../Helpers/Constants';
import {
  isDateValid,
  isNameValid,
  isNumberPositive,
  isThereEmptyField,
  showAlert,
} from '../../../Helpers/Helpers';

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

const createProduct = (
  name,
  category,
  manufacturer,
  price,
  productionDate,
  unitsInStock,
  image
) => {
  return {
    name,
    category,
    manufacturer,
    price,
    productionDate,
    unitsInStock,
    image,
  };
};

const AddProductForm = () => {
  const nameRef = useRef();
  const prodDateRef = useRef();
  const priceRef = useRef();
  const unitsRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [image, setImage] = useState('');

  const [error, setError] = useState('');
  const [categories, setCategories] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);

  const initializeCategories = async () => {
    const categories = await getAllCategories();

    setCategories(categories);
  };

  const initializeManufacturers = async () => {
    const manufacturers = await getAllManufacturers();

    setManufacturers(manufacturers);
  };

  useEffect(() => {
    initializeCategories();
    initializeManufacturers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentName = nameRef.current.value;
    const currentProdDate = prodDateRef.current.value;
    const currentPrice = priceRef.current.value;
    const currentUnits = unitsRef.current.value;

    const nonEmptyValues = [
      currentName,
      selectedCategory,
      selectedManufacturer,
      currentPrice,
      currentProdDate,
      currentUnits,
    ];

    if (isThereEmptyField(...nonEmptyValues)) return setError('כל השדות חייבים להיות מלאים');

    const product = createProduct(...nonEmptyValues, image ? image : undefined);

    addProduct(product);
    showAlert('success', 'המוצר נוסף בהצלחה');
  };

  const getOptionName = (option) => option.name;

  const inputFields = [
    {
      inputValue: nameRef,
      invalidFeedback: 'שם המוצר חייב להיות בין 4-12 אותיות',
      label: 'שם',
      inputProps: { ...PRODUCT_NAME_INPUT_PROPS, autoFocus: true },
      validation: isNameValid,
      key: 'name',
    },
    {
      items: categories,
      label: 'קטגוריה',
      onChange: (options) => setSelectedCategory(options[0]),
      inputProps: PRODUCT_CATEGORY_INPUT_PROPS,
      key: 'category',
      labelKey: getOptionName,
    },
    {
      items: manufacturers,
      label: 'יצרן',
      onChange: (options) => setSelectedManufacturer(options[0]),
      inputProps: PRODUCT_MANUFACTURER_INPUT_PROPS,
      key: 'manufacturer',
      labelKey: getOptionName,
    },
    {
      inputValue: prodDateRef,
      invalidFeedback: 'התאריך לא יכול להיות בעתיד',
      label: 'תאריך ייצור',
      inputProps: PRODUCT_PRODUCTION_DATE_INPUT_PROPS,
      validation: isDateValid,
      key: 'productionDate',
    },
    {
      inputValue: priceRef,
      invalidFeedback: 'המחיר לא יכול להיות קטן מאחד',
      label: 'מחיר ליחידה',
      inputProps: PRODUCT_PRICE_INPUT_PROPS,
      validation: isNumberPositive,
      key: 'price',
    },
    {
      inputValue: unitsRef,
      invalidFeedback: 'מספר היחידות לא יכול להיות קטן מאחד',
      label: 'יחידות במלאי',
      inputProps: PRODUCT_UNITS_INPUT_PROPS,
      validation: isNumberPositive,
      key: 'unitsInStock',
    },
    {
      inputValue: setImage,
      invalidFeedback: 'הקובץ אינו תקין',
      label: 'תמונה',
      inputProps: IMAGE_INPUT_PROPS,
      key: 'image',
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
