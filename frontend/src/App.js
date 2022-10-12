import SideBar from './Components/SideBar/SideBar';
import RouterView from './Router/Router';

const App = () => {
  return (
    <div className='d-flex'>
      <div className='me-3'>
        <RouterView />
      </div>

      <div dir='rtl'>
        <SideBar />
      </div>
    </div>
  );
};

export default App;
