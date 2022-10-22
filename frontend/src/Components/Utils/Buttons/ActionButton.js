import Button from 'react-bootstrap/Button';

const ActionButton = ({
  onClick,
  color,
  text,
  icon,
  buttonClass,
  textClass,
  small = false,
  type,
}) => {
  return (
    <Button
      type={type}
      variant={color}
      onClick={onClick}
      style={{ color: 'black' }}
      className={`${buttonClass} border border-dark border-3 shadow d-flex justify-content-between align-items-center`}
    >
      {!small ? (
        <>
          <h1 className={textClass}>{text}</h1>
          <h1 className={`${textClass} ${text ? 'ms-2' : ''}`}>{icon}</h1>
        </>
      ) : (
        <>
          <h4>{text}</h4>
          {icon && <h4 className='ms-2'>{icon}</h4>}
        </>
      )}
    </Button>
  );
};

export default ActionButton;
