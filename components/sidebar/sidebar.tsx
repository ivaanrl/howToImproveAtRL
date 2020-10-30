import SidebarItem from './sidebarItem';
import { SidebarContainer, SidebarButtonContainer } from './sidebarStyles';
import { MenuOpenIcon, MenuButtonContainer } from '../navbar/navbarStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
interface Props {
  closeSidebar: () => void;
}

const Sidebar = ({ closeSidebar }: Props) => {
  const { featuredTrainingPackCreators } = useSelector(
    (state: RootState) => state.contentCreators,
  );
  return (
    <SidebarContainer aria-label="sidebar container">
      <SidebarButtonContainer>
        <MenuButtonContainer onClick={closeSidebar}>
          <MenuOpenIcon aria-label="close sidebar menu" />
        </MenuButtonContainer>
      </SidebarButtonContainer>

      <SidebarItem
        text="Training packs"
        subItems={featuredTrainingPackCreators}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
