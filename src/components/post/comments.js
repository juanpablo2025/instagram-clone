import {useState} from 'react';
import PropTypes from 'prop-types';
import {formatDistance} from 'date-fns';
import{Link} from 'react-router-dom';
import AddComment from './add-comment';


export default function Comments({docId,comments: allComments,posted,commentInput}){
	const [comments, setComments] = useState(allComments);
	const [commentsSlice,setCommentsSlice]= useState(3);


	const showNextCommets = () => {
		setCommentsSlice(commentsSlice + 3);
	};

	return(
	<>	
		<div className="p-4 pt-1 pb-4">
			{comments.slice(0,commentsSlice).map((item)=>(
				<p key={`${item.comment}-${item.displayName}`}className= "mb-1">
					<Link to ={`/p/${item.displayName}`}>
						<span className="mr-1 font-bold">{item.displayName}</span>
						
					</Link>
					<span className = "mr-1 font-bold">{item.displayName}</span>
					
				</p>
			))}
		</div>


	
	
	</>	
	)

}
