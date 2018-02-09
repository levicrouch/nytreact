import React from "react";
const Results = () => (
    <div className="search-results">
        <ul className="collapsible" data-collapsible="accordion">
            <li>
                <div className="collapsible-header">
                    <i className="material-icons">view_list</i>Results
                </div>
                <div className="collapsible-body">
                    <div className="col s12 m7">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6" alt="article-thumbnail" />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <span className="article-title">article-title</span>
                                    <span className="material-icons bookmark">star_border</span>
                                </div>
                                <div className="card-action">
                                    <a href="/">Link to article</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
);
export default Results;