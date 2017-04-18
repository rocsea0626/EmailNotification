import React from 'react';


class Contact extends React.Component {
    render() {
        console.log(this.props.contact);

        return (
            <li>{this.props.contact.username}, {this.props.contact.email}</li>
        );
    }
}

export default Contact;