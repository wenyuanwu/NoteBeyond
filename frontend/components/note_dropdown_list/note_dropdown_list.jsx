import React from 'react';

class NoteDropDownList extends React.Component {
	constructor(props){
		super(props);
		this.state = {listStatus: false};
		this.toggleListStatus = this.toggleListStatus.bind(this);
		this.isCurrentNotebook = this.isCurrentNotebook.bind(this);
		this.hideList = this.hideList.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		this.props.fetchAllNotebooks();
	}

	toggleListStatus(){
		this.setState({listStatus: !this.state.listStatus});
	}

	hideList(){
		this.setState({listStatus: false});
	}

	onChange(e){
		// console.log(e.target, "e.target");
		// console.log(e.target.getAttribute('value'), "e.target.getAttribute('value')");
		let notebook = e.target.getAttribute('value');
		this.hideList();
		this.props.updateCurrentNotebook(notebook);
	}

	isCurrentNotebook(notebook){
		return notebook.id === this.props.currentNotebook.id;
	}


	render(){

		let {notebooks, currentNotebook} = this.props;
		let listName = 'hidden';
		if (this.state.listStatus){
			listName = 'drop-down-list-show';
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
				<ul className = {listName}>
					<li key = {0} className = "notebook-list-header">
						<div> Notebook </div>
					</li>
					{notebooks.map(notebook => {
						let liClass = "notebook-item";
						if(this.isCurrentNotebook(notebook)) {
							liClass += "-current";
						}
						return(
							<li className = {liClass}
								key = {notebook.id}
								onClick = {this.onChange}
							 >
								<div value = {notebook.id}> 
									{notebook.title} 
								</div>
							</li>
						);
					})}
				</ul>	
			</div>	

		);

	}
}

export default NoteDropDownList;
