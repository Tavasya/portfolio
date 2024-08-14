import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import type { Item, Skill } from '$lib/types';

dayjs.extend(duration);



export const useImage = (url: string, base: string): string => `${base}${url}`;

export const useTitle = (title: string, suffix: string) => `${title} | ${suffix}`;

export function getTimeDiff(date1: Date, date2 = new Date(Date.now() + 1000 * 60 * 60 * 24)) {
	const d1 = dayjs(date1);
	const d2 = dayjs(date2);

	const duration = dayjs.duration(d2.diff(d1));

	let n = 0;
	let u = 'day';

	if (duration.as('days') <= 7) {
		u = 'day';
		n = duration.as('days');
	} else if (duration.as('months') <= 1) {
		u = 'week';
		n = duration.as('weeks');
	} else if (duration.as('years') <= 1) {
		u = 'month';
		n = duration.as('months');
	} else {
		u = 'year';
		n = duration.as('years');
	}

	n = Math.trunc(n);

	return `${Math.trunc(n)} ${u}${n > 1 ? 's' : ''}`;
}

export type ItemOrSkill = Item | Skill;

export function filterItemsByQuery<T extends ItemOrSkill>(
	items: Array<T>,
	query: string
): Array<T> {
	const ignoredProperties = ['logo', 'links', 'color', 'screenshots'];
	query = query.toLowerCase();

	return items.filter((item) => doesQueryExistInItemOrAttributes(item, query, ignoredProperties));
}

function doesQueryExistInItemOrAttributes(
	item: any,
	query: string,
	ignoredProperties: string[] = []
): boolean {
	if (Array.isArray(item)) {
		// If the item is an array, check if the query exists in any of its elements.
		return item.some((subItem) => doesQueryExistInItemOrAttributes(subItem, query));
	} else if (typeof item === 'object' && item !== null) {
		// If the item is an object, iterate over its keys.
		return Object.keys(item).some(
			(key) =>
				// Check if the key is not in the ignored properties and if the query exists in the value.
				!ignoredProperties.includes(key) && doesQueryExistInItemOrAttributes(item[key], query)
		);
	} else {
		// If the item is a primitive type (e.g., string, number), check if the query exists.
		return item.toString().toLowerCase().includes(query);
	}
}


