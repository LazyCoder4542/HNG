import React, { Component } from 'react';
import {ReactComponent as ZuriLogo} from "./../../assets/icons/Zuri.svg"
import {ReactComponent as I4GLogo} from "./../../assets/icons/I4G.svg"

import './Footer.css'
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer id='site-footer'>
                <div className="container">
                    <span>
                        <ZuriLogo />
                    </span>
                    <span>
                        HNG Internship 9 Frontend Task
                    </span>
                    <span>
                        <I4GLogo />
                    </span>
                </div>
            </footer>
        );
    }
}
 
export default Footer;