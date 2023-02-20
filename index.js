import {
  currentId,
  CAROUSEL_CONTENT,
  totalPaginationEle,
  hideLoadingContainerTimeout,
  classes,
  HTML_TEXT,
} from "./constants.js";

let currentActiveSlideIndex = currentId;

const getElement = (id) => {
  return document.getElementById(id);
};

const removeClassFromElemenet = (ele, className) => {
  return ele.classList.remove(className);
};

setTimeout(() => {
  hideElement(getElement(classes.CONTAINER));
  watchPages();
}, hideLoadingContainerTimeout);

function navigate({ id, direction }) {
  removeClassFromElemenet(getElement(currentActiveSlideIndex), classes.ACTIVE);
  if (id || id === 0) {
    currentActiveSlideIndex = id;
  }
  if (direction) {
    currentActiveSlideIndex = currentActiveSlideIndex + direction;
  }
  showPageContent();
}

function showPageContent() {
  const {
    position = "",
    title = "",
    description = "",
    subtitle = "",
    style,
  } = CAROUSEL_CONTENT[currentActiveSlideIndex] || {};
  watchPages();
  const content = getElement(classes.CONTENT);
  const contentSubtitle = getElement(classes.HIGHLIGHT);
  getElement(classes.BACKGROUND_IMAGE).style.backgroundPosition = position;
  getElement(classes.PAGINATION_DECRIPTION).innerText = description;
  contentSubtitle.innerText = subtitle;
  content.innerText = title;
  Object.assign(content.style, style.title);
  Object.assign(contentSubtitle.style, style.subtitle);
}

const hideElement = (ele) => {
  ele.style.display = "none";
};

const showElement = (ele) => {
  ele.style.display = "block";
};

const showLastSlideElements = () => {
  Object.keys(HTML_TEXT).forEach((id) => {
    if (getElement(id)) {
      getElement(id).innerHTML = HTML_TEXT[id];
    }
  });
};

const watchPages = () => {
  getElement(currentActiveSlideIndex).classList.add(classes.ACTIVE);
  if (currentActiveSlideIndex == 9) {
    showElement(getElement(classes.BLACK_BG));
  } else {
    hideElement(getElement(classes.BLACK_BG));
  }
  if (currentActiveSlideIndex == 0) {
    hideElement(getElement(classes.LEFT_ARROW));
  } else {
    showElement(getElement(classes.LEFT_ARROW));
  }
};

const createPagination = () => {
  totalPaginationEle.forEach((ele) => {
    const button = document.createElement("div");
    button.classList.add("btn");
    const sliderButton = document.createElement("div");
    const innerPaginationText = document.createElement("span");
    sliderButton.setAttribute("id", ele);
    innerPaginationText.innerText = `${ele === 0 || ele === 9 ? "-" : ele}`;
    sliderButton.setAttribute("onclick", `navigate({id:${ele}})`);
    innerPaginationText.setAttribute(
      "class",
      ele === 0 || ele === 9 ? "hideText" : ""
    );
    sliderButton.appendChild(innerPaginationText);
    button.appendChild(sliderButton);
    getElement("sliderButtonWrapper").appendChild(button);
  });
  showPageContent();
};

window.addEventListener(
  "load",
  () => {
    createPagination();
    showLastSlideElements();
  },
  false
);

window.navigate = navigate;
