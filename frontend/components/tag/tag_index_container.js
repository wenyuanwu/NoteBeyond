import { connect } from 'react-redux';
import { fetchAllTags } from '../../actions/tag_actions';
import { updateNoteEntities } from '../../actions/note_actions';
import TagIndex from './tag_index';

const mapStateToProps = ({tag}) => {
  const tagObj = tag.entities;	
  const tags = Object.keys(tagObj).map(id => tagObj[id]);
  const tagName = [];
  const tagsUniq=[];
  for(let i=0; i< tags.length; i++){
  	if (!tagName.includes(tags[i].name) && tags[i].notes.length !== 0){
  		tagName.push(tags[i].name);
  		tagsUniq.push(tags[i]);
  	} 
  }
  
  return {
    tags: tagsUniq,
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