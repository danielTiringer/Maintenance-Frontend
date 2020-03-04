<template>
	<v-dialog max-width="600px" v-model="dialog">
		<template v-slot:activator="{ on }">
			<v-btn text class="red" v-on="on" fab large dark absolute right>
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h2>Add a New Asset</h2>
			</v-card-title>
			<v-card-text>
				<v-form class="px-3" ref="newAssetForm">
					<v-text-field
						label="Asset Id"
						v-model="asset.assetId"
						prepend-icon="folder"
						:rules="inputRules"
					></v-text-field>
					<v-text-field
						label="Serial Number"
						v-model="asset.serialNumber"
						prepend-icon="folder"
						:rules="inputRules"
					></v-text-field>
					<v-menu max-width="290px">
						<template v-slot:activator="{ on }">
							<v-text-field
								:value="formattedInstallDate"
								label="Installation date"
								prepend-icon="date_range" v-on="on"
							></v-text-field>
						</template>
						<v-date-picker v-model="asset.dateOfInstall"></v-date-picker>
					</v-menu>
					<v-text-field
						label="Postal Code"
						v-model="asset.zip"
						prepend-icon="mdi-earth"
						:rules="inputRules"
					></v-text-field>
					<v-text-field
						label="City"
						v-model="asset.city"
						prepend-icon="mdi-city"
						:rules="inputRules"
					></v-text-field>
					<v-text-field
						label="Address"
						v-model="asset.address"
						prepend-icon="house"
						:rules="inputRules"
					></v-text-field>
					<v-textarea
						label="Description"
						v-model="asset.description"
						prepend-icon="edit"
						:rules="inputRules"
					></v-textarea>
					<v-select
						v-model="asset.maintenanceSchedule"
						:items="schedule"
						menu-props="auto"
						label="Maintenance Schedule"
						hide-details
						prepend-icon="alarm"
						single-line
					></v-select>
					<v-menu max-width="290px">
						<template v-slot:activator="{ on }">
							<v-text-field
								:value="formattedScheduledDate"
								label="Scheduled maintenance date"
								prepend-icon="date_range" v-on="on"
							></v-text-field>
						</template>
						<v-date-picker v-model="asset.nextScheduledDate"></v-date-picker>
					</v-menu>
					<v-spacer></v-spacer>
					<v-btn
						text
						class="success mx-0 mt-3"
						@click="submitNewProject"
						:loading="loading"
					>Add Asset</v-btn>
				</v-form>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'NewContact',
	data() {
		return {
			dialog: false,
			contact: {
				name: '',
				title: '',
				zip: '',
				city: '',
				address: '',
				phone: '',
				email: '',
			},
			inputRules: [
				value => value.length >= 3 || 'Minimum length is 3 characters.'
			],
			loading: false,
		}
	},
	methods: {
		...mapActions(['addContact']),
		async submitNewProject() {
			if (this.$refs.newAssetForm.validate()) {
				this.loading = true
				const newContact = {
					name: this.contact.name,
					title: this.contact.title,
					zip: this.contact.zip,
					city: this.contact.city,
					address: this.contact.address,
					phone: this.contact.phone,
					email: this.contact.email,
				}
				await this.addContact(newContact).then(() => {
					this.loading = false
					this.dialog = false
				})
			}
		},
	}
}
</script>

<style scoped>
</style>
