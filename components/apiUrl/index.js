import { apiElement } from "../../util/apiElementMake.js";

class ApiUrl extends HTMLElement {
  // 관찰할 속성 이름
  static get observedAttributes() {
    return ["method", "api-url", "api-name", "api-parameter", "api-datas"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "method") {
      this._method = newValue;
    }

    if (name === "api-url") {
      this._apiUrl = newValue;
    }

    this.render();
  }

  connectedCallback() {
    this.render();
    this.attachCopyToClipboardEvent();
  }

  render() {
    const tagClass = this._method === "POST" ? "post" : "get";
    this.innerHTML = `
      <div class="api-container">
        <div class="api__method ${tagClass}">${this._method}</div>
        <span class="api__url">${this._apiUrl}</span>
      </div>
    `;
  }

  // api 주소 클릭시 복사
  attachCopyToClipboardEvent() {
    const $apiUrl = this.querySelector(".api__url");
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    $apiUrl.addEventListener("click", () => {
      navigator.clipboard
        .writeText(this._apiUrl)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "copy API",
          });
        })
        .catch((err) => {
          console.error("클립보드에 복사하는데 실패했습니다.", err);
        });
    });
  }
}

apiElement("ApiUrl", ApiUrl);

// <api-desc api-name="${this._apiName}"></api-desc>

// <api-req api-parameter="${this._apiParameter}" ></api-req>

// <api-res></api-res>
