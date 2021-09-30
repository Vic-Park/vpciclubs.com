import type { sheets_v4 as SheetsV4 } from 'googleapis';

import type { SheetEntry } from '~/types/sheets';
import { EntryType } from '~shared/types/entry';

import {
	getGithubEntryUpdates,
	getSheetRows,
	retrieveGithubFiles,
} from './utils';
import { normalizeSheetRow } from './utils/normalize';
import { filterValidSheetEntries } from './utils/validate-entry';

export async function getGithubAnnouncementUpdates({
	spreadsheetData,
}: {
	spreadsheetData: SheetsV4.Schema$Spreadsheet;
}) {
	const announcementRows = getSheetRows(spreadsheetData, 'Club Announcements');

	const announcementSheetEntries: SheetEntry<EntryType.announcement>[] =
		announcementRows.map((announcement) => {
			const [title, date, content] = normalizeSheetRow(announcement);

			return {
				data: { date, content, title },
				type: EntryType.announcement,
			};
		});

	const announcementEntries = filterValidSheetEntries<EntryType.announcement>(
		announcementSheetEntries
	);
	const githubFiles = await retrieveGithubFiles('/data/announcements');
	const githubAnnouncementUpdates =
		await getGithubEntryUpdates<EntryType.announcement>({
			githubFiles,
			googleSheetEntries: announcementEntries,
		});

	return githubAnnouncementUpdates;
}