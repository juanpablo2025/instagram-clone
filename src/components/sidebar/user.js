import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import{DEFAULT_IMAGE_PATH} from '../../contants/path';

export default function user({username,fullname}){
	return !username || !fullName ? (
		<skeleton count={1} height={61}/>
	):(
		<Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-6 items-center">
			<div className="flex items-center justify-between col-span-1">
				<img
				className="rounded-full w-16 flex mr-3"
				
				src={`/images/avatars/${username}.jpg`}
				alt=""
				onError={(e)=>{
					e.target.src = DEFAULT_IMAGE_PATH;
				}}
				/>
			</div>

		</Link>
	)
}