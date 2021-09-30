import { octokit } from '~/github';
import type { GithubFile } from '~/types/github';

export async function retrieveGithubFiles(path: string): Promise<GithubFile[]> {
	// Retrieving the existing announcements from the GitHub repository
	const octokitResponse = await octokit.request(
		'GET /repos/{owner}/{repo}/contents/{path}',
		{
			owner: 'Vic-Park',
			repo: 'vic-park.github.io',
			path,
		}
	);

	const githubFiles = octokitResponse.data as GithubFile[];

	return githubFiles;
}