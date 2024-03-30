import { get, post, put, del } from "./request.js";

const endpoints = {
  dashboard: "data/events?sortBy=_createdOn%20desc",
  events: "data/events/",
  details: "data/events/",
  getEventById: "data/events/",
};
///if needed to sort in ascending, just use the value to sort on and nothing after 20 .. ex ?sortBy=_dateOn%20

export async function getAllEvents() {
  return get(endpoints.dashboard);
}

export async function getEventById(id) {
  return get(endpoints.details + id);
}

export async function createEvent(name, imageUrl, category, description, date) {
  return post(endpoints.events, {
    name,
    imageUrl,
    category,
    description,
    date,
  });
}
// "1840a313-225c-416a-817a-9954d4609f7c"

export async function updateEvent(id, data) {
  return put(endpoints.getEventById + id, data);
}

export async function deleteEvent(id) {
  console.log(endpoints.getEventById);
  return del(endpoints.getEventById + id);
}
