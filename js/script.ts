interface Work {
  title: string;
  demoLink: string;
  ghLink: string;
  imgSrc: string[];
  description: string;
}

const works: Work[] = [
  {
    title: "Todo List",
    demoLink: "https://react-todo-list-puce-rho.vercel.app/",
    ghLink: "https://github.com/renzosayo/react-todo-list",
    imgSrc: ["./images/todo-list.png"],
    description:
      "A simple web app for your todo list items. Made with React.js with TypeScript",
  },
  {
    title: "Battleship",
    demoLink: "https://renzosayo.github.io/odin-battleship/",
    ghLink: "https://github.com/renzosayo/odin-battleship",
    imgSrc: ["./images/battleship-1.png", "./images/battleship-2.png"],
    description:
      "Play the classic board game Battleship. Made with vanilla Javascript, HTML and CSS",
  },
  {
    title: "Shopping Cart",
    demoLink: "https://odin-react-shopping-cart-nu.vercel.app/",
    ghLink: "https://github.com/renzosayo/odin-react-shopping-cart",
    imgSrc: ["./images/shopping.png", "./images/shop-2.png"],
    description: "A demo shopping app made with React.js",
  },
  {
    title: "Calculator",
    demoLink: "https://renzosayo.github.io/odin-calculator/",
    ghLink: "https://github.com/renzosayo/odin-calculator",
    imgSrc: ["./images/calculator-1.png", "./images/calculator-2.png"],
    description:
      "Basic calculator with the fundamental operations, exponent and decimal functionalities. Made with vanilla Javascript, HTML and CSS",
  },
  {
    title: "Memory Game",
    demoLink: "https://odin-react-memory-card.vercel.app/",
    ghLink: "https://github.com/renzosayo/odin-react-memory-card",
    imgSrc: ["./images/memory-1.png", "./images/memory-2.png"],
    description:
      "A simple memory game. Select all the cards without repeating to win! Images fetched from the Pokemon API. Made with React.js.",
  },
  {
    title: "Etch-a-Sketch",
    demoLink: "https://renzosayo.github.io/etch-a-sketch/",
    ghLink: "https://github.com/renzosayo/etch-a-sketch",
    imgSrc: ["./images/sketch-1.png", "./images/sketch-2.png"],
    description:
      "An app for doodling, similar to a child's toy. Made with vanilla JS, HTML and CSS",
  },
];

/* 
  create a function that creates elements. receives 2 params, tag and css classes to attach
*/

function addClasses(element: Element, classes: string[]): void {
  element.className = classes.reduce((total, className): string => {
    if (total === "") return className;
    return total + " " + className;
  }, "");
}

function buildElement(tag: string, classes: string[]): Element {
  const element = document.createElement(tag);

  // element.className = classes.reduce((total, className): string => {
  //   if (total === "") return className;
  //   return total + " " + className;
  // }, "");

  addClasses(element, classes);

  return element;
}

function buildLink(href: string): Element {
  const link = document.createElement("a");
  link.setAttribute("href", href);
  link.setAttribute("target", "_blank");
  return link;
}

function buildImg(src: string, alt: string, classes: string[] = []): Element {
  const image = document.createElement("img");
  image.setAttribute("src", src);
  image.setAttribute("alt", alt);
  addClasses(image, classes);
  return image;
}

function buildText(tag: string, content: string): Element {
  const text = document.createElement(tag);
  text.textContent = content;
  return text;
}

function appendChildren(parent: Element, children: Element[]): void {
  children.forEach((child): void => {
    parent.appendChild(child);
  });
}

function populateWorks(works: Work[]): void {
  const worksDiv = document.querySelector(".works");

  works.forEach((work): void => {
    const { title, demoLink, ghLink, imgSrc, description } = work;

    // create card
    const card = buildElement("div", ["work-card"]);

    // create and append display image to card
    const image = buildImg(imgSrc[0], title);
    // add demolink to image
    const imageLink = buildLink(demoLink);
    imageLink.appendChild(image);

    // create card-details div. contains title, github link, and shortcut to demo
    const details = buildElement("div", ["card-details"]);
    const cardHeader = buildElement("div", ["card-header"]);
    const cardTitle = buildText("h3", title);
    const githubLogo = buildLink(ghLink);
    const demoLogo = buildLink(demoLink);

    githubLogo.appendChild(
      buildImg("./images/icons/GitHub_logo.png", "github logo", ["mini-logo"])
    );

    demoLogo.appendChild(
      buildImg("./images/icons/new-tab.png", "new tab logo", ["mini-logo"])
    );

    appendChildren(cardHeader, [cardTitle, githubLogo, demoLogo]);
    details.appendChild(cardHeader);

    // create p for descriptions
    const desc = buildText("p", description);

    appendChildren(card, [imageLink, details, desc]);
    worksDiv?.appendChild(card);
  });
}

populateWorks(works);
