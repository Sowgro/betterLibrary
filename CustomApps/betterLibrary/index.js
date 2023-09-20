// this part was mostly copied from an example

// Grab any variables you need
const react = Spicetify.React;
const reactDOM = Spicetify.ReactDOM;
const {
    URI,
    React: { useState, useEffect, useCallback },
    Platform: { History },
} = Spicetify;

// this is called when the page is open
function render() {
    startListener(); //I added this
    enableBetterLib(); //And this
    return react.createElement(Grid, { title: "Opened in the center pane" });
}

//builds components of the page
class Grid extends react.Component {
    constructor(props) {
        super(props);
        Object.assign(this, props);
        this.state = {
            foo: "bar", //dont know what these do but its working so ill leave them be
            data: "etc"
        };
    }

    render() {
        return react.createElement("section", {
            className: "betterLibSection",
            },
            react.createElement("div",{
                className: "betterLibBox"
            },
            react.createElement("div", {
                className: "betterLibText",
                },  
                react.createElement("h4", null, this.props.title),
            ),
            )
        );
    }
}