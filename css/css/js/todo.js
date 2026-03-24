const STORAGE_KEY = "vanilla-todo-items";
const LONG_TERM_STORAGE_KEY = "vanilla-long-term-items";

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const emptyState = document.getElementById("empty-state");
const remainingCount = document.getElementById("remaining-count");
const clearCompletedBtn = document.getElementById("clear-completed");
const longTermForm = document.getElementById("long-term-form");
const longTermInput = document.getElementById("long-term-input");
const longTermList = document.getElementById("long-term-list");
const longTermEmpty = document.getElementById("long-term-empty");
const CELEBRATION_COLORS = ["#ffd8e8", "#fff5bf", "#d8ebff", "#dbf5d5", "#e8ddff"];

const celebrationLayer = document.createElement("div");
celebrationLayer.className = "celebration-layer";
document.body.appendChild(celebrationLayer);

let todos = loadTodos(STORAGE_KEY);
let longTermTodos = loadTodos(LONG_TERM_STORAGE_KEY);

function loadTodos(key) {
	try {
		const raw = localStorage.getItem(key);
		if (!raw) {
			return [];
		}
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

function saveTodos(key, items) {
	localStorage.setItem(key, JSON.stringify(items));
}

function celebrateTask(checkboxElement) {
	if (!checkboxElement) {
		return;
	}

	const rect = checkboxElement.getBoundingClientRect();
	const originX = rect.left + rect.width / 2;
	const originY = rect.top + rect.height / 2;
	const confettiCount = 22;

	for (let index = 0; index < confettiCount; index += 1) {
		const piece = document.createElement("span");
		piece.className = "confetti-piece";
		piece.style.left = `${originX}px`;
		piece.style.top = `${originY}px`;
		piece.style.backgroundColor = CELEBRATION_COLORS[Math.floor(Math.random() * CELEBRATION_COLORS.length)];

		const angle = (Math.PI * 2 * index) / confettiCount + (Math.random() - 0.5) * 0.55;
		const distance = 45 + Math.random() * 75;
		const travelX = Math.cos(angle) * distance;
		const travelY = Math.sin(angle) * distance - (20 + Math.random() * 35);

		piece.style.setProperty("--travel-x", `${travelX}px`);
		piece.style.setProperty("--travel-y", `${travelY}px`);
		piece.style.setProperty("--spin", `${Math.random() * 760 - 380}deg`);
		piece.style.animationDuration = `${720 + Math.random() * 360}ms`;

		piece.addEventListener("animationend", () => {
			piece.remove();
		});

		celebrationLayer.appendChild(piece);
	}
}

function createTodoItem(todo, onToggle, onDelete) {
	const item = document.createElement("li");
	item.className = `todo-item ${todo.completed ? "completed" : ""}`;

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.checked = todo.completed;
	checkbox.setAttribute("aria-label", "Mark task complete");
	checkbox.addEventListener("change", () => onToggle(todo.id, checkbox.checked, checkbox));

	const text = document.createElement("span");
	text.className = "todo-text";
	text.textContent = todo.text;

	const deleteBtn = document.createElement("button");
	deleteBtn.className = "delete-btn";
	deleteBtn.type = "button";
	deleteBtn.textContent = "Delete";
	deleteBtn.addEventListener("click", () => onDelete(todo.id));

	item.append(checkbox, text, deleteBtn);
	return item;
}

function render() {
	list.innerHTML = "";

	todos.forEach((todo) => {
		const item = createTodoItem(todo, toggleTodo, deleteTodo);
		list.appendChild(item);
	});

	const incompleteCount = todos.filter((todo) => !todo.completed).length;
	const itemLabel = incompleteCount === 1 ? "item" : "items";
	remainingCount.textContent = `${incompleteCount} ${itemLabel} left`;

	emptyState.hidden = todos.length > 0;
	clearCompletedBtn.disabled = !todos.some((todo) => todo.completed);
}

function renderLongTerm() {
	longTermList.innerHTML = "";

	longTermTodos.forEach((todo) => {
		const item = createTodoItem(todo, toggleLongTermTodo, deleteLongTermTodo);
		longTermList.appendChild(item);
	});

	longTermEmpty.hidden = longTermTodos.length > 0;
}

function addTodo(text) {
	todos.unshift({
		id: Date.now() + Math.random(),
		text,
		completed: false,
	});
	saveTodos(STORAGE_KEY, todos);
	render();
}

function toggleTodo(id, isCompleted, checkboxElement) {
	todos = todos.map((todo) =>
		todo.id === id ? { ...todo, completed: isCompleted } : todo
	);
	saveTodos(STORAGE_KEY, todos);
	if (isCompleted) {
		celebrateTask(checkboxElement);
	}
	render();
}

function deleteTodo(id) {
	todos = todos.filter((todo) => todo.id !== id);
	saveTodos(STORAGE_KEY, todos);
	render();
}

function clearCompleted() {
	todos = todos.filter((todo) => !todo.completed);
	saveTodos(STORAGE_KEY, todos);
	render();
}

function addLongTermTodo(text) {
	longTermTodos.unshift({
		id: Date.now() + Math.random(),
		text,
		completed: false,
	});
	saveTodos(LONG_TERM_STORAGE_KEY, longTermTodos);
	renderLongTerm();
}

function toggleLongTermTodo(id, isCompleted, checkboxElement) {
	longTermTodos = longTermTodos.map((todo) =>
		todo.id === id ? { ...todo, completed: isCompleted } : todo
	);
	saveTodos(LONG_TERM_STORAGE_KEY, longTermTodos);
	if (isCompleted) {
		celebrateTask(checkboxElement);
	}
	renderLongTerm();
}

function deleteLongTermTodo(id) {
	longTermTodos = longTermTodos.filter((todo) => todo.id !== id);
	saveTodos(LONG_TERM_STORAGE_KEY, longTermTodos);
	renderLongTerm();
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const text = input.value.trim();
	if (!text) {
		input.focus();
		return;
	}
	addTodo(text);
	form.reset();
	input.focus();
});

clearCompletedBtn.addEventListener("click", clearCompleted);

longTermForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const text = longTermInput.value.trim();
	if (!text) {
		longTermInput.focus();
		return;
	}
	addLongTermTodo(text);
	longTermForm.reset();
	longTermInput.focus();
});

render();
renderLongTerm();
