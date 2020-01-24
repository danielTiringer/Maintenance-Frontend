<template>
	<v-layout row wrap v-bind:class="pa-3">
		<v-flex xs12 sm4 md6>
			<div class="caption grey--text">Asset ID</div>
			<div>{{ asset.assetId }}</div>
		</v-flex>
		<v-flex xs4 sm2 md2>
			<div class="caption grey--text">Address</div>
			<div>{{ asset.address }}</div>
		</v-flex>
		<v-flex xs6 sm2 md2>
			<div class="caption grey--text">Due By</div>
			<div>{{ asset.nextScheduledDate }}</div>
		</v-flex>
		<v-flex xs6 sm2 md2>
			<div class="right">
				<v-chip
				>
				</v-chip>
			</div>
		</v-flex>
		<v-flex row xs6 sm2 md2>
			<div class="buttons" v-bind:key="button.icon" v-for="button in buttons" @click="button.method">

				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-icon v-on="on" v-bind:color="button.color">{{ button.icon }}</v-icon>
					</template>
					<span>{{ button.tooltip }}</span>
				</v-tooltip>
			</div>
		</v-flex>
	</v-layout>
</template>

<script>
import AssetService from '@/Services'
export default {
	name: 'Asset',
	props: ['asset'],
	data() {
		return {
				buttons: [
				{ icon: 'mdi-pencil-circle', color: 'grey', method: '', tooltip: 'Edit asset' },
				{ icon: 'mdi-delete-circle', color: 'red', method: 'deleteAsset(asset._id)', tooltip: 'Delete asset' }
			]
		}
	},
	methods: {
		async deleteAsset(id) {
			await AssetService.deleteAsset(id)
		},
	}
}
</script>

<style scoped>

</style>
