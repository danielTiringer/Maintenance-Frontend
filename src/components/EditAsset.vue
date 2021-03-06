<template>
	<v-dialog max-width="600px" v-model="dialog">
		<template v-slot:activator="{ on }">
			<v-btn text class="success" v-on="on">Edit asset</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h2>Edit Asset</h2>
			</v-card-title>
			<v-card-text>
				<v-form class="px-3" ref="editAssetForm">
					<v-text-field label="Asset Id" v-model="assetId" prepend-icon="folder" v-bind:rules="inputRules"></v-text-field>
					<v-text-field label="Serial Number" v-model="serialNumber" prepend-icon="folder" v-bind:rules="inputRules"></v-text-field>
					<v-menu max-width="290px">
						<template v-slot:activator="{ on }">
							<v-text-field v-bind:value="formattedInstallDate" v-bind:rules="inputRules" label="Installation date" prepend-icon="date_range" v-on="on"></v-text-field>
						</template>
						<v-date-picker v-model="dateOfInstall"></v-date-picker>
					</v-menu>
					<v-text-field label="Address" v-model="address" prepend-icon="house" v-bind:rules="inputRules"></v-text-field>
					<v-textarea label="Description" v-model="description" prepend-icon="edit" v-bind:rules="inputRules"></v-textarea>
					<v-select
						v-model="maintenanceSchedule"
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
						<v-date-picker v-model="nextScheduledDate"></v-date-picker>
					</v-menu>
					<v-spacer></v-spacer>
					<v-btn text class="success mx-0 mt-3" @click="submitNewAsset" v-bind:loading="loading">Add Asset</v-btn>
				</v-form>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import AssetService from '@/Services'

export default {
	data() {
		return {
			dialog: false,
			assetId: '',
			serialNumber: '',
			dateOfInstall: null,
			address: '',
			description: '',
			maintenanceSchedule: '',
			nextScheduledDate: null,
			inputRules: [
				value => value.length >= 3 || 'Minimum length is 3 characters.'
			],
			loading: false,
			schedule: ['semi-annual', 'annual']
		}
	},
	methods: {
		async submitNewAsset() {
			if (this.$refs.newAssetForm.validate()) {
				this.loading = true
				const asset = {
					assetId: this.assetId,
					serialNumber: this.serialNumber,
					dateOfInstall: format(parseISO(this.dateOfInstall), 'yyyy/MM/dd'),
					address: this.address,
					description: this.description,
					maintenanceSchedule: this.maintenanceSchedule,
					nextScheduledDate: format(parseISO(this.nextScheduledDate), 'yyyy/MM/dd'),
				}
				await AssetService.createAsset(asset).then(() => {
					this.loading = false
					this.dialog = false
					this.$emit('assetEdited')
				})
			}
		}
	},
	computed: {
		formattedInstallDate() {
			return this.dateOfInstall ? format(parseISO(this.dateOfInstall), 'yyyy/MM/dd') : ''
		},
		formattedScheduledDate() {
			return this.nextScheduledDate ? format(parseISO(this.nextScheduledDate), 'yyyy/MM/dd') : ''
		},
	}
}
</script>

<style scoped>
</style>

