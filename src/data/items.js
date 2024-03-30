import { get, post, put, del } from "./request.js";

const endpoints = {
  dashboard: "/data/cyberpunk?sortBy=_createdOn%20desc",
  items: "/data/cyberpunk",
  details: "data/cyberpunk/",
  getItemById: "/data/cyberpunk/",
};
///if needed to sort in ascending, just use the value to sort on and nothing after 20 .. ex ?sortBy=_dateOn%20

export async function getAllItems() {
  return get(endpoints.dashboard);
}

export async function getItemById(id) {
  return get(endpoints.details + id);
}

export async function createItem(
  item,
  imageUrl,
  price,
  availability,
  type,
  description
) {
  return post(endpoints.items, {
    item,
    imageUrl,
    price,
    availability,
    type,
    description,
  });
}
// "1840a313-225c-416a-817a-9954d4609f7c"

export async function updateItem(id, data) {
  return put(endpoints.getItemById + id, data);
}

export async function deleteItem(id) {
  console.log(endpoints.getItemById);
  return del(endpoints.getItemById + id);
}
