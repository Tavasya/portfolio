import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [

	{
		slug: 'syncopation',
		company: 'Syncopation AI',
		description: 'Served as an AI/ML Intern at Syncopation AI. During this time, I developed AI models designed for 24/7 elderly care assistance, focusing on detecting preconditions and improving response times. I also created computer vision applications utilizing OpenCV, YOLO, and Roboflow, which were implemented via Nvidia edge devices. My work involved extensive use of Python, LangChain, and open-source models for programming and orchestrating the models. Additionally, my custom-trained vision models using tools such as Hugging Face, UNSLOTH, PEFT, LoRA, and QLoRA.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Mountain View, CA',
		period: "June 2024 - August 2024",
		skills: getSkills('py', 'langchain'),
		name: 'AI/ML Intern',
		color: 'green',
		links: [],
		logo: Assets.SyncopationAI,
		shortDescription: 'Developed machine learning models for elder care.'
	},
	{
		slug: 'thecoderschool',
		company: 'TheCoderSchool',
		description: 'Taught dozens of one-on-one lessons to K-12 students in Python, Java, and Scratch. Led an advanced, hands-on Python programming curriculum, integrating Raspberry Pi applications to enhance interactive learning and real-world problem-solving. Developed and instructed a Java programming course, emphasizing algorithmic thinking and software development principles.',
		contract: ContractType.PartTime,
		type: 'Teaching',
		location: 'San Francisco, CA',
		period: "March 2024 - May 2024",
		skills: getSkills('svelte', 'py', 'java', 'js'),
		name: 'Coding Instructor',
		color: 'blue',
		links: [],
		logo: Assets.TheCoderSchool,
		shortDescription: 'Teaching the next generation in python, java, javascript and more!.'
	},

	
	{
		slug: 'sfsu',
		company: 'San Francisco State University',
		description: 'As a Project Developer at San Francisco State University, I collaborated with Professor Jonathon Jacobson and a team of five to develop an innovative Discrete Math educational tool aimed at enhancing learning for college students. I designed and implemented interactive questions and problem sets using Python, leveraging Flask for the backend infrastructure to ensure a seamless user experience. I conducted user testing and gathered feedback from 35 undergraduate students to refine and improve the tools effectiveness and usability. Additionally, I integrated advanced data analytics to track student progress and adaptively modify content to better meet learning objectives.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'San Francisco, cA',
		period: "March 2024 - May 2024",
		skills: getSkills('py'),
		name: 'Project Developer',
		color: 'purple',
		links: [],
		logo: Assets.Gator,
		shortDescription: 'Created applications to help undergrad students pass discrete math.'
	},
		
	{
		slug: 'codeninjas',
		company: 'CodeNinjas',
		description: 'As a Software Intern/Head Instructor at CodeNinjas, I instructed over 100 students in JavaScript, Java, Python, Lua, Scratch, and Unity. I developed over 20 different Minecraft mods and 10 Roblox games using Lua and MCreator. Additionally, I led 5-week-long intensive camps to teach students specific fields such as Lego Robotics with Python, 3D Printing, and MakeyMakey.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Los Angeles, CA',
		period: "June 2023 - August 2023",
		skills: getSkills('js','py'),
		name: 'Software Intern',
		color: 'tan',
		links: [],
		logo: Assets.Ninja,
		shortDescription: 'Developed roblox servers, minecraft mods, and programming courses for students.'
	},
	{
		slug: 'part-time',
		company: 'CodeNinjas',
		description: 'As a Software Intern/Head Instructor at CodeNinjas, I instructed over 100 students in JavaScript, Java, Python, Lua, Scratch, and Unity. I developed over 20 different Minecraft mods and 10 Roblox games using Lua and MCreator. Additionally, I led 5-week-long intensive camps to teach students specific fields such as Lego Robotics with Python, 3D Printing, and MakeyMakey..',
		contract: ContractType.PartTime,
		type: 'Teaching',
		location: 'Los Angeles, CA',
		period: "December 2021 - July 2022",
		skills: getSkills('js','py'),
		name: 'Head Coding Instructor',
		color: 'tan',
		links: [],
		logo: Assets.Ninja,
		shortDescription: 'Taught over 100 students in various computer science disciplines.'
	},
	


	
	

];

export const title = 'Experience';
