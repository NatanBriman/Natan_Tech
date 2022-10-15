import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { BiHide, BiShow } from 'react-icons/bi';
import { isEmpty } from 'lodash';

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
        <b>{label}</b>
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
          className='d-flex align-items-center border border-2 border-dark'
          variant='outline-dark'
          onClick={toggleIsShow}
        >
          {showIcon}
        </Button>

        <Form.Control.Feedback type='invalid' className='mt-2'>
          <h5>{invalidFeedback}</h5>
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
};

export default InputField;
