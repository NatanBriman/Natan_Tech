import Button from 'react-bootstrap/Button';

const ActionButton = ({
  onClick,
  color = 'primary',
  text,
  icon = '',
  buttonClass = '',
  textClass = '',
}) => {
  return (
    <Button
      variant={color}
      onClick={onClick}
      style={{ color: 'black' }}
      className={`${buttonClass} border border-dark border-3 shadow d-flex justify-content-between align-items-center`}
    >
      <h1 className={textClass}>{text}</h1>

      <h1 className={`${textClass} ms-2`}>{icon}</h1>
    </Button>
  );
};

export default ActionButton;
