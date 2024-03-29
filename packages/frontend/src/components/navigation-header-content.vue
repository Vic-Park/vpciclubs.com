<template>
	<NavigationHeaderLink
		class="mx-2 mr-auto"
		route="/"
		no-active-class
		title="home"
	/>
	<div w:md="flex" class="hidden flex-1 flex-row gap-x-4 justify-end">
		<div v-for="tab in tabs" :key="tab.title" class="mx-2">
			<NavigationHeaderLink
				:route="tab.route"
				:to-id="tab.toId"
				:title="tab.title"
				:class="tab.class"
			/>
		</div>
	</div>
	<div class="md:hidden">
		<vue-icon
			:icon="mdiMenu"
			class="text-white cursor-pointer"
			size="30px"
			@click="onMenuClick"
			@mousedown.prevent
		/>
		<div
			v-if="isMenuOpen"
			v-click-outside="() => (isMenuOpen = false)"
			class="relative z-50"
		>
			<div
				class="
					column
					absolute
					right-0
					border
					rounded-sm
					overflow-hidden
					bg-white
					p-1
				"
			>
				<div v-for="tab in tabs" :key="tab.title" w:p="x-2 y-1">
					<NavigationHeaderLink
						:key="tab.title"
						:route="tab.route"
						:to-id="tab.toId"
						:title="tab.title"
						:class="tab.class"
					>
						<template #link>
							<div @click="isMenuOpen = false">
								<template v-if="tab.toId">
									<div
										w:text="black lg hover:red"
										class="cursor-pointer"
										@click="tab.toId && scrollToId(tab.toId)"
									>
										{{ tab.title }}
									</div>
								</template>
								<template v-else>
									<router-link :to="tab.route" active-class="text-red">
										<div w:text="lg hover:red">{{ tab.title }}</div>
									</router-link>
								</template>
							</div>
						</template>
					</NavigationHeaderLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { mdiMenu } from '@mdi/js';
import type { PropType } from 'vue';
import { defineComponent, ref } from 'vue';

import type { Tab } from '~/types/tab';
import { scrollToId } from '~/utils/scroll';

import NavigationHeaderLink from './navigation-header-link.vue';

export default defineComponent({
	name: 'NavigationHeader',
	components: { NavigationHeaderLink },
	props: {
		tabs: {
			type: Array as PropType<Tab[]>,
			required: true,
		},
	},
	setup() {
		const isMenuOpen = ref(false);

		function onMenuClick() {
			isMenuOpen.value = !isMenuOpen.value;
		}

		return {
			mdiMenu,
			isMenuOpen,
			onMenuClick,
			scrollToId,
		};
	},
});
</script>
