import { useRef } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

const LoginForm = ({ verifyUser }) => {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentUsername = email.current.value;
    const currentPassword = password.current.value;

    verifyUser(currentUsername, currentPassword);
  };

  return (
    <Card bg='light' className='shadow text-center'>
      <Card.Header>
        <Card.Title>
          <h1>
            <strong>התחברות</strong>
          </h1>
        </Card.Title>
      </Card.Header>

      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>אימייל</Form.Label>
            <Form.Control
              autoFocus
              required
              ref={email}
              type='email'
              placeholder='natan@gmail.com'
            />

            <Form.Text>!בחיים לא נשתף את זה עם אף אחד</Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>סיסמה</Form.Label>
            <Form.Control
              required
              ref={password}
              type='password'
              placeholder='natan1234'
            />
          </Form.Group>

          <Button variant='success' type='submit'>
            היידה
          </Button>
        </Form>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between'>
        <Button variant='danger'>?שכחתי סיסמה</Button>
        <Button variant='primary'>?לא נרשמתי</Button>
      </Card.Footer>
    </Card>
  );
};

export default LoginForm;
