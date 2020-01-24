<template>
	<v-layout column wrap class="`pa-2 ml-1 asset`">
		<v-layout row wrap class="pa-2 ml-1">
			<v-flex xs6 sm3 md2>
				<div class="caption grey--text">Asset ID</div>
				<div>{{ asset.assetId }}</div>
			</v-flex>
			<v-flex xs6 sm3 md2>
				<div class="caption grey--text">Serial Number</div>
				<div>{{ asset.serialNumber }}</div>
			</v-flex>
			<v-flex xs6 sm3 md2>
				<div class="caption grey--text">Date of Install</div>
				<div>{{ asset.dateOfInstall }}</div>
			</v-flex>
			<v-flex xs6 sm3 m2>
				<div class="caption grey--text">Address</div>
				<div>{{ asset.address }}</div>
			</v-flex>
			<v-flex xs6 sm4 md3>
				<div class="caption grey--text">Description</div>
				<div>{{ asset.description }}</div>
			</v-flex>
			<v-flex xs6 sm4 m6>
				<div class="caption grey--text" v-if="asset.contacts.length > 0">Contacts</div>
				<div v-if="asset.contacts.length > 0">{{ asset.contacts[0].name }}</div>
			</v-flex>
			<v-flex xs6 sm4 md2>
				<div class="caption grey--text">Maintenance Schedule</div>
				<div>{{ asset.maintenanceSchedule }}</div>
			</v-flex>
			<v-flex xs6 sm2 md2>
				<div class="caption grey--text">Due By</div>
				<div>{{ asset.nextScheduledDate }}</div>
			</v-flex>
			<v-flex row xs6 sm2 md2>
				<div class="buttons" @click="addContact(asset._id)">
					<v-tooltip top>
						<template v-slot:activator="{ on }">
							<v-icon v-on="on" color="grey">person_add</v-icon>
						</template>
						<span>Add contact</span>
					</v-tooltip>
				</div>
				<div class="buttons" @click="addMaintenance(asset._id)">
					<v-tooltip top>
						<template v-slot:activator="{ on }">
							<v-icon v-on="on" color="grey">build</v-icon>
						</template>
						<span>Log maintenance</span>
					</v-tooltip>
				</div>
				<div class="buttons" @click="updateAsset(asset._id)">
					<v-tooltip top>
						<template v-slot:activator="{ on }">
							<v-icon v-on="on" color="grey">create</v-icon>
						</template>
						<span>Edit asset</span>
					</v-tooltip>
				</div>
				<div class="buttons" @click="deleteAsset(asset._id)">
					<v-tooltip top>
						<template v-slot:activator="{ on }">
							<v-icon v-on="on" color="red">delete</v-icon>
						</template>
						<span>Delete asset</span>
					</v-tooltip>
				</div>
			</v-flex>
		</v-layout>
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
