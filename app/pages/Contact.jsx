import React from 'react'
import { Helmet } from 'react-helmet'
import { Fade } from 'react-reveal'
import ContactForm from '../components/ContactForm'
import '../styles/n0-x.styles.scss'
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form'

const help = [
    {
      label: 'General Question',
      value: 'inquire',
    },
    {
      label: 'Get An Estimate',
      value: 'estimate',
    },
    {
      label: 'Customer Support',
      value: 'support',
    },
  ]

const Contact = () => (
    <div className='content'>

      <Helmet><title>Contact Us</title></Helmet>

      <div className='logo-bg'>
        <div className='bg-tint bg-content'>
          <div className='nox-12 p-5 info-bg'>

            <div className='heading mb-4'>
              Contact Us
            </div>

            <Form onSubmit={submittedValues => this.setState({ submittedValues })}>

              {formApi => (
                <form onSubmit={formApi.submitForm} id="form2">
                  <span className='nox-12 contain'>

                    <span className='nox-2'>

                      <span><label htmlFor="help" className="d-block">How Can We Help?</label></span>
                      <span><Select field="help" id="help" options={help} className="mb-4" /></span>

                      <span><label htmlFor="firstName">First Name</label></span>
                      <span><Text field="firstName" id="firstName" className="mb-4" /></span>

                      <span><label htmlFor="lastName">Last Name</label></span>
                      <span><Text field="lastName" id="lastName" className="mb-4" /></span>

                      <span><label htmlFor="email">Email</label></span>
                      <span><Text field="email" id="email" className="mb-4" /></span>

                      <span><label htmlFor="url">Website</label></span>
                      <span><Text field="url" id="url" className="mb-4" /></span>
                    </span>

                    {/*
                      <span>
                      <RadioGroup field="gender">
                      <label htmlFor="male" className="mr-2">Male</label>
                      <Radio value="male" id="male" className="mr-3 d-inline-block" />
                      <label htmlFor="female" className="mr-2">Female</label>
                      <Radio value="female" id="female" className="d-inline-block" />
                      </RadioGroup>
                      </span>
                    */}

                    <span className='nox-3'>
                      <span><label htmlFor="message">Message</label></span>
                      <span><TextArea field="message" id="message" className="mb-4" rows='16' cols='32' /></span>
                      <span>
                        <button type="submit" className="mb-4 btn btn-primary">
                          Send
                        </button>
                      </span>
                    </span>
                  </span>

                </form>
              )}

            </Form>
          </div>
        </div>
      </div>
    </div>

)

export default Contact
