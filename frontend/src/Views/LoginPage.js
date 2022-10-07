import { Col, Container, Row, Ratio } from 'react-bootstrap';
import LoginForm from '../Components/Login/LoginForm';
import { WEBSITE_TITLE } from '../Helpers/Constants';

const LoginPage = () => {
  const verifyUser = (username, password) => {
    console.log(username);
    console.log(password);
  };

  return (
    <Container
      fluid
      style={{ height: '100%' }}
      className='d-flex justify-content-center align-items-center'
    >
      <Row
        className='d-flex justify-content-center align-items-center'
        style={{ width: '100%' }}
      >
        <Col sm={4}>
          <LoginForm verifyUser={verifyUser} />
        </Col>

        <Col
          sm={8}
          className='d-flex justify-content-center align-items-center'
        >
          <div className='justify-content-center align-items-center text-center'>
            <div className='mb-4'>
              <h1>
                <strong>{WEBSITE_TITLE}</strong>
              </h1>

              <h3>המקום היחיד לכל פתרונות הטכנולוגיה</h3>
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
