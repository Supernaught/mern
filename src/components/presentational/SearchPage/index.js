import React, { Component } from 'react';

import FilterBox from '../FilterBox';
import UserList from '../UserList';
import Header from '../../containers/HeaderContainer';

import './index.css';

import { StickyContainer } from 'react-sticky';

export default class SearchPage extends Component {

	componentDidMount() {
		// console.log("QUERY ",this.props.location.query);
		// console.log("ROUTER ",this.props.location);
		// console.log("CONTAINER PROPS ",this.props)
		window.scrollTo(0, 0);
		// console.log("Component Did Mount",this.props.location);
	}

	componentWillReceiveProps() {
		// console.log("Recieve Props",this.props.location);
	}

	handleNewQuery(query) {
		console.log("THIS IS THE QUERY ",query);
	}

	render() {
		const searchDisplay = (this.props.location.query.search === undefined) 
							? "Employees" 
							: <span className="content-head__display-input">
								{this.props.location.query.search}
							  </span>
		return (
			<div className="content page">
				<Header noSearch={true} />
				<div className="content-head">
					<div className="content__wrapper content__wrapper--title">
						<h1 className="content-head__title">
							Find {searchDisplay}
						</h1>
					</div>
				</div>
				<StickyContainer className="search-page content__wrapper">
					<FilterBox {...this.props} handleQuery={this.handleNewQuery.bind(this)} />
					<div className="search-page__section">
						<UserList result={this.props.result} />
					</div>
				</StickyContainer>
			</div>
			)
	}
}