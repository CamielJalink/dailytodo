import React, { Component } from "react";
import { ToDoData } from "./datatypes/ToDoData";
import "./ToDo.scss";
import { CheckCircle, Clock, Info } from "react-feather";

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
          <button className="m-0 p-0 btn btn-link">
            <CheckCircle />
          </button>
          <button className="m-0 p-0 btn btn-link">
            <Clock />
          </button>
          <button className="m-0 p-0 btn btn-link">
            <Info />
          </button>
        </td>
      </tr>
    )
  }
}