const { Todo } = require("./Todo");


const ALTSchoolTodoList = new Todo("ALTStudent", 3)

ALTSchoolTodoList.addTodo("Learn javaScript")
ALTSchoolTodoList.addTodo("Learn HTML")
ALTSchoolTodoList.addTodo("Learn CSS")

module.exports = ALTSchoolTodoList;