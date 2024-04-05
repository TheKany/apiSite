import { apiElement } from "../../util/apiElementMake.js";

class ApiResDataEl extends HTMLElement {
  // 관찰할 속성 이름
  static get observedAttributes() {
    return ["api-name", "api-type", "api-desc", "api-default", "api-note"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "api-name") {
      this._apiName = newValue;
    }

    if (name === "api-type") {
      this._apiType = newValue;
    }

    if (name === "api-desc") {
      this._apiDesc = newValue;
    }

    if (name === "api-default") {
      this._apiDefaultValue = newValue;
    }

    if (name === "api-note") {
      this._apiNote = newValue;
    }

    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="table-item"">
        <p class="table__name">${this._apiName}</p>
        <p class="table__type">${this._apiType}</p>
        <p class="table__desc">${this._apiDesc}</p>
        <p class="table__default">${this._apiDefaultValue}</p>
        <p class="table__note">${this._apiNote}</p>
      </li>
      `;
  }
}

apiElement("ApiResDataEl", ApiResDataEl);
