var React = require('react');

var ContactSearch = require('./ContactSearch.jsx');
var Contact = require('./Contact.jsx');

require('./Contacts.css');

const CONTACTS = [
    {
                id: 1,
                name: 'Darth Vader',
                phoneNumber: '+250966666666',
                image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
            }, {
                id: 2,
                name: 'Princess Leia',
                phoneNumber: '+250966344466',
                image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
            }, {
                id: 3,
                name: 'Luke Skywalker',
                phoneNumber: '+250976654433',
                image: 'http://www.youshouldshare.me/wp-content/uploads/2015/03/14264215682890-anigif_enhanced-buzz-13518-1367608452-4.gif'
            }, {
                id: 4,
                name: 'Chewbacca',
                phoneNumber: '+250456784935',
                image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
            }
]; 

var Contacts = React.createClass({
    getInitialState: function() {
        return {
            contacts: CONTACTS
        }
    },

    showSearchContact: function(text) {
        var filteredContacts = CONTACTS.filter(function(contact) {
            return (contact.name.indexOf(text) != -1)
        });
        this.setState({contacts: filteredContacts});
    },

    render: function() {
        return (
            <div className="all_contacts">
                <ContactSearch searchText={this.showSearchContact}/>
                {
                    this.state.contacts.map(function(contact){
                        return <Contact key={contact.id}
                        name={contact.name}
                        phoneNumber={contact.phoneNumber}
                        image={contact.image}/>
                    })
                }
            </div>
        )
    }
});

module.exports = Contacts;