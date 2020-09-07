import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router-dom";
import { postEvent } from "../actions/index";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class EventsNew extends Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field
        return (
            <TextField
            hintText={label}
            floatingLabelText={label}
            type={type}
            errorText={touched && error}
            {...input}
            fullWidth={true}
            >
            </TextField>
        )
    }

    async onSubmit(values) {
        await this.props.postEvent(values)
        this.props.history.push('/')
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = {margin: 12}
        return (
            // handleSubmitはredux-formの中で使用できる
            // handleSubmitはinputの値を取得し、valuesとして引数の関数に渡す
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field label="title" name="title" type="text" component={this.renderField} />
                <Field label="body" name="body" type="text" component={this.renderField} />
                <RaisedButton label="Submit" style={style} type="submit" disabled={pristine || submitting || invalid}></RaisedButton>
                <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />}></RaisedButton>
            </form>
        );
    }
}

// PropsからActionをDispacthできるようにする
const mapDispathToProps = { postEvent };

const validate = values => {
    const errors = {}
    if (!values.title) errors.title = "Enter title"
    if (!values.body) errors.body = "Enter body"

    return errors
}

export default connect(null, mapDispathToProps)(
    reduxForm({
        validate,
        form: 'eventNewForm'
    })(EventsNew)
);
