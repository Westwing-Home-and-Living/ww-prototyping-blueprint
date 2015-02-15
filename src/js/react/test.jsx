var MyComponent = React.createClass({
    render: function () {
        return (
            <div className="comment">
                Das ist easdine . 1
            </div>
        );
    }
});

var MyComponent2 = React.createClass({
    render: function () {
        return (
                <div className="comment">
                     {this.props.message}
                </div>
        );
    }
});
