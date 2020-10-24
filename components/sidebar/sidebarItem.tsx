import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  SidebarItemContainer,
  ChevronDownIcon,
  SidebarOptionContainer,
} from "./sidebarStyles";
import { useMeasure } from "react-use";
import Link from "next/link";
import { TrainingPack, Mechanic, ContentCreator, Tutorial } from "../../store";

interface Props {
  text: string;
  subItems: {
    [creator: string]: {
      contentCreatorInfo: ContentCreator;
      trainingPacks: TrainingPack[];
      mechanics: Mechanic[];
      tutorials: Tutorial[];
    };
  };
}

const SidebarItem = ({ text, subItems }: Props) => {
  const closedHeight = "0px";
  const [ref, { height }] = useMeasure();
  const [active, setActive] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<string | number>(
    closedHeight
  );

  const handleClick = () => {
    if (active) {
      setSpringProps({ transform: "rotateX(180deg)", marginBottom: "10px" });
    } else {
      setSpringProps({ transform: "rotateX(0deg)", marginBottom: "0px" });
    }
    setActive(!active);
  };

  const [springProps, setSpringProps] = useSpring(() => ({
    transform: "rotateX(180deg)",
    marginBottom: "10px",
  }));

  const expand = useSpring({
    height: active ? `${contentHeight}px` : closedHeight,
    opacity: active ? 1 : 0,
  });

  useEffect(() => {
    //Sets initial height
    setContentHeight(height);

    //Adds resize event listener
    window.addEventListener("resize", () => setContentHeight(height));

    // Clean-up
    return window.removeEventListener("resize", () => setContentHeight(height));
  }, [height]);

  return (
    <>
      <SidebarItemContainer active={active} onClick={handleClick}>
        <p>{text}</p>
        <animated.div style={springProps}>
          {" "}
          <ChevronDownIcon active={active} />{" "}
        </animated.div>
      </SidebarItemContainer>

      <animated.div style={expand}>
        <div ref={ref}>
          {active
            ? Object.keys(subItems).map((creator: string, index: number) => {
                return (
                  <Link href={`${creator}`} key={index}>
                    <SidebarOptionContainer>
                      <a>{creator}</a>
                    </SidebarOptionContainer>
                  </Link>
                );
              })
            : null}
        </div>
      </animated.div>
    </>
  );
};

export default SidebarItem;
