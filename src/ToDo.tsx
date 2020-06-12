import React, { Component } from "react";
import { ToDoData } from "./datatypes/ToDoData";
import "./ToDo.scss";
import { CheckCircle, Clock, Search } from "react-feather";

interface ToDoProps {
  todoData: ToDoData;
}

export default class ToDo extends Component<ToDoProps> {

  render(){
    const todoData = this.props.todoData;

    return(
      <tr>
        <td>{todoData.uid}    </td>
        <td>{todoData.name}   </td>
        <td>{todoData.duedate}</td>
        <td>{todoData.type}   </td>
        <td className="d-flex justify-content-around">
          <CheckCircle/>
          <Clock/>
          <Search/>
        </td>
      </tr>
    )
  }
}