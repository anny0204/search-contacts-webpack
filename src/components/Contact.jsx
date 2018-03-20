let React = require('react');

require('./Contact.css');

let Contact = React.createClass({
    render: function() {
        return (
            <div className="contact">
                <image className="contact_image" src={this.props.image} width="60" height="60" alt={this.props.name}/>
                <div className="contact_info">
                    <p className="contact_name">{this.props.name}</p>
                    <p className="contact_phone">{this.props.phoneNumber}</p>
                </div>
            </div>
        )
    }
});

module.exports = Contact;