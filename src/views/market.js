import { getAllItems } from "../data/items.js";
import { get } from "../data/request.js";
import { html, render } from "../lib.js";

const marketTemp = (items) => html`
  <h3 class="heading">Market</h3>
  <section id="dashboard">
    ${items.length ? items.map(itemTemplate) : html`<h3>No Items yet.</h3>`}
  </section>
`;

const itemTemplate = (item) => html`
  <div class="item">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="model">${item.name}</h3>
    <div class="item-info">
      <p class="price">Price: €${item.price}</p>
      <p class="availability">${item.availability}</p>
      <p class="type">Type: ${item.type}</p>
    </div>
    <a class="details-btn" href="/details">Uncover More</a>
  </div>
`;

export async function showMarket(ctx) {
  const events = await getAllItems();

  render(marketTemp(events));
}
