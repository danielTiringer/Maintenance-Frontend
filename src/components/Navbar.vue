<template>
	<nav>
		<v-snackbar v-model="snackbar" top color="success" v-bind:timeout="5000">
			<span>Project added</span>
			<v-btn text color="white" @click="snackbar = false">Close</v-btn>
		</v-snackbar>

		<v-toolbar flat>
			<v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">Asset Maintenance</span>
				<span>Tracker</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>

			<v-menu offset-y v-if="this.isLoggedIn">
				<template v-slot:activator="{ on }">
					<v-btn color="primary" class="mr-3" dark v-on="on">
					<v-icon left>expand_more</v-icon>
						<span>Menu</span>
					</v-btn>
				</template>
				<v-list>
					<v-list-item v-for="link in links" v-bind:key="link.text" router :to="link.route">
						<v-list-item-title>{{ link.text }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>

			<router-link to="/register" class="nav-link" v-if="!this.isLoggedIn">
				<v-btn depressed color="primary">
					<span>Register</span>
					<v-icon right>mdi-arrow-up-bold-box-outline</v-icon>
				</v-btn>
			</router-link>

			<router-link to="/login" class="nav-link" v-if="!this.isLoggedIn">
				<v-btn depressed color="primary">
					<span>Login</span>
					<v-icon right>mdi-login-variant</v-icon>
				</v-btn>
			</router-link>

			<v-btn depressed color="primary" @click.prevent="logoutUser" v-if="this.isLoggedIn">
				<span>Logout</span>
				<v-icon right>mdi-logout-variant</v-icon>
			</v-btn>
		</v-toolbar>

		<v-navigation-drawer app v-model="drawer" class="primary">
			<v-app-bar-nav-icon class="grey--text mt-2 ml-2" @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-list class="primary d-flex flex-column">
				<v-list-item class="ma-3" v-for="link in links" v-bind:key="link.text">
					<router-link v-bind:to="link.route" class="d-flex flex-row">
						<v-list-item-action>
							<v-icon class="white--text">{{ link.icon }}</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title class="white--text ma-5">{{ link.text }}</v-list-item-title>
						</v-list-item-content>
					</router-link>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

	</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Navbar',
	components: {
	},
	data() {
		return {
			drawer: false,
			links: [
				{ icon: 'dashboard', text: 'Asset List', route: '/assets' },
				{ icon: 'person', text: 'Client List', route: '/clients' },
				{ icon: 'assessment', text: 'Metrics', route: '/metrics' },
			],
			snackbar: false
		}
	},
	computed: {
		...mapGetters(['isLoggedIn']),
	},
	methods: {
		...mapActions(['logout']),
		logoutUser() {
			this.logout()
		}
	}
}
</script>

<style scoped>

</style>
