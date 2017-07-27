import { connect } from 'react-redux';
import { fetchAllNotebooks} from '../../actions/notebook_actions';
import NotebookIndex from './notebook_index';

const mapStateToProps = ({notebook}) => {
  const notebookObj = notebook.entities;		
  return {
    notebooks: Object.keys(notebookObj).map(id => notebookObj[id]),
    errors: notebook.errors, 
  };
};

const mapDispatchToProps = dispatch => ({
  requestNotebooks: () => dispatch(fetchAllNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);