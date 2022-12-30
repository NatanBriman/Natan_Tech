import { useMemo } from 'react';
import { Container } from 'react-bootstrap';
import api from '../../Api/Api';
import { LOCAL_STORAGE_KEYS } from '../../Helpers/Constants';
import { createSection } from '../../Helpers/Helpers';
import useLocalStorageFromAPI from '../../Hooks/useLocalStorageFromAPI';
import Section from './Section';

const StorePage = () => {
  const [p, ..._] = useLocalStorageFromAPI(
    [],
    api.products.getAllProducts,
    LOCAL_STORAGE_KEYS.products
  );

  const sections = useMemo(() => {
    const categorySection = createSection('קטגוריות', p, 'category.name');
    const manufacturerSection = createSection('יצרנים', p, 'manufacturer.name');

    return [categorySection, manufacturerSection];
  }, [p]);

  return (
    <Container fluid className='mt-3'>
      {sections.map((section) => (
        <Section key={section.name} section={section} />
      ))}
    </Container>
  );
};

export default StorePage;
