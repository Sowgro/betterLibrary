// Grab any variables you need
const react = Spicetify.React;
const reactDOM = Spicetify.ReactDOM;
const {
    URI,
    React: { useState, useEffect, useCallback },
    Platform: { History },
} = Spicetify;

// The main custom app render function. The component returned is what is rendered in Spotify.
function render() {
    betterlibrary();
    return react.createElement(Grid, { title: "loading..." });
}

// Our main component
class Grid extends react.Component {
    constructor(props) {
        super(props);
        Object.assign(this, props);
        this.state = {
            foo: "bar",
            data: "etc"
        };
        // console.log("test");
    }

    render() {
        return react.createElement("section", {
            className: "contentSpacing",
        },
        react.createElement("div", {
            className: "betterlibheader",
        }, react.createElement("h1", null, this.props.title),
        ),
        );
        // ), react.createElement("div", {
        //     id: "marketplace-grid",
        //     className: "main-gridContainer-gridContainer",
        //     "data-tab": CONFIG.activeTab,
        //     style: {
        //         "--minimumColumnWidth": "180px",
        //     },
        // }, [...cardList]),
        // react.createElement("footer", {
        //     style: {
        //         margin: "auto",
        //         textAlign: "center",
        //     },
        // }, !this.state.endOfList && (this.state.rest ? react.createElement(LoadMoreIcon, { onClick: this.loadMore.bind(this) }) : react.createElement(LoadingIcon)),
        // ), react.createElement(TopBarContent, {
        //     switchCallback: this.switchTo.bind(this),
        //     links: CONFIG.tabs,
        //     activeLink: CONFIG.activeTab,
        // });
    }
}