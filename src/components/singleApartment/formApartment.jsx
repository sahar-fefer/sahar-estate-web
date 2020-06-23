import React from 'react';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';

const FormApartment = ({ address }) => {
    // console.log('address', address);
    return (
        <div id={"apartment-form"} className={"d-none d-lg-flex"}>
            <form>
                <h5 className={"title-form"}>More about this property</h5>
                <div className={"input-wrapper"}>
                    <FiUser className={'icon'} />
                    <input className={"input"} />
                </div>
                <div className={"input-wrapper"}>
                    <FiMail className={'icon'} />
                    <input className={"input"} />
                </div>
                <div className={"input-wrapper"}>
                    <FiPhone className={'icon'} />
                    <input className={"input"} />
                </div>
                <textarea className={"input-wrapper"} defaultValue={`I am interested in ${address ? address : 'this Real Estate'}`} />
                <input className={"input-wrapper submit"} type={"submit"} value={'Send'} />
            </form>
        </div>
    );
};

export default FormApartment;