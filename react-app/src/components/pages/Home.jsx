import React from 'react';
import profilepic from "./../../assets/images/profile__img.png";
import {ReactComponent as ShareLogo} from "./../../assets/icons/share.svg"
import {ReactComponent as SlackLogo} from "./../../assets/icons/slack.svg"
import {ReactComponent as GitHubLogo} from "./../../assets/icons/github.svg"
import './Home.css'
export default function Home() {
    return (
        <React.Fragment>
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
                        <a href='https://books.zuri.team' target='_blank' rel="noreferrer noopener" id="books">Zuri Books</a>
                        <a href='https://books/zuri/team/python-for-beginners?ref-id={slackusername}' target='_blank' rel="noreferrer noopener" id="book__python">Python Books</a>
                        <a href='https://backgroundcheck.zuri.team' target='_blank' rel="noreferrer noopener" id="pitch">Background Check for Coders</a>
                        <a href='https://books/zuri/team/design-rules' target='_blank' rel="noreferrer noopener" id="book__design">Design Books</a>
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