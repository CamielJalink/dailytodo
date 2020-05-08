export interface ToDoData{
  uid: string,
  name: string,
  type: ToDoType,
  duedate: string,
  duedateDeviation: number,
}

export enum ToDoType {
  recurring = "recurring",
  single = "single"
}