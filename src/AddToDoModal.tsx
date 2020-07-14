import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { v4 as uuid } from 'uuid';
import "./AddToDoModal.scss";
import { ToDoData, ToDoType } from "./datatypes/ToDoData";

interface AddToDoProps{ addToDo: Function, nextId: number };
interface AddToDoState{ 
  title: string,
  description: string,
  dueDate: Date,
  dueDateDeviation: number,
  // type: ToDoType,
  type: boolean,
  recurringDays: number,
};

export default class AddToDoModal extends Component<AddToDoProps, AddToDoState>{

  constructor(props: AddToDoProps){
    super(props);
    this.state = { title: "", description: "", dueDate: new Date(), dueDateDeviation: 0, type: false, recurringDays: 0 }
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.changeDueDateHandler = this.changeDueDateHandler.bind(this);
    this.changeDueDateDeviationHandler = this.changeDueDateDeviationHandler.bind(this);
    this.changeTypeHandler = this.changeTypeHandler.bind(this);
    this.changeRecurringDaysHandler = this.changeRecurringDaysHandler.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  changeTitleHandler(evt: React.ChangeEvent<HTMLInputElement>){
    this.setState({
      title: evt.target.value
    })
  }

  changeDescriptionHandler(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      description: evt.target.value
    })
  }

  changeDueDateHandler(date: Date) {
    this.setState({
      dueDate: date
    })
  }

  changeDueDateDeviationHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      dueDateDeviation: Number(evt.target.value)
    })
  }

  changeTypeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      type: evt.target.checked
    })
  }

  changeRecurringDaysHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      recurringDays: Number(evt.target.value)
    })
  }

  addToDo(){
    let todo: ToDoData = {
      name: this.state.title,
      description: this.state.description,
      type: this.state.type ? ToDoType.recurring : ToDoType.single,
      recurringDays: this.state.recurringDays,
      uid: uuid(),
      displayId: this.props.nextId,
      duedate: this.state.dueDate,
      duedateDeviation: 3
    }
    this.props.addToDo(todo);
    this.setState({
      title: "", description: "", dueDate: new Date(), dueDateDeviation: 0, type: false, recurringDays: 0
    })
  }

  render(){
    return(
      <div className="modal addToDoModal" id="todoModal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center">
              <h2 className="modal-title font-weight-bold ml-3">What needs doing?</h2>
              <button type="button" className="close mr-1" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="mx-3 mt-3">

                <div className="form-group row my-4">
                  <label htmlFor="title" className="col-3 col-form-label">Title</label>
                  <div className="col-9">
                    <input
                      id="title" name="title" value={this.state.title}
                      onChange={this.changeTitleHandler}
                      className="form-control form-control-sm"
                    >
                    </input>
                  </div>
                </div>

                <div className="form-group row mb-4">
                  <label htmlFor="description" className="col-3 col-form-label">Description</label>
                  <div className="col-9">
                    <textarea
                      id="description" name="description" value={this.state.description}
                      onChange={this.changeDescriptionHandler}
                      className="form-control form-control-sm mb-2"
                    >
                    </textarea>
                  </div>
                </div>

                <div className="form-group row mb-4">
                  <label htmlFor="dueDate" className="col-3 col-form-label">Due date</label>
                  <div className="col-3">
                    <DatePicker
                      selected={this.state.dueDate}
                      onChange={this.changeDueDateHandler}
                    />
                      {/* <input
                      id="dueDate" name="dueDate" value={this.state.dueDate}
                      onChange={this.changeDueDateHandler}
                      className="form-control form-control-sm"
                    >
                    </input> */}
                  </div>

                  <label htmlFor="dueDateDeviation" className="col-3 col-form-label">Deviation</label>
                  <div className="col-3">
                    <input
                      id="dueDateDeviation" name="dueDateDeviation" value={this.state.dueDateDeviation}
                      onChange={this.changeDueDateDeviationHandler}
                      className="form-control form-control-sm"
                    >
                    </input>
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col-3">
                    <label className="mb-1">Recurring?</label>
                  </div>
                  <div className="col-3 align-items-center">
                    <div className="custom-control custom-switch">
                      <input
                        id="type" name="type" type="checkbox"
                        checked={this.state.type}
                        onChange={this.changeTypeHandler}
                        className="custom-control-input"
                      ></input>
                      <label className="custom-control-label" htmlFor="type"></label>
                    </div>
                  </div>

                  <label htmlFor="recurringDays" className="col-3 col-form-label">Days</label>
                  <div className="col-3">
                    <input
                      id="recurringDays" name="recurringDays" value={this.state.recurringDays}
                      onChange={this.changeRecurringDaysHandler}
                      className="form-control form-control-sm"
                    >
                    </input>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer py-4">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary ml-3" onClick={this.addToDo} data-dismiss="modal">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}