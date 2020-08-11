import React from "react";
import Card from "./card/card";

import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
const Gallery = ({ items, sizeGallery, nextPrevPage, page, size, title }) => {

    return (
        <div id={"gallery"} className={"container-fluid"}>
            <h4 className={"mt-3"}>{title ? title : 'Real Estate & Homes For Sale'}</h4>
            <div className={'row'}>
                <div className={"col-auto mt-auto mb-auto"}>{`${items ? items.length : 0} Homes`}</div>
                <header className={"mt-auto mb-auto ml-2"}>Set Size</header>
                <select className={"buttonStyle border-0 col-auto"} name="size" onClick={sizeGallery}>
                    <option value={""} disabled hidden>Size</option>
                    <option value={6}>6</option>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={48}>48</option>
                </select>
            </div>
            <div className={"row"}>
                {items ? items.map((item, i) => {
                    return (
                        <Card data={item} items={items} key={i} />
                    )
                }) :
                    <p>No apartments match for this search</p>
                }
            </div>
            {
                items &&
                <div className={'d-flex justify-content-center'}>
                    {
                        page > 1 &&
                        <button className={'buttonStyle'} onClick={() => nextPrevPage("-")}>
                            <BsChevronLeft className={'m-1'} />
                            Prev Page
                        </button>
                    }
                    {
                        items.length === size &&
                        <button className={'buttonStyle'} onClick={() => nextPrevPage("+")}>
                            Next Page
                            <BsChevronRight className={'m-1'} />
                        </button>
                    }
                </div>
            }
        </div>
    )
};

export default Gallery;