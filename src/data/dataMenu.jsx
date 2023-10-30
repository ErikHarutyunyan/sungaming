import { v4 as uuidv4 } from 'uuid';
import {
	ABOUT,
	CAREERS,
	CONTACT,
	GAMES,
	HOME,
	NEWS,
	PRIVACY,
	SERVICES,
} from '../router/route-path';

export const menuLinks = [
	{
		id: uuidv4(),
		url: HOME,
		text: 'Home',
	},
	{
		id: uuidv4(),
		url: GAMES,
		text: 'Games',
	},
	{
		id: uuidv4(),
		url: SERVICES,
		text: 'Services',
	},
	{
		id: uuidv4(),
		url: ABOUT,
		text: 'About Us',
	},
	{
		id: uuidv4(),
		url: NEWS,
		text: 'News',
	},
	{
		id: uuidv4(),
		url: CONTACT,
		text: 'Contact',
	},
	{
		id: uuidv4(),
		url: PRIVACY,
		text: 'Privacy',
		mobile: true,
	},
	{
		id: uuidv4(),
		url: CAREERS,
		text: 'Careers',
		mobile: true,
	},
];
