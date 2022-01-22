export function seedDatabase(firebase){
	const users = [
		{
			userId:'',
			username:'karl',
			fullNAme: 'karl hadwen',
			emailAdress:'karlhadwen@gmail.com',
			following:['2'],
			followers: ['','',''],
			dateCreated: Date.now()
			
		},
		{
			userId:'',
			username:'karl',
			fullNAme: 'karl hadwen',
			emailAdress:'karlhadwen@gmail.com',
			following:['2'],
			followers: ['','',''],
			dateCreated: Date.now()
			
		},
		{
			userId:'',
			username:'karl',
			fullNAme: 'karl hadwen',
			emailAdress:'karlhadwen@gmail.com',
			following:['2'],
			followers: ['','',''],
			dateCreated: Date.now()
			
		},
		{
			userId:'',
			username:'karl',
			fullNAme: 'karl hadwen',
			emailAdress:'karlhadwen@gmail.com',
			following:['2'],
			followers: ['','',''],
			dateCreated: Date.now()
			
		},
		
	];


	for(let i =1;i<5;++i){
		firebase
		.firestore()
		.colletion ('photos')
		.add({
			photoId: i,
			userId: '2',
			imageSrc: `/images/users/raphael/${i}.jpg`,
			caption: 'Saint George and the Dragon',
			likes:[],
			comments:[
				{
					displayName:'dali',
					comment: 'Love this place , looks like my animal farm!'
				},
				{
					displayName: 'orwell',
					comment:'Would you min d if I used this picture'
				}
			],
			userLatige: '40.7128º',
			userLongitude: '74.0060',
			dateCreated: Date.now()
		});
	}
}