import { TrainingPack } from "../../shared/interfaces";
import {
  TrainingPackImageContainer,
  TrainingPackContainer,
  TraningPackNameContaier,
  TrainingPackCodeContainer,
  TrainingPackCodeTextContainer,
  TrainingPackCodeIconContainer,
  ClipboardCopyIcon,
} from "./trainingPackStyles";
import { MouseEvent, useRef, useState, useEffect } from "react";
import TrainingPackCategories from "./trainingPackCategories";

interface Props {
  trainingPackInfo: TrainingPack;
}

const FeaturedTrainingPack = ({ trainingPackInfo }: Props) => {
  const {
    field_image,
    training_pack_name,
    training_pack_code,
    training_style,
  } = trainingPackInfo;
  const ref = useRef<HTMLTextAreaElement>(null);
  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);

  const copyCodeToClipboard = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    if (showCopiedMessage) return;
    ref.current.select();
    document.execCommand("copy");
    setShowCopiedMessage(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 2000);
  }, [showCopiedMessage]);

  return (
    <TrainingPackContainer>
      <img
        src={`/images/maps/${field_image}.jpg`}
        style={{ maxHeight: "170px" }}
      />
      <TraningPackNameContaier>{training_pack_name} </TraningPackNameContaier>
      <TrainingPackCodeContainer>
        <TrainingPackCodeTextContainer
          ref={ref}
          value={showCopiedMessage ? "Copied!" : training_pack_code}
          readOnly={true}
        />
        <TrainingPackCodeIconContainer onClick={(e) => copyCodeToClipboard(e)}>
          <ClipboardCopyIcon />
        </TrainingPackCodeIconContainer>
      </TrainingPackCodeContainer>
      <TrainingPackCategories
        categories={JSON.parse(training_style as string)}
      />
    </TrainingPackContainer>
  );
};

export default FeaturedTrainingPack;
