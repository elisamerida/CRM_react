import React from 'react';
import './../assets/scss/main.scss';
import { Staticvisits } from "./../assets/mock-data";
import VisitList from "./VisitList";
import Detail from "./Detail";
import Visit from "./VisitListElement";
import $ from 'jquery';
import {Col, Navbar, NavItem, Row, Button} from 'react-bootstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class App extends React.Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            visitSelected: 0,
            fav: false,
            startDate: moment(),
            lastDate: moment(),
            url: "https://dcrmt.herokuapp.com/api/visits/flattened?token=2071ed41fff101fb2bd5",
            visits: null,
        };
        this.appClick = this.appClick.bind(this);
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeLastDate = this.handleChangeLastDate.bind(this);
        this.datePickerApply = this.datePickerApply.bind(this);
        this.appFavPressed = this.appFavPressed.bind(this);

    }

    appFavPressed(favID) {
        let esFav = !(this.state.visits[this.state.visitSelected].favourite);
        this.setState({
            fav: esFav,
        });
        this.updateFav();

    }

    handleChangeStartDate(date) {
        this.setState({
            startDate: date,
        });
    }

    handleChangeLastDate(date) {
        this.setState({
            lastDate: date,
        });
    }

    appClick(index) {
        // let newIndex = index;
        this.setState({
            visitSelected: index,
            visits: this.state.visits,
        });
        console.log(this.state.startDate.format().split('T')[0]);
    }

    // metodo para descargar datos
    componentDidMount() {
        // $('#content').html('<div className="loader"></div>);');
        let query = location.search;
        let queryOK = query.replace("?", "&");
        $.ajax({
            // url: "https://dcrmt.herokuapp.com/api/visits/flattened?token=2071ed41fff101fb2bd5".concat(queryOK),
            url: this.state.url.concat(queryOK),
            type: 'GET',
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({visits: data});
                console.log({data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(status, err.toString());
            },
        });

    }

    updateFav() {
        let visitas = this.state.visits[this.state.visitSelected].id;
        let esFav = this.state.visits[this.state.visitSelected].favourite;
        let finalURL = "";

        if(esFav) {
            finalURL = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/" + visitas + "?token=2071ed41fff101fb2bd5&_method=DELETE";
        }else{
            finalURL = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/" + visitas + "?token=2071ed41fff101fb2bd5&_method=PUT";
        }
        $.ajax({
            url: finalURL,
            type: 'GET',
            // datatype: 'json',
            cache: false,
            success: function(data) {
                // this.render();
                console.log("Todo ok");
            },
            error: function(data) {
                console.log(" ERROR no se ha modificado fav");
            },
            complete: function(xhr, status) {
                // alert('Petición realizada');
                this.componentDidMount();
                // this.render();
            }.bind(this),
        });
    }

    datePickerApply(event) {
        event.preventDefault();
        let dateAfter = "&dateafter=" + this.state.startDate.format().split('T')[0];
        console.log(dateAfter);
        let dateBefore = "&datebefore=" + this.state.lastDate.format().split('T')[0];
        console.log(dateBefore);
        let query = dateAfter.concat(dateBefore);
        console.log(query);
        this.setState({
            url: "https://dcrmt.herokuapp.com/api/visits/flattened?token=2071ed41fff101fb2bd5".concat(query),
        });

        $.ajax({
            url: "https://dcrmt.herokuapp.com/api/visits/flattened?token=2071ed41fff101fb2bd5".concat(query),
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({visits: data});
                console.log({data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(status, err.toString());
            },
        });
        console.log(this.state.url);
    }
    /* <h3> Selected visit = {this.state.visitSelected} </h3>*/

    render() {

        if (this.state.visits === null) {
            return (<div className="loaderWrapper"><div className="loader" /></div>);
        }
        return (
                <div>
                  <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                      <h1 className="cabName"><strong>CRM - PRÁCTICA REACT</strong></h1>
                    </Navbar.Header>

                  </Navbar>

                    <Col lg={4} md={4} xs={6} className="VisitsList">
                      <h2><span className="glyphicon glyphicon-list" /> Visits</h2>

                      <VisitList visits={this.state.visits} fav={this.state.fav} appClick={this.appClick}/>
                    </Col>
                  <Col lg={8} md={8} xs={6} className="Detail">
                    <Row className="datetitle">
                      <Col lg = {8} md={8} ><ul><h2><span className="glyphicon glyphicon-calendar" /> Dates</h2></ul></Col>
                    </Row>
                    <Row className="dates">
                      <Col lg={3} md={3}>
                        <ul>
                          <h3><strong><span className="glyphicon glyphicon-calendar" /> First date: </strong></h3>
                          <DatePicker title="firstdate" selected={this.state.startDate} onChange={this.handleChangeStartDate} aria-labelledby ="myDate"/>
                        </ul>
                      </Col>

                      <Col lg={3} md={3}>
                        <ul>
                          <h3><strong><span className="glyphicon glyphicon-calendar" /> Last date: </strong></h3>
                          <DatePicker title="lastdate" selected={this.state.lastDate} onChange={this.handleChangeLastDate} aria-labelledby ="myDate"/>
                        </ul>
                      </Col>
                      <Col lg={2} md={2}>
                          <ul>
                              <h3><strong> Press: </strong></h3>
                        <Button className="applyButton" onClick={this.datePickerApply}><strong>Filter out</strong></Button>
                          </ul>
                      </Col>
                    </Row>
                    <hr/>

                    <Detail className="detailapp" visits={this.state.visits} fav={this.state.fav} visitSelected={this.state.visitSelected} appFavPressed={this.appFavPressed}/>
                  </Col>
                </div>
        );

    }

}

