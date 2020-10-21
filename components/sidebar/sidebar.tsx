import SidebarItem from "./sidebarItem";
import { SidebarContainer, SidebarButtonContainer } from "./sidebarStyles";
import { MenuOpenIcon, MenuButtonContainer } from "../navbar/navbarStyles";

interface Props {
  closeSidebar: () => void;
}

const Sidebar = ({ closeSidebar }: Props) => {
  return (
    <SidebarContainer>
      <SidebarButtonContainer>
        <MenuButtonContainer onClick={closeSidebar}>
          <MenuOpenIcon />
        </MenuButtonContainer>
      </SidebarButtonContainer>
      <SidebarItem
        text="Mechanics"
        options={[
          { urlPrefix: "/api/learn_mechanics/", name: "Kickoffs" },
          { urlPrefix: "/api/learn_mechanics/", name: "Fast Aerials" },
          { urlPrefix: "/api/learn_mechanics/", name: "Flip Resets" },
          { urlPrefix: "/api/learn_mechanics/", name: "Ceilling Shots" },
        ]}
      />

      <SidebarItem
        text="Training packs"
        options={[
          { urlPrefix: "/api/training_packs/", name: "Hard Redirects" },
          { urlPrefix: "/api/training_packs/", name: "GoalKeeper" },
          { urlPrefix: "/api/training_packs/", name: "Passing" },
        ]}
      />
      <SidebarItem
        text="Mechanics"
        options={[
          { urlPrefix: "/learn_mechanics/", name: "Kickoffs" },
          { urlPrefix: "/learn_mechanics/", name: "Fast Aerials" },
          { urlPrefix: "/learn_mechanics/", name: "Flip Resets" },
          { urlPrefix: "/learn_mechanics/", name: "Ceilling Shots" },
        ]}
      />

      <SidebarItem
        text="Training packs"
        options={[
          { urlPrefix: "/training_packs/", name: "Hard Redirects" },
          { urlPrefix: "/training_packs/", name: "GoalKeeper" },
          { urlPrefix: "/training_packs/", name: "Passing" },
          { urlPrefix: "/training_packs/", name: "Air Dribble" },
        ]}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
