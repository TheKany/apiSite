//  커스텀 엘리먼트를 만드는 함수
export function apiElement(name, fnc) {
  let tagName = name.toLowerCase();

  if (name.includes("Api")) {
    const suffix = tagName.replace("api", "");
    tagName = `api-${suffix}`;

    customElements.define(tagName, fnc);
    return;
  }

  if (name.includes("_")) {
    tagName = tagName.replace("_", "-");

    customElements.define(tagName, fnc);
    return;
  }

  const preText = tagName.slice(0, 3);
  const suffix = tagName.slice(3);
  tagName = `${preText}-${suffix}`;

  customElements.define(tagName, fnc);
}
