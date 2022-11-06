import BadgeCard from './BadgeCard';

const UserProfileCard = ({
	badges,
	isAuthenticated,
	handleLogin,
	handleViewBtnClick,
}) => {
	return (
		<figure class='snip1336'>
			<img
				src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
				alt='sample87'
			/>
			<figcaption>
				<img
					src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg'
					alt='profile-sample4'
					class='profile'
				/>
				<h2>
					Hans Down<span>Engineer</span>
				</h2>
				<p>
					I'm looking for something that can deliver a 50-pound
					payload of snow on a small feminine target. Can you suggest
					something? Hello...?{' '}
				</p>
				<a href='#' class='follow'>
					Follow
				</a>
				<a href='#' class='info'>
					More Info
				</a>
			</figcaption>
		</figure>
	);
};
export default UserProfileCard;
