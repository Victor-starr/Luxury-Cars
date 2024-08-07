import { html } from "../../node_modules/lit-html/lit-html.js";
let root = document.querySelector("main"); 
let template = () => html`
  <section id="hero">
    <h1>
      Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
    </h1>
  </section>
`;


export async function showHome(ctx) {
  ctx.render(template(), root);
}
