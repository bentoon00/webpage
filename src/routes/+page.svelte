<script lang="ts">
    import Tabs from '$lib/components/tabs.svelte';
import tabs from '$lib/components/tabs.svelte'
</script>

<div class="background" style="
background-image: linear-gradient(#153a89, #1d2d4e);
height: 100vh; display: flex; justify-content: center; margin: -9px;
background-position:center; background-size:cover;">

    <div id="parent" style="margin:auto;">
        <section style="margin: 30px; display:flex; justify-content:center">
            <div role="tooltip" class="is-top is-left" style="width:150px; padding:10px; text-align:center; background:linear-gradient(180deg, #fffff, #ebebeb);" >⚠️ Work in Progress!</div>
        </section>

        <div class="window active glass" style="min-width: 450px; max-width:80%; justify-content:center ; margin: auto;">
            <div class="title-bar" style="background-attachment: scroll;">
                <div class="title-bar-text">Ben Toon's Website</div>
                <div class="title-bar-controls">
                    <button aria-label="Help" on:click={() => window.location.assign("#popup-help")}></button>
                    <button aria-label="Close" on:click={() => history.back()}></button>
                    
                </div>
            </div>
            
            
            <div class="window-body has-space" style="min-height: 175px;">
                <Tabs>
                    <div slot="about">
                        <article id="about">
                            <fieldset>
                                <legend>Welcome!</legend>
                                <p style="padding: 3px;">
                                My name is Ben, I am currently a student in the UK studying computer science.
                                </p>
                            </fieldset>
                            
                        </article>
                    </div>

                    <div slot="projects">
                        <article id="projects">
                            <p style="padding: 3px;">ummmmm this website i guess</p>
                        </article>
                    </div>

                    <div slot="contact">
                        <article id='contact'>
                            <p> Real contact form will go here at some point</p>
                        </article>
                    </div>
                </Tabs>
                
                
                <section style="position:absolute; bottom: 15px; right:15px; gap: 10px; margin: 2px;">
                    <button aria-label="button" class="button" on:click={() => window.open("mailto: ben@btn00.com")}> E-Mail</button>
                    <button aria-label="button" class="button" on:click={() => window.open('https://github.com/bentoon00')}>GitHub</button>
                </section>
            </div>
        </div>

        

        <div class="window active glass" role="dialog" aria-labelledby="dialoge-title" id="popup-help">
            <div class='title-bar'>
                <div class="title-bar-text" id="dialoge-title">
                    Help
                </div>
                <div class="title-bar-controls">
                    <button aria-label="Close" on:click={() => history.back()}></button>
                </div>
                
            </div>

            <div class="window-body has-space">
                <p>This website is built using SvelteKit and the 7.css library</p>
                <section style="justify-content:end; display:flex;">
                    <button class="button" on:click={() => history.back()}>OK</button>
                </section>
                
            </div>
        </div>
    </div>

</div> 