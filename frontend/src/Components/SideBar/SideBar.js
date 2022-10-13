import { Link, useLocation } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { SIDEBAR_BACKGROUND_COLOR, ROUTES } from '../../Helpers/Constants';

const SideBar = () => {
  const { collapseSidebar } = useProSidebar();
  const currentRoute = useLocation().pathname;

  return (
    <Sidebar
      dir='rtl'
      defaultCollapsed
      onMouseEnter={() => collapseSidebar()}
      onMouseLeave={() => collapseSidebar()}
      width='220px'
      collapsedWidth='58px'
      backgroundColor={SIDEBAR_BACKGROUND_COLOR}
      className='shadow border-0 rounded'
      style={{ height: '100vh', position: 'fixed' }}
    >
      <Menu className='text-center'>
        {ROUTES.map((route) => (
          <Link key={route.path} className='nav-link' to={route.path}>
            <MenuItem
              style={{ paddingRight: 0 }}
              icon={route.icon}
              className='mb-3 shadow'
              as={'div'}
              active={currentRoute === route.path}
            >
              <h3 className='me-2'>{route.text}</h3>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default SideBar;