import { useEffect, useRef, useState } from 'react';
import {
  ClipboardCopyIcon,
  TrainingPackCodeContainer,
  TrainingPackCodeIconContainer,
  TrainingPackCodeTextContainer,
} from './trainingPackStyles';

interface Props {
  training_pack_code: string;
}

const TrainingPackCode = ({ training_pack_code }: Props) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);

  const copyCodeToClipboard = () => {
    if (showCopiedMessage) return;
    ref.current.select();
    document.execCommand('copy');
    setShowCopiedMessage(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 2000);
  }, [showCopiedMessage]);

  return (
    <TrainingPackCodeContainer>
      <TrainingPackCodeTextContainer
        ref={ref}
        value={showCopiedMessage ? 'Copied!' : training_pack_code}
        readOnly={true}
        onClick={copyCodeToClipboard}
      />
      <TrainingPackCodeIconContainer>
        <ClipboardCopyIcon
          onClick={copyCodeToClipboard}
          data-testid="clipboard button"
        />
      </TrainingPackCodeIconContainer>
    </TrainingPackCodeContainer>
  );
};

export default TrainingPackCode;
