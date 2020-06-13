import React from "react";
import Card from "./card/card";
import { useState } from "react";

const Gallery = ({ items }) => {
    const [paginationIndex, setPaginationIndex] = useState(6);

    return (
        <div id={"gallery"} className={"container-fluid"}>
            <h4 className={"mt-3"}>Real Estate & Homes For Sale</h4>
            <div className={"col-auto"}>{`${items ? items.length : 0} Homes`}</div>
            <div className={"row"}>
                {items ? items.map((item, i) => {
                    return (
                        i < paginationIndex &&
                        <Card data={item} key={i} />
                    )
                }) :
                    <p>No apartments match for this search</p>
                }
            </div>
            {
                items &&
                <div className={'d-flex justify-content-around'}>
                    {
                        paginationIndex < items.length &&
                        <button className={'buttonStyle'} onClick={() => setPaginationIndex(paginationIndex + 6)}>Show More</button>
                    }
                    {
                        paginationIndex > 6 &&
                        <button className={'buttonStyle'} onClick={() => setPaginationIndex(paginationIndex - 6)}>Show Less</button>
                    }
                </div>
            }
            {/* {items && paginationIndex < items.length &&
                <div className={'display-center'}>
                    <button className={'buttonStyle'} onClick={() => setPaginationIndex(paginationIndex + 6)}>Show More</button>
                </div>
            }
            {items && paginationIndex > 6 &&
                <div className={'display-center'}>
                    <button className={'buttonStyle'} onClick={() => setPaginationIndex(paginationIndex - 6)}>Show Less</button>
                </div>
            } */}
        </div>
    )
};

export default Gallery;