import { v as head, w as attr } from "../../chunks/index.js";
const favicon = "/_app/immutable/assets/favicon.T4_y9fEM.png";
function _layout($$renderer, $$props) {
  let { children } = $$props;
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Ben Toon</title>`);
    });
    $$renderer2.push(`<link rel="icon"${attr("href", favicon)}/>`);
  });
  children($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
