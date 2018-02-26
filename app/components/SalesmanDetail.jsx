import React from 'react';
import {Image} from 'react-bootstrap';

export default class SalesmanDetail extends React.Component {
    render() {
        let salesman = this.props.salesman;
        let img = "iconCustomer.png";
        return(
            <div >
                <ul>
                    <h2><span className="glyphicon glyphicon-briefcase" /> Salesman</h2>
                    <div id="photo">
                        <Image width="100" height="100" src={salesman.Photo.url} alt="imagen Costumer" circle/>
                    </div>
                    <li><strong><span className="glyphicon glyphicon-user" />   Name: </strong>{salesman.fullname}</li>
                    <li><strong><span className="glyphicon glyphicon-envelope" />   E-mail: </strong>{salesman.email1}</li>
                    <li><strong><span className="glyphicon glyphicon-barcode" />   ID: </strong>{salesman.id}</li>
                    <li><strong><span className="glyphicon glyphicon-phone" />   Phone: </strong>{salesman.phone1}</li>
                </ul>
            </div>
        );
    }
}
