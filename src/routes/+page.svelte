<script lang="ts">
	import { onMount } from 'svelte';
	import Tabs from '$lib/components/tabs.svelte';

	let showHelp = false;
	let showWip = true;
	let showCloseConfirm = false;
	let mainClosed = false;

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			if (showHelp) showHelp = false;
			else if (showCloseConfirm) showCloseConfirm = false;
		}
	}

	onMount(() => {
		// Auto-dismiss the WIP balloon after 8 seconds
		const timer = setTimeout(() => {
			showWip = false;
		}, 8000);
		return () => clearTimeout(timer);
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Help modal -->
{#if showHelp}
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		class="modal-overlay"
		role="presentation"
		on:click={() => (showHelp = false)}
		on:keydown|stopPropagation
	>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<div
			class="window active help-dialog"
			role="dialog"
			aria-labelledby="dialog-title"
			on:click|stopPropagation
			on:keydown|stopPropagation
		>
			<div class="title-bar">
				<div class="title-bar-text" id="dialog-title">Help</div>
				<div class="title-bar-controls">
					<button aria-label="Close" on:click={() => (showHelp = false)}></button>
				</div>
			</div>
			<div class="window-body has-space">
				<p>This website is built using SvelteKit and the 7.css library.</p>
				<section class="dialog-actions">
					<button class="button" on:click={() => (showHelp = false)}>OK</button>
				</section>
			</div>
		</div>
	</div>
{/if}

<!-- Close confirmation modal -->
{#if showCloseConfirm}
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		class="modal-overlay"
		role="presentation"
		on:click={() => (showCloseConfirm = false)}
		on:keydown|stopPropagation
	>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<div
			class="window active close-dialog"
			role="alertdialog"
			aria-labelledby="close-dialog-title"
			aria-describedby="close-dialog-desc"
			on:click|stopPropagation
			on:keydown|stopPropagation
		>
			<div class="title-bar">
				<div class="title-bar-text" id="close-dialog-title">Close Portfolio</div>
			</div>
			<div class="window-body has-space">
				<div class="confirm-content">
					<span class="confirm-icon" aria-hidden="true">⚠️</span>
					<p id="close-dialog-desc">Are you sure you want to close this window?</p>
				</div>
				<section class="dialog-actions">
					<button
						class="button"
						on:click={() => {
							showCloseConfirm = false;
							mainClosed = true;
						}}>Yes</button
					>
					<button class="button" on:click={() => (showCloseConfirm = false)}>No</button>
				</section>
			</div>
		</div>
	</div>
{/if}

<div class="background">
	<div id="parent">
		{#if !mainClosed}
			<div class="window active glass main-window">
				<div class="title-bar">
					<div class="title-bar-text">Ben Toon — Portfolio</div>
					<div class="title-bar-controls">
						<button aria-label="Help" on:click={() => (showHelp = true)}></button>
						<button aria-label="Close" on:click={() => (showCloseConfirm = true)}></button>
					</div>
				</div>

				<div class="window-body has-space body-content">
					<Tabs>
						<div slot="about">
							<article id="about">
								<fieldset>
									<legend>About Me</legend>
									<p>
										Hi, I'm Ben — a computer science student based in the UK with a passion for
										building clean, functional software. I enjoy working across the full stack, from
										designing intuitive user interfaces to architecting reliable back-end systems.
									</p>
								</fieldset>
							</article>
						</div>

						<div slot="projects">
							<article id="projects">
								<fieldset>
									<legend>Projects</legend>
									<ul class="project-list">
										<li>
											<strong>This Website</strong> — A retro-styled personal portfolio built with SvelteKit
											and 7.css.
										</li>
									</ul>
								</fieldset>
							</article>
						</div>

						<div slot="contact">
							<article id="contact">
								<fieldset>
									<legend>Get in Touch</legend>
									<p>
										Feel free to reach out via email or check out my work on GitHub using the
										buttons below.
									</p>
								</fieldset>
							</article>
						</div>
					</Tabs>

					<section class="action-buttons">
						<button
							aria-label="Send email"
							class="button"
							on:click={() => window.open('mailto:ben@btn00.com')}>E-Mail</button
						>
						<button
							aria-label="Open GitHub profile"
							class="button"
							on:click={() => window.open('https://github.com/bentoon00')}>GitHub</button
						>
					</section>
				</div>
			</div>
		{:else}
			<div class="desktop-message">
				<p>🖥️ All windows closed.</p>
				<button class="button" on:click={() => (mainClosed = false)}>Reopen Portfolio</button>
			</div>
		{/if}
	</div>
</div>

<!-- WIP balloon-tip notification (auto-dismisses after 8 s) -->
{#if showWip}
	<div class="balloon-tip" role="status" aria-live="polite">
		<div class="balloon-header">
			<span class="balloon-icon" aria-hidden="true">🚧</span>
			<span class="balloon-title">Under Construction</span>
			<button class="balloon-close" on:click={() => (showWip = false)} aria-label="Dismiss"
				>✕</button
			>
		</div>
		<p class="balloon-body">This site is a work in progress — more content coming soon!</p>
	</div>
{/if}

<style>
	.background {
		background-image: linear-gradient(#153a89, #1d2d4e);
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: -9px;
	}

	#parent {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding: 24px;
	}

	.main-window {
		min-width: 480px;
		max-width: 640px;
		width: 100%;
	}

	.body-content {
		min-height: 200px;
		padding-bottom: 56px;
		position: relative;
	}

	.action-buttons {
		position: absolute;
		bottom: 12px;
		right: 12px;
		display: flex;
		gap: 8px;
	}

	.project-list {
		margin: 4px 0;
		padding-left: 20px;
	}

	.project-list li {
		margin-bottom: 6px;
	}

	/* ── Modals ─────────────────────────────────────────────── */
	.modal-overlay {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.45);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 200;
	}

	.help-dialog,
	.close-dialog {
		min-width: 280px;
		max-width: 360px;
	}

	.dialog-actions {
		display: flex;
		justify-content: flex-end;
		gap: 6px;
		margin-top: 8px;
	}

	.confirm-content {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
	}

	.confirm-icon {
		font-size: 1.8rem;
		flex-shrink: 0;
	}

	/* ── Desktop closed state ────────────────────────────────── */
	.desktop-message {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		color: #fff;
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
	}

	/* ── WIP balloon tip ─────────────────────────────────────── */
	.balloon-tip {
		position: fixed;
		bottom: 48px;
		right: 16px;
		width: 240px;
		background: linear-gradient(180deg, #fffde7 0%, #fff8c5 100%);
		border: 1px solid #c8a400;
		border-radius: 4px;
		padding: 8px 10px 10px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.35);
		z-index: 300;
		animation: balloonIn 0.35s ease;
	}

	/* Speech-bubble tail */
	.balloon-tip::after {
		content: '';
		position: absolute;
		bottom: -9px;
		right: 22px;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-top: 9px solid #c8a400;
	}

	.balloon-tip::before {
		content: '';
		position: absolute;
		bottom: -7px;
		right: 23px;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-top: 7px solid #fff8c5;
		z-index: 1;
	}

	.balloon-header {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 4px;
	}

	.balloon-icon {
		font-size: 0.9rem;
	}

	.balloon-title {
		font-weight: bold;
		font-size: 0.8rem;
		flex: 1;
		color: #333;
	}

	.balloon-close {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 0.7rem;
		color: #666;
		padding: 0 2px;
		line-height: 1;
	}

	.balloon-close:hover {
		color: #333;
	}

	.balloon-body {
		font-size: 0.78rem;
		color: #555;
		margin: 0;
		line-height: 1.4;
	}

	@keyframes balloonIn {
		from {
			transform: translateY(12px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
