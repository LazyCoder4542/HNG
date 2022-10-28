import React, { Component } from 'react';
import {ReactComponent as ZuriLogo} from "./../../assets/icons/Zuri.svg"
import {ReactComponent as I4GLogo} from "./../../assets/icons/I4G.svg"
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer id='site-footer'>
                <span>
                    <ZuriLogo />
                </span>
                <span>
                    HNG Internship 9 Frontend Task
                </span>
                <span>
                    <I4GLogo />
                </span>
            </footer>
        );
    }
}
 
export default Footer;