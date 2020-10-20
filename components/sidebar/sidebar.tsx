import {
  SidebarContainer,
  SidebarItemContainer,
  DashIcon,
} from "./sidebarStyles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItemContainer active={false}>
        <p>This is a sidebar Item</p>
        <DashIcon />
      </SidebarItemContainer>

      <SidebarItemContainer active={true}>
        <p>This is a sidebar Item</p>
        <DashIcon />
      </SidebarItemContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
