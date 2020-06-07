import React from 'react';

class FormApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMoreOpen: false,
            isMoreShow: true,
        }
    }

    toggleMore = () => {
        this.setState({
            isMoreOpen: !this.state.isMoreOpen,
            isMoreShow: !this.state.isMoreShow
        })
    };

    render() {
        const {isMoreShow, isMoreOpen} = this.state;
        return (
            <div  id={"apartment-form"} className={"d-none d-lg-flex"}>
                <form>
                    <h5 className={"title-form"}>More about this property</h5>
                    <div className={"input-wrapper"}>
                        <i className={"fa fa-instagram"}/>
                        <input className={"input"}/>
                    </div>
                    <div className={"input-wrapper"}>
                        <i className={"fa fa-instagram"}/>
                        <input className={"input"}/>
                    </div>
                    <div className={"input-wrapper"}>
                        <i className={"fa fa-instagram"}/>
                        <input className={"input"}/>
                    </div>
                    <textarea className={"input-wrapper"}>
                    I am interested in
                </textarea>
                    <div className={"checkbox-wrapper"}>
                        <input className={"checkbox"} type={"checkbox"}/>
                        <label className={"label"}>Get pre-approved by a lender.</label>
                    </div>
                    <input className={"input-wrapper submit"} type={"submit"}/>
                    <div className={"policity"}>
                        By proceeding, you consent to receive calls and texts at the number you provided, including
                        marketing by
                        autodialer and prerecorded and artificial voice, and email, from realtor.com and others about
                        your
                        inquiry and other home-related matters, but not as a condition of any purchase.
                        {isMoreShow && <div className={"toggle-more"} onClick={this.toggleMore}>More...</div>}
                        {isMoreOpen && <span>
                        You also agree to our Terms of Use, and to our Privacy Policy regarding the information relating
                        to you. Msg/data rates may apply. This consent applies even if you are on a corporate, state or
                        national Do Not Call list.
                    </span>}
                        {!isMoreShow && <div className={"toggle-more"} onClick={this.toggleMore}>Close...</div>}
                    </div>
                </form>
            </div>
        );
    }
}

export default FormApartment;