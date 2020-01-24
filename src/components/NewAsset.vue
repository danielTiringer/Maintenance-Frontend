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
					<v-text-field label="Title" v-model="title" prepend-icon="folder" v-bind:rules="inputRules"></v-text-field>
					<v-textarea label="Details" v-model="details" prepend-icon="edit" v-bind:rules="inputRules"></v-textarea>
					<v-menu max-width="290px">
						<template v-slot:activator="{ on }">
							<v-text-field v-bind:value="formattedDate" v-bind:rules="inputRules" label="Due date" prepend-icon="date_range" v-on="on"></v-text-field>
						</template>
						<v-date-picker v-model="dueDate"></v-date-picker>
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
			title: '',
			details: '',
			dueDate: null,
			inputRules: [
				value => value.length >= 3 || 'Minimum length is 3 characters.'
			],
			loading: false
		}
	},
	methods: {
		async submitNewAsset() {
			if (this.$refs.newAssetForm.validate()) {
				this.loading = true
				const asset = {
					title: this.title,
					details: this.details,
					dueDate: format(parseISO(this.dueDate), 'yyyy MMM dd, iiii'),
					person: 'Daniel',
					status: 'ongoing'
				}
				await AssetService.createAsset(asset).then(() => {
					this.loading = false
					this.dialog = false
					this.$emit('newProjectAdded')
				})
			}
		}
	},
	computed: {
		formattedDate() {
			return this.dueDate ? format(parseISO(this.dueDate), 'yyyy MMM dd, iiii') : ''
		}
	}
}
</script>

<style scoped>
</style>
