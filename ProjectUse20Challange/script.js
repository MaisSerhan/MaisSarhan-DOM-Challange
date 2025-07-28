const taskInput = document.getElementById("taskInput");
const imageInput = document.getElementById("imageInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const themeToggle = document.getElementById("themeToggle");
const langSelect = document.getElementById("langSelect");
const title = document.getElementById("title");

let currentLang = "ar";

function updateTaskCount() {
    taskCount.textContent =
    (currentLang === "ar" ? "عدد المهام" : "Total Tasks") +
    ": " +
    taskList.children.length;
}

function createTaskElement(text, imgSrc) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    // أيقونة صغيرة لكل مهمة
    const icon = document.createElement("img");
    icon.src = "https://cdn-icons-png.flaticon.com/512/190/190411.png";
    icon.alt = "task icon";
    icon.className = "task-icon";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;
    span.style.flex = "1";

    // صورة المهمة
    const taskImage = document.createElement("img");
    taskImage.className = "task-image";
    taskImage.src = imgSrc ? imgSrc : "https://cdn-icons-png.flaticon.com/512/190/190411.png";
    taskImage.alt = "صورة المهمة";

    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = currentLang === "ar" ? "تعديل" : "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = currentLang === "ar" ? "حذف" : "Delete";

    const toggleImageBtn = document.createElement("button");
    toggleImageBtn.className = "toggleImage";
    toggleImageBtn.textContent = currentLang === "ar" ? "إظهار الصورة" : "Show Image";

    let editing = false;

    editBtn.addEventListener("click", () => {
    if (!editing) {
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent;
        input.style.flex = "1";

        taskDiv.replaceChild(input, span);
        editBtn.textContent = currentLang === "ar" ? "حفظ" : "Save";
        editing = true;
    } else {
        const input = taskDiv.querySelector("input[type='text']");
        const newText = input.value.trim();
        if (newText) {
        span.textContent = newText;
        taskDiv.replaceChild(span, input);
        editBtn.textContent = currentLang === "ar" ? "تعديل" : "Edit";
        editing = false;
        alert(currentLang === "ar" ? "تم تعديل المهمة." : "Task edited.");
        } else {
        alert(currentLang === "ar" ? "النص لا يمكن أن يكون فارغاً." : "Text cannot be empty.");
        }
    }
    });

    deleteBtn.addEventListener("click", () => {
    if (confirm(currentLang === "ar" ? "هل تريد حذف المهمة؟" : "Do you want to delete the task?")) {
        taskDiv.remove();
        updateTaskCount();
        alert(currentLang === "ar" ? "تم حذف المهمة." : "Task deleted.");
    }
    });

    toggleImageBtn.addEventListener("click", () => {
    if (taskImage.style.display === "none" || taskImage.style.display === "") {
        taskImage.style.display = "block";
        toggleImageBtn.textContent = currentLang === "ar" ? "إخفاء الصورة" : "Hide Image";
    } else {
        taskImage.style.display = "none";
        toggleImageBtn.textContent = currentLang === "ar" ? "إظهار الصورة" : "Show Image";
    }
    });

    taskDiv.appendChild(icon);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(span);
    taskDiv.appendChild(taskImage);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(toggleImageBtn);

    return taskDiv;
}

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const imageUrl = imageInput.value.trim();

    if (taskText) {
    const taskElement = createTaskElement(taskText, imageUrl);
    taskList.appendChild(taskElement);
    taskInput.value = "";
    imageInput.value = "";
    updateTaskCount();
    alert(currentLang === "ar" ? "تمت إضافة المهمة." : "Task added.");
    } else {
    alert(currentLang === "ar" ? "يرجى إدخال نص المهمة." : "Please enter a task.");
    }
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

langSelect.addEventListener("change", () => {
    currentLang = langSelect.value;
    title.textContent = currentLang === "ar" ? "قائمة المهام" : "Task List";
    addTaskBtn.textContent = currentLang === "ar" ? "إضافة" : "Add";
    taskInput.placeholder = currentLang === "ar" ? "أدخل مهمة جديدة" : "Enter new task";

    // تحديث أزرار التعديل والحذف وإظهار/إخفاء الصورة حسب اللغة
    document.querySelectorAll(".edit").forEach((btn) => {
    btn.textContent = currentLang === "ar" ? "تعديل" : "Edit";
    });
    document.querySelectorAll(".delete").forEach((btn) => {
    btn.textContent = currentLang === "ar" ? "حذف" : "Delete";
    });
    document.querySelectorAll(".toggleImage").forEach((btn) => {
    btn.textContent = currentLang === "ar" ? "إظهار الصورة" : "Show Image";
    });

    updateTaskCount();
});