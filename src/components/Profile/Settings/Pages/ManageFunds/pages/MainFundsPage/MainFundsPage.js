import React from "react";
import {Highlight, StyledHeader, StyledText} from "../../../styles";
import styled from "styled-components";
import ROUTES from "../../../../../../../routes/routes";
import ActionButtons from "../../../../ActionButtons";
import history from "../../../../../../../helpers/history";
import {progressAction} from "../../../../../../../store/actions/actions";
import {connect} from "react-redux";

const StyledFundsContainer = styled.div`

`;

const MainFundsPage = ({account, setProgress}) => {

	const goNext = () => {
		if(account.ProfileProgress < 90) {
			setProgress(account.Username, 90);
		}
		history.push(ROUTES.PROFILE_PAGES.SETTINGS_PAGES.LEGAL);
	};

	return (
		<div className="ProfilePageContainer">
			<div className="row">
				<div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
					<StyledHeader>Manage Funds and Accounts</StyledHeader>
					<StyledText>
						<Highlight>Define your user profiles and assign them accounts. </Highlight>
						‘User Profile’ refers to the type of user action by
						which you engage in the platform. This relates to whether you are acting as an Investor, Developer or
						Receiver, and which Entity is being used for each one.
					</StyledText>
					<StyledFundsContainer>

					</StyledFundsContainer>
					<ActionButtons
						cancelButton={{
							url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES,
							label: 'back'
						}}
						confirmButton={{
							action: goNext,
							label: 'next'
						}}
					/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	account: state.profile.user.items,
});

const mapDispatchToProps = dispatch => ({
	setProgress: (username, progress) => dispatch(progressAction(username, progress)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainFundsPage);
