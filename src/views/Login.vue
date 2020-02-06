<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<v-card>
					<v-card-text>
						<v-container>
							<form @submit.prevent="loginUser">
								<v-layout row>
									<v-flex xs12>
										<v-text-field
											name="email"
											label="Email"
											id="email"
											v-model="email"
											type="email"
										>
										</v-text-field>
									</v-flex>
								</v-layout>
								<v-layout row>
									<v-flex xs12>
										<v-text-field
											name="password"
											label="Password"
											id="password"
											v-model="password"
											type="password"
										>
										</v-text-field>
									</v-flex>
								</v-layout>
								<v-layout row>
									<v-flex xs12 sm6 md3>
										<v-btn type="submit">Login</v-btn>
									</v-flex>
									<v-flex xs12 sm6 md3 class="pa-2">
										<router-link to="/register">Register</router-link>
									</v-flex>
								</v-layout>
							</form>
						</v-container>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Login',
	data() {
		return {
			email: '',
			password: '',
		}
	},
	computed: {
		user() {
			return this.$store.getters.user
		}
	},
	watch: {
		user (value) {
			if (value !== null && value !== undefined) {
				this.$router.push('/assets')
			}
		}
	},
	methods: {
		...mapActions(['login']),
		loginUser() {
			let user = {
				email: this.email,
				password: this.password
			}
			this.login(user)
				.then(res => {
					if (res.data.success) {
						this.$router.push('/assets')
					}
				}).catch(err => {
					// eslint-disable-next-line no-console
					console.log(err)
				})
		}
	}
}
</script>

<style scoped>

</style>

