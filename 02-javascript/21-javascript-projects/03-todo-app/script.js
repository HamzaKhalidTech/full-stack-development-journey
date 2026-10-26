/* DevTrack: functional task manager, analytics, backup and persistence. */
"use strict";

const STORAGE_KEY = "devtrack-complete-v1";
const CATEGORIES = [
  "JavaScript",
  "HTML & CSS",
  "React",
  "Backend",
  "DSA",
  "Career",
  "Personal",
  "Other",
];
const PRIORITY_RANK = { high: 3, medium: 2, low: 1 };

const $ = (selector) => document.querySelector(selector);

const els = {
  sidebar: $("#sidebar"),
  mobileMenu: $("#mobile-menu"),
  navLinks: $$(".nav-link"),
  date: $("#today-date"),
  greeting: $("#greeting-title"),
  total: $("#stat-total"),
  completed: $("#stat-completed"),
  pending: $("#stat-pending"),
  overdue: $("#stat-overdue"),
  completedNote: $("#stat-completed-note"),
  navCount: $("#nav-task-count"),
  progressPercent: $("#progress-percent"),
  progressFill: $("#progress-fill"),
  progressTrack: $("#progress-track"),
  progressMessage: $("#progress-message"),
  progressCount: $("#progress-count"),
  form: $("#task-form"),
  editingId: $("#editing-id"),
  title: $("#task-title"),
  category: $("#task-category"),
  priority: $("#task-priority"),
  due: $("#task-due"),
  notes: $("#task-notes"),
  saveTask: $("#save-task-btn"),
  cancelEdit: $("#cancel-edit-btn"),
  formFeedback: $("#form-feedback"),
  search: $("#task-search"),
  filterStatus: $("#filter-status"),
  filterCategory: $("#filter-category"),
  filterPriority: $("#filter-priority"),
  sort: $("#sort-tasks"),
  selectAll: $("#select-all-visible"),
  selectedCount: $("#selected-count"),
  bulkComplete: $("#bulk-complete-btn"),
  bulkDelete: $("#bulk-delete-btn"),
  list: $("#task-list"),
  visibleCount: $("#visible-count"),
  clearCompleted: $("#clear-completed-btn"),
  todayList: $("#today-list"),
  todayBadge: $("#today-badge"),
  categories: $("#category-breakdown"),
  priorities: $("#priority-overview"),
  export: $("#export-btn"),
  importButton: $("#import-btn"),
  importFile: $("#import-file"),
  demo: $("#demo-btn"),
  reset: $("#reset-btn"),
  storageNote: $("#storage-note"),
  toastRegion: $("#toast-region"),
  dialog: $("#confirm-dialog"),
  dialogTitle: $("#dialog-title"),
  dialogMessage: $("#dialog-message"),
  dialogConfirm: $("#dialog-confirm"),
  topAdd: $("#top-add-btn"),
  heroAdd: $("#hero-add-btn"),
  panelAdd: $("#panel-add-btn"),
};

let tasks = loadTasks();
let selectedIds = new Set();
let toastTimer = null;
let dialogAction = null;

function localDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function makeId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function normalizeTask(raw) {
  if (!raw || typeof raw !== "object") return null;
  if (typeof raw.title !== "string" || !raw.title.trim()) return null;
  const priority = ["high", "medium", "low"].includes(raw.priority)
    ? raw.priority
    : "medium";
  const category = CATEGORIES.includes(raw.category) ? raw.category : "Other";
  return {
    id: typeof raw.id === "string" && raw.id ? raw.id : makeId(),
    title: raw.title.trim().slice(0, 120),
    category,
    priority,
    dueDate:
      typeof raw.dueDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw.dueDate)
        ? raw.dueDate
        : "",
    notes: typeof raw.notes === "string" ? raw.notes.slice(0, 240) : "",
    completed: raw.completed === true,
    createdAt:
      typeof raw.createdAt === "string"
        ? raw.createdAt
        : new Date().toISOString(),
    completedAt: typeof raw.completedAt === "string" ? raw.completedAt : "",
  };
}

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizeTask).filter(Boolean);
  } catch (error) {
    console.error("Unable to load DevTrack data:", error);
    return [];
  }
}

function saveTasks({ silent = true } = {}) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    els.storageNote.textContent = `Saved locally · ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    els.storageNote.style.color = "var(--green)";
    return true;
  } catch (error) {
    console.error("Unable to save DevTrack data:", error);
    els.storageNote.textContent = "Could not save data — export a backup";
    els.storageNote.style.color = "var(--red)";
    if (!silent)
      showToast(
        "Browser storage is full or unavailable. Export a backup.",
        "error",
      );
    return false;
  }
}

function isOverdue(task) {
  return (
    !task.completed && Boolean(task.dueDate) && task.dueDate < localDateString()
  );
}

function isDueToday(task) {
  return !task.completed && task.dueDate === localDateString();
}

function formatDate(dateString) {
  if (!dateString) return "No due date";
  const date = new Date(`${dateString}T12:00:00`);
  return Number.isNaN(date.getTime())
    ? dateString
    : date.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
}

function formatCreatedAt(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Added recently";
  return `Added ${date.toLocaleDateString(undefined, { month: "short", day: "numeric" })}`;
}

function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast${type === "error" ? " error" : ""}`;
  toast.textContent = message;
  els.toastRegion.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3200);
}

function setFormFeedback(message = "", isError = false) {
  els.formFeedback.textContent = message;
  els.formFeedback.classList.toggle("error", isError);
}

function resetForm() {
  els.form.reset();
  els.editingId.value = "";
  els.category.value = "JavaScript";
  els.priority.value = "medium";
  els.saveTask.textContent = "Add task";
  els.cancelEdit.classList.add("hidden");
  setFormFeedback("");
}

function focusTaskForm() {
  els.form.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => els.title.focus(), 250);
}

function openEditForm(taskId) {
  const task = tasks.find((item) => item.id === taskId);
  if (!task) return;
  els.editingId.value = task.id;
  els.title.value = task.title;
  els.category.value = task.category;
  els.priority.value = task.priority;
  els.due.value = task.dueDate;
  els.notes.value = task.notes;
  els.saveTask.textContent = "Save changes";
  els.cancelEdit.classList.remove("hidden");
  setFormFeedback(`Editing: ${task.title}`);
  focusTaskForm();
}

function addTask(data) {
  const task = normalizeTask({
    ...data,
    id: makeId(),
    completed: false,
    createdAt: new Date().toISOString(),
    completedAt: "",
  });
  if (!task) return false;
  tasks.unshift(task);
  saveTasks({ silent: false });
  selectedIds.clear();
  renderAll();
  showToast("Task added successfully.");
  return true;
}

function updateTask(taskId, data) {
  const index = tasks.findIndex((item) => item.id === taskId);
  if (index < 0) return false;
  tasks[index] = normalizeTask({ ...tasks[index], ...data, id: taskId });
  saveTasks({ silent: false });
  renderAll();
  showToast("Task updated successfully.");
  return true;
}

function toggleTask(taskId, completed) {
  const task = tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.completed = typeof completed === "boolean" ? completed : !task.completed;
  task.completedAt = task.completed ? new Date().toISOString() : "";
  saveTasks();
  renderAll();
  showToast(
    task.completed ? "Task marked complete." : "Task moved back to pending.",
  );
}

function deleteTask(taskId) {
  const task = tasks.find((item) => item.id === taskId);
  if (!task) return;
  tasks = tasks.filter((item) => item.id !== taskId);
  selectedIds.delete(taskId);
  saveTasks({ silent: false });
  renderAll();
  showToast("Task deleted.");
}

function confirmAction(title, message, action, confirmText = "Confirm") {
  els.dialogTitle.textContent = title;
  els.dialogMessage.textContent = message;
  els.dialogConfirm.textContent = confirmText;
  dialogAction = action;
  if (typeof els.dialog.showModal === "function") {
    els.dialog.showModal();
  } else if (window.confirm(message)) {
    action();
    dialogAction = null;
  }
}

els.dialog.addEventListener("close", () => {
  if (
    els.dialog.returnValue === "confirm" &&
    typeof dialogAction === "function"
  )
    dialogAction();
  dialogAction = null;
});

function getVisibleTasks() {
  const query = els.search.value.trim().toLowerCase();
  const status = els.filterStatus.value;
  const category = els.filterCategory.value;
  const priority = els.filterPriority.value;
  const sort = els.sort.value;

  const result = tasks.filter((task) => {
    const searchable =
      `${task.title} ${task.notes} ${task.category} ${task.priority}`.toLowerCase();
    const matchesSearch = searchable.includes(query);
    const matchesStatus =
      status === "all" ||
      (status === "completed" && task.completed) ||
      (status === "pending" && !task.completed && !isOverdue(task)) ||
      (status === "overdue" && isOverdue(task));
    const matchesCategory = category === "all" || task.category === category;
    const matchesPriority = priority === "all" || task.priority === priority;
    return matchesSearch && matchesStatus && matchesCategory && matchesPriority;
  });

  result.sort((a, b) => {
    if (sort === "created-asc")
      return new Date(a.createdAt) - new Date(b.createdAt);
    if (sort === "due-asc") {
      if (!a.dueDate && !b.dueDate)
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return a.dueDate.localeCompare(b.dueDate);
    }
    if (sort === "priority")
      return PRIORITY_RANK[b.priority] - PRIORITY_RANK[a.priority];
    if (sort === "title") return a.title.localeCompare(b.title);
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  return result;
}

function renderTasks() {
  const visible = getVisibleTasks();
  const visibleIds = new Set(visible.map((task) => task.id));
  selectedIds = new Set([...selectedIds].filter((id) => visibleIds.has(id)));
  els.list.replaceChildren();

  if (!visible.length) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    const symbol = document.createElement("span");
    symbol.className = "empty-symbol";
    symbol.textContent = tasks.length ? "⌕" : "✦";
    const heading = document.createElement("h3");
    heading.textContent = tasks.length
      ? "No matching tasks"
      : "Your task list is empty";
    const message = document.createElement("p");
    message.textContent = tasks.length
      ? "Try changing your search or filters."
      : "Add your first task using the form above.";
    empty.append(symbol, heading, message);
    els.list.appendChild(empty);
  } else {
    visible.forEach((task) => {
      const li = document.createElement("li");
      li.className = `task-item${task.completed ? " is-completed" : ""}`;
      li.dataset.id = task.id;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "task-check";
      checkbox.checked = task.completed;
      checkbox.dataset.action = "toggle";
      checkbox.dataset.id = task.id;
      checkbox.setAttribute(
        "aria-label",
        `Mark ${task.title} ${task.completed ? "pending" : "completed"}`,
      );

      const main = document.createElement("div");
      main.className = "task-main";
      const title = document.createElement("p");
      title.className = "task-title";
      title.textContent = task.title;
      const meta = document.createElement("div");
      meta.className = "task-meta";

      const category = document.createElement("span");
      category.className = "tag";
      category.textContent = task.category;
      const priority = document.createElement("span");
      priority.className = `tag priority-tag priority-${task.priority}`;
      priority.textContent = `${task.priority} priority`;
      meta.append(category, priority);

      if (task.dueDate) {
        const due = document.createElement("span");
        due.className = "tag";
        due.textContent = `Due ${formatDate(task.dueDate)}`;
        if (isOverdue(task)) due.classList.add("due-overdue");
        else if (isDueToday(task)) due.classList.add("due-today");
        meta.appendChild(due);
      }
      if (task.notes) {
        const note = document.createElement("span");
        note.className = "tag";
        note.textContent = `Note: ${task.notes}`;
        meta.appendChild(note);
      }
      main.append(title, meta);

      const status = document.createElement("span");
      status.className = `task-status${task.completed ? " completed" : ""}`;
      status.textContent = task.completed
        ? "Completed"
        : isOverdue(task)
          ? "Overdue"
          : "Pending";

      const actions = document.createElement("div");
      actions.className = "task-actions";
      const edit = document.createElement("button");
      edit.type = "button";
      edit.className = "task-action";
      edit.textContent = "✎";
      edit.title = "Edit task";
      edit.setAttribute("aria-label", `Edit ${task.title}`);
      edit.dataset.action = "edit";
      edit.dataset.id = task.id;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "task-action delete";
      remove.textContent = "×";
      remove.title = "Delete task";
      remove.setAttribute("aria-label", `Delete ${task.title}`);
      remove.dataset.action = "delete";
      remove.dataset.id = task.id;
      actions.append(edit, remove);
      li.append(checkbox, main, status, actions);
      els.list.appendChild(li);
    });
  }

  els.visibleCount.textContent = `Showing ${visible.length} of ${tasks.length} task${tasks.length === 1 ? "" : "s"}`;
  els.selectAll.checked =
    visible.length > 0 && visible.every((task) => selectedIds.has(task.id));
  els.selectAll.indeterminate =
    visible.some((task) => selectedIds.has(task.id)) && !els.selectAll.checked;
  els.selectedCount.textContent = `${selectedIds.size} selected`;
  els.bulkComplete.disabled = selectedIds.size === 0;
  els.bulkDelete.disabled = selectedIds.size === 0;
}

function renderStats() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.filter((task) => !task.completed).length;
  const overdue = tasks.filter(isOverdue).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  els.total.textContent = total;
  els.completed.textContent = completed;
  els.pending.textContent = pending;
  els.overdue.textContent = overdue;
  els.completedNote.textContent = total
    ? `${percent}% of all tasks`
    : "Tasks finished";
  els.navCount.textContent = total;
  els.progressPercent.textContent = `${percent}%`;
  els.progressFill.style.width = `${percent}%`;
  els.progressTrack.setAttribute("aria-valuenow", String(percent));
  els.progressCount.textContent = `${completed} of ${total} complete`;

  if (total === 0)
    els.progressMessage.textContent = "Add a task to get started.";
  else if (percent === 100)
    els.progressMessage.textContent = "Excellent — every task is complete!";
  else if (percent >= 70)
    els.progressMessage.textContent =
      "You're close. Finish the remaining tasks!";
  else if (percent >= 30)
    els.progressMessage.textContent =
      "Good momentum. Keep taking the next step.";
  else
    els.progressMessage.textContent =
      "Every completed task is progress. Keep going.";

  const hour = new Date().getHours();
  els.greeting.textContent =
    hour < 12
      ? "Make this morning count."
      : hour < 17
        ? "Make today count."
        : "Finish strong today.";
}

function renderToday() {
  const todayTasks = tasks.filter(
    (task) => isDueToday(task) || (!task.dueDate && !task.completed),
  );
  els.todayBadge.textContent = `${todayTasks.length} task${todayTasks.length === 1 ? "" : "s"}`;
  els.todayList.replaceChildren();
  if (!todayTasks.length) {
    const empty = document.createElement("p");
    empty.className = "today-empty";
    empty.textContent =
      "No tasks due today. Add a task with today's date to see it here.";
    els.todayList.appendChild(empty);
    return;
  }

  todayTasks.sort(
    (a, b) =>
      Number(a.completed) - Number(b.completed) ||
      PRIORITY_RANK[b.priority] - PRIORITY_RANK[a.priority],
  );
  todayTasks.slice(0, 8).forEach((task) => {
    const row = document.createElement("label");
    row.className = `today-item${task.completed ? " completed" : ""}`;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.dataset.action = "toggle";
    checkbox.dataset.id = task.id;
    checkbox.setAttribute("aria-label", `Toggle ${task.title}`);
    const title = document.createElement("span");
    title.textContent = task.title;
    const category = document.createElement("small");
    category.textContent = task.category;
    row.append(checkbox, title, category);
    els.todayList.appendChild(row);
  });
}

function renderCategories() {
  els.categories.replaceChildren();
  if (!tasks.length) {
    const empty = document.createElement("p");
    empty.className = "today-empty";
    empty.textContent = "Category stats will appear when you add tasks.";
    els.categories.appendChild(empty);
    return;
  }
  const grouped = new Map();
  tasks.forEach((task) => {
    if (!grouped.has(task.category))
      grouped.set(task.category, { total: 0, completed: 0 });
    const entry = grouped.get(task.category);
    entry.total += 1;
    if (task.completed) entry.completed += 1;
  });
  [...grouped.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .forEach(([category, data]) => {
      const row = document.createElement("div");
      row.className = "category-row";
      const labelRow = document.createElement("div");
      labelRow.className = "category-label-row";
      const name = document.createElement("span");
      name.textContent = category;
      const value = document.createElement("span");
      value.textContent = `${data.completed}/${data.total}`;
      labelRow.append(name, value);
      const track = document.createElement("div");
      track.className = "mini-track";
      const fill = document.createElement("div");
      fill.className = "mini-fill";
      fill.style.width = `${Math.round((data.completed / data.total) * 100)}%`;
      track.appendChild(fill);
      row.append(labelRow, track);
      els.categories.appendChild(row);
    });
}

function renderPriorities() {
  els.priorities.replaceChildren();
  ["high", "medium", "low"].forEach((priority) => {
    const total = tasks.filter(
      (task) => task.priority === priority && !task.completed,
    ).length;
    const row = document.createElement("div");
    row.className = "priority-row";
    const left = document.createElement("span");
    left.className = "priority-left";
    const dot = document.createElement("span");
    dot.className = `priority-dot ${priority}`;
    const label = document.createElement("span");
    label.textContent = `${priority[0].toUpperCase()}${priority.slice(1)} priority`;
    left.append(dot, label);
    const count = document.createElement("strong");
    count.textContent = total;
    row.append(left, count);
    els.priorities.appendChild(row);
  });
}

function renderAll() {
  renderStats();
  renderTasks();
  renderToday();
  renderCategories();
  renderPriorities();
}

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = els.title.value.trim();
  if (title.length < 3) {
    setFormFeedback("Please enter at least 3 characters.", true);
    els.title.focus();
    return;
  }
  if (title.length > 120) {
    setFormFeedback("Title must be 120 characters or fewer.", true);
    return;
  }
  const data = {
    title,
    category: els.category.value,
    priority: els.priority.value,
    dueDate: els.due.value,
    notes: els.notes.value.trim(),
  };
  if (els.editingId.value) {
    const id = els.editingId.value;
    if (updateTask(id, data)) resetForm();
  } else {
    if (addTask(data)) {
      resetForm();
      els.title.focus();
    }
  }
});

els.cancelEdit.addEventListener("click", resetForm);

els.list.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches('[data-action="toggle"]'))
    toggleTask(target.dataset.id, target.checked);
});

els.todayList.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches('[data-action="toggle"]'))
    toggleTask(target.dataset.id, target.checked);
});

els.list.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const { action, id } = button.dataset;
  if (action === "edit") openEditForm(id);
  if (action === "delete") {
    const task = tasks.find((item) => item.id === id);
    confirmAction(
      "Delete this task?",
      `“${task?.title || "This task"}” will be permanently removed from this browser.`,
      () => deleteTask(id),
      "Delete task",
    );
  }
});

[
  els.search,
  els.filterStatus,
  els.filterCategory,
  els.filterPriority,
  els.sort,
].forEach((control) => {
  control.addEventListener(
    control === els.search ? "input" : "change",
    renderTasks,
  );
});

els.selectAll.addEventListener("change", () => {
  getVisibleTasks().forEach((task) => {
    if (els.selectAll.checked) selectedIds.add(task.id);
    else selectedIds.delete(task.id);
  });
  renderTasks();
});

els.bulkComplete.addEventListener("click", () => {
  if (!selectedIds.size) return;
  const ids = new Set(selectedIds);
  tasks.forEach((task) => {
    if (ids.has(task.id)) {
      task.completed = true;
      task.completedAt = new Date().toISOString();
    }
  });
  selectedIds.clear();
  saveTasks({ silent: false });
  renderAll();
  showToast("Selected tasks marked complete.");
});

els.bulkDelete.addEventListener("click", () => {
  if (!selectedIds.size) return;
  const ids = new Set(selectedIds);
  confirmAction(
    "Delete selected tasks?",
    `${ids.size} task(s) will be permanently removed.`,
    () => {
      tasks = tasks.filter((task) => !ids.has(task.id));
      selectedIds.clear();
      saveTasks({ silent: false });
      renderAll();
      showToast("Selected tasks deleted.");
    },
    "Delete selected",
  );
});

els.clearCompleted.addEventListener("click", () => {
  const count = tasks.filter((task) => task.completed).length;
  if (!count) {
    showToast("There are no completed tasks to clear.");
    return;
  }
  confirmAction(
    "Clear completed tasks?",
    `${count} completed task(s) will be removed. Consider exporting a backup first.`,
    () => {
      tasks = tasks.filter((task) => !task.completed);
      selectedIds.clear();
      saveTasks({ silent: false });
      renderAll();
      showToast("Completed tasks cleared.");
    },
    "Clear completed",
  );
});

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

els.export.addEventListener("click", () => {
  downloadJSON(
    {
      app: "DevTrack",
      version: 1,
      exportedAt: new Date().toISOString(),
      tasks,
    },
    `devtrack-backup-${localDateString()}.json`,
  );
  showToast("Backup exported.");
});

els.importButton.addEventListener("click", () => els.importFile.click());

els.importFile.addEventListener("change", async () => {
  const file = els.importFile.files?.[0];
  if (!file) return;
  try {
    if (file.size > 5 * 1024 * 1024)
      throw new Error("File is larger than 5 MB.");
    const parsed = JSON.parse(await file.text());
    const imported = Array.isArray(parsed) ? parsed : parsed.tasks;
    if (!Array.isArray(imported))
      throw new Error("This file does not contain a task array.");
    const validTasks = imported.map(normalizeTask).filter(Boolean);
    if (!validTasks.length && imported.length)
      throw new Error("No valid tasks were found in the backup.");
    confirmAction(
      "Import backup?",
      `Import ${validTasks.length} valid task(s)? This replaces the current task list. Export your current data first if you need it.`,
      () => {
        const seen = new Set();
        tasks = validTasks.map((task) => {
          if (seen.has(task.id)) task.id = makeId();
          seen.add(task.id);
          return task;
        });
        selectedIds.clear();
        saveTasks({ silent: false });
        resetForm();
        renderAll();
        showToast(`Imported ${tasks.length} task(s).`);
      },
      "Import tasks",
    );
  } catch (error) {
    showToast(error.message || "Could not read this backup file.", "error");
  } finally {
    els.importFile.value = "";
  }
});

els.demo.addEventListener("click", () => {
  const demos = [
    {
      title: "Review JavaScript array methods",
      category: "JavaScript",
      priority: "high",
      dueDate: localDateString(),
      notes: "Practice map, filter, find and reduce.",
    },
    {
      title: "Build a responsive pricing card",
      category: "HTML & CSS",
      priority: "medium",
      dueDate: "",
      notes: "Use Grid and a mobile media query.",
    },
    {
      title: "Solve two DSA problems",
      category: "DSA",
      priority: "high",
      dueDate: "",
      notes: "Explain time complexity after solving.",
    },
    {
      title: "Read about React components",
      category: "React",
      priority: "low",
      dueDate: "",
      notes: "",
    },
    {
      title: "Update developer portfolio",
      category: "Career",
      priority: "medium",
      dueDate: "",
      notes: "Add a project case study.",
    },
  ];
  confirmAction(
    "Load demo tasks?",
    "Demo tasks will be added to your existing list. You can edit or delete them afterwards.",
    () => {
      const newTasks = demos.map((item) =>
        normalizeTask({
          ...item,
          id: makeId(),
          completed: false,
          createdAt: new Date().toISOString(),
        }),
      );
      tasks = [...newTasks, ...tasks];
      saveTasks({ silent: false });
      renderAll();
      showToast("Demo tasks added.");
    },
    "Load demo",
  );
});

els.reset.addEventListener("click", () => {
  if (!tasks.length) {
    showToast("Your task list is already empty.");
    return;
  }
  confirmAction(
    "Delete all tasks?",
    "This removes every task from this browser. Export a backup first if you want to keep your data.",
    () => {
      tasks = [];
      selectedIds.clear();
      saveTasks({ silent: false });
      resetForm();
      renderAll();
      showToast("All tasks deleted.");
    },
    "Delete everything",
  );
});

function addStarterTask() {
  if (tasks.length) return;
  // The app starts empty intentionally so the user can create their own task.
}

[els.topAdd, els.heroAdd, els.panelAdd].forEach((button) =>
  button.addEventListener("click", focusTaskForm),
);

els.mobileMenu.addEventListener("click", () => {
  const isOpen = els.sidebar.classList.toggle("open");
  els.mobileMenu.setAttribute("aria-expanded", String(isOpen));
});

els.navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    els.navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    els.sidebar.classList.remove("open");
    els.mobileMenu.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    els.search.focus();
  }
  if (event.key === "Escape" && els.sidebar.classList.contains("open")) {
    els.sidebar.classList.remove("open");
    els.mobileMenu.setAttribute("aria-expanded", "false");
  }
});

els.date.textContent = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  month: "long",
  day: "numeric",
});
addStarterTask();
renderAll();
saveTasks();
