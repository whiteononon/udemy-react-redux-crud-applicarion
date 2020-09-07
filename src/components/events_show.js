import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm} from 'redux-form'
import { Link } from "react-router-dom";

import { getEvent, deleteEvent, putEvent } from "../actions/index";

class EventsShow extends Component {
 
    constructor(props){
        super(props)
        this.onSubmit=this.onSubmit.bind(this)
        this.onDeleteClick=this.onDeleteClick.bind(this)
    }

    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field
        return (
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span> }
        </div>
        )
    }

    async onSubmit(values){
        await this.props.postEvents(values)
        this.props.history.push('/')
    }

    async onDeleteClick(){
        const {id} = this.props.match.params
        await this.props.deleteEvent(id)
        this.props.history.push('/')
    }

    render() {
        const {handleSubmit, pristine, submitting} = this.props
 
        return (
            // handleSubmitはredux-formの中で使用できる
            // handleSubmitはinputの値を取得し、valuesとして引数の関数に渡す
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <Field label="title" name="title" type="text" component={this.renderField} />
                    <Field label="body" name="body" type="text" component={this.renderField} />
                    <div>
                        <input type="submit" disabled={pristine || submitting}></input>
                        <Link to="/">Cancel</Link>
                        <Link  to="/" onClick={this.onDeleteClick}>Delete</Link>
                    </div>
                </div>
            </form>
        );
    }
}

// PropsからActionをDispacthできるようにする
const mapDispathToProps = { deleteEvent };

const validate = values => {
    const errors = {}
    if (!values.title) errors.title="Enter title"
    if (!values.body) errors.body="Enter body"
        
    return errors
    }

export default connect(null, mapDispathToProps)(
    reduxForm({
        validate,
        form: 'eventShowForm'
    })(EventsShow)
);
