import React from 'react';

// Icons
import {
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaLinkedinIn,
    FaPinterest
} from 'react-icons/fa';

const Footer = props => {
    // const logos = [{ icon: 'FaFacebookSquare', name: 'facebook' },
    // { icon: 'FaTwitterSquare', name: 'twitter' },
    // { icon: 'FaInstagramSquare', name: 'instagram' },
    // { icon: 'FaLinkedin', name: 'linkedin' },
    // { icon: 'FaPinterestSquare', name: 'pinterest' }]
    return (
        <div id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="about-me col-sm-6">
                        © made by Sahar Feferovich 2020
                    </div>
                    <div className="icons-wrapper col-sm-6 flex-sm-nowrap">
                        {/* {
                            logos.map(logo => {
                                return (
                                <div>
                                    <a href={`https://www.${logo.name}.com`} target="_blank">
                                        <logo.icon className={`footer-icon ${logo.name}`} />
                                        {logo.name === 'instagram' && <logo.icon className={`footer-icon ${logo.name}-hover`} />}
                                    </a>
                                </div>
                            )})
                        } */}
                        <div><a href="https://www.facebook.com/sahar.feferovich" rel="noopener noreferrer" target="_blank"><FaFacebook className='footer-icon facebook' /></a>
                        </div>
                        <div><a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank"><FaGithub className={"footer-icon github"} /></a></div>
                        <div><a href="https://www.linkedin.com/in/sahar-feferovich-895a76190/" rel="noopener noreferrer" target="_blank"><FaLinkedinIn className={"footer-icon linkedin"} /></a></div>
                        <div className={"instagram-wrapper"}>
                            <a href="https://www.instagram.com/saharovich8/" rel="noopener noreferrer" target="_blank">
                                <FaInstagram className={"footer-icon instagram"} />
                                <FaInstagram className={"footer-icon instagram-hover"} />
                            </a>
                        </div>
                        <div><a href="https://www.pinterest.com/nono8448/boards/" rel="noopener noreferrer" target="_blank"><FaPinterest className={"footer-icon pinterest"} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;