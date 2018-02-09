import React from "react";
const Search = () => (
    <div className="nyt-search">
        <ul className="collapsible" data-collapsible="accordion">
            <li>
                <div className="collapsible-header">
                    <i className="material-icons">search</i>Search
                </div>
                <div className="collapsible-body white search-background">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">search</i>
                                    <input id="icon_search" type="text" className="validate" />
                                    <label htmlFor="icon_search" data-error="wrong" data-success="right">Search Topic</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">date_range</i>
                                    <input id="icon_date_range" type="text" className="validate" />
                                    <label htmlFor="icon_date_range">Start Year</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">date_range</i>
                                    <input id="icon_date_range" type="text" className="validate" />
                                    <label htmlFor="icon_date_range">End Year</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button className="btn waves-effect waves-light white black-text" type="submit" name="action">Search
                        <i className="material-icons right">search</i>
                    </button>
                </div>
            </li>
        </ul>
    </div>
);
export default Search;