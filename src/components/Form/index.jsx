import React from "react";

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            title: '',
            completed: this.props.completed
        };
    }

    handleChange = (e) => {
        this.setState({
            id: this.props.id,
            title: e.target.value,
            completed: this.props.completed
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === '') {
            alert("Anda harus mengisi inputan terlebih dahulu sebelum submit");
        } else {
            this.props.addTask(this.state.title);
        }
        this.setState({
            id: this.props.id,
            title: '',
            completed: this.props.completed
        })
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                placeholder='Tambah tugas disini...'
                value={this.state.title}
                onChange={this.handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
        );
    }
}
 
export default Form;