import { deleteItem, getItemById, updateItem } from "../data/items.js";
import { getPeopleGoingEId, goToEvent, isGoing } from "../data/going.js";
import { html, page, render } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (
  data,
  // hasUser,
  isOwner,
  // visitors,
  // userGoing,
  onDelete
  // onGoing
) => html`

  <section id="details">
    <div id="details-wrapper">
      <div>
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <p id="details-title">${data.name}</p>
      </div>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="details-price">Price: €${data.price}</p>
          <p class="details-availability">${data.availability}</p>
          <p class="type">Type: ${data.type}</p>
          <p id="item-description">${data.description}</p>
        </div>
        <!--Edit and Delete are only for creator-->
         ${
           isOwner
             ? html`
                 <div id="action-buttons">
                   <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                   <a href="" id="delete-btn" @click=${onDelete}>Delete</a>
                 </div>
               `
             : null
         }
    
        </div>
      </div>
    </div>
  </section>
`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  console.log("object");

  // const requests = [getItemById(id)];

  const item = await getItemById(id);

  // const user = getUserData();
  // // if (user) {
  // //   requests.push(isGoing(id, user._id));
  // // }

  // const [items, visitors, userGoing] = await Promise.all(requests);
  const hasUser = !!user;
  const isOwner = hasUser && user._id == item._ownerId;
  render(
    detailsTemplate(
      item,
      hasUser,
      isOwner,
      // visitors,
      // userGoing,
      onDelete
      // onGoing
    )
  );

  async function onDelete() {
    await deleteItem(id);
    page.redirect("/market");
  }

  //   async function onGoing() {
  //     await goToEvent(id);
  //     page.redirect("/catalog/" + id);
  //   }
}
