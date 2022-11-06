import { useAuthenticationStatus, useUserData } from '@nhost/react';
import { NHOST } from 'common/const';
import {
	getAllBadgesByUserId,
	getUserByEmail,
} from 'common/services/badges';
import { slug2Email } from 'common/services/string';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Badge from './Badge';
import BadgeDetails from './BadgeDetails';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import PageNotFound from 'common/404/PageNotFound';

const BadgesDashboard = () => {
	const { isAuthenticated, isLoading } = useAuthenticationStatus();
	const param = useLocation();
	const user = useUserData();
	const [allBadges, setAllBadges] = useState([]);
	const [notClaimedBadges, setNotClaimedBadges] = useState([]);
	const [userInfo, setUserInfo] = useState({});
	const [itsMe, setItsMe] = useState(false);
	const [selectedBadge, setSelectedBadge] = useState();
	const [isUiLoading, setIsUiLoading] = useState(true);

	const handleLogin = () => {
		window.location = NHOST.AUTH_URL(`${window.location.origin}/me/badges`);
	};

	useEffect(() => {
		async function getData() {
			const email = param.pathname.split('/')[1];
			if (!isAuthenticated && email === 'me') {
				handleLogin();
			}

			const ui = await getUserByEmail(
				email === 'me' ? user.email : slug2Email(email)
			);

			setUserInfo(ui[0]);
			if (user && user.email) {
				setItsMe(email === 'me' || user.email === slug2Email(email));
			}
			const allBadges = await getAllBadgesByUserId(await ui[0]?.id);
			setAllBadges(allBadges);
			// setAllBadges(allBadges.filter((b) => b.claimed === true));
			setNotClaimedBadges(allBadges.filter((b) => b.claimed === false));
			setIsUiLoading(await allBadges.length < 0);
		}
		if (!isLoading) {
			getData();
		}
	}, [isLoading, param.pathname]);

	const onBadgeClicked = (badge) => {
		setSelectedBadge(badge);
	};


	const tweetIt = (level,) => {
		const URL = window.location.href.replace("me", user.email);
		const msg = `Hurry !! \nI have earned "${level}" badge from ReactPlay\n`;
		const hasTags = [
			"#reactplay\n"
		];
		const tags = encodeURIComponent(hasTags.join(","));
		return `https://twitter.com/intent/tweet?url=${URL}&text=${encodeURIComponent(
			msg
		)}${tags}`;
	}

	const postItOnlinkedIn = (level) => {
		const URL = encodeURIComponent(window.location.href.replace("me", user.email));

		return `https://www.linkedin.com/sharing/share-offsite/?url=${URL}`;
	}

	return (
		<div
			className='font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover'
			style={{
				background: 'linear-gradient(180deg,#010426,#4c5b5e)',
			}}>
			<div className='flex items-center h-auto justify-center flex-wrap mx-auto '>
				{userInfo ? (
					<div
						id='profile'
						className='w-full rounded-lg shadow-2xl my-32 opacity-75 mx-6 bg-gray-900  p-8'>
						<div className='p-4 md:p-12 text-center'>
							<div
								className='block  rounded-full shadow-xl mx-auto -mt-16 h-16 w-16 bg-cover bg-center md:h-32 md:w-32 md:-mt-32'
								style={{
									backgroundImage: `url(${userInfo.avatarUrl})`,
								}}></div>

							<h1 className='text-3xl font-bold pt-8 text-gray-100'>
								{userInfo.displayName}
							</h1>
							<p className='pt-4 flex items-center justify-center text-xs text-grey-600  text-gray-100'>
								{userInfo.email}
							</p>
							<div className='mx-auto w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
							<div className='pt-4 pb-8'>
								<p className='pt-2 text-sm  text-gray-100'>
									Badges
								</p>
							</div>
							{
								(!isUiLoading) && (allBadges.length === 0) && (
									(
										<div className=" self-center">
											<h2 className=" text-white">Seems no badges earned  yet !!</h2>
										</div>
									)
								)
							}
							<div className='mx-auto'>
								<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>

									{allBadges.map((badge, bi) => {
										return (
											<div>
												<Badge
													badge={badge.badge_id_map}
													key={bi}
													selectionChanged={() =>
														onBadgeClicked(
															badge.badge_id_map
														)
													}
												/>
												{itsMe ? (
													<div className="h-12  rounded-lg shadow dark:bg-gray-700 bg-gradient-to-b from-[#010426] to-[#4c5b5e] flex justify-around items-center ">
														<a href={tweetIt(badge.badge_id_map.level)} rel="noreferrer" target="_blank">
															<BsTwitter className="text-white  hover:text-sky-500  h-8 w-8" />
														</a>
														<a href={postItOnlinkedIn(badge.badge_id_map.level)} rel="noreferrer" target="_blank">
															<BsLinkedin className="text-white hover:text-sky-500 h-8 w-8" />
														</a>
													</div>
												) :  // Will use this space for badge claiming later
													null
												}
											</div>

										);
									})}
								</div>
							</div>
						</div>
						{selectedBadge && (
							<BadgeDetails
								badge={selectedBadge}
								onClose={() => setSelectedBadge()}
							/>
						)}
					</div>
				) : (
					<PageNotFound msg={"No user found"} />
				)}
			</div>
		</div>
	);
};
export default BadgesDashboard;
