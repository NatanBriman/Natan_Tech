import { Col, Container, Row, Ratio } from 'react-bootstrap';
import {
  LOGIN_PAGE_BACKGROUND_COLOR,
  WEBSITE_TITLE,
  WEBSITE_SUBTITLE,
} from '../Helpers/Constants';
import LoginForm from '../Components/Login/LoginForm';

const LoginPage = () => {
  return (
    <Container
      fluid
      style={{ height: '100%', background: LOGIN_PAGE_BACKGROUND_COLOR }}
      className='d-flex justify-content-center align-items-center'
    >
      <Row
        className='d-flex justify-content-center align-items-center'
        style={{ width: '100%' }}
      >
        <Col sm={4}>
          <LoginForm />
        </Col>

        <Col
          sm={8}
          className='d-flex justify-content-center align-items-center'
        >
          <div className='justify-content-center align-items-center text-center'>
            <div className='mb-4'>
              <h1>
                <b>{WEBSITE_TITLE}</b>
              </h1>

              <h3>{WEBSITE_SUBTITLE}</h3>
            </div>

            <Ratio aspectRatio={3 / 4}>
              <img src='Assets/Tech Icon.png' alt='Tech Icon' />
            </Ratio>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
