import {useState,useContext,useEffect}from 'react';
import {Link,useHistory}from 'react-router-dom';
import FirebaseContext from '../context/routes';
import {doesUsernameExist} from '../services/firebase';
import * as ROUTES from '../constants/routes';

export default function SignUp(){
	const history=useHistory();
	const{firebase}=useContext(FirebaseContext);

	const[username,setUsername]=useState('');
	const[fullName,setFullname]=useStatae('');
	const [emailAddress,setEmailAddress]=useState('');
	const[password,setPassword]=useState('');

	 
}


