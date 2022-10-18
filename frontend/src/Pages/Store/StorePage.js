import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import { createSection } from '../../Helpers/Helpers';
import api from '../../Api/Api';
import Section from './Section';

const getAllProducts = async () => {
  const products = await api.products.getAllProducts();

  return products;
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
    if (!isEmpty(products)) {
      const categorySection = createSection(
        'קטגוריות',
        products,
        'category.name'
      );

      const manufacturerSection = createSection(
        'יצרנים',
        products,
        'manufacturer.name'
      );

      setSections((prev) => [...prev, categorySection, manufacturerSection]);
    }
  }, [products]);

  return (
    <Container fluid className='mt-3'>
      {sections.map((section) => (
        <Section key={section.name} section={section} />
      ))}
    </Container>
  );
};

export default StorePage;
