
var React = require('react'),
    markdown = require('markdown'),
    objectAssign = require('object-assign');

var Markdown = React.createClass({

    propTypes: {
        text: React.PropTypes.string,
        el: React.PropTypes.oneOf(Object.keys(React.DOM)),
        dialect: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            el: 'div',
            text: '',
            dialect: 'Gruber'
        };
    },

    render: function() {
        var El = React.DOM[this.props.el];
        var dialect = this.props.dialect;
        var props = objectAssign({}, this.props, {
            className: 'markdown',
            dangerouslySetInnerHTML: { __html: markdown.parse(this.props.text, dialect) }
        });
        return El(props);
    }

});

module.exports = Markdown;
