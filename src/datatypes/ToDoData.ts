import { Moment } from "moment";


export interface ToDoData{
  uid: string,
  displayId: number,
  name: string,
  description: string,
  type: ToDoType,
  recurringDays: number,
  duedate: Moment,
  duedateDeviation: number,
}

export enum ToDoType {
  recurring = "recurring",
  single = "single"
}