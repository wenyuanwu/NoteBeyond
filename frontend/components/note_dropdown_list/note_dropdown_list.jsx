import React from 'react';

class NoteDropDownList extends React.Component {
	constructor(props){
		super(props);
		this.state = {listStatus: false};
	}

	componentDidMount(){
		this.props.fetchAllNotebooks();
	}

	toggleListStatus(){
		this.setState({listStatus: !this.state.listStatus});
	}

	render(){
		let {notebook, currentNotebook} = this.props;
		let className = 'hidden';
		if (this.state.listStatus){
			className = 'drop-down-list-show';
		}

		let Title = "";
		if (currentNotebook){
			Title = currentNotebook.title;
		}

		return(
			<div className = 'notebook-drop-down-list'>
				<button className='notebook-drop-down-list-btn' onClick = {this.toggleListStatus}>
					<img className="selector-icon" src="http://res.cloudinary.com/dltydzsmu/image/upload/v1506467913/notebook_obz1qs.png"/>
					<span className="notebook-drop-down-list-title">{Title}</span>
				</button>	
			</div>	

		);

	}
}

export default NoteDropDownList;
