import { Fragment, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import api from '../../Api/Api';
import { isEmpty, splitArrayByProperty } from '../../Helpers/Helpers';
import { STORE_BACKGROUND_COLOR } from '../../Helpers/Constants';
import ItemsCarousel from '../../Components/Information/ItemsCarousel';
import ProductCard from '../../Components/Product/ProductCard';
import Section from './Section';

const getAllProducts = async () => {
  const products = await api.products.getAllProducts();

  return products;
};

const formatProductsByProperty = (products, property) => {
  const splittedProducts = splitArrayByProperty(products, property);

  const productsByProperty = Object.keys(splittedProducts).map(
    (propertyName) => {
      return {
        name: propertyName,
        products: splittedProducts[propertyName].map((product) => {
          return { product, key: product._id };
        }),
      };
    }
  );

  return productsByProperty;
};

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [sections, setSections] = useState([]);

  const initializeProducts = async () => {
    const products = await getAllProducts();

    setProducts(products);
  };

  useEffect(() => {
    initializeProducts();
  }, []);

  useEffect(() => {
    if (!isEmpty(products))
      setSections((prev) => [
        ...prev,
        {
          name: 'קטגוריות',
          section: formatProductsByProperty(products, 'category.name'),
        },
        {
          name: 'יצרנים',
          section: formatProductsByProperty(products, 'manufacturer.name'),
        },
      ]);
  }, [products]);

  return (
    <Container
      className='store'
      fluid
      style={{ backgroundColor: STORE_BACKGROUND_COLOR }}
    >
      {sections.map((section) => (
        <Section key={section.name} section={section} />
      ))}
    </Container>
  );
};

export default StorePage;
