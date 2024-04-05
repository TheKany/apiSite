import { apiElement } from "../../../util/apiElementMake.js";

class Menu01b extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    /**
     *  api 문서 구성
     * @param apiName api 문서 이름
     * @param apiMethod api method 'GET' | 'POST'
     * @param apiUrl api 주소
     * @param apiParameter api 파라미터 종류 'Query' | 'Body'
     * "apiReq-dataList" api requset 데이터 
     * - {
        name: 데이터 이름,
        type: 타입,
        desc: 설명,
        defaultValue: 기본값,
        note: 비고(예시,,),
      },
     */
    const apiName = "Menu01b";
    const apiMethod = "POST";
    const apiUrl = "https://todos.stoplight.io/todos";
    const apiParameter = "Body";

    // resJson
    const responseData = [
      {
        id: {
          name: "id",
          type: "string",
          desc: "id입니다.",
          default: "null",
          note: ">=1 char",
        },
      },
    ];
    const resJson = JSON.stringify(responseData, null, 2);

    this.innerHTML = `
      <h1 class="api__title">${apiName}</h1>

      <p class="apiDesc__texts">
        Menu01b에 대한 설명입니다. Menu01b는 ... 기능을 제공합니다.
      </p>

      <api-url method=${apiMethod} api-url=${apiUrl}></api-url>

      <h2 class="apiReq-title">Request</h2>
      <div class="apiReq-container">
        <h3 class="apiReq__parameter ${apiParameter}">
          <span class="apiReq__parameter-name">${apiParameter}</span> 
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

          <api-reqdatael 
            api-name="name1"
            api-type="type1"
            api-desc="desc1"
            api-default="defaultValue1"
            api-note="note1"
          >
          </api-reqdatael>

          <api-reqdatael 
            api-name="name2"
            api-type="type2"
            api-desc="desc2"
            api-default="defaultValue2"
            api-note="note2"
          >
          </api-reqdatael>

        </ul>
      </div>

      <h2 class="apiRes-title">Response</h2>

      <div class="apiRes-container">   
        <div class="table-container">

          <div class="table-item th">
            <p class="table__name th">이름</p>
            <p class="table__type th">타입</p>
            <p class="table__desc th">설명</p>
            <p class="table__default th">기본값</p>
            <p class="table__note th">비고</p>
          </div>
          
          <api-resdatael 
            api-name="name2"
            api-type="type2"
            api-desc="desc2"
            api-default="defaultValue2"
            api-note="note2"
          >
          </api-resdatael>

        </div>

        <div class="json-container">
          <p class="json-title">Response Example</p>

          <pre><code id="jsonList">${resJson}</code></pre>
        </div>
      </div>
      
      `;
  }
}

apiElement("Menu01_b", Menu01b);
