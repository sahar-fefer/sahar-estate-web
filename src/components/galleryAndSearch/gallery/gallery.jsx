import React from "react";
import Card from "./card/card";
import { useState } from "react";

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
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
                <div className={'d-flex justify-content-center'}>
                    {
                        paginationIndex < items.length &&
                        <button className={'buttonStyle'} onClick={() => setPaginationIndex(paginationIndex + 6)}>
                            Show More
                            <BsChevronDown className={'m-1'} />
                        </button>
                    }
                    {
                        paginationIndex > 6 &&
                        <button className={'buttonStyle'} onClick={() => setPaginationIndex(paginationIndex - 6)}>
                            Show Less
                            <BsChevronUp className={'m-1'} />
                        </button>
                    }
                </div>
            }
        </div>
    )
};

export default Gallery;