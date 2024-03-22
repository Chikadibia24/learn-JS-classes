const { Todo } = require("./Todo");

const SecurityTodo = new Todo("Security", 2);

SecurityTodo.AddTodo("Sell Apple");
SecurityTodo.AddTodo("Close Gate");
SecurityTodo.AddTodo("Catch Thief");

module.exports = {
  SecurityTodo,
};
