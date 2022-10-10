import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import api from '../Api/Api';
import { isEmpty, splitArrayByProperty } from '../Helpers/Helpers';
import { STORE_BACKGROUND_COLOR } from '../Helpers/Constants';
import CategoryProducts from '../Components/Product/CategoryProducts';

const getAllProducts = async () => {
  const products = await api.products.getAllProducts();

  return products;
};

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const initializeProducts = async () => {
    const products = await getAllProducts();

    setProducts(products);
  };

  const initializeCategories = () => {
    const categories = splitArrayByProperty(products, 'category.name');

    setCategories(categories);
  };

  useEffect(() => {
    initializeProducts();
  }, []);

  useEffect(() => {
    if (!isEmpty(products)) initializeCategories();
  }, [products]);

  return (
    <Container
      className='store'
      fluid
      style={{ backgroundColor: STORE_BACKGROUND_COLOR }}
    >
      {Object.keys(categories).map((categoryName) => (
        <CategoryProducts
          key={categoryName}
          categoryName={categoryName}
          products={categories[categoryName]}
        />
      ))}
    </Container>
  );
};

export default StorePage;
