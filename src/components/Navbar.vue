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

			<v-btn depressed color="item.color" v-for="item in menuItems" v-bind:key="item.text" router :to="item.route">
				<span>{{ item.text }}</span>
				<v-icon right>{{ item.icon }}</v-icon>
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
import { mapGetters } from 'vuex'

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
		menuItems () {
			let menuItems = [
				{ color: 'primary', text: 'Login', icon: 'mdi-login-variant', route: '/login' },
				{ color: 'primary', text: 'Register', icon: 'mdi-arrow-up-bold-box-outline', route: '/register' }
			]
			if (this.isLoggedIn) {
				menuItems = [
					{ color: 'primary', text: 'Logout', icon: 'mdi-logout-variant', route: '/login' },
				]
			}
			return menuItems
		},
	}
}
</script>

<style scoped>

</style>
