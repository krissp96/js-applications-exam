import { get, post } from "./request.js";

const endpoints = {
  goToEvent: "data/going",
  peopleGoingEId: (eventId) =>
    `data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`,
  isGoing: (eventId, userId) =>
    `data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function goToEvent(eventId) {
  await post(endpoints.goToEvent, { eventId });
}

export async function getPeopleGoingEId(eventId) {
  return get(endpoints.peopleGoingEId(eventId));
}

export async function isGoing(eventId, userId) {
  return get(endpoints.isGoing(eventId, userId));
}
