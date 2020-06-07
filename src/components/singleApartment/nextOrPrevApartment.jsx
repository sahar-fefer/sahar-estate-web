import React from 'react';

class NextOrPrevApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentId: this.props.id,
            // apartmentData: apartment,
            // apartmentImage: apartment.main_image,
            type: this.props.type,
            price: false
        };
    }

    render() {
        const {apartmentId} =this.state;
        return (
            <a href={`/apartment/${apartmentId}`}>
                <div
                     style={{
                         zIndex: 2,
                         left: this.state.type === 'prev' && 0,
                         right: this.state.type !== 'prev' && 0,
                         bottom: "5vh",
                         position: "fixed",
                         backgroundSize: "cover",
                         background: 'blue',
                        //  backgroundImage: `url(/${this.state.apartmentImage})`
                     }}>
                    <div onMouseOver={() => {
                        this.setState({price: true})
                    }} onMouseLeave={() => {
                        this.setState({price: false})
                    }} className={"nextPrevApartmentPointer"}>
                        {/* {this.state.type === "next"
                            ? <div><span>Next</span> <i className={"fa fa-chevron-right"}/>{this.state.price &&
                            <div>{this.state.apartmentData.price}</div>}</div>
                            : <div><i className={"fa fa-chevron-left"}/> <span>Prev</span> {this.state.price &&
                            <div>{this.state.apartmentData.price}</div>} </div>} */}
                    </div>
                </div>
            </a>
        );
    }

    static defaultProps = {
        apartmentData: {}
    }
}

export default NextOrPrevApartment;