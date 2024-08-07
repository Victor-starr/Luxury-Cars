import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";
let context = null;
let root = document.querySelector("main"); 
let template = (items) => html`
  <section id="search">
<div class="form">
  <h4>Search</h4>
  <form @submit=${onSubmit} class="search-form">
    <input type="text" name="search" id="search-input" />
    <button class="button-list">Search</button>
  </form>
</div>
<div class="search-result">
${items.length === 0 ? html`<h2 class="no-avaliable">No result.</h2>` : items.map(x => createTemp(x))}
</div>
</section>
`;

const createTemp = (item) => html`
<div class="car">
    <img src="${item.imageUrl}" alt="example1"/>
    <h3 class="model">${item.model}</h3>
    <a class="details-btn" href="/details/${item._id}">More Info</a>
  </div>`;

export function showSearch(ctx) {
    const items = [];
  ctx.render(template(items), root); 
  context = ctx;
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('search');
    const result = await dataService.search(query);
    context.render(template(result), root);

}

