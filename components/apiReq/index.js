import { apiElement } from "../../util/apiElementMake.js";

class ApiReqDataEl extends HTMLElement {
  // 관찰할 속성 이름
  static get observedAttributes() {
    return ["api-name", "api-type", "api-desc", "api-default", "api-note"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name);
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
      <li class="apiReq__parameter-listItem">
        <p class="parameter-name">${this._apiName}</p>
        <p class="parameter-type">${this._apiType}</p>
        <p class="parameter-desc">${this._apiDesc}</p>
        <p class="parameter-defaultValue">${this._apiDefaultValue}</p>
        <p class="parameter-note">${this._apiNote}</p>
      </li>
      `;
  }
}

apiElement("ApiReqDataEl", ApiReqDataEl);
