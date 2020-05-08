import React, { Component } from "react";
import { ToDoData } from "./datatypes/ToDoData";
import "./ToDo.scss";

interface ToDoProps {
  todoData: ToDoData;
}

export default class ToDo extends Component<ToDoProps> {

  render(){
    const todoData = this.props.todoData;

    return(
      <tr className="text-primary">
        <td>{todoData.uid}    </td>
        <td>{todoData.name}   </td>
        <td>{todoData.duedate}</td>
        <td>{todoData.type}   </td>
      </tr>
    )
  }
}