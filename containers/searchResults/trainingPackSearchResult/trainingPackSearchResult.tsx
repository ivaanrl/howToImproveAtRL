import { TrainingPack } from '../../../shared/interfaces';
import TrainingPackCode from '../../trainingPack/TrainingPackCode';
import TrainingPackCategories from '../../trainingPack/trainingPackCategories';
import {
  SearchResultBodyContainer,
  SearchResultContainer,
  SearchResultHeader,
  SearchResultHeaderCategory,
  SearchResultHeaderName,
  SearchResultHeaderSeparator,
  ContentCreatorNameContainer,
  ContentCreatorName,
  ContentCreatorLabel,
  LinkButton,
} from '../searchResultsStyles';
import { TrainingPackCodeContainer } from './trainingPackSearchResultStyles';
import Link from 'next/link';
import DraggableCategories from './draggableCategories';

interface Props {
  trainingPackInfo: TrainingPack;
}

const TrainingPackSearchResult = ({ trainingPackInfo }: Props) => {
  const {
    training_pack_code,
    training_pack_name,
    training_style,
    name,
    youtube_explanation,
  } = trainingPackInfo;

  return (
    <SearchResultContainer>
      <SearchResultHeader>
        <SearchResultHeaderCategory>Training Pack</SearchResultHeaderCategory>
        <SearchResultHeaderSeparator />
        <SearchResultHeaderName>{training_pack_name}</SearchResultHeaderName>
      </SearchResultHeader>
      <SearchResultBodyContainer>
        <TrainingPackCodeContainer>
          <TrainingPackCode training_pack_code={training_pack_code} />
        </TrainingPackCodeContainer>
        <ContentCreatorNameContainer>
          <ContentCreatorLabel>Creator: </ContentCreatorLabel>
          <Link href={`/${name}`}>
            <ContentCreatorName>
              <a>{name}</a>
            </ContentCreatorName>
          </Link>
        </ContentCreatorNameContainer>
        {/*<TrainingPackCategories
          categories={JSON.parse(training_style as string)}
        />*/}
        <DraggableCategories
          categories={JSON.parse(training_style as string)}
        />
        <LinkButton active={!!youtube_explanation}>Explanation</LinkButton>
      </SearchResultBodyContainer>
    </SearchResultContainer>
  );
};

export default TrainingPackSearchResult;
