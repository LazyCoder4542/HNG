import React from 'react';
import './Contact.css'
function Contact() {
    return (
        <React.Fragment>
            <main>
                <section id='contact'>
                    <header>
                        <h1>Contact Me</h1>
                        <p>Hi there, contact me to ask me about anything you have in mind.</p>
                    </header>
                    <div className="wrapper">
                        <form action="#" method="post">
                            <div>
                                <label htmlFor="first_name">
                                    First name
                                </label>
                                <input type="text" name='fname' placeholder='Enter your first name' id="first_name" />
                            </div>
                            <div>
                                <label htmlFor="last_name">
                                    Last name
                                </label>
                                <input type="text" name='lname' placeholder='Enter your last name' id="last_name" />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" name='email' placeholder='youremail@email.com' id="email" />
                            </div>
                            <div>
                                <label htmlFor="message">
                                    Message
                                </label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder='Send me a message and I wil reply as soon as possible'></textarea>
                            </div>
                            <div className='agree'>
                                <input type="checkbox" name="agree_to_terms" id="agree_to_terms" />
                                <label htmlFor="agree_to_terms">You agree to providing your data to LazyCoder who may contact you.</label>
                            </div>
                            <button type="submit">Send message</button>
                        </form>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Contact;