import { useEffect, useState } from 'react';
import { Form, Image, InputGroup, Ratio } from 'react-bootstrap';
import { isEmpty } from 'lodash';

const ImageUpload = ({ inputValue, label, inputProps, invalidFeedback }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedImage) return setPreview(undefined);

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const handleFileSelect = (event) => {
    const files = event.target.files;

    if (isEmpty(files)) return setSelectedImage(undefined);

    setSelectedImage(files[0]);
  };

  return (
    <Form.Group className='mb-3' dir='rtl'>
      <Form.Label>
        <b>{label}</b>
      </Form.Label>

      <InputGroup hasValidation>
        <Form.Control
          {...inputProps}
          type='file'
          onChange={handleFileSelect}
          ref={inputValue}
        />

        <Form.Control.Feedback type='invalid' className='mt-2'>
          <h5>{invalidFeedback}</h5>
        </Form.Control.Feedback>
      </InputGroup>

      {selectedImage && (
        <div className='d-flex justify-content-center mt-3'>
          <Ratio style={{ height: '5rem', width: '5rem' }}>
            <Image
              className='shadow border border-2 border-info'
              roundedCircle
              src={preview}
              alt='Selected Image'
            />
          </Ratio>
        </div>
      )}
    </Form.Group>
  );
};

export default ImageUpload;
