import SidebarItem from "./sidebarItem";
import {
  SidebarContainer,
  SidebarItemContainer,
  DashIcon,
} from "./sidebarStyles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem
        text="Training packs"
        options={[{ urlPrefix: "/training_packs/", name: "Hard Redirects" }]}
      />
      <SidebarItem
        text="Mechanics"
        options={[{ urlPrefix: "/learn_mechanics/", name: "Kickoffs" }]}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
