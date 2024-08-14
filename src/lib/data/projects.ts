import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'mquizzai',
		color: '#5e95e3',
		description:
			'MyQuizzAI is a full-stack web application designed to generate quizzes from uploaded documents, developed using TypeScript. It offers seamless Google sign-in through Next-auth and supports payment and subscription services via Stripe. The platform boasts a modern, responsive user interface crafted with Shadcn UI, while data tables are efficiently managed using Tanstack. AI-driven quiz generation is powered by the integration of OpenAI and Langchain, with Drizzle utilized for ORM and PostgreSQL hosted on Supabase for robust database management. Deployed on Vercel, MyQuizzAI attracted over 20 active users within its first month of operation.',
		shortDescription:
			'Make your own quizzes with AI!',
		links: [{ to: 'https://github.com/Tavasya/MyQuizAI', label: 'GitHub' }],
		logo: Assets.MyQuizzAiLogo,
		name: 'MyQuizzAi',
		period: "August 2024",
		skills: getSkills('ts', 'js', 'nodejs', 'html', 'css'),
		type: ''
	},
	{
		slug: 'myreps',
		color: '#ff3e00',
		description:
			'Rep tracker is a project which utilizes machine learing algorithms to classify certain barbell externeces and count repitions based on a MetaMotion watch which was used to gather gyroscope and accelerometer data. Developed with Python, Pandas, NumPy, Matplotlib, Seaborn, SciPy, and Scikit-learn, the project focused on processing this raw sensor data. Noise reduction was achieved through LowPassFilter, and dimensionality reduction was implemented using Principal Component Analysis (PCA). The project handled missing data and outliers using methods like Interquartile Range (IQR), Chauvenet’s Criterion, and Local Outlier Factor (LOF) to ensure clean datasets. Features were engineered through Temporal Abstraction, such as rolling averages, and Frequency Abstraction, including Fourier Transformation, to improve model accuracy. Forward feature selection identified the most relevant features for the models. Various machine learning models, including Random Forests, K-Nearest Neighbors (KNN), Decision Trees, Naive Bayes, and Feedforward Neural Networks, were trained and evaluated using GridSearchCV for hyperparameter tuning and k-fold cross-validation. The project achieved high accuracy in exercise classification, with particular attention to minimizing misclassification between similar exercises. Additionally, sensor data was visualized using Matplotlib and Seaborn to analyze patterns, optimize model parameters, and generate detailed visual reports.',
		shortDescription:
			'Classify certian barbell excerises and count repitions based on gyroscope and accelerometer data.',
		links: [{ to: 'https://github.com/Tavasya/MyReps', label: 'GitHub' }],
		logo: Assets.Barbell,
		name: 'Rep Tracker',
		period: "May 2024",
		skills: getSkills('py', 'pandas', 'numpy', 'skl', 'mpl'),
		type: 'Website Template',
	
	}
];

export const title = 'Projects';
