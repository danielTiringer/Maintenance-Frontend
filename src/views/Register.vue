<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<v-card>
					<v-card-text>
						<v-container>
							<form @submit.prevent="registerUser">
								<v-layout row>
									<v-flex xs12>
										<v-text-field
											name="username"
											label="Username"
											id="username"
											v-model="username"
											type="username"
										>
										</v-text-field>
									</v-flex>
								</v-layout>
								<v-layout row>
									<v-flex xs12>
										<v-text-field
											name="name"
											label="Name"
											id="name"
											v-model="name"
											type="name"
										>
										</v-text-field>
									</v-flex>
								</v-layout>
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
									<v-flex xs12>
										<v-text-field
											name="confirmPassword"
											label="Confirm Password"
											id="confirm_password"
											v-model="confirm_password"
											type="confirm_password"
											:rules="[comparePasswords]"
										>
										</v-text-field>
									</v-flex>
								</v-layout>
								<v-layout row>
									<v-flex xs12>
										<v-btn type="submit">Register</v-btn>
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
	data() {
		return {
			username: '',
			name: '',
			email: '',
			password: '',
			confirm_password: ''
		}
	},
	computed: {
		comparePasswords() {
			return this.password !== this.confirm_password ? 'The passwords do not match!' : ''
		},
	},
	methods: {
		...mapActions(['register']),
		registerUser() {
			let user = {
				username: this.username,
				name: this.name,
				email: this.email,
				password: this.password,
				confirm_password: this.confirm_password
			}
			this.register(user)
				.then(res => {
					if (res.data.success) {
						this.$router.push('login')
					}
				})
		}
	}
}
</script>

<style scoped>

</style>

