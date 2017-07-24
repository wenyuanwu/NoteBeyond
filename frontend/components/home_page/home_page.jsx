import React from 'react';
import NoteIndexContainer from '../note_index/note_index_container';
import NoteEditContainer from '../note_edit/note_edit_container';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

	constructor(props) {
    	super(props);
    	this.handleLogOut = this.handleLogOut.bind(this);
	}

	handleLogOut(e){
		e.preventDefault();
		this.props.resetNotes();
		this.props.logout();
	}

	render(){

		let {currentUser, logout} = this.props;

		const personalGreeting = (currentUser) => (
		    <hgroup className="header-group">
		      <button className="logout-button" onClick={this.handleLogOut}>
		      	<img src="http://res.cloudinary.com/dltydzsmu/image/upload/v1500915662/logout_tgqm2s.png"/>
		      </button>
		    </hgroup>);

		return(

			<div className="wrapper">
				<div className="homePage">
					<div className="navBar">
						<img src="http://res.cloudinary.com/dltydzsmu/image/upload/v1500915656/folder_icon_snyvtd.png" />
						<div className="groupOne">
							<Link to={`/createnote`} >
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABvElEQVR42s1YzUrDQBDeg5c+QG89qceNzyDoK+Qm3c2t72TPHnwALzXZi0gRRHoK+gqi9GihRGc2NiE0pJPsJp2FgdBsZr7O/4wQLU+wiE5lrGdBrO6AVjJRn0Gif5DsM/yG7+wduCt6OebyRD5Ob0DgE1AGwn8phHftN/At8vCCJVhMr4NEpVQQDZQir85AJvfhCP7dHBhlHsDsCDU2nzyHo1Zgzh/CMfjAi0cgVVMCb5RBB4Pq7QlM6V86PQgKVdmnZuo01Wg+adTtUGAKUCCzIZq8OjDZ0S8SdbWXZzyFdueUUMlTmLhcGL6tPyw5mQ6TZwEIsqkLs91x1NKyrE0tykGPgDIZqzNhi6CjD3gChGlgJmzVZgIIsQiIrhUbQIBF/PczTADpLzTZhhraXQ85JcRqOwig1/U7FdCGlckQCz+nZhf20nBLjNxKR15cNZ/i6qv9IIc2pf3IGzTNp0GzbYg5XguLsuub/Hww5NHkH2UMMgfGoOEHxYg6vUZjRN/vKE0EUzEfl2VDTfT5WccYh3VM3cIKs2lLjeHdpdeF1V5qgHpTrPRs66K+QegWm6u8typXekVtanH+ABqtwq/7bw5UAAAAAElFTkSuQmCC" />
							</Link>
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACt0lEQVR42s1Yv0/bQBT2wMIfwMbUdrRp/4NWaifEmg1xSSemqktL+De6tAhmJNi6dKGxJQIk6tSQoizQUImqAwlSIio1KOT6vjM4SnHt94wNOenkxPfu7vN73/txZ1nC5mwVHtil/KJTUuvUa7arTh03/wfd/KZ3GDMyJGtl0rxnE/bnhXnacIf6gDbXnA5ZM4fmYo1UsDhbCy8cVzW4ICJ6A2slBjK9mZukr1ujhQYpgLnu0Nja9F5uUgTm0afcFHHgS4pARk1Ja2MPPhioNyMwQ37lG7GgoMosNROmqUjz2Z5avSswASjaM8KbUiUwm+gzrnp+I85wXfuJ91IXD1Z0ubWvz3pd3R9cmme5VTPvMZ4kJIzEKQQuzsS5ypJudH9otOPfv/TmiatXmh/NE//RMD5XKcpNh+AZAKJoygHTJk20eh39ev9dqAzeYxxyCUBVh7kpJh3ADPhybDZbeRu5MMYhB3mh+QZ2ST20TBKMEQY30P6nmTBNoWGeMAwsWiZrxwiCwOCIZHHIY57IbITFIu+qxQnCi0BcyeKQxzwZj1TNuqpnIgXh2h/ImySLQ/6S5gmJ3YbJemOjoZLqswAl4VCT5LdbX6WAeiyTJfWyN9/eCysAdcoidZI4VO8c6cduQU5qjtubSF0tGk5wIjXa4fmJflp+JXd724sPjMP0UQxyGTiyQcSFN+HZvMpl0MzR+c9EoPzAyEgd/5pv+TrbX3SNa0Nz25TtwRmYCSAARgjKTx1+cs3vpF3nJABVFZcftwFV73znlx9+gZZNYQ9QALPbrvMLNFOGePdXwmLv8CLfPxiOR5F/L8cgL+YYdPcHxQL39FqYAvpsj9JMMCPmG5fLhhDvS+c6xrvFdUzYhRWiqVBjkK2memF1IzRQvgmu9Ezpos5o0z6KK7+2Gl7pBblJ0P4Cl2zh4u7sM1MAAAAASUVORK5CYII=" />
						</div>
						<div className="groupTwo">
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAB90lEQVR42s2YvU7DMBCAPbD0Abp1AsYEIfECSPAK3VCdIiFl4lUQI6Jzh24sLKUxA0IVW1myIPEAFYiRSFXCndPmh0axndqtLZ1UtWf76519dz5CFIc77u87E893J3QIMnMCOncD7xeFf4bv8DeuA7rEyGCne85T7wI2fAGJYfNERlCXz4G5uIYWFnfcO3cDGspC1EiIazUG6Yy6Lfh3A1go1gCzErTYoPPabSnBHD5223AG3jSClF0Ja+Me8jBoXkMw+fnyQiEUmtKkZaosVes+h9H7bcFkULBnzW3SeoClD/pRQM/W4ozoal+/3ybz6CdRHTgH54pCQilOYeAS/ZMmMEUooesweGZAEE1FEzYdEq6b5rlJIh1sASh2JvSA8CQocfj+j5Pnq1ppAIRhwCc8azcAMmChBFkI3K6ZNUDAQpb1jDKQbv2lfKHLIotctrANKLLKZchi36G27to7rFlgrNO5+Rglx+yySX3kG0kdCFMcd58P8qkjTa6e1uRa1JeEyZOrifJjBaQAUy4/0gLN01agob4KzFqBxssQtrsSFveuLvLTh6EdRf5OnkFM8Aza/kOxL/t67beR3uxTWhKm5D5bmg0Vt09PO4Zt0I6palhhNFW0GOpOtTas1kID5JuspcdLF/oNmy6wuEprq7yll+UmhfEH20L3SIG6FE8AAAAASUVORK5CYII=" />
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAB90lEQVR42s2YvU7DMBCAPbD0Abp1AsaEZ0CCV8gGcbJ14ilgYWOmcwYegKUkWRCqEAxlycAjVCBGIlUtdwlJiBLic+KktnRS1Prns+98dz7GJJs5d/cN35maPvdAlkbAV2bgfKMk3/Ab/pf0gb6slxYe7xkP9hks+AiygcW3FMG+yRgYi3MoYTHn9qkZ8IgK0SARztUaZHJnjWB3M5hoowAmEzyx2eTJGknBHN5bY7CBZ4UgZVXC3LgGHQaPtyeYwr6cSAiFR9nnydSdVKP6jJDfDgWTQ8GaDbdJqQGTDf0o4CcVPyO62ln7+01pq/hre/F2I3QJJT+Fjku0k7ZAGZRQdeg8cyDwpn0CZeMEsihiEyEcDAC0MXx+wJIgSDC+/4AoY4hA6AamLInamgAhC4PbtdQGCFjYbz6z1cCGUD5QZbE2QD5f6wYUa6UyZOls1GptCIy667VXrDIPUg45x9imUWJZ4RglQ0cbGEK0L0JHGlwdUnA9f7lslfNcv3v04EpNP3CnbYDs1yv59CNN0JoTezx2nLgnlUWVh6QZ7i6FxbXrk/z0YahHkr+TZ1AoeAYN/1B0qa9Xd4z0/T6liTAl9elSbKi5fWrKMWGHckxdwQq9qeSJYd+F0oJVxTVAvMlLeknqwj9h0TUmV2luVZT08tgk0X4ASkfZj4ss8JEAAAAASUVORK5CYII=" />
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACXUlEQVR42s1YvU7DQAzOwMIDsDEBYwMbrEjwCGRDXDLRCcELsLCyMMMCAwMPgECQRIiAqkr8lIGIDTogIBQBC42oetgX2lKatr4krWLJ0im1z1/tO/+cokiSemSMZEw9q5psF7iQsZinWnoZWazhG/4mZEBW6QnZ0wOZ44V5MOgAV8E4pzDKCh3QxT0SwaIeLcyqFnOpIDqwi3tFBjK8pw3Cv9uCjaoJgKkxemxr+FwblAIztq8NwRnIJwikOZSwN9qgg0H39ghM43zpbldQ6Moonhm3DMFRPNUxfBmbbcpuuni9zkv+h2BcS4MCmx1uk9wBXrvb5pVqhdfoG9b4Tfagj1tspiXPyFztCQjPTvGQt6Od4oGQkUkJTXkKExdVeepkkdveFe9GlnfJJ0GWHDpMnnVAkE0pSrNnK9z9fGgybL5c8GlnSTCu/9Lt5z2fcZapoHKN2kQoB1p+lT+X31o8gUBqMrj+T0/lEp8DXVLSNNmoIoog4R+EgaEAQnr8eqWmgawiqjZBuB2JkJ2Gh+wvkcIGWBS4XYU4gKhEO0esoPz2MykBpJcwZH5qAJmskjZAfqSQUZOdrA5iSd+hjnvtEw7ZLrQctMTYl5CJxEgsHX3wUFA6guKqOykAlJNqPzz/PTIY1JVqP4IGrXNjv3SzEQkU6qCuVIMm2hBbvoVNalZD2+FNfjAY9hVQ2yY/zhgUHUyXMaj/g6JBnV6NIUTf21GaCKYpfGl5bAi5fck8x9gxnmPCHqwwm0p6DGVziT5YtaQGqDf1Jz3RurA3MFrB5irorRpPevXaJEE/gW31vBzI7JIAAAAASUVORK5CYII=" />
						</div>

						<div className="groupThree">
							<h2 className="header-name">Hi, {currentUser.username}!</h2>
			       			{personalGreeting(currentUser, logout)}
			    		</div>
		    		</div>  

		    		<div className="noteIndex">
						<NoteIndexContainer />
		    		</div>  	

		    		<div className="noteShow">
						<NoteEditContainer />
		    		</div>  	
	    		</div>
	    	</div>	
			);
	}
}

export default HomePage; 

