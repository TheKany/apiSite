# Api 문서화

## 폴더 구조

1. page/

- api 문서들을 보관하는 곳

[규칙]

- depth가 있다면 상위 '메인폴더 이름' > 알파벳(문자 a - z) 를 사용한다.

## 작성 방법

[depth가 없는 api]

1. main.html에 있는 li 태그를 복사 후 수정한다.

```
<li class="nav__api-listItem">
    <button
      class="nav__api-listItemButton"
      onclick="onClickPage(this.id)"
      id="${1}"
    >
      ${1}
    </button>
</li>
```

- ${1}은 api의 페이지 이름이다.

2. /page에 있는 api0xx 폴더를 복사 > 붙여넣기 후 index.js에 들어간다.

- "class (1)Api01 extends HTMLElement ..." 에서 (1) 부분의 클래스 이름을 더블클릭해서 선택한 뒤 ctrl + shifh + L 을 눌러 모두 선택 하고 api 페이지 이름을 설정한다.

```
import { apiElement } from "../../util/apiElementMake.js";

class *${1} extends HTMLElement {
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
    const apiName = "api01";
    const apiMethod = "POST";
    const apiUrl = "https://sdfsdf/sdfsdf";
    const apiParameter = "Body";

    // resJson ${4}
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
        api01에 대한 설명입니다. api01는 ... 기능을 제공합니다.
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

          ${5}<div class="table-item">
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

apiElement("${1}", *${1});

```

- ${1}은 api 이름이다. *${1}문자의 첫글자는 무조건 대문자
- ${2}는 api의 설명이다. 글자 제한 없음.
- ${3}은 리스트로 보여줄 reqdata 리스트이다.
- ${4}은 json 코드 예시를 객체/배열 형태로 작성하면 된다.
- ${5}은 res 데이터리스트 이다.
- <div class='apiReq-dataList 01' style="display: none;"> => 01은 구분자이다.
- 구분자와 마찬가지로 아래 id도 바꿔준다.
- 해당 th에 맞는 내용을 input value에 넣는다.
- apiReq-dataList 엘리먼트를 그대로 복사 + 붙여넣기를 통해 사용을 한다.

[depth가 있는 api]

1. main.html에 있는 <b>toggle 클래스를 가지고 있는 li 태그</b>를 복사 후 수정한다.

```
<li class="nav__api-listItem toggle" id="${1}">
    <button class="nav__api-listItem-toggleBtn">${1}</button>
    <ul>
      <li class="nav__api-listItem">
        <button
          class="nav__api-listItemButton"
          onclick="onClickPage(this.id)"
          id="${2}"
        >
          menu01-api01
        </button>
      </li>
      <li class="nav__api-listItem">
        <button
          class="nav__api-listItemButton"
          onclick="onClickPage(this.id)"
          id="${2}"
        >
          menu01-api02
        </button>
      </li>
      <li class="nav__api-listItem">
        <button
          class="nav__api-listItemButton"
          onclick="onClickPage(this.id)"
          id="${2}"
        >
          menu01-api03
        </button>
      </li>
    </ul>
<li>
```

- ${1}은 상위 폴더 이름이다.
- ${2}은 '${1}_ + api 이름'를 사용한 api의 넘버링이다.
  이때, '_'(언더바)를 통해 depth구분을 해줘야한다.
  (${2}pi 이름, ${2}pi 이름, ..., ${2}pi 이름)

2. /page에 상위폴더/
   (/page/${1}/api이름, /page/${1}/api이름, ... /page/${1}/api이름)

3. index.js에 들어간다.

```
import { apiElement } from "../../../util/apiElementMake.js";

class ${1} extends HTMLElement {
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
    const apiName = "";
    const apiMethod = "";
    const apiUrl = "";
    const apiParameter = "";

    this.innerHTML = `
      <h1 class="api__title">${apiName}</h1>

      <p class="apiDesc__texts">
        ${3}
      </p>

      <api-url method=${apiMethod} api-url=${apiUrl}></api-url>

      <api-req api-parameter="${apiParameter}"></api-req>

      ${4}<div class='apiReq-dataList 01' style="display: none;">
        <input id='01-reqName' value="01-reqNameData"/>
        <input id='01-reqType' value="01-reqTypeData"/>
        <input id='01-reqDesc' value="01-reqDescData"/>
        <input id='01-reqDefault' value="01-reqDefaultData"/>
        <input id='01-reqNot' value="01-reqNotData"/>
      </div>

      <div class='apiReq-dataList 02' style="display: none;">
        <input id='02-reqName' value="02-reqNameData"/>
        <input id='02-reqType' value="02-reqTypeData"/>
        <input id='02-reqDesc' value="02-reqDescData"/>
        <input id='02-reqDefault' value="02-reqDefaultData"/>
        <input id='02-reqNot' value="02-reqNotData"/>
      </div>

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

apiElement("${2}", ${1});

```

- ${1}는 class이기 때문에 '\_'를 사용하지 않고 파스칼케이스를 사용한다. (PointUser)
- ${2}는 엘리먼트로 사용해야하므로 스네이크케이스를 사용해준다. (point_user)
- ${3}은 api에 대한 설명 글자 수 제한 없음.
- ${4}은 리스트로 보여줄 reqdata 리스트이다.
- <div class='apiReq-dataList 01' style="display: none;"> => 01은 구분자이다.
- 구분자와 마찬가지로 아래 id도 바꿔준다.
- 해당 th에 맞는 내용을 input value에 넣는다.
- apiReq-dataList 엘리먼트를 그대로 복사 + 붙여넣기를 통해 사용을 한다.
