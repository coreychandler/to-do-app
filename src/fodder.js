//not currently used but maybe in future

export function createCheckMark() {
  const checkmarkSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  checkmarkSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  checkmarkSvg.setAttribute("viewBox", "0 0 24 24");
  const checkmarkTitle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "title"
  );
  checkmarkTitle.textContent = "check-outline";
  const checkmarkPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  checkmarkPath.setAttribute(
    "d",
    "M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z"
  );

  checkmarkSvg.appendChild(checkmarkTitle);
  checkmarkSvg.appendChild(checkmarkPath);

  return checkmarkSvg;
}

export function createDeleteButton() {
  const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");

  const title = document.createElementNS(svgNS, "title");
  title.textContent = "trash-can";
  svg.appendChild(title);

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute(
    "d",
    "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"
  );
  svg.appendChild(path);

  return svg;
}
