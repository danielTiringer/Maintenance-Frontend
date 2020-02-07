<template>
	<div class="clients">
		<h1 class="subheading grey--text">Clients</h1>
		<v-container class="ma-4">

			<v-layout row class="mb-3">
				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-btn small color="light-blue" class="ma-2" @click="sortBy('name')" v-on="on">
							<v-icon left small>folder</v-icon>
							<span class="caption text-capitalize">By Name</span>
						</v-btn>
					</template>
					<span>Sort clients by name</span>
				</v-tooltip>
			</v-layout>

			<p class="error" v-if="error">{{ error }}</p>

			<v-card depressed v-for="client in allClients" v-bind:key="client._id">
				<Client v-bind:client="client" />
				<v-divider></v-divider>
			</v-card>
		</v-container>
		<NewClient />
	</div>
</template>

<script>
import Client from '@/components/Client'
import NewClient from '@/components/NewClient'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Clients',
	components: {
		Client,
		NewClient
	},
	computed: {
		...mapGetters(['allClients']),
		assets() {
			return this.fetchClients()
		}
	},
	data() {
		return {
			error: ''
		}
	},
	methods: {
		...mapActions(['fetchClients']),
		sortBy(property) {
			this.assets.sort((a, b) => a[property] < b[property] ? -1 : 1)
		}
	},
	mounted() {
		this.fetchClients()
	}
}
</script>

<style scoped>

</style>
