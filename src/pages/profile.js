import { useParams } from "react-router-dom";
import {useState,useEffect}from 'react';
import {getUserByUsername}from '../services/firebase';
import * as ROUTES from '../contants/routes';
import Header from '../components/Header';
import UserProfile from '../compoenents/profile';

export default function Profile(){
	const{username}=useParams();
	const[user,setUser]=useState(null);
	const history = useHistory();

	useEffect(()=>{
		async function chackeduserExists(){
			const{user}= await getUserByUsername(username);
			if(user?.userid){
				setUser(user);

			}else{
				history.push(ROUTES.NOT_FOUND);
			}
		}
		checkUserExists();
	},[username,history]);

	return user?.username ? (
		<div className="bg-gray-background">
			<Header/>
			<div className="mx-auto max-w-screen-lg">
				<UserProfile user={user}/>
				</div>
		</div>
	) :null;
}