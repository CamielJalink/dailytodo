import { ToDoData, ToDoType } from "./ToDoData"
import moment from "moment";

export let dummyData: ToDoData[] = [
  {
    uid: "1",
    displayId: 1,
    name: "ToDo 1",
    description: "",
    type: ToDoType.single,
    recurringDays: 0,
    duedate: moment("2020-12-25"),
    duedateDeviation: 0
  },
  {
    uid: "2",
    displayId: 2,
    name: "ToDo 2",
    description: "",
    type: ToDoType.recurring,
    recurringDays: 3,
    duedate: moment("2020-08-22"),
    duedateDeviation: 5
  },
  {
    uid: "3",
    displayId: 3,
    name: "ToDo 3",
    description: "",
    type: ToDoType.single,
    recurringDays: 0,
    duedate: moment(),
    duedateDeviation: 0
  }
]