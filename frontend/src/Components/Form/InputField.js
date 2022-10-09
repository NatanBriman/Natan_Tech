import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { BiHide, BiShow } from 'react-icons/bi';
import { isEmpty } from '../../Helpers/Helpers';

const InputField = ({
  inputValue,
  label,
  inputProps,
  invalidFeedback,
  validation,
}) => {
  const isPassword = inputProps.type === 'password';
  const [isValid, setIsValid] = useState(true);
  const [isShow, setIsShow] = useState(!isPassword);

  const toggleIsShow = () => setIsShow(!isShow);
  const handleChange = () => setIsValid(validation(inputValue.current.value));

  const showIcon = isShow ? <BiHide /> : <BiShow />;
  const validationClass = !isEmpty(inputValue.current?.value)
    ? isValid
      ? 'is-valid'
      : 'is-invalid'
    : '';

  const inputType = isShow
    ? isPassword
      ? 'text'
      : inputProps.type
    : 'password';

  return (
    <Form.Group className='mb-3'>
      <Form.Label>
        <strong>{label}</strong>
      </Form.Label>

      <InputGroup hasValidation>
        <Form.Control
          {...inputProps}
          type={inputType}
          ref={inputValue}
          className={validationClass}
          onChange={handleChange}
        />

        <Button
          className='d-flex align-items-center'
          variant='outline-secondary'
          onClick={toggleIsShow}
        >
          {showIcon}
        </Button>

        <Form.Control.Feedback type='invalid'>
          {invalidFeedback}
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
};

export default InputField;
