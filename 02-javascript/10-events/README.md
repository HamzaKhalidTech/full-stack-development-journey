# JavaScript Events

This folder covers JavaScript events and event handling in the browser.

## Folder Structure

```text
10-events/
├── index.html
├── 01-event-basics.js
├── 02-click.js
├── 03-input.js
├── 04-submit.js
├── 05-keyboard-events.js
├── 06-mouse-events.js
├── 07-event-object.js
├── 08-event-bubbling.js
└── README.md
```

## Topics Covered

1. Event basics and `addEventListener()`
2. Click events
3. Input events
4. Form submit events
5. Keyboard events
6. Mouse events
7. The event object
8. Event bubbling and propagation

## Key Concepts

- An event represents an action or occurrence in the browser.
- `addEventListener()` registers a handler for an event.
- `event.target` identifies the event's originating target.
- `event.preventDefault()` prevents a default browser action.
- `event.stopPropagation()` stops further propagation.
- Event bubbling allows events to propagate from a target to its ancestors.

## How to Run

1. Open `index.html` in a browser, preferably using VS Code Live Server.
2. Interact with each section.
3. Open browser Developer Tools with `F12`.
4. Check the Console tab for logs.
5. Modify the examples and test again.

## Practice Tasks

- [x] Display a click counter.
- [x] Show live text while typing.
- [x] Handle a form submission without reloading the page.
- [x] Display the last pressed keyboard key.
- [x] Track mouse movement inside an element.
- [x] Inspect the event object's properties.
- [x] Compare bubbling with and without `stopPropagation()`.

## Next Steps

- Event delegation
- `change`, `focus`, and `blur` events
- Form validation
- Building an interactive to-do list
