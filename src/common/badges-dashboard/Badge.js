import { useState } from 'react';
import BadgeCard from './BadgeCard';
import BadgeDetails from './BadgeDetails';
import ClaimedBadges from './ClaimedBadges';
import NotClaimedBadges from './NotClaimedBadges';
import OverView from './OverView';

const Badge = ({
	badge,
	mask,
	selectionChanged,
	imageonly,
	readonly = false,
	showtext = true,
}) => {
	return (
		<div className='hover:group-hover'>
			{readonly ? (
				<div className='py-8 flex justify-center items-center flex-column lg:flex-col'>
					<div
						className='bg-cover bg-center h-32 w-32 lg:h-48 lg:w-48 group-hover:scale-125 ease-in duration-300'
						style={{
							backgroundImage: `url(${badge.image})`,
						}}
					/>
				</div>
			) : (
				<div class='p-4 w-full'>
					<div>
						<div class='relative group'>
							<div>
								<div class='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
								<button
									class='relative px-2 py-4 bg-gray-800 rounded-lg leading-none flex items-center divide-x divide-gray-600 w-full hover:bg-black'
									onClick={() => selectionChanged()}>
									<div class='flex flex-row lg:flex-col items-center space-x-5  w-full justify-center'>
										<div className='py-8 flex justify-center items-center'>
											<div
												className='bg-cover bg-center h-28 w-28 group-hover:scale-125 ease-in duration-300'
												style={{
													backgroundImage: `url(${badge.image})`,
												}}
											/>
										</div>

										{showtext && (
											<div class='pr-6 text-gray-100 text-sm h-8'>
												{badge.level}
											</div>
										)}
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default Badge;
