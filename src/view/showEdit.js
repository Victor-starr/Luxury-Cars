import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";
const root = document.querySelector("main");

let template = (item,onSubmit) => html`
<section id="edit">
    <div class="form form-auto">
      <h2>Edit Your Car</h2>
      <form @submit=${onSubmit} class="edit-form">
        <input type="text" name="model" id="model" placeholder="Model" .value=${item.model}/>
        <input
          type="text"
          name="imageUrl"
          id="car-image"
          placeholder="Your Car Image URL"
          .value=${item.imageUrl}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
           .value=${item.price}
        />
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight in Kg"
            .value=${item.weight}
        />
        <input
          type="text"
          name="speed"
          id="speed"
          placeholder="Top Speed in Kmh"
          .value=${item.speed}
        />
        <textarea
          id="about"
          name="about"
          placeholder="More About The Car"
          rows="10"
          cols="50"
           .value=${item.about}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const item = await dataService.Details(id);
    console.log(item)
    ctx.render(template(item,onSubmit), root);
    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const { model, imageUrl, price, weight, speed, about } =Object.fromEntries(formData);
        if(!model || !imageUrl || !price || !weight || !speed || !about){
            return alert("All fields are required!");
        }
        const updatedItem = {
            model,
            imageUrl,
            price,
            weight,
            speed,
            about
        };
    
        await dataService.update(id, updatedItem);
        ctx.goTo(`/details/${id}`);
    }
}

