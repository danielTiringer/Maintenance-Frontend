<template>
	<v-layout row wrap class="`pa-2 ml-1 asset`">
		<v-flex xs11 sm11 md11>
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
				<v-flex xs6 sm6 m6>
					<v-layout row wrap class="pa-2">
						<v-flex xs4 sm4 m4>
							<div class="caption grey--text" v-if="asset.contacts.length > 0">Contact Name</div>
							<div v-if="asset.contacts.length > 0">{{ asset.contacts[0].name }}</div>
						</v-flex>
						<v-flex xs4 sm4 m4>
							<div class="caption grey--text" v-if="asset.contacts.length > 0">Contact Phone</div>
							<div v-if="asset.contacts.length > 0">{{ asset.contacts[0].phone }}</div>
						</v-flex>
					<v-flex xs4 sm4 m4>
						<div class="caption grey--text" v-if="asset.contacts.length > 0">Contact Email</div>
						<div v-if="asset.contacts.length > 0">{{ asset.contacts[0].email }}</div>
					</v-flex>
				</v-layout>
			</v-flex>
			<v-flex xs6 sm4 md2>
				<div class="caption grey--text">Maintenance Schedule</div>
				<div>{{ asset.maintenanceSchedule }}</div>
			</v-flex>
			<v-flex xs6 sm2 md2>
				<div class="caption grey--text">Due By</div>
				<div>{{ asset.nextScheduledDate }}</div>
			</v-flex>
		</v-layout>
		</v-flex>
		<v-flex column xs1 sm1 md1 class="pa-2 my-auto">
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
			<div class="buttons" @click="removeAsset(asset._id)">
				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-icon v-on="on" color="red">delete</v-icon>
					</template>
					<span>Delete asset</span>
				</v-tooltip>
			</div>
		</v-flex>
	</v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Asset',
	props: ['asset'],
	data() {
		return {

		}
	},
	methods: {
		...mapActions(['removeAsset']),
	}
}
</script>

<style scoped>

</style>
