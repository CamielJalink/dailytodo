import React, { Component } from "react";
import "./Overview.scss";
import ToDo from "./ToDo";
import { ToDoData } from "./datatypes/ToDoData";
import { dummyData } from "./datatypes/DummyData";


interface OverviewProps{
}

interface OverviewState{
  todoData: ToDoData[];
}

export default class Overview extends Component<OverviewProps, OverviewState> {
  constructor(props: OverviewProps){
    super(props);
    this.state = { todoData: dummyData };
    console.log(this.state.todoData);
  }

  render(){
    return(
      <div className="w-50 m-auto">
        <h1 className="mt-5 font-weight-bold">Daily todo's</h1>

        <table className="mt-5 table table-borderless table-striped table-hover">
          <thead className="thead-light border-bottom border-secondary">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Due date</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todoData.map((todo) => {
              return <ToDo key={todo.uid} todoData={todo} />
            })}
          </tbody>
        </table>
      </div>
    )
  }
}