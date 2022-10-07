import { WEBSITE_BACKGROUND_COLOR } from './Helpers/Constants';
import LoginPage from './Views/LoginPage';

const App = () => {
  return (
    <div style={{ height: '100%', background: WEBSITE_BACKGROUND_COLOR }}>
      <LoginPage />
    </div>
  );
};

export default App;
