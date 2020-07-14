import { ToDoData, ToDoType } from "./ToDoData"

let date1 = new Date();
let date2 = new Date();
let date3 = new Date();

console.log(date1);

export let dummyData: ToDoData[] = [
  {
    uid: "1",
    displayId: 1,
    name: "ToDo 1",
    description: "",
    type: ToDoType.single,
    recurringDays: 0,
    duedate: date1,
    duedateDeviation: 0
  },
  {
    uid: "2",
    displayId: 2,
    name: "ToDo 2",
    description: "",
    type: ToDoType.recurring,
    recurringDays: 3,
    duedate: date2,
    duedateDeviation: 5
  },
  {
    uid: "3",
    displayId: 3,
    name: "ToDo 3",
    description: "",
    type: ToDoType.single,
    recurringDays: 0,
    duedate: date3,
    duedateDeviation: 0
  }
]