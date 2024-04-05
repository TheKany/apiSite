import { apiElement } from "../../util/apiElementMake.js";

class ApiReq extends HTMLElement {
  // 관찰할 속성 이름
  static get observedAttributes() {
    return ["api-parameter"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "api-parameter") {
      this._apiParameter = newValue;
    }

    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const $apiReqDataList = document.querySelectorAll(".apiReq-dataList");

    const dataList = [];

    $apiReqDataList.forEach((el) => {
      const data = {
        name: el.querySelector('input[id$="-reqName"]').value,
        type: el.querySelector('input[id$="-reqType"]').value,
        desc: el.querySelector('input[id$="-reqDesc"]').value,
        defaultValue: el.querySelector('input[id$="-reqDefault"]').value,
        note: el.querySelector('input[id$="-reqNote"]').value,
      };

      dataList.push(data);
    });

    this.innerHTML = `
        <h2 class="apiReq-title">Request</h2>
        <div class="apiReq-container">
          <h3 class="apiReq__parameter ${this._apiParameter}">
            <span class="apiReq__parameter-name">${this._apiParameter}</span> 
            <span class="apiReq__parameter-text">Parameters</span>
          </h3>

          <ul class="apiReq__parameter-list">
            <li class="apiReq__parameter-listItem">
              <p class="parameter-name th">이름</p>
              <p class="parameter-type th">타입</p>
              <p class="parameter-desc th">설명</p>
              <p class="parameter-defaultValue th">기본값</p>
              <p class="parameter-note th">비고</p>
            </li>
            ${dataList
              .map(
                (item) =>
                  `
              <li class="apiReq__parameter-listItem">
                <p class="parameter-name">${item.name}</p>
                <p class="parameter-type">${item.type}</p>
                <p class="parameter-desc">${item.desc}</p>
                <p class="parameter-defaultValue">${item.defaultValue}</p>
                <p class="parameter-note">${item.note}</p>
              </li>
              `
              )
              .join("")}
          </ul>
        </div>
      `;
  }
}

apiElement("ApiReq", ApiReq);
