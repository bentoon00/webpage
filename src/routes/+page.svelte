<script lang="ts">
	import Tabs from '$lib/components/tabs.svelte';
</script>

<div class="background">
	<div id="parent">
		<div class="window active glass main-window">
			<div class="title-bar">
				<div class="title-bar-text">Ben Toon — Portfolio</div>
				<div class="title-bar-controls">
					<button aria-label="Help" on:click={() => window.location.assign('#popup-help')}></button>
					<button aria-label="Close" on:click={() => history.back()}></button>
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
									Feel free to reach out via email or check out my work on GitHub using the buttons
									below.
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

		<div class="window active glass" role="dialog" aria-labelledby="dialog-title" id="popup-help">
			<div class="title-bar">
				<div class="title-bar-text" id="dialog-title">Help</div>
				<div class="title-bar-controls">
					<button aria-label="Close" on:click={() => history.back()}></button>
				</div>
			</div>

			<div class="window-body has-space">
				<p>This website is built using SvelteKit and the 7.css library.</p>
				<section class="dialog-actions">
					<button class="button" on:click={() => history.back()}>OK</button>
				</section>
			</div>
		</div>
	</div>
</div>

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

	.dialog-actions {
		display: flex;
		justify-content: flex-end;
		margin-top: 8px;
	}
</style>
