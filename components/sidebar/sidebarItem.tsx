import { useState } from "react";
import { useTransition, animated } from "react-spring";
import {
  SidebarItemContainer,
  DashIcon,
  ChevronDownIcon,
  SidebarOptionContainer,
} from "./sidebarStyles";
import Link from "next/link";

interface Props {
  text: string;
  options: {
    urlPrefix: string;
    name: string;
  }[];
}

const SidebarItem = ({ text, options }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [toggle, setToggle] = useState<boolean>(false);

  const transitions = useTransition(active, null, {
    enter: { opacity: 1, display: "inline-block", rotate: "100deg" },
    leave: { opacity: 0 },
  });

  return (
    <>
      <SidebarItemContainer active={active} onClick={handleClick}>
        <p>{text}</p>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div style={props} key={key}>
              {" "}
              <ChevronDownIcon />{" "}
            </animated.div>
          ) : (
            <animated.div style={props} key={key}>
              {" "}
              <DashIcon />{" "}
            </animated.div>
          )
        )}
      </SidebarItemContainer>

      {active
        ? options.map((item, index) => {
            const { urlPrefix, name } = item;
            return (
              <Link href={`${urlPrefix + name}`}>
                <SidebarOptionContainer key={index}>
                  <a>{item.name}</a>
                </SidebarOptionContainer>
              </Link>
            );
          })
        : null}
    </>
  );
};

export default SidebarItem;
