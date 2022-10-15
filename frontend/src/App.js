import { useLocation } from 'react-router-dom';
import { HOME_ROUTE } from './Helpers/Constants';
import SideBar from './Components/SideBar/SideBar';
import RouterView from './Router/Router';

const App = () => {
  const currentRoute = useLocation().pathname;
  const isHomePage = currentRoute === HOME_ROUTE;

  return (
    <div className='d-flex' style={isHomePage ? { height: '100%' } : {}}>
      <RouterView />

      {!isHomePage && (
        <div dir='rtl'>
          <SideBar />
        </div>
      )}
    </div>
  );
};

export default App;
