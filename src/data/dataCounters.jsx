import { v4 as uuidv4 } from 'uuid';

export const counterData = [
	{
		id: uuidv4(),
		title: 'Active Partners',
		count: 500,
		duration: 5,
		symbhol: '+',
	},
	{
		id: uuidv4(),
		title: 'Active Players/Monthly',
		count: 200,
		duration: 5,
		symbhol: 'K+',
	},
	{
		id: uuidv4(),
		title: 'Transactions/Monthly',
		count: 30,
		duration: 5,
		symbhol: 'M+',
	},
];
