/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61d749445540d99bedc2a065").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class FormView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FormController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FormView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61dbb55540b7c1cf81546ea2'
    htmlEl.dataset['wfSite'] = '61d749445540d99bedc2a065'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = FormView.Controller !== FormView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/autodopt.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div>
              <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar-3 w-nav">
                <div className="af-class-container-2 w-container">
                  <a href="#" className="af-class-brand w-nav-brand"><img src="images/logo.png" loading="lazy" width={55} sizes="55px" srcSet="images/logo-p-500.png 500w, images/logo.png 836w" alt className="af-class-image-18" />
                    <h1 className="af-class-heading">Autodopt</h1>
                  </a>
                  <nav role="navigation" className="w-nav-menu">
                    <a href="index.html" className="af-class-nav-link w-nav-link">Our Mission</a>
                    <a href="index.html" className="af-class-nav-link w-nav-link">Who We Are</a>
                    <a href="index.html" className="af-class-nav-link w-nav-link">FAQ</a>
                  </nav>
                  <div className="w-nav-button">
                    <div className="w-icon-nav-menu" />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-div-block-8">
              <div>
                <div className="af-class-wf-section">
                  <h1 className="af-class-heading-7">Fill out this form and leave the rest to us, <br />we promise not to leave you hanging</h1>
                </div>
                <div className="af-class-columns-3 w-row">
                  <div className="af-class-column-3 w-col w-col-6" />
                  <div className="af-class-column-4 w-col w-col-6" />
                </div>
              </div>
              <div className="w-form">
                <form id="email-form" name="email-form" data-name="Email Form" method="get">
                  <div className="w-row">
                    <div className="af-class-column-8 w-col w-col-6">
                      <div className="w-layout-grid af-class-grid-5">
                        <div id="w-node-_9f676f9e-f7c6-491b-a2e0-f9a68591ffb9-81546ea2" className="af-class-section-4 af-class-wf-section">
                          <div className="af-class-text-block-14">Make</div>
                        </div>
                        <div id="w-node-_415a6547-2f6f-7e72-d54e-284ef71d5a30-81546ea2" className="af-class-section-5 af-class-wf-section"><input type="text" className="af-class-text-field-3 w-input" autofocus="true" maxLength={256} name="Make" data-name="Make" placeholder id="Make" required /></div>
                        <div id="w-node-e8c15db1-f657-c95e-e61c-71a943c8a39a-81546ea2" className="af-class-section-4 af-class-wf-section">
                          <div id="w-node-_1f8f09e5-8c22-6ae6-f262-2132d711768f-81546ea2" className="af-class-text-block-15">Year</div>
                        </div>
                        <div id="w-node-d1c54af3-c2ef-32e7-7e26-b3d7fb8011c6-81546ea2" className="af-class-section-6 af-class-wf-section"><input type="number" className="af-class-text-field-3 w-input" maxLength={256} name="Year" data-name="Year" placeholder id="Year" required /></div>
                        <div id="w-node-_1d514058-2cad-120a-8e0c-9b27d44fd5d9-81546ea2" className="af-class-section-4 af-class-wf-section">
                          <div id="w-node-_2f05a43c-d4bc-cee1-06e5-82f430902bc5-81546ea2" className="af-class-text-block-16">Title Status</div>
                        </div>
                        <div id="w-node-_8e2a55f9-e2db-09c5-d652-f2957946714d-81546ea2" className="af-class-section-7 af-class-wf-section"><input type="text" className="af-class-text-field-3 w-input" maxLength={256} name="TitleStatus" data-name="TitleStatus" placeholder id="TitleStatus" required /></div>
                        <div id="w-node-_81d462c1-f6f0-ce68-be32-6302df213113-81546ea2" className="af-class-section-4 af-class-wf-section">
                          <div id="w-node-f3317021-c4d6-a3de-e904-5ab37cae5a4a-81546ea2" className="af-class-text-block-17">First Name</div>
                        </div>
                        <div id="w-node-f91ceabc-c0ef-e5fe-c04a-728cf21e72a0-81546ea2" className="af-class-section-8 af-class-wf-section"><input type="text" className="af-class-text-field-3 w-input" maxLength={256} name="FirstName" data-name="FirstName" placeholder id="FirstName" required /></div>
                        <div id="w-node-e72e2c78-ca32-e53a-0d60-e533859c2158-81546ea2" className="af-class-section-4 af-class-wf-section">
                          <div className="af-class-text-block-18">Phone Number</div>
                        </div>
                        <div className="af-class-section-9 af-class-wf-section"><input type="tel" className="af-class-text-field-3 w-input" maxLength={256} name="PhoneNumber" data-name="PhoneNumber" placeholder id="PhoneNumber" required /></div>
                      </div>
                    </div>
                    <div className="af-class-column-9 w-col w-col-6">
                      <div className="w-layout-grid af-class-grid-4">
                        <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c1fc-81546ea2" className="af-class-section-4 af-class-wf-section">
                          <div className="af-class-text-block-14">Model</div>
                        </div>
                        <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c1ff-81546ea2" className="af-class-section-5 af-class-wf-section"><input type="text" className="af-class-text-field-2 w-input" maxLength={256} name="Model" data-name="Model" placeholder id="Model" required /></div>
                        <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c200-81546ea2" className="af-class-section-4 af-class-wf-section">
                          <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c201-81546ea2" className="af-class-text-block-15">Mileage</div>
                        </div>
                        <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c203-81546ea2" className="af-class-section-6 af-class-wf-section"><input type="text" className="af-class-text-field-2 w-input" maxLength={256} name="Mileage" data-name="Mileage" placeholder id="Mileage" required /></div>
                        <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c204-81546ea2" className="af-class-section-4 af-class-wf-section">
                          <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c205-81546ea2" className="af-class-text-block-16">Transmission</div>
                        </div>
                        <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c207-81546ea2" className="af-class-section-7 af-class-wf-section"><input type="text" className="af-class-text-field-2 w-input" maxLength={256} name="Transmission" data-name="Transmission" placeholder id="Transmission" required /></div>
                        <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c208-81546ea2" className="af-class-section-4 af-class-wf-section">
                          <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c209-81546ea2" className="af-class-text-block-17">Last Name</div>
                        </div>
                        <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c20b-81546ea2" className="af-class-section-8 af-class-wf-section"><input type="text" className="af-class-text-field-2 w-input" maxLength={256} name="LastName" data-name="LastName" placeholder id="LastName" required /></div>
                        <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c20c-81546ea2" className="af-class-section-4 af-class-wf-section">
                          <div className="af-class-text-block-18">Postal code</div>
                        </div>
                        <div id="w-node-d876a673-1bf6-a04a-c6dc-16475874c20f-81546ea2" className="af-class-section-9 af-class-wf-section"><input type="text" className="af-class-text-field-2 w-input" maxLength={256} name="PostalCode" data-name="PostalCode" placeholder id="PostalCode" required /></div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-container-8 w-container">
                    <div className="w-layout-grid af-class-grid-7">
                      <div id="w-node-a93e1e9d-1e91-e8e8-d69a-5b87bda8e821-81546ea2" className="af-class-section-11 af-class-wf-section">
                        <div id="w-node-_1450e443-d805-d3f1-8039-7145826b4131-81546ea2" className="af-class-text-block-20">Email</div>
                      </div>
                      <div id="w-node-e84e8ea0-717d-3378-87a4-f3bd18dff6fd-81546ea2" className="af-class-section-12 af-class-wf-section"><input type="email" className="af-class-text-field-2 w-input" maxLength={256} name="Email" data-name="Email" placeholder id="Email" required /></div>
                    </div>
                  </div>
                  <div className="af-class-section-10 af-class-wf-section">
                    <a id="submitButton" href="thank-you.html" className="af-class-button-2 w-button">Submit Form</a>
                  </div>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default FormView

/* eslint-enable */