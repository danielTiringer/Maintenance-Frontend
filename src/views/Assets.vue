<template>
	<div class="assets">
		<h1 class="subheading grey--text">Assets</h1>
		<v-container class="ma-4">

			<v-layout row class="mb-3">
				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-btn small color="light-blue" class="ma-2" @click="sortBy('assetId')" v-on="on">
							<v-icon left small>folder</v-icon>
							<span class="caption text-capitalize">By Asset ID</span>
						</v-btn>
					</template>
					<span>Sort assets by asset id</span>
				</v-tooltip>

				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-btn small color="light-blue" class="ma-2" @click="sortBy('nextScheduledDate')" v-on="on">
							<v-icon left small>alarm</v-icon>
							<span class="caption text-capitalize">By Due Date</span>
						</v-btn>
					</template>
					<span>Sort assets by due date</span>
				</v-tooltip>
			</v-layout>

			<p class="error" v-if="error">{{ error }}</p>

			<v-card depressed v-for="asset in assets" v-bind:key="asset.assetId">
				<Asset @newAssetAdded="reloadAssets" v-bind:asset="asset" />
				<v-divider></v-divider>
			</v-card>
		</v-container>
	</div>
</template>

<script>
import Asset from '@/components/Asset'
import AssetService from '@/Services'
export default {
	name: 'Assets',
	components: {
		Asset
	},
	data() {
		return {
			assets: [],
			error: ''
		}
	},
	methods: {
		sortBy(property) {
			this.assets.sort((a, b) => a[property] < b[property] ? -1 : 1)
		},
		async reloadAssets() {
			try {
				this.assets = await AssetService.getAssets()
			} catch (error) {
				this.error = error.message
			}
		}
	},
	async created() {
		try {
			this.assets = await AssetService.getAssets()
		} catch (error) {
			this.error = error.message
		}
	},
}
</script>

<style scoped>

</style>
