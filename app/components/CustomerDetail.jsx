import React from 'react';

export default class CustomerDetail extends React.Component {

    render() {
        let cutomer = this.props.customer;
        let address = "" + cutomer.address1 + ", " + cutomer.city + ", (" + cutomer.postalCode + ")";
        return(
            <div >
                <ul>
                    <h2><span className="glyphicon glyphicon-shopping-cart" /> Customer</h2>
                    <li><strong><span className="glyphicon glyphicon-user" /> Name: </strong>{cutomer.name}</li>
                    <li><strong><span className="glyphicon glyphicon-barcode" />   Code: </strong>{cutomer.code}</li>
                    <li><strong><span className="glyphicon glyphicon-tag" />   Cif: </strong>{cutomer.cif}</li>
                    <li><strong><span className="glyphicon glyphicon-map-marker" />   Address: </strong>{address}</li>
                    <li><strong><span className="glyphicon glyphicon-phone" />   Phone: </strong>{cutomer.phone1}</li>
                </ul>
            </div>
        );
    }
}
