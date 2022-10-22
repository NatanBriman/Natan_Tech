import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Image,
  Navbar,
  Ratio,
  Row,
} from 'react-bootstrap';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import {
  HOME_ROUTE,
  NAVBAR_BACKGROUND_COLOR,
  STORE_ROUTE,
  WEBSITE_TITLE,
} from '../../Helpers/Constants';
import { userActions } from '../../Redux/Features/UserSlice';
import DecisionModal from '../Utils/DecisionModal';
import ActionButton from '../Utils/Buttons/ActionButton';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);
  const { image, username } = useSelector((state) => state.user.user);

  const toggleLogoutModal = () => setIsShowLogoutModal((isShow) => !isShow);

  const handleLogout = () => {
    const { logout } = userActions;

    dispatch(logout());
    navigate(HOME_ROUTE);
  };

  return (
    <>
      <Navbar
        style={{ backgroundColor: NAVBAR_BACKGROUND_COLOR }}
        variant='dark'
        fixed='top'
        className='shadow border-bottom border-secondary'
      >
        <Container fluid className='d-flex justify-content-between'>
          <Row className='d-flex justify-content-between'>
            <Col>
              <Button
                onClick={toggleLogoutModal}
                variant='danger'
                className='shadow border border-2 border-dark'
              >
                <h2>
                  <RiLogoutBoxLine />
                </h2>
              </Button>
            </Col>

            <Col className='d-flex'>
              <Ratio style={{ height: '4rem', width: '4rem' }}>
                <Image
                  className='clickable rounded shadow-lg border border-dark border-2'
                  roundedCircle
                  alt='Profile Image'
                  src={image}
                />
              </Ratio>

              <h3 className='display-6 ms-2'>
                <b style={{ textDecoration: 'underline' }}>{username}</b>
              </h3>
            </Col>
          </Row>

          <Link
            to={STORE_ROUTE}
            className='p-0 nav-link d-flex justify-content-end align-items-center'
          >
            <h3 className='display-6 me-3'>{WEBSITE_TITLE}</h3>

            <Ratio
              style={{ height: '3rem', width: '4rem' }}
              className='rounded'
            >
              <img alt='Tech Icon' src='Assets/Tech Icon.png' />
            </Ratio>
          </Link>
        </Container>
      </Navbar>

      <DecisionModal
        isShow={isShowLogoutModal}
        closeAction={toggleLogoutModal}
        text='התנתקות מהאתר'
      >
        <ActionButton
          onClick={handleLogout}
          text='התנתקות'
          icon={<RiLogoutBoxLine />}
          color='danger'
        />

        <ActionButton
          onClick={toggleLogoutModal}
          text='לא'
          icon={<BsArrowRight />}
        />
      </DecisionModal>
    </>
  );
};

export default NavBar;
