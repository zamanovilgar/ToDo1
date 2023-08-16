const infoMessage = document.querySelector("#infoMessage");
const todoInput = document.querySelector("#todoInput");
const todoSend = document.querySelector("#todoSend");
const todoList = document.querySelector("#todoList");

let todoDate = [];

todoInput.addEventListener("input", function (e) {
  const value = e.target.value;
  if (value.length < 8) {
    infoMessage.classList.add("show");
    return;
  }
  infoMessage.classList.remove("show");

  //   console.log(value);
});
todoSend.addEventListener("click", function () {
  createTodo();
});
function createTodo() {
  const value = todoInput.value;
  if (value.length < 8) {
    alert("Error");
    return;
  }
  todoDate.push(value);
  todoInput.value = "";
  //   console.log(todoDate);
  const newContent = todoDate
    .map((todo, index) => `<li>${index + 1}.${todo}`)
    .join("");
  console.log(newContent);
  todoList.innerHTML = newContent;
}
todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    createTodo();
  }
});
