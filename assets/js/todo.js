//Classes Encapsulation Methods

class Todo {
  constructor(type, section) {
    this.todoArr = [];
    this.type = type;
    this.section = section;
  }

  get todoList() {
    return `${this.todoArr} ${this.type} ${this.section}`;
  }

  addTodo(todo) {
    this.todoArr.push(todo);
  }

  editTodo(todoEdit, newTodo) {
    //Map over the array with index.
    const newTodoArr = this.todoArr.map((item, index) => {
      if (item === todoEdit) {
        this.todoArr[index] = newTodo;
        return;
      }
    });

    //If todoItem == given
  }
}


module.exports = {
  Todo,
};
