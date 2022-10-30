import React, { useEffect, useState } from 'react';
import PopUp from '../atoms/popup-msg';
import profilepic from "./../../assets/images/profile__img.png";
import {ReactComponent as ShareLogo} from "./../../assets/icons/share.svg"
import {ReactComponent as SlackLogo} from "./../../assets/icons/slack.svg"
import {ReactComponent as GitHubLogo} from "./../../assets/icons/github.svg"
import './Home.css'
export default function Home() {
    const [msgProps, setMsgProps] = useState({
        x: 0,
        y: 0,
        class: 'hidden',
        msg: ''
    })
    useEffect(() => {
        [...document.querySelector('.links').children].forEach(elem => {
                elem.oncontextmenu = rightClick;
            });
        function rightClick(e) {
            e.preventDefault();
            navigator.clipboard.writeText(e.target.href);
            setMsgProps({
                x: e.clientX<(window.innerWidth - 200) ? e.clientX : (window.innerWidth - 200),
                y: e.clientY + window.scrollY,
                class: "shown",
                msg: "copied to clipboard"
            })
            setTimeout(()=>{
                setMsgProps({
                    class: "hidden",
                    msg: ""
                })
            }, 2000)
            // return false;
            return <PopUp />
        }
    }, [])
    return (
        <React.Fragment>
            <PopUp x={msgProps.x} y={msgProps.y} class={msgProps.class} msg={msgProps.msg} />
            <main>
                <section id="profile">
                    <div className="profile-pic focused-elem" tabIndex={1}>
                        <img src={profilepic} alt="profile-img" id="profile__img focused-elem" className="pic" />
                    </div>
                    <div className="name">
                        <h3 className="fullname">Annette Black</h3>
                        <p id="twitter">@MathFreak7</p>
                        <p id="slack" hidden></p>
                    </div>
                    <div className="action_button focused-elem" tabIndex={1}>
                        <ShareLogo />
                    </div>
                </section>
                <section id="links">
                    <div className="links">
                        <a href='https://www.twitter.com/MathFreak6' target='_blank' rel="noreferrer noopener" id="btn__twitter">Twitter Link</a>
                        <a href='https://training.zuri.team' target='_blank' rel="noreferrer noopener" id="btn__zuri">Zuri Team</a>
                        <a href='https://books.zuri.team' target='_blank' rel="noreferrer noopener" id="books" title='Find featured books on coding and design'>Zuri Books</a>
                        <a href='https://books.zuri.team/python-for-beginners?ref_id=adeolafadare8' target='_blank' rel="noreferrer noopener" id="book__python" title='Begin your Python career'>Python Books</a>
                        <a href='https://backgroundcheck.zuri.team' target='_blank' rel="noreferrer noopener" id="pitch" title='Don’t Make Assumptions, Be 100% Certain when hiring'>Background Check for Coders</a>
                        <a href='https://books.zuri.team/design-rules' target='_blank' rel="noreferrer noopener" id="book__design" title='Get a copy of a free design book'>Design Books</a>
                    </div>
                    <div className="socials">
                        <span>
                            <SlackLogo />
                        </span>
                        <span>
                            <GitHubLogo />
                        </span>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}