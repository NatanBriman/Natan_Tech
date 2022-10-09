import { useSelector } from 'react-redux';
import { WEBSITE_BACKGROUND_COLOR } from './Helpers/Constants';
import { isEmpty } from './Helpers/Helpers';
import LoginPage from './Views/LoginPage';

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div style={{ height: '100%', background: WEBSITE_BACKGROUND_COLOR }}>
      {isEmpty(user) && <LoginPage />}

      {!isEmpty(user) && <h1>LOGGED IN</h1>}
    </div>
  );
};

export default App;
