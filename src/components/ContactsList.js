import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.emailsList.map((contact) => {
                        return <Contact contact={contact} key={contact.id}/>
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default ContactsList;