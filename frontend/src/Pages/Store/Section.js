import { Fragment } from 'react';
import ItemsCarousel from '../../Components/Information/ItemsCarousel';
import ProductCard from '../../Components/Product/ProductCard';

const Section = ({ section }) => {
  return (
    <Fragment>
      <h1 className='display-1 text-center'>{section.name}</h1>

      {section.section.map((type) => (
        <ItemsCarousel
          key={type.name}
          title={type.name}
          items={type.products}
          component={ProductCard}
        />
      ))}
    </Fragment>
  );
};

export default Section;
