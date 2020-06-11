import React from "react";
import Card from "./card/card";

const Gallery = ({ items }) => {
    return (
        <div id={"gallery"} className={"container-fluid"}>
            <h4 className={"mt-3"}>Real Estate & Homes For Sale</h4>
            <div className={"col-auto"}>{`${items ? items.length : 0} Homes`}</div>
            <div className={"row"}>
                {items ? items.map((item, i) => {
                    return (
                        <Card data={item} key={i} />
                    )
                }) :
                    <p>No apartments match for this search</p>
                }
            </div>
        </div>
    )
};

export default Gallery;