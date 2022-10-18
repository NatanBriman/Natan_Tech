import Card from 'react-bootstrap/Card';

const ValueBox = ({ text, color = 'success' }) => {
  return (
    <Card
      bg={color}
      style={{ height: '100%', width: '100%' }}
      className='shadow border border-2 border-dark d-flex justify-content-center align-items-center'
    >
      <h1 className='display-5'>
        <b>{text}</b>
      </h1>
    </Card>
  );
};

export default ValueBox;
