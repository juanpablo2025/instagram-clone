import {useContext} from 'react';
import Skeleton from 'react-loading-skeleton';
import LoggedInUserContext from "../context/logged-in-user";
import usePhotos from '../hooks/use-photos';
import Post from './post';

export default function Timeline(){
	const {user} = useContext(LoggedInUserContext);
	const {user: {following}={}}=useContext(
	

	LoggeddInUserContext
	);
	const {photos}=usePhotos(user);

	return(
		<div className="container col-span-2">
		{following===undefinied?(
			<Skeleton count={2}width={640} height={500} className="mb-5"/>

		): following.lenght===0?(
			<p className="flex jusrify-center font-bold">Follow other people to se photos</p>


		):photos?(
			photos.map((content)=><Post key={content.docId} content={contect}/>)
			):null }	
		</div>
		);
}