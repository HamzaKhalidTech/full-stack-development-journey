# JavaScript DOM

This folder covers the Document Object Model (DOM) and how JavaScript interacts with HTML elements in the browser.

## Learning Objectives

- Understand the Document Object Model.
- Select HTML elements using DOM methods.
- Change text content dynamically.
- Update styles using CSS classes.
- Read and modify HTML attributes.
- Create new HTML elements.
- Remove elements from the document.

## Folder Structure

```text
09-dom/
├── 01-dom-basics.html
├── 01-dom-basics.js
├── 02-selecting-elements.js
├── 03-changing-content.js
├── 04-changing-styles.js
├── 05-attributes.js
├── 06-create-elements.js
├── 07-remove-elements.js
└── README.md
```

## Lessons

| File                       | Topic                           |
| -------------------------- | ------------------------------- |
| `01-dom-basics.js`         | DOM fundamentals                |
| `02-selecting-elements.js` | Selecting HTML elements         |
| `03-changing-content.js`   | Updating text content           |
| `04-changing-styles.js`    | Working with CSS classes        |
| `05-attributes.js`         | Reading and updating attributes |
| `06-create-elements.js`    | Creating and appending elements |
| `07-remove-elements.js`    | Removing elements               |

## Key Concepts

### Selecting Elements

```js
document.getElementById("main-title");
document.querySelector(".card");
document.querySelectorAll("p");
```

### Changing Content

```js
const title = document.getElementById("main-title");
title.textContent = "Updated Title";
```

### Changing Styles

```js
const card = document.getElementById("style-card");
card.classList.add("highlight");
card.classList.remove("highlight");
card.classList.toggle("highlight");
```

### Working with Attributes

```js
const link = document.getElementById("website-link");

link.getAttribute("href");
link.setAttribute("href", "https://example.com");
```

### Creating Elements

```js
const item = document.createElement("li");
item.textContent = "New Item";

document.getElementById("item-list").appendChild(item);
```

### Removing Elements

```js
const element = document.getElementById("remove-text");
element.remove();
```

## How to Run

1. Open `01-dom-basics.html` in a browser.
2. Alternatively, use the Live Server extension in VS Code.
3. Open Developer Tools using `F12`.
4. Visit the Console tab to inspect output.
5. Test each button and observe the changes on the page.

**Important:** DOM methods require a browser document. Running these files directly with Node.js will not provide the normal browser DOM by default.

## Practice Tasks

1. Change the main heading when a button is clicked.
2. Count all paragraphs on the page.
3. Add a CSS class to an element.
4. Update an anchor's `href` attribute.
5. Create a list item from user input.
6. Remove an element after a button click.
7. Prevent empty list items from being added.

## Completion Checklist

- [x] Understand the DOM tree.
- [x] Select elements using IDs and CSS selectors.
- [x] Change text content.
- [x] Toggle CSS classes.
- [x] Read and modify attributes.
- [x] Create elements dynamically.
- [x] Remove elements safely.
- [x] Test the examples in a browser.

## Next Steps

Continue with DOM events, form handling, event bubbling, event delegation, and practical JavaScript projects.
