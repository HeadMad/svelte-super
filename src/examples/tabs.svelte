<script>
	import Tabs from "$lib";
</script>

<Tabs let:select>
	{#snippet children({select})}
	<div class="block">
		<h2>Account</h2>
		<div class="tabsList">
			<Tabs.Control>
				{#snippet children({active, id})}
				<button class="tab" class:active onclick={() => select(id)}>{id}</button>
				{/snippet}
			</Tabs.Control>
		</div>

		<div class="content">
			<Tabs.Content id="Account" opened>
				<header>
					<h3>Account</h3>
					<p>Make changes to your account here. Click save when you're done.</p>
				</header>
				<div class="fields">
					<div class="field">
						<label for="name">Name</label>
						<input id="name" value="Pedro Duarte" />
					</div>
					<div class="field">
						<label for="username">Username</label>
						<input id="username" value="@peduarte" />
					</div>
				</div>
				<footer>
					<button>Save changes</button>
				</footer>
			</Tabs.Content>
			<Tabs.Content id="Password">
				<header>
					<h3>Password</h3>
					<p>Change your password here. After saving, you'll be logged out.</p>
				</header>
				<div class="fields">
					<div class="field">
						<label for="current">Current password</label>
						<input id="current" type="password" />
					</div>
					<div class="field">
						<label for="new">New password</label>
						<input id="new" type="password" />
					</div>
				</div>
				<footer>
					<button>Save password</button>
				</footer>
			</Tabs.Content>
		</div>
	</div>
	{/snippet}
</Tabs>

<style>
	button {
		border: 0;
		height: 2.5rem;
		border-radius: 0.3rem;
		padding: 0 0.8rem;
	}

	input {
		box-sizing: border-box;
		border-radius: 0.3rem;
		padding: 0 0.5rem;
		height: 2.5rem;
		width: 100%;
		border: 1px solid #bbbbbbaa;
	}

	.block {
		max-width: 400px;
		padding: 1rem;
		margin: 5rem auto auto;
	}

	.tabsList {
		border-radius: 0.3rem;
		padding: 0.2rem;
		margin-bottom: 0.5rem;
		background: #bbbbbb30;
		display: flex;
		gap: 0.3rem;
	}

	.tab {
		cursor: pointer;
		border-radius: 0.2rem;
		border: none;
		flex-grow: 1;
		padding: 0.3rem;
		margin: 0;
		background: #bbbbbb50;
		transition: 0.1s;
		height: 1.7rem;
	}

	.tab:not(.active) {
		background: transparent;
		opacity: 0.6;
	}

	.content {
		border: 1px solid #bbbbbbaa;
		border-radius: 0.5rem;
		padding: 1rem 1.5rem;
	}

	h3 {
		margin: 0;
	}
	p {
		margin: 0;
		opacity: 0.7;
	}

	.fields {
		margin-top: 1rem;
	}
	.field {
		margin-top: 0.8rem;
		box-sizing: border-box;
	}

	label {
		/* font-size: .8rem; */
		display: block;
	}

	label + input {
		margin-top: 0.3rem;
	}

	footer {
		margin-top: 1rem;
		text-align: right;
	}
</style>
