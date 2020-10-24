import SidebarItem from "./sidebarItem";
import { SidebarContainer, SidebarButtonContainer } from "./sidebarStyles";
import { MenuOpenIcon, MenuButtonContainer } from "../navbar/navbarStyles";
import { useContext } from "react";
import { store } from "../../store";
interface Props {
  closeSidebar: () => void;
}

const Sidebar = ({ closeSidebar }: Props) => {
  const { state } = useContext(store);
  const { featuredTrainingPackCreators } = state;

  return (
    <SidebarContainer>
      <SidebarButtonContainer>
        <MenuButtonContainer onClick={closeSidebar}>
          <MenuOpenIcon />
        </MenuButtonContainer>
      </SidebarButtonContainer>

      <SidebarItem
        text="Training packs"
        subItems={featuredTrainingPackCreators}
      />

      <SidebarItem
        text="Training packs"
        subItems={featuredTrainingPackCreators}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
