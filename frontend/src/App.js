import { useLocation } from 'react-router-dom';
import { HOME_ROUTE } from './Helpers/Constants';
import NavBar from './Components/NavBar/NavBar';
import RouterView from './Router/Router';
import SideBar from './Components/SideBar/SideBar';

const App = () => {
  const currentRoute = useLocation().pathname;
  const isHomePage = currentRoute === HOME_ROUTE;

  return (
    <>
      {!isHomePage && <NavBar />}

      <div
        className={`d-flex p-0 ${!isHomePage ? 'mt-5' : ''}`}
        style={isHomePage ? { height: '100%' } : {}}
      >
        <div
          style={{ width: '100%' }}
          className={!isHomePage ? 'me-5 pe-1' : ''}
        >
          <RouterView />
        </div>

        {!isHomePage && (
          <div dir='rtl' className='mt-4'>
            <SideBar />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
