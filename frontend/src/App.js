import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import { HOME_ROUTE, NAVBAR_BACKGROUND_COLOR, WEBSITE_BACKGROUND_COLOR } from './Helpers/Constants';
import HomePage from './Pages/Home/HomePage';
import RouterView from './Router/Router';

const App = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === HOME_ROUTE;

  return (
    <>
      {isHomePage ? (
        <div
          className='d-flex'
          style={{ backgroundColor: NAVBAR_BACKGROUND_COLOR, height: '100%' }}
        >
          <Container fluid className='d-flex justify-content-center'>
            <HomePage />
          </Container>
        </div>
      ) : (
        <>
          <NavBar />

          <div className='d-flex p-0 mt-5'>
            <div
              style={{
                width: '100%',
                backgroundColor: WEBSITE_BACKGROUND_COLOR,
              }}
              className='me-5 pe-1'
            >
              <Container fluid className='d-flex' style={{ minHeight: '100vh' }}>
                <RouterView />
              </Container>
            </div>

            <div dir='rtl' className='mt-4'>
              <SideBar />
            </div>
          </div>
        </>
      )}

      <ToastContainer
        autoClose={1500}
        position='bottom-left'
        pauseOnHover={false}
        draggable={false}
        limit={5}
        theme='dark'
        className='text-end fs-4'
        style={{ width: '30%' }}
      />
    </>
  );
};

export default App;
