import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-root")
export class AppRoot extends LitElement {
  static styles = css`

  `;

  render() {
    return html`
      <p> Ello Govnr! </p>
    `;
  }
}
