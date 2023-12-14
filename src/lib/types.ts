export type Categories = 'Dopamine' | 'Motivation' | 'Mental Health' | 'Addiction';

export type Post = {
	title: string;
	image: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
