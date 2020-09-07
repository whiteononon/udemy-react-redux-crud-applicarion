import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,

} from "material-ui/Table"
import FloatingActionButton from "material-ui/FloatingActionButton"
import ContentAdd from "material-ui/svg-icons/content/add"

import { readEvents } from "../actions";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }
  renderEvents() {
    return _.map(this.props.events, (event) => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`events/${event.id}`}>
          {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ));
  }
  render() {
    const style ={
      position: "fixed",
      right: 12,
      bottom: 12
    }
    return (
      <>
      <FloatingActionButton containerElement={<Link to="/events/new"></Link>} style={style}>
          <ContentAdd />
      </FloatingActionButton>
        <Table>
          <TableHeader 
          displaySelectAll={false}
          adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>{this.renderEvents()}</TableBody>
        </Table>
      </>
    );
  }
}

//StoreにあるStateをPropsとして使えるようにする
const mapStateToProps = (state) => ({ events: state.events });

// PropsからActionをDispacthできるようにする
const mapDispathToProps = { readEvents };

export default connect(mapStateToProps, mapDispathToProps)(EventsIndex);
