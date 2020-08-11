import React, { Component, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import SideNav from './sideNav';
import BurgerNav from './burgerNav';
import Gallery from '../galleryAndSearch/gallery/gallery';

import { getApartmentsUserByStatus } from '../../api/apartments';
import Account from './account';
import { getUserById } from '../../api/users';

class MainUserPage extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            userId: -1,
            navOpen: false,
            // typeSection: "apartments",
            typeSection: "myAccount",
            stateStatus: "all",
            apartments: [],
            galleryTitle: "My All Appartnents"
        }
    }

    async componentDidMount() {
        const cookie = Cookies.get('auth');
        const user = await getUserById(JSON.parse(cookie).id);
        const userId = JSON.parse(cookie).id;
        const apartments = await getApartmentsUserByStatus(userId, "");
        console.log("apartments", apartments);
        console.log("user", user);
        this.setState({
            user,
            userId,
            apartments
        }, function () { console.log("this.state.apartments", this.state.apartments) });
    }

    onNavOpen = () => {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    onSelectAppartments = async (e) => {
        const { userId, stateStatus } = this.state;
        let { apartments } = this.state;
        const { status, title } = e.target.dataset;
        if (stateStatus !== status) {
            apartments = await getApartmentsUserByStatus(userId, status);
        }
        this.setState({
            apartments,
            stateStatus: status,
            typeSection: "apartments",
            navOpen: !this.state.navOpen,
            galleryTitle: title
        });
    }

    onSelectAccount = () => {
        this.setState({
            typeSection: "myAccount",
            navOpen: !this.state.navOpen
        });
    }

    render() {
        const { apartments, navOpen, typeSection, galleryTitle, user } = this.state;
        const { onNavClick, onNavOpen, onSelectAccount, onSelectAppartments } = this;
        return (
            <div id="mainUserPage">
                <div className={'container'}>
                    {!navOpen &&
                        <BurgerNav onNavOpen={onNavOpen} />
                    }
                    {navOpen &&
                        <div style={{ paddingTop: "38px" }} />
                    }
                    {navOpen &&
                        <SideNav navOpen={navOpen} onNavClick={onNavClick} onNavOpen={onNavOpen} onSelectAccount={onSelectAccount} onSelectAppartments={onSelectAppartments} typeSection={typeSection} roleId={user.role_id} />
                    }
                    {typeSection === "apartments" &&
                        <Gallery title={galleryTitle} items={apartments}
                            galleryType={"home"} />
                    }
                    {typeSection === "myAccount" & user.id &&
                        <Account user={user} />
                    }
                    {/* {typeSection === "wishList" &&
                    <Gallery title={galleryTitle} items={apartments}
                        galleryType={"home"} />
                } */}
                </div>
            </div>
        );
    }
}

export default MainUserPage;


// const MainUserPage = () => {
//     [user, setUser] = useState({});
//     [userId, setUserId] = useState(-1);
//     [navOpen, setNavOpen] = useState(flase);
//     [typeSection, setTypeSection] = useState('myAccount');
//     [stateStatus, setStateStatus] = useState('all');
//     [apartments, setApartments] = useState([]);
//     [galleryTitle, setGalleryTitle] = useState('My All Appartnents');

//     useEffect(() => {
//         const user = JSON.parse(Cookies.get('auth'));
//         setApartments(getApartmentsUserByStatus(user.id, ""));
//         setUserId(user.id);
//         setUser(user);
//     }, []);

//     onNavOpen = () => {
//         setNavOpen(!navOpen);
//     }

//     const onSelectAppartments = async (e) => {
//         const { status, title } = e.target.dataset;
//         if (stateStatus !== status) {
//             setApartments(await getApartmentsUserByStatus(userId, status));
//             setStateStatus(status);
//         }
//         setTypeSection("apartments");
//         navOpen(!navOpen);
//         setGalleryTitle(title);
//     }

//     const onSelectAccount = () => {
//         setTypeSection("myAccount");
//         setNavOpen(!navOpen);
//     }

//     return (
//         <div id="mainUserPage">
//             {!navOpen &&
//                 <BurgerNav navOpen onNavOpen={onNavOpen} visibale="true" />
//             }
//             {navOpen &&
//                 <div style={{ paddingTop: "38px" }} />
//             }
//             {navOpen &&
//                 <SideNav navOpen onNavClick={onNavClick} onNavOpen={onNavOpen} onSelectAccount={onSelectAccount} onSelectAppartments={onSelectAppartments} typeSection={typeSection} roleId={user.role_id} />
//             }
//             {typeSection === "apartments" &&
//                 <Gallery title={galleryTitle} items={apartments}
//                     galleryType={"home"} />
//             }
//             {typeSection === "myAccount" &&
//                 <Account user={user} />
//             }
//             {/* {typeSection === "wishList" &&
//                     <Gallery title={galleryTitle} items={apartments}
//                         galleryType={"home"} />
//                 } */}
//         </div>
//     );
// }

// export default MainUserPage; 