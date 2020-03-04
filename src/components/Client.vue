<template>
	<v-layout row wrap class="`pa-2 ml-1 client`">
		<v-flex xs9 sm10 md11>
			<v-layout row wrap class="pa-2 ml-1">
				<v-flex xs4 sm3 md2 class="pa-2">
					<div class="caption grey--text">Client Name</div>
					<div>{{ client.name }}</div>
				</v-flex>
				<v-flex xs8 sm9 md10>
					<v-list>
						<v-list-item two-line v-for="contact in client.contacts" :key="contact.name">
							<v-layout row wrap>
								<v-flex xs12 sm6 md3>
									<v-list-item-content>
										<v-list-item-title class="caption grey--text">Contact Address</v-list-item-title>
										<v-list-item-subtitle>
											{{ contact.zip }} {{ contact.city }}, {{ contact.address }}
										</v-list-item-subtitle>
									</v-list-item-content>
								</v-flex>
								<v-flex xs12 sm6 md3>
									<v-list-item-content>
										<v-list-item-title class="caption grey--text">Contact Name</v-list-item-title>
										<v-list-item-subtitle>{{ contact.name }}</v-list-item-subtitle>
									</v-list-item-content>
								</v-flex>
								<v-flex xs12 sm6 md3>
									<v-list-item-content>
										<v-list-item-title class="caption grey--text">Contact Phone</v-list-item-title>
										<v-list-item-subtitle>{{ contact.phone }}</v-list-item-subtitle>
									</v-list-item-content>
								</v-flex>
								<v-flex xs12 sm6 md3>
									<v-list-item-content>
										<v-list-item-title class="caption grey--text">Contact Email</v-list-item-title>
										<v-list-item-subtitle>{{ contact.email }}</v-list-item-subtitle>
									</v-list-item-content>
								</v-flex>
							</v-layout>
						</v-list-item>
					</v-list>
				</v-flex>
		</v-layout>
		</v-flex>
		<v-flex column xs3 sm2 md1 class="pa-2 my-auto">
			<div class="buttons" @click="addContact(client._id)">
				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-icon v-on="on" color="grey">person_add</v-icon>
					</template>
					<span>Add contact</span>
				</v-tooltip>
			</div>
			<div class="buttons" @click="updateClient(client._id)">
				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-icon v-on="on" color="grey">create</v-icon>
					</template>
					<span>Edit client</span>
				</v-tooltip>
			</div>
			<div class="buttons" @click="removeClient(client._id)">
				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-icon v-on="on" color="red">delete</v-icon>
					</template>
					<span>Delete client</span>
				</v-tooltip>
			</div>
		</v-flex>
	</v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Client',
	props: ['client'],
	data() {
		return {

		}
	},
	methods: {
		...mapActions(['removeClient']),
	}
}
</script>

<style scoped>

</style>
