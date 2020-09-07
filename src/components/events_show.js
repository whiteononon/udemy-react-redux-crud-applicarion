import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm} from 'redux-form'
import { Link } from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { getEvent, deleteEvent, putEvent } from "../actions/index";

class EventsShow extends Component {
 
    constructor(props){
        super(props)
        this.onSubmit=this.onSubmit.bind(this)
        this.onDeleteClick=this.onDeleteClick.bind(this)
    }

    componentDidMount(){
        const {id} = this.props.match.params
        if (id) this.props.getEvent(id)
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

    async onSubmit(values){
        await this.props.putEvent(values)
        this.props.history.push('/')
    }

    async onDeleteClick(){
        const {id} = this.props.match.params
        await this.props.deleteEvent(id)
        this.props.history.push('/')
    }

    render() {
        const {handleSubmit, pristine, submitting, invalid} = this.props
        const style = {margin: 12}
        return (
            // handleSubmitはredux-formの中で使用できる
            // handleSubmitはinputの値を取得し、valuesとして引数の関数に渡す
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <Field label="title" name="title" type="text" component={this.renderField} />
                    <Field label="body" name="body" type="text" component={this.renderField} />
                    <div>
                    <RaisedButton label="Submit" style={style} type="submit" disabled={pristine || submitting || invalid}></RaisedButton>
                    <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />}></RaisedButton>
                    <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick}></RaisedButton>
                    </div>
                </div>
            </form>
        );
    }
}


const validate = values => {
    const errors = {}
    if (!values.title) errors.title="Enter title"
    if (!values.body) errors.body="Enter body"
    
    return errors
}

const mapStateToProps =(state, ownProps)=>{
    const event = state.events[ownProps.match.params.id]
    return {initialValues:event,state}
}

// PropsからActionをDispacthできるようにする
const mapDispathToProps = { getEvent, deleteEvent, putEvent };


export default connect(mapStateToProps, mapDispathToProps)(
    reduxForm({
        validate,
        form: 'eventShowForm',
        enableReinitialize: true
    })(EventsShow)
);
