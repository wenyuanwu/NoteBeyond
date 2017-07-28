import { connect } from 'react-redux';
import { fetchAllTags } from '../../actions/tag_actions';
import { updateNoteEntities } from '../../actions/note_actions';
import TagIndex from './tag_index';

const mapStateToProps = ({tag}) => {
  const tagObj = tag.entities;		
  return {
    tags: Object.keys(tagObj).map(id => tagObj[id]),
    errors: tag.errors, 
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllTags: () => dispatch(fetchAllTags()), 
  updateNoteEntities: notes => dispatch(updateNoteEntities(notes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);