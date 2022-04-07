import React from "react";
import "./Quote.css";

function Quote() {
    return (
        <div className="quote-div">
            <div className="quote-text">
                <h4 className="h4">Eat</h4>
                <h3 className="h3">Sleep</h3>
                <h1 className="h1">Code</h1>
                <h4 className="h4 repeat">Repeat</h4>
            </div>
            <div className="quote-image">
                <img
                    src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="pic"
                />
            </div>
        </div>
    );
}

export default Quote;
