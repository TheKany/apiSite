import { apiElement } from "../../../util/apiElementMake.js";

class Menu01a extends HTMLElement {
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
    const apiName = "Menu01a";
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
        Menu01a에 대한 설명입니다. Menu01a는 ... 기능을 제공합니다.
      </p>

      <api-url method=${apiMethod} api-url=${apiUrl}></api-url>

      <api-req api-parameter="${apiParameter}"></api-req>

      <div class='apiReq-dataList 01' style="display: none;">
        <input id='01-reqName' value="01-reqNameData"/>
        <input id='01-reqType' value="01-reqTypeData"/>
        <input id='01-reqDesc' value="01-reqDescData"/>
        <input id='01-reqDefault' value="01-reqDefaultData"/>
        <input id='01-reqNote' value="01-reqNoteData"/>
      </div>

      <div class='apiReq-dataList 02' style="display: none;">
        <input id='02-reqName' value="02-reqNameData"/>
        <input id='02-reqType' value="02-reqTypeData"/>
        <input id='02-reqDesc' value="02-reqDescData"/>
        <input id='02-reqDefault' value="02-reqDefaultData"/>
        <input id='02-reqNote' value="02-reqNoteData"/>
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
          
          <div class="table-item">
            <p class="table__name">id</p>
            <p class="table__type">string</p>
            <p class="table__desc">id입니다.</p>
            <p class="table__default">null</p>
            <p class="table__note">>=1 char</p>
          </div>

        </div>

        <div class="json-container">
          <p class="json-title">Response Example</p>

          <pre><code id="jsonList">${resJson}</code></pre>
        </div>
      </div>
      `;
  }
}

apiElement("Menu01_a", Menu01a);
