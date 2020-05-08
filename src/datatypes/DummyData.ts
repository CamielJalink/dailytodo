import { ToDoData, ToDoType } from "./ToDoData"

export let dummyData: ToDoData[] = [
  {
    uid: "1",
    name: "ToDo 1",
    type: ToDoType.single,
    duedate: "test",
    duedateDeviation: 0
  },
  {
    uid: "2",
    name: "ToDo 2",
    type: ToDoType.recurring,
    duedate: "test2",
    duedateDeviation: 5
  },
  {
    uid: "3",
    name: "ToDo 3",
    type: ToDoType.single,
    duedate: "test3",
    duedateDeviation: 0
  }
]