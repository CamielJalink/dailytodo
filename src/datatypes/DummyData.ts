import { ToDoData, ToDoType } from "./ToDoData"

export let dummyData: ToDoData[] = [
  {
    name: "ToDo 1",
    type: ToDoType.single,
    duedate: "test",
    duedateDeviation: 0
  },
  {
    name: "ToDo 2",
    type: ToDoType.recurring,
    duedate: "test2",
    duedateDeviation: 5
  },
  {
    name: "ToDo 3",
    type: ToDoType.single,
    duedate: "test3",
    duedateDeviation: 0
  }
]