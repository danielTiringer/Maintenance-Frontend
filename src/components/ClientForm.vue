<template>
	<v-dialog max-width="600px" v-model="dialog">
		<template v-slot:activator="{ on }">
			<v-btn text class="red" v-on="on" fab large dark absolute right>
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h2 v-if="!this.editing">Add a New Client</h2>
				<h2 v-if="this.editing">Edit Client</h2>
			</v-card-title>
			<v-card-text>
				<v-form class="px-3" ref="ClientForm">
					<v-text-field
						label="Client Name"
						v-model="client.name"
						prepend-icon="edit"
						:rules="inputRules"
					></v-text-field>
					<v-spacer></v-spacer>
					<v-btn
						text
						class="success mx-0 mt-3"
						@click="submitClient"
						:loading="loading"
					>Save Client</v-btn>
				</v-form>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'ClientForm',
	data() {
		return {
			dialog: false,
			editing: false,
			client: {
				name: '',
			},
			inputRules: [
				value => value.length >= 3 || 'Minimum length is 3 characters.'
			],
			loading: false,
		}
	},
	methods: {
		...mapActions(['addClient']),
		async submitClient() {
			if (this.$refs.clientForm.validate()) {
				this.loading = true
				const client = {
					name: this.client.name
				}
				await this.addClient(client).then(() => {
					this.loading = false
					this.dialog = false
				})
			}
		},
    validEmail (email) {
      const regex = /^(([^<>()[\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(email);
    }
	}
}
</script>

<style scoped>
</style>
