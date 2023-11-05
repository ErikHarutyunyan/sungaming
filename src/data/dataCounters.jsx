import { v4 as uuidv4 } from 'uuid';

export const counterActiveData = [
	{
		id: uuidv4(),
		title: 'Active Partners',
		count: 500,
		duration: 5,
		symbol: '+',
	},
	{
		id: uuidv4(),
		title: 'Active Players/Monthly',
		count: 200,
		duration: 5,
		symbol: 'K+',
	},
	{
		id: uuidv4(),
		title: 'Transactions/Monthly',
		count: 30,
		duration: 5,
		symbol: 'M+',
	},
];


export const counterShareData = [
	{
		id: uuidv4(),
		title: 'VOLUME',
		count: 5052,
		duration: 5,
		symbol: '+',
	},
	{
		id: uuidv4(),
		title: 'HIGH',
		count: 600,
		duration: 5,
		symbol: '+',
	},
	{
		id: uuidv4(),
		title: 'LOW',
		count: 1000,
		duration: 5,
		symbol: '+',
	},
	{
		id: uuidv4(),
		title: 'OPEN',
		count: 1106,
		duration: 5,
		symbol: '+',
	},
];
