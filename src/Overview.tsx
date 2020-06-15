import React, { Component } from "react";
import "./Overview.scss";
import ToDo from "./ToDo";
import AddToDoModal from "./AddToDoModal";
import { ToDoData } from "./datatypes/ToDoData";
import { dummyData } from "./datatypes/DummyData";
import { PlusCircle } from "react-feather";


interface OverviewProps{
}

interface OverviewState{
  todoData: ToDoData[];
}

export default class Overview extends Component<OverviewProps, OverviewState> {

  constructor(props: OverviewProps){
    super(props);
    this.state = { todoData: dummyData };
  }

  render(){
    return(
      <div className="col-12 col-lg-6 offset-lg-3 px-4">

        <div className="mt-5 d-flex justify-content-between">
          <h1 className="font-weight-bold">Daily todo's</h1>
          <button className="btn btn-link text-danger" data-toggle="modal" data-target="#todoModal">
            <PlusCircle size={55} strokeWidth={1.2} />
          </button>
        </div>

        <table className="mt-5 table table-borderless table-striped table-hover">
          <thead className="thead-light border-bottom border-secondary">
            <tr className="d-flex">
              <th className="col-1">#</th>
              <th className="col-5">Title</th>
              <th className="col-2">Due date</th>
              <th className="col-2">Type</th>
              <th className="col-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todoData.map((todo) => {
              return <ToDo key={todo.uid} todoData={todo} />
            })}
          </tbody>
        </table>
        
        <AddToDoModal/>
      </div>
    )
  }
}