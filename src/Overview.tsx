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
  }

  render(){
    return(
      <div className="overview">
        
        <h1>Your todo's</h1>

        <table>
          <thead>
            <th></th>
            <th>Title</th>
            <th>Due date</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <ToDo />
          </tbody>
        </table>
      </div>
    )
  }
}