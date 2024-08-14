import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'San Francisco, CA',
		logo: Assets.Gator,
		name: '',
		organization: 'San Francisco State University',
		period: "August 2022 - May 2026",
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Data Structures', 'Calc1/2', 'Web Development', 'Discrete Math', 'Machine  Structures', 'Programming Methodology', 'Linear Algebra']
	},
];

export const title = 'Education';
