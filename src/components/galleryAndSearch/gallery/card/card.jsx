import React from 'react';
import Details from "./details";
import BuildImage from "./buildImage";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
    return (
        <div className={`apartmentCard col-lg-3 col-md-6`}>
            <Link to={`/apartment/${data.id}`}>
                <header className={"headerCard"}>
                    {data.title}
                </header>
                <div className={"wrapperCard"}>
                    <BuildImage currentCard={data} />
                    <Details currentCard={data} />
                </div>
            </Link>
        </div>
    );
};

export default Card;