import { render } from "../lib.js";
import { html } from "../lib.js";

const notificationTemp = (message) => html` <section id="notifications">
  <div id="errorBox" class="notification">
    <span class="msg">message</span>
  </div>
</section>`;

export function showNotification(message) {
  alert(`${message}`);
}
