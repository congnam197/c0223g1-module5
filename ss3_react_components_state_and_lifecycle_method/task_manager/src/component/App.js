import React from "react";
class AppTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [],
    };
  }
  handleChange = (event) => {
    this.setState({ item: event.target.value });
    console.log(event.target.value);
  };
  handleAddItem = () => {
    if (this.state.item != "") {
      const newList = this.state.list;
      newList.push(this.state.item);
      const newTask = {
        newList,
        item: "",
      };
      this.setState(newTask);
    }
  };
  render() {
    return (
      <div className="content">
        <h1>Todo List</h1>

        <div>
          <input
            type="text"
            name="task"
            id="task"
            className="task"
            onChange={this.handleChange}
          ></input>
          <button type="button" onClick={this.handleAddItem}>
            Add
          </button>
          <h4>Task List</h4>
          <div className="list">
            <ul>
              {this.state.list.map((item,index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default AppTodo;
