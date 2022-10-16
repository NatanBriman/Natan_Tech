import { Button, Form } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import InputField from './InputField';
import ImageUpload from './ImageUpload';

const InputForm = ({
  handleSubmit,
  inputFields,
  error,
  submitButtonText,
  message,
}) => {
  return (
    <Form onSubmit={handleSubmit} noValidate>
      {inputFields.map((inputField) =>
        inputField.inputProps.type === 'image' ? (
          <ImageUpload key={inputField.label} {...inputField} />
        ) : (
          <InputField key={inputField.label} {...inputField} />
        )
      )}

      {!isEmpty(error) && (
        <Form.Group className='mb-3'>
          <Form.Text>
            <h5>
              <b>{error}</b>
            </h5>
          </Form.Text>
        </Form.Group>
      )}

      <Button
        className='shadow border-2 border-dark border'
        variant='success'
        type='submit'
      >
        {submitButtonText}
      </Button>

      <Form.Group className='mt-3 text-center'>
        <Form.Text>
          <h5>{message}</h5>
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default InputForm;
