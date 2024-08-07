import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";
import { userUtil } from "../util/userUtil.js";
let root = document.querySelector("main"); 
let template = (item,isOwner,deleteItem) => html`
 <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${item.imageUrl}" alt="example1" />
      <p id="details-title">${item.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="price">Price: €${item.price}</p>
          <p class="weight">Weight: ${item.weight} kg</p>
          <p class="top-speed">Top Speed: ${item.speed} kph</p>
          <p id="car-description">${item.about}.</p>
        </div>
        ${isOwner ? html`
        <div id="action-buttons">
          <a href="/edit/${item._id}" id="edit-btn">Edit</a>
          <a href="javascript:void(0)" id="delete-btn" @click=${deleteItem}>Delete</a>
        </div>
        `:''}
      </div>
    </div>
  </section>
`;


export async function showDetails(ctx) {
    const id = ctx.params.id;
    const item = await dataService.Details(id);
    const isOwner = userUtil.hasOwner(item._ownerId);
  ctx.render(template(item,isOwner,deleteItem), root);

   async function deleteItem() {
    const confirmed = confirm("Are you sure you want to delete this item?");
    if (confirmed) {
        await dataService.del(id)
        ctx.goTo('/catalog');
    }
}
}
