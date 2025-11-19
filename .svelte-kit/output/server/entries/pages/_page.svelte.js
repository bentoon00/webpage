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
  $$renderer.push(`<div class="background" style="background-image: linear-gradient(rgb(1,1,1), rgb(20,20,20)); height: 100vh; display: flex; justify-content: center; margin: -9px; background-position:center; background-size:cover;"><div class="window active glass" style="min-width: 50%; max-width:80%; justify-content:center ; margin: auto;"><div class="title-bar" style="background-attachment: scroll;"><div class="title-bar-text">Ben Toon's Website</div> <div class="title-bar-controls"><button aria-label="Help"></button> <button aria-label="Close"></button></div></div> <div class="window-body has-space">`);
  Tabs($$renderer, {
    $$slots: {
      about: ($$renderer2) => {
        $$renderer2.push(`<div slot="about"><article id="about"><fieldset><legend>Welcome!</legend> <p style="padding: 3px;">My name is Ben, I am currently a student in the UK studying computer science.</p></fieldset></article></div>`);
      },
      projects: ($$renderer2) => {
        $$renderer2.push(`<div slot="projects"></div>`);
      },
      contact: ($$renderer2) => {
        $$renderer2.push(`<div slot="contact"></div>`);
      }
    }
  });
  $$renderer.push(`<!----> <section style="display: flex; justify-content: end; gap: 6px; margin: 2px;"><button class="button">GitHub</button></section></div></div> <div class="window active is-bright glass" role="dialog" aria-labelledby="dialoge-title" id="popup-help"><div class="title-bar"><div class="title-bar-text" id="dialoge-title">Help</div> <div class="title-bar-controls"><button aria-label="Close">Close</button></div></div> <div class="window-body has-space"><p>This website is built using SvelteKit and the 7.css library</p> <button>Okay</button></div></div></div>`);
}
export {
  _page as default
};
