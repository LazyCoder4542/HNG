import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as ArrBackIcon} from "./../../assets/icons/arrow_back.svg";
import "./404.css"
function Page404() {
    return (
        <React.Fragment>
            <main>
                <section id="error">
                    <header>
                        <small>404 error</small>
                        <h1>We can't find that page</h1>
                    </header>
                    <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
                    <div className="buttons">
                        <Link to='/' className="btn btn-primary">Take me home</Link>
                        <Link to='/' className="btn btn-secondary">
                            <span>
                                <ArrBackIcon />
                            </span>
                            Go back
                        </Link>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Page404;