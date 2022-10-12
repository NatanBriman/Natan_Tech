import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE } from './Helpers/Constants';
import SideBar from './Components/SideBar/SideBar';
import RouterView from './Router/Router';

const App = () => {
  const currentRoute = useLocation().pathname;
  const isLogin = currentRoute === LOGIN_ROUTE;

  return (
    <div className='d-flex' style={isLogin ? { height: '100%' } : {}}>
      <RouterView />

      {!isLogin && (
        <div dir='rtl'>
          <SideBar />
        </div>
      )}
    </div>
  );
};

export default App;
