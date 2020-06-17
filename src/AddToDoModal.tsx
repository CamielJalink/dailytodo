import React, { Component } from "react";
import { v4 as uuid } from 'uuid';
import "./AddToDoModal.scss";
import { ToDoData, ToDoType } from "./datatypes/ToDoData";

interface AddToDoProps{ addToDo: Function, nextId: number };
interface AddToDoState{ title: string, dueDate: string, type: ToDoType};

export default class AddToDoModal extends Component<AddToDoProps, AddToDoState>{

  constructor(props: AddToDoProps){
    super(props);
    this.state = { title: "", dueDate: "", type: ToDoType.single }
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeDueDateHandler = this.changeDueDateHandler.bind(this);
    this.changeTypeHandler = this.changeTypeHandler.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  changeTitleHandler(evt: React.ChangeEvent<HTMLInputElement>){
    this.setState({
      title: evt.target.value
    })
  }

  changeDueDateHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      dueDate: evt.target.value
    })
  }

  changeTypeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    let realType: string = evt.target.value;
    let fakeType: ToDoType = ToDoType.recurring;
    this.setState({
      type: fakeType
    })
  }

  addToDo(){
    let todo: ToDoData = {
      name: this.state.title,
      type: this.state.type,
      uid: this.props.nextId.toString(),
      duedate: this.state.dueDate,
      duedateDeviation: 3
    }
    this.props.addToDo(todo);
  }

  render(){
    return(
      <div className="modal addToDoModal" id="todoModal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Add todo</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5>What needs to be done?</h5>
              <form>
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.changeTitleHandler}
                >
                </input>
                <label htmlFor="dueDate">Due date</label>
                <input
                  id="dueDate"
                  name="dueDate"
                  value={this.state.dueDate}
                  onChange={this.changeDueDateHandler}
                >
                </input>
                <label htmlFor="type">Type</label>
                <input
                  id="type"
                  name="type"
                  value={this.state.type}
                  onChange={this.changeTypeHandler}
                >
                </input>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this.addToDo}>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}