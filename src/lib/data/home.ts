import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Tavasya';

export const lastName = 'Ganpati';

export const description =
	'Tavasya is a Computer Science student at San Francisco State University, honored on the Dean’s List. He currently interns at Syncopation AI, where he develops AI models aimed at improving elderly care. Passionate about education, Tavasya also teaches coding and is committed to using technology to make a positive impact in education.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Tavasya' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/tavasyaganpati/'
	},

	{
		platform: Platform.Email,
		link: 'tavasyag@gmail.com'
	},


];

export const skills = getSkills('py', 'js', 'css', 'html', 'reactjs', 'ts', 'java', 'nodejs', 'pandas', "pytorch", 'opencv', 'langchain', 'numpy');
