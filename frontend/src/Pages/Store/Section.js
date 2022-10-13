import { Fragment } from 'react';
import ItemsList from '../../Components/Information/ItemsList';
import ProductDisplayCard from '../../Components/Product/Cards/ProductDisplayCard';

const Section = ({ section }) => {
  return (
    <Fragment>
      <h1 className='display-1 text-center'>{section.name}</h1>

      {section.section.map((type) => (
        <ItemsList
          key={type.name}
          title={type.name}
          items={type.items}
          component={(item) => (
            <ProductDisplayCard
              item={item.item}
              isPurchaseButton
              initialQuantity={item.item.quantity}
            />
          )}
        />
      ))}
    </Fragment>
  );
};

export default Section;
