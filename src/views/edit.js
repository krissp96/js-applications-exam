import { getItemById, updateItem } from "../data/items.js";

import { html, page, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (item, onEdit) => html`
  <section id="edit">
    <div class="form form-item">
      <h2>Edit Your Item</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input
          type="text"
          name="item"
          id="item"
          placeholder="Item"
          .value=${item.item}
        />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
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
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
          .value=${item.availability}
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type"
          .value=${item.type}
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
        >
        ${item.description}</textarea
        >
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const item = await getItemById(id);
  render(editTemplate(item, createSubmitHandler(onEdit)));
  async function onEdit(
    { item, imageUrl, price, availability, type, description },
    form
  ) {
    if (
      !item ||
      !imageUrl ||
      !price ||
      !availability ||
      !type ||
      !description
    ) {
      return alert("All fields are required!");
    }
    await updateItem(id, {
      item,
      imageUrl,
      price,
      availability,
      type,
      description,
    });
    console.log(id);
    page.redirect("/details/" + id);
  }
}
