/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61d749445540d99bedc2a065").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class ThankYouView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ThankYouController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ThankYouView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61dbcf737475d032a7510d39'
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
    const proxies = ThankYouView.Controller !== ThankYouView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/autodopt.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar w-nav">
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
            <div />
            <div className="af-class-section-13 af-class-wf-section">
              <h1 className="af-class-heading-8">We're finding you a buyer,<br />you'll hear from them soon!</h1>
              <a href="index.html" className="af-class-button-3 w-button">Back</a>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default ThankYouView

/* eslint-enable */