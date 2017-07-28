import { connect } from 'react-redux';
import { fetchAllTags } from '../../actions/tag_actions';
import { updateNoteEntities } from '../../actions/note_actions';
import TagIndex from './tag_index';

const mapStateToProps = ({tag}) => {
  const tagObj = tag.entities;	
  const tags = Object.keys(tagObj).map(id => tagObj[id]);

  const tag_name = [];
  const tags_uniq=[];
  for(let i=0; i< tags.length; i++){
  	if (!tag_name.includes(tags[i].name)){
  		tag_name.push(tags[i].name);
  		tags_uniq.push(tags[i]);
  	} 
  }
  
  return {
    tags: tags_uniq,
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