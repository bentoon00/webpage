<script lang="ts">
	import { onMount } from 'svelte';

	// defining tab positions
	type TabName = 'about' | 'projects' | 'contact';
	// define active tab
	let activeTab: TabName = 'about';

	export { activeTab }; //define content slots
</script>

<menu class="tabs" role="tablist">
	<li>
		<button
			class:active={activeTab === 'about'}
			on:click={() => (activeTab = 'about')}
			role="tab"
			aria-selected={activeTab === 'about'}
		>
			About
		</button>
	</li>

	<li>
		<button
			class:active={activeTab === 'projects'}
			on:click={() => (activeTab = 'projects')}
			role="tab"
			aria-selected={activeTab === 'projects'}
		>
			Projects
		</button>
	</li>

	<li>
		<button
			class:active={activeTab === 'contact'}
			on:click={() => (activeTab = 'contact')}
			role="tab"
			aria-selected={activeTab === 'contact'}
		>
			Contact
		</button>
	</li>
</menu>

<section class="tabs-content">
	{#if activeTab === 'about'}
		<slot name="about" />
	{:else if activeTab === 'projects'}
		<slot name="projects" />
	{:else if activeTab === 'contact'}
		<slot name="contact" />
	{/if}
</section>

<style>
	.tabs-content {
		padding: 5px;
	}
</style>
