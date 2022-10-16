import { Container, Image, Navbar, Ratio } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  NAVBAR_BACKGROUND_COLOR,
  STORE_ROUTE,
  WEBSITE_TITLE,
} from '../../Helpers/Constants';

const NavBar = () => {
  const { image } = useSelector((state) => state.user.user);

  return (
    <Navbar
      style={{ backgroundColor: NAVBAR_BACKGROUND_COLOR }}
      variant='dark'
      fixed='top'
      className='shadow border-bottom border-secondary'
    >
      <Container fluid className='d-flex justify-content-between'>
        <div>
          <Ratio style={{ height: '4rem', width: '4rem' }}>
            <Image
              className='clickable rounded shadow-lg border border-dark border-2'
              roundedCircle
              alt='Profile Image'
              src={image}
            />
          </Ratio>
        </div>

        <Link
          to={STORE_ROUTE}
          className='p-0 nav-link d-flex justify-content-end align-items-center'
        >
          <h3 className='display-6 me-3'>{WEBSITE_TITLE}</h3>

          <Ratio style={{ height: '3rem', width: '4rem' }} className='rounded'>
            <img alt='Tech Icon' src='Assets/Tech Icon.png' />
          </Ratio>
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavBar;
