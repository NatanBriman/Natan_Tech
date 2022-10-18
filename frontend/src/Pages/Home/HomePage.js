import { useState } from 'react';
import { Card, Col, Container, Row, Ratio } from 'react-bootstrap';
import ActionButton from '../../Components/Utils/Buttons/ActionButton';
import { WEBSITE_TITLE, WEBSITE_SUBTITLE } from '../../Helpers/Constants';
import LoginForm from './Forms/LoginForm';
import RegisterForm from './Forms/RegisterForm';

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleRegister = () => setIsLogin((isLogin) => !isLogin);
  // TODO Add forgot password functionality

  return (
    <Row
      className='d-flex justify-content-center align-items-center'
      style={{ width: '100%' }}
    >
      <Col sm={4}>
        <Card
          bg='light'
          className='shadow text-center border border-2 border-warning'
        >
          <Card.Header>
            <Card.Title as='h1'>
              <b>{isLogin ? 'התחברות' : 'הרשמה'}</b>
            </Card.Title>
          </Card.Header>

          <Card.Body>{isLogin ? <LoginForm /> : <RegisterForm />}</Card.Body>

          <Card.Footer>
            <Row className='justify-content-between'>
              <Col sm={5} className='d-flex justify-content-start'>
                <ActionButton text='שכחתי סיסמה' color='danger' small />
              </Col>

              <Col sm={5} className='d-flex justify-content-end'>
                <ActionButton
                  onClick={toggleRegister}
                  text={isLogin ? 'לא נרשמתי' : 'נרשמתי כבר'}
                  small
                />
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={8} className='d-flex justify-content-center align-items-center'>
        <Container>
          <Row className='text-center mb-5'>
            <h1 className='display-1 mb-3'>
              <b>{WEBSITE_TITLE}</b>
            </h1>

            <h1 className='display-5'>{WEBSITE_SUBTITLE}</h1>
          </Row>

          <Row className='d-flex justify-content-center'>
            <Ratio style={{ height: '18rem', width: '24rem' }}>
              <img src='Assets/Tech Icon.png' alt='Tech Icon' />
            </Ratio>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default HomePage;
