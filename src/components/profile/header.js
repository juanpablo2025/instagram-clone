import {useState,useEffect,useContext} from 'react';
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton';
import useUser from '../../hooks/use-user';
import {isUserFollowingPropfile,toggleFollow} from '../../services/firebase';
import UserContext from '../../context/user';
import {DEFAULT_IMAGE_PATH} from '../../constant/paths';

export default function Header({
	photosCount,
	followerCount,
	setFollowerCount,
	profile:{
	docId: profileDocId,
	userId: profileUserId,
	fullName,
	followers,
	following,
	username: profileUsername
	}
}){
	return (
	<div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
		<div className="container flex justify-center items-center">
			{profileUsername ? (
				<img 
				className="rounded-full h-40 w40 flex"
				alt={`${fullName}profile picture`}
				src={`/images/avatars/${profileUsername}.jpg`}
				onError={(e)=>{
					e.target.src =DEFAULT_IMAGE_PATH;
				}}
				/>
			):(
				<Skeleton circle height={150} width={150} count={1}/>
			)}
		</div>
	</div>)
}