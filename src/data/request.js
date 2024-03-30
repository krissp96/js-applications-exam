import { getUserData, clearUserData } from "../util.js";

const host = "http://localhost:3030/";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };
  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  //TODO add Authorisation

  const userData = getUserData();
  if (userData) {
    options.headers["X-Authorization"] = userData.accessToken;
  }

  try {
    const response = await fetch(host + url, options);
    if (!response.ok) {
      if (response.status == 403) {
        clearUserData();
      }
      const err = await response.json();
      throw new Error(err.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (err) {
    //TODO add custom error handling and visualization based on exam requirements
    // how to make this work in async setTimeOut(); to check if error handled == true;
    alert(err.message);
    throw err;

    let errorHandled = false;
    setTimeout(() => {
      alert(err.message);
      errorHandled = true;
    }, 0);
    // Optionally, you can check errorHandled here
    throw err;
  }
}

export const get = (url) => request("get", url);
export const post = (url, data) => request("post", url, data);
export const put = (url, data) => request("put", url, data);
export const del = (url) => request("delete", url);
