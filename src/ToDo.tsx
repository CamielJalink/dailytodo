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
      <tr className="d-flex">
        <td className="col-1">{todoData.displayId} </td>
        <td className="col-5">{todoData.name}      </td>
        <td className="col-2">{todoData.duedate.toString() } </td>
        <td className="col-2">{todoData.type}      </td>
        <td className="col-2 d-flex justify-content-between p-0">
          <button className="m-0 px-2 py-0 btn btn-link">
            <CheckCircle />
          </button>
          <button className="m-0 px-2 py-0 btn btn-link">
            <Clock />
          </button>
          <button className="m-0 px-2 py-0 btn btn-link">
            <Info />
          </button>
        </td>
      </tr>
    )
  }
}