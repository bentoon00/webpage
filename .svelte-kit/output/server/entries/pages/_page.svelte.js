import "clsx";
import { w as attr, x as attr_class, y as slot, z as bind_props } from "../../chunks/index.js";
import { j as fallback } from "../../chunks/utils2.js";
function Tabs($$renderer, $$props) {
  let activeTab = fallback($$props["activeTab"], "about");
  $$renderer.push(`<menu class="tabs" role="tablist"><li><button role="tab"${attr(
    "aria-selected",
    //define content slots
    activeTab === "about"
  )}${attr_class("", void 0, { "active": activeTab === "about" })}>About</button></li> <li><button role="tab"${attr("aria-selected", activeTab === "projects")}${attr_class("", void 0, { "active": activeTab === "projects" })}>Projects</button></li> <li><button role="tab"${attr("aria-selected", activeTab === "contact")}${attr_class("", void 0, { "active": activeTab === "contact" })}>Contact</button></li></menu> <section class="tabs-content svelte-y9knzg">`);
  if (activeTab === "about") {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<!--[-->`);
    slot($$renderer, $$props, "about", {});
    $$renderer.push(`<!--]-->`);
  } else {
    $$renderer.push("<!--[!-->");
    if (activeTab === "projects") {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<!--[-->`);
      slot($$renderer, $$props, "projects", {});
      $$renderer.push(`<!--]-->`);
    } else {
      $$renderer.push("<!--[!-->");
      if (activeTab === "contact") {
        $$renderer.push("<!--[-->");
        $$renderer.push(`<!--[-->`);
        slot($$renderer, $$props, "contact", {});
        $$renderer.push(`<!--]-->`);
      } else {
        $$renderer.push("<!--[!-->");
      }
      $$renderer.push(`<!--]-->`);
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--></section>`);
  bind_props($$props, { activeTab });
}
function _page($$renderer) {
  $$renderer.push(`<div class="background" style="background-image: linear-gradient(#153a89, #1d2d4e); height: 100vh; display: flex; justify-content: center; margin: -9px; background-position:center; background-size:cover;"><div id="parent" style="margin:auto;"><section style="margin: 30px; display:flex; justify-content:center"><div role="tooltip" class="is-top is-left" style="width:150px; padding:10px; text-align:center; background:linear-gradient(180deg, #fffff, #ebebeb);">⚠️ Work in Progress!</div></section> <div class="window active glass" style="min-width: 450px; max-width:80%; justify-content:center ; margin: auto;"><div class="title-bar" style="background-attachment: scroll;"><div class="title-bar-text">Ben Toon's Website</div> <div class="title-bar-controls"><button aria-label="Help"></button> <button aria-label="Close"></button></div></div> <div class="window-body has-space" style="min-height: 175px;">`);
  Tabs($$renderer, {
    $$slots: {
      about: ($$renderer2) => {
        $$renderer2.push(`<div slot="about"><article id="about"><fieldset><legend>Welcome!</legend> <p style="padding: 3px;">My name is Ben, I am currently a student in the UK studying computer science.</p></fieldset></article></div>`);
      },
      projects: ($$renderer2) => {
        $$renderer2.push(`<div slot="projects"><article id="projects"><p style="padding: 3px;">ummmmm this website i guess</p></article></div>`);
      },
      contact: ($$renderer2) => {
        $$renderer2.push(`<div slot="contact"><article id="contact"><p>Real contact form will go here at some point</p></article></div>`);
      }
    }
  });
  $$renderer.push(`<!----> <section style="position:absolute; bottom: 15px; right:15px; gap: 10px; margin: 2px;"><button aria-label="button" class="button">E-Mail</button> <button aria-label="button" class="button">GitHub</button></section></div></div> <div class="window active glass" role="dialog" aria-labelledby="dialoge-title" id="popup-help"><div class="title-bar"><div class="title-bar-text" id="dialoge-title">Help</div> <div class="title-bar-controls"><button aria-label="Close"></button></div></div> <div class="window-body has-space"><p>This website is built using SvelteKit and the 7.css library</p> <section style="justify-content:end; display:flex;"><button class="button">OK</button></section></div></div></div></div>`);
}
export {
  _page as default
};
