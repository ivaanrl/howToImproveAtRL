import { useEffect } from 'react';
import SidebarItem from './sidebarItem';
import { SidebarContainer, SidebarButtonContainer } from './sidebarStyles';
import { MenuOpenIcon, MenuButtonContainer } from '../navbar/navbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchContenCreators } from '../../redux/reducers/contentCreators';
interface Props {
  closeSidebar: () => void;
}

const Sidebar = ({ closeSidebar }: Props) => {
  const dispatch = useDispatch();
  const contentCreators = useSelector(
    (state: RootState) => state.contentCreators,
  );

  useEffect(() => {
    dispatch(fetchContenCreators());
  }, []);

  return (
    <SidebarContainer aria-label="sidebar container">
      <SidebarButtonContainer>
        <MenuButtonContainer onClick={closeSidebar}>
          <MenuOpenIcon aria-label="close sidebar menu" />
        </MenuButtonContainer>
      </SidebarButtonContainer>

      <SidebarItem text="Training packs" subItems={contentCreators} />
    </SidebarContainer>
  );
};

export default Sidebar;
