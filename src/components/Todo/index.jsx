import React from "react";
import styles from "./style.module.css"

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            title: this.props.title,
            completed: this.props.completed
        };
    }
    
    handleChange = (e) => {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            completed: e.target.checked
        });
    }        

    render() { 
        return (
            <li className={`${styles.todo} stack-small`}>
            <div className={`${styles.ccb} text-center`} style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                <input
                    id={this.state.id}
                    type="checkbox"
                    defaultChecked={this.state.completed}
                    disabled={this.state.completed}
                    onChange={this.handleChange}
                />
                <label
                    className={`todolabel ${this.state.completed ? 'true' : ''}`}
                    htmlFor={this.state.id}>
                    {this.state.title}
                </label>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => this.props.deleteTask(this.state.id)}
                >
                    Delete
                </button>
            </div>
        </li>
        );
    }
}
 
export default Todo;