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
  const { trainingPacks } = state;

  return (
    <SidebarContainer>
      <SidebarButtonContainer>
        <MenuButtonContainer onClick={closeSidebar}>
          <MenuOpenIcon />
        </MenuButtonContainer>
      </SidebarButtonContainer>
      <SidebarItem
        text="Mechanics"
        urlPrefix="/learn_mechanics/"
        subItems={[
          {
            difficulty: "Hard",
            featured: 1,
            training_pack_author: "Poquito",
            training_pack_name: "this is a name",
            training_pack_id: 1,
          },
          {
            difficulty: "Hard",
            featured: 1,
            training_pack_author: "Poquito",
            training_pack_name: "this is a name",
            training_pack_id: 1,
          },
          {
            difficulty: "Hard",
            featured: 1,
            training_pack_author: "Poquito",
            training_pack_name: "this is a name",
            training_pack_id: 1,
          },
          {
            difficulty: "Hard",
            featured: 1,
            training_pack_author: "Poquito",
            training_pack_name: "this is a name",
            training_pack_id: 1,
          },
        ]}
      />

      <SidebarItem
        text="Training packs"
        urlPrefix="/training_packs/"
        subItems={trainingPacks}
      />
      <SidebarItem
        text="Mechanics"
        urlPrefix="/learn_mechanics/"
        subItems={[
          {
            difficulty: "Hard",
            featured: 1,
            training_pack_author: "Poquito",
            training_pack_name: "this is a name",
            training_pack_id: 1,
          },
          {
            difficulty: "Hard",
            featured: 1,
            training_pack_author: "Poquito",
            training_pack_name: "this is a name",
            training_pack_id: 1,
          },
          {
            difficulty: "Hard",
            featured: 1,
            training_pack_author: "Poquito",
            training_pack_name: "this is a name",
            training_pack_id: 1,
          },
          {
            difficulty: "Hard",
            featured: 1,
            training_pack_author: "Poquito",
            training_pack_name: "this is a name",
            training_pack_id: 1,
          },
        ]}
      />

      <SidebarItem
        text="Training packs"
        urlPrefix="/training_packs/"
        subItems={trainingPacks}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
