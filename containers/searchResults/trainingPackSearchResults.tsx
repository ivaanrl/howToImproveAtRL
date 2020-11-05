import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { TrainingPack } from '../../shared/interfaces';
import TrainingPackCategories from '../trainingPack/trainingPackCategories';

const TrainingPackSearchResults = () => {
  const searchResults = useSelector(
    (state: RootState) => state.searchResults.searchResults,
  );

  const columns = [
    {
      name: 'Code',
      selector: 'training_pack_code',
      sortable: false,
    },
    {
      name: 'Style',
      selector: 'training_style',
      cell: (row) => (
        <TrainingPackCategories categories={JSON.parse(row.training_style)} />
      ),
      sortable: false,
    },
    {
      name: 'Name',
      selector: 'training_pack_name',
      sortable: true,
    },
    {
      name: 'Creator',
      selector: 'name',
      sortable: true,
    },
    { name: 'Explanation', selector: 'youtube_explanation', sortable: false },
  ];

  return (
    <DataTable
      noHeader
      columns={columns}
      data={searchResults as TrainingPack[]}
      pagination
      responsive
      paginationPerPage={8}
      paginationRowsPerPageOptions={[8]}
    ></DataTable>
  );
};

export default TrainingPackSearchResults;
