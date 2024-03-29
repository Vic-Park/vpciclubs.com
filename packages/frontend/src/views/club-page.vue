<template>
	<template v-if="found">
		<div class="column items-center">
			<div class="self-stretch column items-center text-xl break-words content">
				<div
					w:text="center white"
					class="py-8 self-stretch bg-red-dark column items-center"
				>
					<div class="max-w-4xl">
						<h1 class="font-bold font-kollektif text-6xl mb-3">{{ name }}</h1>
						<div class="italic font-bold px-6 leading-9">
							{{ equityStatement }}
						</div>
					</div>
				</div>

				<div class="w-full max-w-xl">
					<img
						v-if="!imageNotFound"
						:src="clubThumbnailUrl"
						class="mt-12 px-6 w-full"
						@error="imageNotFound = true"
					/>
				</div>

				<div class="max-w-4xl w-full text-left px-8 mb-12">
					<div v-for="section in sections" :key="section.name">
						<div v-if="section.content !== ''" class="pt-12">
							<strong class="block">{{ section.name }}:</strong>
							<div v-html="section.content"></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Edit club button (just redirects to the associated row in the Google Sheet)
			<a
				id="edit-club-page-button"
				class="
					bg-yellow-deep
					row
					rounded-md
					text-white
					p-2
					my-8
					cursor-pointer
					transform
					transition-transform
					hover:scale-105
				"
				:href="googleSheetLink"
				@mouseover="() => (isEditClubInformationTooltipVisible = true)"
				@mouseout="() => (isEditClubInformationTooltipVisible = false)"
			>
				<vue-icon :icon="mdiPencil" size="24px" class="mr-2" />
				Edit Club Information
				<vue-tooltip
					:model-value="isEditClubInformationTooltipVisible"
					reference="#edit-club-page-button"
				>
					<div
						w:border="yellow-deep 2"
						class="
							bg-white
							rounded-md
							text-black
							p-2
							pb-1
							mt-2
							text-xs
						"
					>
						<span class="font-bold">Note:</span> You must be logged into your
						TDSB account to access the document.
					</div>
				</vue-tooltip>
			</a>
			-->
		</div>
	</template>
	<div v-else class="column w-full h-full center p-4">
		<!-- TODO: Add the create club button -->
		Sorry, no club exists at this URL. However, you can start your own!
	</div>
</template>

<script lang="ts">
import Autolinker from 'autolinker';
import DOMPurify from 'dompurify';
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

import { getClubThumbnailUrl } from '~/utils/club';
import { formatText } from '~/utils/text';
import clubs from '~data/clubs';

export default defineComponent({
	name: 'ClubPage',
	setup() {
		const route = useRoute();

		const clubSlug = route.params.clubSlug.toString();
		if (clubs[clubSlug] === undefined) {
			return {
				found: false,
			};
		}

		const {
			name,
			shortDescription,
			staffSupervisor,
			clubLeaders,
			categories,
			timeCommitment,
			meetingTimes,
			onlinePlatforms,
			joinInstructions,
			extraInformation,
			equityStatement,
		} = clubs[clubSlug];

		// Remove the [] surrounding the condensed equity statement
		const processedEquityStatement =
			equityStatement?.replace(/\[|]/g, '') ?? '';

		const sections = [
			{
				name: 'Description',
				content: shortDescription,
			},
			{
				name: 'Staff Supervisor',
				content: staffSupervisor,
			},
			{
				name: 'Club Leaders',
				content: clubLeaders,
			},
			{
				name: 'Categories',
				content: categories,
			},
			{
				name: 'Time Commitment',
				content: timeCommitment,
			},
			{
				name: 'Meeting Times',
				content: meetingTimes,
			},
			{
				name: 'Online Platforms',
				content: onlinePlatforms,
			},
			{
				name: 'Join Instructions',
				content: joinInstructions,
			},
			{
				name: 'Extra Information',
				content: extraInformation,
			},
		].map((section) => ({
			...section,
			content: DOMPurify.sanitize(
				Autolinker.link(formatText(section.content ?? ''), {
					mention: 'instagram',
				})
			),
		}));

		const clubThumbnailUrl = getClubThumbnailUrl(clubSlug);
		const imageNotFound = ref(false);

		return {
			found: true,
			imageNotFound,
			name,
			equityStatement: processedEquityStatement,
			sections,
			clubThumbnailUrl,
		};
	},
});
</script>

<style lang="postcss" scoped>
.content :deep(a) {
	@apply underline text-blue-600 hover:text-blue-800;
}
</style>
