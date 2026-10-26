# DevTrack — Developer Dashboard

A responsive, front-end task and learning dashboard built with **HTML, CSS, and vanilla JavaScript**. No framework, backend, npm installation, or API key is required.

## Features

- Create, edit, complete, and delete tasks
- Category, priority, due date, and notes on each task
- Live task counts, overdue counts, completion percentage, and progress bar
- Search across task title, notes, category, and priority
- Combined filters for status, category, and priority
- Sort by newest, oldest, due date, priority, or title
- Bulk-select visible tasks, complete selected tasks, or delete selected tasks
- Today's task list and category/priority summaries
- Local Storage persistence between reloads on the same browser origin
- Export a JSON backup and import a JSON backup
- Load demo tasks, clear completed tasks, or reset all tasks
- Responsive layout with mobile navigation
- Accessible labels, status messages, keyboard focus states, and confirmation dialogs

## Run locally

1. Extract this folder into your project.
2. Open `index.html` in a browser, or open the folder in VS Code and run it with Live Server.
3. Add tasks and test the controls.
4. Refresh the page to verify Local Storage persistence.

The app uses browser `localStorage`. Data does not sync between browsers or devices, and clearing site data may remove saved tasks. Export backups regularly.

## Folder structure

```text
01-devtrack-dashboard/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

## Suggested manual test checklist

- [ ] Add a task with a valid title
- [ ] Try submitting a blank or too-short title
- [ ] Edit a task and save changes
- [ ] Mark a task complete and pending again
- [ ] Delete a task and cancel a delete confirmation
- [ ] Search by a word in the task title or notes
- [ ] Combine category, priority, and status filters
- [ ] Sort by due date and priority
- [ ] Select visible tasks and complete/delete them
- [ ] Verify statistics and progress update immediately
- [ ] Add a due date in the past and verify overdue status
- [ ] Refresh and verify saved tasks remain
- [ ] Export a backup, then import it
- [ ] Test on a narrow/mobile viewport

## Limitations

This is a front-end learning project, not a production multi-user service. It has no authentication, database, cloud sync, or server-side validation. Anyone using the same browser profile and origin can access the locally stored tasks.
