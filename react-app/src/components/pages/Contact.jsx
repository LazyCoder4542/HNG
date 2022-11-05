import React, { useEffect, useState } from 'react';
import './Contact.css'
function Contact() {
    const name = "Adeola Fadare"
    const [userAgreed, setUserAgreed] = useState(false)
    useEffect(() => {
        class formValidator {
                constructor(form, fields) {
                    this.form = form
                    this.fields = fields
                    this.isFormSubmittable = false
                }
                initialise() {
                    this.validateOnSubmit();
                    this.validateOnEntry();
                }
                validateOnSubmit() {
                    let self = this
                    this.form.addEventListener('submit', e => {
                        if (!this.isFormSubmittable) {
                        e.preventDefault();
                        this.isFormSubmittable = true
                        self.fields.forEach(field => {
                            const input = document.querySelector(`#${field}`)
                            let isFormSubmittable = self.validateFields(input)
                            this.isFormSubmittable = this.isFormSubmittable && isFormSubmittable
                        });
                        console.log(this.isFormSubmittable)
                        }
            
                    })
                }
                validateOnEntry() {
                    let self = this
                    this.fields.forEach(field => {
                        const input = document.querySelector(`#${field}`)
                        input.addEventListener('input', () => {
                            let isFormSubmittable = self.validateFields(input)
                            console.log(isFormSubmittable);
                        })
                    })
                }
            
                validateFields(field) {
                    var formSubmittable = true
                    if (field.value.trim() === "") {
                        if (field.id === 'message') {
                            this.setStatus(field, 'Please enter a message', 'error')
                        }
                        else {
                            this.setStatus(field, `${(field.previousElementSibling.innerText).toLowerCase()} is required`, 'error')
                        }
                        formSubmittable = formSubmittable && false
                    }
                    else {
                        if (field.id === 'email') {
                            var re1 = /\S+@\S+./
                            if (re1.test(field.value)) {
                                this.setStatus(field, null, 'success')
                            }
                            else { this.setStatus(field, '*enter a valid email', 'error'); formSubmittable = formSubmittable || false }
                        }
                        else if (field.id === 'password') {
                            var re = /(([A-Z]+)([0-9]+)([a-z]+))|(([0-9]+)([A-Z]+)([a-z]+))|(([0-9]+)([a-z]+)([A-Z]+))|(([A-Z]+)([a-z]+)([0-9]+))|(([a-z]+)([A-Z]+)([0-9]+))|(([a-z]+)([0-9]+)([A-Z]+))/
                            if (!re.test(field.value)) {
                                this.setStatus(field, '*must contain at least one lowercase, uppercase and digit', 'error')
                                formSubmittable = formSubmittable && false
                            }
                            else if (!(field.value.length >= 6)) {
                                this.setStatus(field, '*minimum of 6', 'error')
                                formSubmittable = formSubmittable && false
                            }
                            else {
                                this.setStatus(field, null, 'success')
                            }
                            try {
                                if (this.form.querySelector('#password_confirmation').value !== field.value) {
                                    this.setStatus(this.form.querySelector('#password_confirmation'), '*password do not match', 'error')
                                    formSubmittable = formSubmittable && false
                                }
                                else { this.setStatus(this.form.querySelector('#password_confirmation'), null, 'success') }
                            } catch { }
                        }
                        else {
            
            
                            this.setStatus(field, null, 'success')
            
                        }
                    }
                return (formSubmittable)
            
                }
            
                setStatus(field, message, status) {
                    field.parentElement.querySelector('.error-text').innerText = message
                    if (status === 'error') {
                        field.parentElement.classList.add('error')
                    }
                    else {
                        field.parentElement.classList.remove('error')
                    }
                }
            
            }
	    
	    const form = document.querySelector('form');
	    const fields = ['first_name', 'last_name', 'email', 'message']
	    
	    const validator = new formValidator(form, fields)
	    
	    validator.initialise()
    }, [])
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
                                <small className="error-text"></small>
                            </div>
                            <div>
                                <label htmlFor="last_name">
                                    Last name
                                </label>
                                <input type="text" name='lname' placeholder='Enter your last name' id="last_name" />
                                <small className="error-text"></small>
                            </div>
                            <div>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" name='email' placeholder='youremail@email.com' id="email" />
                                <small className="error-text"></small>
                            </div>
                            <div>
                                <label htmlFor="message">
                                    Message
                                </label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder='Send me a message and I wil reply as soon as possible'></textarea>
                                <small className="error-text"></small>
                            </div>
                            <div className='agree'>
                                <input type="checkbox" name="agree_to_terms" id="agree_to_terms"
                                checked={userAgreed}
                                onChange={()=>{
                                    setUserAgreed(!userAgreed)
                                }}
                                />
                                <label htmlFor="agree_to_terms">You agree to providing your data to {name} who may contact you.</label>
                            </div>
                            <button type="submit" id='btn__submit' className={userAgreed ? null : 'disabled' }>Send message</button>
                        </form>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Contact;