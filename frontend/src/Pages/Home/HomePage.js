import { useState } from 'react';
import { Button, Card, Col, Container, Row, Ratio } from 'react-bootstrap';
import {
  HOME_PAGE_BACKGROUND_COLOR,
  WEBSITE_TITLE,
  WEBSITE_SUBTITLE,
} from '../../Helpers/Constants';
import LoginForm from './Forms/LoginForm';
import RegisterForm from './Forms/RegisterForm';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleRegister = () => setIsLogin((isLogin) => !isLogin);
  // TODO Add forgot password functionality
  // TODO Add register user functionality
  return (
    <Container
      fluid
      style={{ height: '100%', background: HOME_PAGE_BACKGROUND_COLOR }}
      className='d-flex justify-content-center align-items-center'
    >
      <Row
        className='d-flex justify-content-center align-items-center'
        style={{ width: '100%' }}
      >
        <Col sm={4}>
          <Card
            style={{ maxHeight: '100vh' }}
            bg='light'
            className='p-0 shadow text-center border border-2 border-info'
          >
            <Card.Header>
              <Card.Title as='h1'>
                <b>{isLogin ? 'התחברות' : 'הרשמה'}</b>
              </Card.Title>
            </Card.Header>

            <Card.Body>{isLogin ? <LoginForm /> : <RegisterForm />}</Card.Body>

            <Card.Footer className='d-flex justify-content-between'>
              <Button
                className='shadow border border-2 border-dark'
                variant='danger'
              >
                ?שכחתי סיסמה
              </Button>

              <Button
                onClick={toggleRegister}
                className='shadow border border-2 border-dark'
                variant='primary'
              >
                ?לא נרשמתי
              </Button>
            </Card.Footer>
          </Card>
        </Col>

        <Col
          sm={8}
          className='d-flex justify-content-center align-items-center'
        >
          <Container>
            <Row className='text-center mb-5'>
              <h1 className='display-1 mb-3'>
                <b>{WEBSITE_TITLE}</b>
              </h1>

              <h3 className='display-5'>{WEBSITE_SUBTITLE}</h3>
            </Row>

            <Row className='d-flex justify-content-center'>
              <Ratio style={{ height: '15rem', width: '20rem' }}>
                <img src='Assets/Tech Icon.png' alt='Tech Icon' />
              </Ratio>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
