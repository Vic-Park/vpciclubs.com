<template>
	<div class="relative">
		<LandingNavigationHeader />
		<HeroBanner />
		<div class="column items-center">
			<ExploreButton class="sm:hidden mt-10" />
			<div>
				<div
					id="equity"
					w:text="center red 4xl"
					class="mb-6 mt-8 font-kollektif"
				>
					clubs equity statement
				</div>
				<div
					class="max-w-4xl italic font-medium text-red-dark text-center px-8"
				>
					Clubs offered at VP aim to create inclusive spaces for everyone.
					Students of all identities and experiences are welcome to join clubs
					where members can come together based on shared interests. Each club
					is a reflection of the larger school community where all voices are
					valued and heard.
				</div>
			</div>
			<ClubGallery class="my-8" />
			<div class="max-w-6xl mb-8 column px-8">
				<div w:text="center white 4xl" class="mb-8 py-8 bg-burgundy font-bold">
					recent announcements
				</div>
				<div
					v-for="announcement in announcementsArray"
					:key="announcement.title"
					class="pb-8"
				>
					<ClubAnnouncementListing
						:title="announcement.title"
						:date="announcement.date.toString()"
						:content="announcement.content"
					/>
				</div>
				<div class="group self-center">
					<router-link
						to="/announcements"
						class="group-hover:text-red announcements-link"
					>
						<div class="inline-flex flex-row items-center">
							View all announcements
							<vue-icon
								:icon="mdiArrowRight"
								size="20px"
								class="ml-1 group-hover:text-red"
							/>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
	<BackToTopFab />
</template>

<script lang="ts">
import { mdiArrowRight } from '@mdi/js';
import { defineComponent } from 'vue';

import BackToTopFab from '~/components/back-to-top-fab.vue';
import ClubAnnouncementListing from '~/components/club-announcement-listing.vue';
import ClubGallery from '~/components/club-gallery.vue';
import ExploreButton from '~/components/explore-button.vue';
import HeroBanner from '~/components/hero-banner.vue';
import LandingNavigationHeader from '~/components/landing-navigation-header.vue';
import { createAnnouncementsArray } from '~/utils/announcement';
import announcements from '~data/announcements';

export default defineComponent({
	name: 'HomePage',
	components: {
		LandingNavigationHeader,
		HeroBanner,
		ClubAnnouncementListing,
		ClubGallery,
		ExploreButton,
		BackToTopFab,
	},
	setup() {
		const announcementsArray = createAnnouncementsArray(announcements).slice(
			0,
			3
		);

		return {
			announcementsArray,
			mdiArrowRight,
		};
	},
});
</script>

<style></style>
