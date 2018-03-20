var React = require('react');

require('./ContactSearch.css');

var ContactSearch = React.createClass({
    handleTextChange: function(e) {
       var text = e.target.value;
       this.props.searchText(text);
    },

    render: function() {
        return (
            <div className="contact_search">
                <textarea className="textarea" rows="2" onChange={this.handleTextChange}></textarea>
            </div>
        )
    }
});

module.exports = ContactSearch;