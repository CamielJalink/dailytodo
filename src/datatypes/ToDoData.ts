export interface ToDoData{
  uid: string,
  displayId: number,
  name: string,
  type: ToDoType,
  duedate: string,
  duedateDeviation: number,
}

export enum ToDoType {
  recurring = "recurring",
  single = "single"
}