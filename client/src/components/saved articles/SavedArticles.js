import React from "react";
const SavedArticles = () => (
    <div className="saved-articles">
        <ul className="collapsible" data-collapsible="accordion">
            <li>
                <div className="collapsible-header">
                    <i className="material-icons">bookmark</i>Saved Articles
                </div>
                <div className="collapsible-body">
                    <div className="col s12 m7">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6" alt="article-thumbnail"/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <span className="saved-article">saved-article</span>
                                    <span className="material-icons bookmark">star</span>
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
export default SavedArticles;