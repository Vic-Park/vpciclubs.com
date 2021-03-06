declare module '~data/clubs' {
	import type { Club } from '~shared/types/club';

	/**
	 * Map from club slug to club data
	 */
	const clubsMap: Record<string, Club>;
	export = clubsMap;
}

declare module '~data/announcements' {
	import type { ClubAnnouncement } from '~shared/types/club-announcement';

	/**
	 * Map from the name of the announcement's file to the announcement data
	 */
	const announcementsMap: Record<string, ClubAnnouncement>;
	export = announcementsMap;
}

declare module '~data/events' {
	import type { ClubEvent } from '~shared/types/club-event';

	/**
	 * Map from the name of the event's file to the event data
	 */
	const eventsMap: Record<string, ClubEvent>;
	export = eventsMap;
}
