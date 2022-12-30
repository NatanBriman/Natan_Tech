import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { NAVBAR_BACKGROUND_COLOR } from '../../Helpers/Constants';
import { ROUTES } from '../../Router/Router';

const SideBar = () => {
  const { isManager } = useSelector((state) => state.user.user);
  const { collapseSidebar } = useProSidebar();
  const { pathname } = useLocation();

  const availableRoutes = !isManager ? ROUTES.filter((route) => !route.isManger) : ROUTES;

  return (
    <Sidebar
      dir='rtl'
      defaultCollapsed
      onMouseEnter={() => collapseSidebar()}
      onMouseLeave={() => collapseSidebar()}
      width='230px'
      collapsedWidth='52px'
      backgroundColor={NAVBAR_BACKGROUND_COLOR}
      className='shadow border-0 mt-2'
      style={{ height: '100vh', position: 'fixed' }}
    >
      <Menu className='text-center mt-3'>
        {availableRoutes.map((route) => (
          <Link key={route.path} className='nav-link rounded' to={route.path}>
            <MenuItem
              style={{ paddingRight: 0 }}
              icon={route.icon}
              className='mb-3 shadow-lg rounded'
              as={'div'}
              active={pathname === route.path}
            >
              <h3 className='me-2 rounded'>{route.text}</h3>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
