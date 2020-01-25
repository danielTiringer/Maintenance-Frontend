<template>
	<v-dialog max-width="600px" v-model="dialog">
		<template v-slot:activator="{ on }">
			<v-btn text class="success" v-on="on">Add new asset</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h2>Add a New Asset</h2>
			</v-card-title>
			<v-card-text>
				<v-form class="px-3" ref="newAssetForm">
					<v-text-field label="Asset Id" v-model="asset.assetId" prepend-icon="folder" v-bind:rules="inputRules"></v-text-field>
					<v-text-field label="Serial Number" v-model="asset.serialNumber" prepend-icon="folder" v-bind:rules="inputRules"></v-text-field>
					<v-menu max-width="290px">
						<template v-slot:activator="{ on }">
							<v-text-field v-bind:value="formattedInstallDate" v-bind:rules="inputRules" label="Installation date" prepend-icon="date_range" v-on="on"></v-text-field>
						</template>
						<v-date-picker v-model="asset.dateOfInstall"></v-date-picker>
					</v-menu>
					<v-text-field label="Address" v-model="asset.address" prepend-icon="house" v-bind:rules="inputRules"></v-text-field>
					<v-textarea label="Description" v-model="asset.description" prepend-icon="edit" v-bind:rules="inputRules"></v-textarea>
					<v-select
						v-model="asset.maintenanceSchedule"
						v-bind:items="schedule"
						menu-props="auto"
						label="Maintenance Schedule"
						hide-details
						prepend-icon="alarm"
						single-line
					></v-select>
					<v-menu max-width="290px">
						<template v-slot:activator="{ on }">
							<v-text-field v-bind:value="formattedScheduledDate" v-bind:rules="inputRules" label="Scheduled maintenance date" prepend-icon="date_range" v-on="on"></v-text-field>
						</template>
						<v-date-picker v-model="asset.nextScheduledDate"></v-date-picker>
					</v-menu>
					<v-spacer></v-spacer>
					<v-btn text class="success mx-0 mt-3" @click="submitNewProject" v-bind:loading="loading">Add Asset</v-btn>
				</v-form>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { mapActions } from 'vuex'

export default {
	data() {
		return {
			dialog: false,
			asset: {
				assetId: '',
				serialNumber: '',
				dateOfInstall: null,
				address: '',
				description: '',
				maintenanceSchedule: '',
				nextScheduledDate: null,
			},
			inputRules: [
				value => value.length >= 3 || 'Minimum length is 3 characters.'
			],
			loading: false,
			schedule: ['semi-annual', 'annual']
		}
	},
	methods: {
		...mapActions(['addAsset']),
		async submitNewProject() {
			if (this.$refs.newAssetForm.validate()) {
				this.loading = true
				const newAsset = {
					assetId: this.asset.assetId,
					serialNumber: this.asset.serialNumber,
					dateOfInstall: format(parseISO(this.asset.dateOfInstall), 'yyyy/MM/dd'),
					address: this.asset.address,
					description: this.asset.description,
					maintenanceSchedule: this.asset.maintenanceSchedule,
					nextScheduledDate: format(parseISO(this.asset.nextScheduledDate), 'yyyy/MM/dd'),
				}
				await this.addAsset(newAsset).then(() => {
					this.loading = false
					this.dialog = false
				})
			}
		},
	},
	computed: {
		formattedInstallDate() {
			return this.asset.dateOfInstall ? format(parseISO(this.asset.dateOfInstall), 'yyyy/MM/dd') : ''
		},
		formattedScheduledDate() {
			return this.asset.nextScheduledDate ? format(parseISO(this.asset.nextScheduledDate), 'yyyy/MM/dd') : ''
		},
	}
}
</script>

<style scoped>
</style>
