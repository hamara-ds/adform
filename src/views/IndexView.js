/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import ContactFormView from './ContactFormView'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61d749445540d99bedc2a065").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61d749445540d9b8cac2a066'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {
      'contact-form': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/autodopt.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-2">
            <div id="modal-wrapper" style={{display: 'none', opacity: 0}} className="af-class-modal-wrapper">
              <div data-w-id="c7d1aa52-bdbc-0d92-f7b3-a6c597f875aa" className="af-class-form-close" />
              <div className="af-class-modal w-form">
                <div data-w-id="cd7877a9-903b-7c6a-d384-392f6320caef" className="af-class-close"><img src="images/close_icon_black.png" loading="lazy" sizes="100vw" srcSet="images/close_icon_black-p-500.png 500w, images/close_icon_black.png 600w" alt className="af-class-image-33" /></div>
                {map(proxies['contact-form'], props => <ContactFormView.Controller {...props}>{props.children}</ContactFormView.Controller>)}
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div className="af-class-nav">
              <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar w-nav">
                <div className="af-class-container-9 w-container"><img src="images/Autodopt_Logo_Red.png" loading="lazy" height={40} sizes="(max-width: 479px) 26vw, 65.44792175292969px" srcSet="images/Autodopt_Logo_Red-p-500.png 500w, images/Autodopt_Logo_Red-p-800.png 800w, images/Autodopt_Logo_Red-p-1080.png 1080w, images/Autodopt_Logo_Red.png 1500w" alt className="af-class-image-29" />
                  <h1 className="af-class-heading-11">Autodopt</h1>
                </div>
                <div className="af-class-container-2 w-container">
                  <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                    <div className="af-class-container-10 w-container" />
                    <a href="#" className="af-class-nav-link w-nav-link">Our Mission</a>
                    <a href="#Who-we-are" className="af-class-nav-link w-nav-link">Who We Are</a>
                    <a href="#FAQ" className="af-class-nav-link w-nav-link">FAQ</a>
                  </nav>
                  <div className="af-class-menu-button w-nav-button">
                    <div className="af-class-icon w-icon-nav-menu" />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-div-block-6">
              <div className="af-class-div_block_content">
                <div className="af-class-text_tagline">Selling your car? <br />We have credible buyers</div>
              </div>
              <a href="#" data-w-id="5e99a418-4025-1c3b-e254-9fe62e7bab55" className="af-class-button w-button">Sell Your Car</a>
            </div>
            <div className="af-class-div-block">
              <div className="af-class-columns-2 w-row">
                <div className="af-class-column-5 w-col w-col-4"><img src="images/Autodopt_Icon_1.png" loading="lazy" sizes="(max-width: 479px) 36vw, 120.15625px" srcSet="images/Autodopt_Icon_1-p-500.png 500w, images/Autodopt_Icon_1.png 726w" alt className="af-class-image-26" />
                  <h1 className="af-class-heading-10">Step 1</h1>
                  <div className="af-class-text-block-7">Fill out our form</div>
                </div>
                <div className="af-class-column-6 w-col w-col-4"><img src="images/Autodopt_Icon_2.png" loading="lazy" sizes="(max-width: 479px) 33vw, 110.91667175292969px" srcSet="images/Autodopt_Icon_2-p-500.png 500w, images/Autodopt_Icon_2.png 855w" alt className="af-class-image-25" />
                  <h1 className="af-class-heading-10">Step 2</h1>
                  <div className="af-class-text-block-7">Hear from our buyer</div>
                </div>
                <div className="af-class-column-7 w-col w-col-4"><img src="images/Autodopt_Icon_3.png" loading="lazy" sizes="(max-width: 479px) 55vw, 186.42709350585938px" srcSet="images/Autodopt_Icon_3-p-500.png 500w, images/Autodopt_Icon_3-p-800.png 800w, images/Autodopt_Icon_3.png 1260w" alt className="af-class-image-27" />
                  <h1 className="af-class-heading-10">Step 3</h1>
                  <div className="af-class-text-block-7"><span className="af-class-text-span">Receive an offer</span></div>
                </div>
              </div>
            </div>
            <div id="Our-Mission" className="af-class-div-block-2">
              <div className="af-class-div_block_content">
                <h1 className="af-class-section-tittle-2">Our Mission</h1><img src="images/AdobeStock_39969559.jpeg" loading="lazy" srcSet="images/AdobeStock_39969559-p-800.jpeg 800w, images/AdobeStock_39969559-p-1600.jpeg 1600w, images/AdobeStock_39969559-p-2000.jpeg 2000w, images/AdobeStock_39969559-p-2600.jpeg 2600w, images/AdobeStock_39969559-p-3200.jpeg 3200w, images/AdobeStock_39969559.jpeg 6500w" sizes="(max-width: 991px) 100vw, 800px" alt className="af-class-image-24" />
                <p className="af-class-paragraph">We wanted to make selling a car simple and fast by putting people directly in touch with high quality buyers - so we do exactly that. Using our service you can have an offer on your car in as little as 24 hours. </p>
              </div>
            </div>
            <div className="af-class-div-block-7"><img src="images/AdobeStock_103935517.jpeg" loading="lazy" width={1202} sizes="100vw" srcSet="images/AdobeStock_103935517-p-1080.jpeg 1080w, images/AdobeStock_103935517-p-1600.jpeg 1600w, images/AdobeStock_103935517-p-2000.jpeg 2000w, images/AdobeStock_103935517-p-2600.jpeg 2600w, images/AdobeStock_103935517-p-3200.jpeg 3200w, images/AdobeStock_103935517.jpeg 4500w" alt className="af-class-image-20" /></div>
            <div id="Who-we-are" className="af-class-div-block-3">
              <div className="af-class-div_block_content">
                <h1 className="af-class-section-title-1">Who we are</h1>
                <div className="af-class-section-17 af-class-wf-section">
                  <div data-delay={4000} data-animation="slide" className="af-class-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true">
                    <div className="af-class-mask w-slider-mask">
                      <div className="af-class-slide w-slide">
                        <div className="af-class-container-12 w-container"><img width={271} loading="lazy" src="images/daniel3-1.png" alt className="af-class-team_portrait" />
                          <div className="af-class-team_member_name">Daniel Gold</div>
                          <div className="af-class-team_title_slider">Founder</div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div className="af-class-container-12 w-container"><img width={271} loading="lazy" src="images/nick-temp.png" alt className="af-class-team_portrait" />
                          <div className="af-class-team_member_name">Nick Geisler</div>
                          <div className="af-class-team_title_slider">Partner, Sales and Marketing</div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div className="af-class-container-12 w-container"><img width={271} sizes="100vw" src="images/photo_2022-01-16_18-53-422.jpg" loading="lazy" srcSet="images/photo_2022-01-16_18-53-422-p-500.jpeg 500w, images/photo_2022-01-16_18-53-422-p-800.jpeg 800w, images/photo_2022-01-16_18-53-422.jpg 917w" alt className="af-class-team_portrait" />
                          <div className="af-class-team_member_name">Cameron Guthrie</div>
                          <div id="Team_Title" className="af-class-team_title_slider">Partner, Technology</div>
                        </div>
                      </div>
                    </div>
                    <div className="af-class-left_arrow w-slider-arrow-left">
                      <div className="af-class-left_arrow_icon w-icon-slider-left" />
                    </div>
                    <div className="af-class-right_arrow w-slider-arrow-right">
                      <div className="af-class-right_arrow_icon w-icon-slider-right" />
                    </div>
                    <div className="af-class-slide-nav-2 w-slider-nav w-round" />
                  </div>
                </div>
                <div className="af-class-section-2 af-class-wf-section">
                  <div className="af-class-columns w-row">
                    <div className="af-class-who-we-are w-col w-col-4">
                      <div><img src="images/daniel3-1.png" loading="lazy" width={150} alt className="af-class-image-22" /></div>
                      <h1 className="af-class-heading-5">Daniel Gold</h1>
                      <div className="af-class-text-block-6">Founder</div>
                    </div>
                    <div className="af-class-who-we-are w-col w-col-4"><img src="images/nick-temp.png" loading="lazy" width={150} alt className="af-class-image-21" />
                      <h1 className="af-class-heading-5">Nick Geisler</h1>
                      <div className="af-class-text-block-6">Partner, Sales and Marketing</div>
                    </div>
                    <div className="af-class-who-we-are w-col w-col-4"><img src="images/photo_2022-01-16_18-53-422.jpg" loading="lazy" width={150} sizes="150px" srcSet="images/photo_2022-01-16_18-53-422-p-500.jpeg 500w, images/photo_2022-01-16_18-53-422-p-800.jpeg 800w, images/photo_2022-01-16_18-53-422.jpg 917w" alt />
                      <h1 className="af-class-heading-5">Cameron Guthrie</h1>
                      <div className="af-class-text-block-6">Partner, Technology</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="FAQ" className="af-class-div-block-4">
              <div className="af-class-div_block_content">
                <h1 className="af-class-section-tittle-2">FAQ</h1>
                <div className="af-class-section-16 af-class-wf-section">
                  <div className="w-layout-grid af-class-grid-2">
                    <div id="w-node-_2fa2a062-e363-0c82-cb35-e8e6b9d265c4-cac2a066" className="af-class-question">What kind of cars do you accept?</div>
                    <div id="w-node-_2fa2a062-e363-0c82-cb35-e8e6b9d265c8-cac2a066" className="af-class-question">Is my data safe?</div>
                    <div id="w-node-_2fa2a062-e363-0c82-cb35-e8e6b9d265cc-cac2a066" className="af-class-question">Do you receive a commission?</div>
                    <div id="w-node-_2fa2a062-e363-0c82-cb35-e8e6b9d265d0-cac2a066" className="af-class-answer">All cars are considered,<br />from old to new.</div>
                    <div id="w-node-_2fa2a062-e363-0c82-cb35-e8e6b9d265d4-cac2a066" className="af-class-answer">Our credible buyers are the only ones who receive your personal data.</div>
                    <div id="w-node-_2fa2a062-e363-0c82-cb35-e8e6b9d265de-cac2a066" className="af-class-answer">We don’t take a commission, which means more money in your pocket. are the only ones who receive your personal data.</div>
                  </div>
                  <div className="w-layout-grid af-class-grid-2">
                    <div className="af-class-question">If I fill in your form, do I have to sell my car?</div>
                    <div className="af-class-question">Why should I sell my car<br />through you?</div>
                    <div className="af-class-question">Where are you based?</div>
                    <div className="af-class-answer">No, you are under no obligation to sell your car.</div>
                    <div className="af-class-answer">Unlike online marketplaces that are filled with flakers, ghosters and lowballers, we make the process of selling a car easy and we work hard to ensure that you get a good price.</div>
                    <div className="af-class-answer">We are based in Vancouver Canada, with parts of our team working in Chicago and St. Louis.</div>
                  </div>
                </div>
                <div className="af-class-section-15 af-class-wf-section">
                  <div data-delay={4000} data-animation="slide" className="af-class-slider-2 w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true">
                    <div className="w-slider-mask">
                      <div className="w-slide">
                        <div className="af-class-slide-container w-container">
                          <div className="af-class-question">What kind of cars do<br />you accept?</div>
                          <div className="af-class-answer">All cars are considered, <br />from old to new.</div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div className="af-class-slide-container w-container">
                          <div className="af-class-question">Do you receive a commission?</div>
                          <div className="af-class-answer">We don’t take a commission, which <br />means more money in your pocket.</div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div className="af-class-slide-container w-container">
                          <div className="af-class-question">If I fill in your form,<br />do I have to sell my car? &nbsp;<br /></div>
                          <div className="af-class-answer">No, you are under no obligation <br />to sell your car.<br /></div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div className="af-class-slide-container w-container">
                          <div className="af-class-question">Is my data safe?<br /></div>
                          <div className="af-class-answer">Our credible buyers are the only ones <br />who receive your personal data.<br /></div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div className="af-class-slide-container w-container">
                          <div className="af-class-question">Why should I sell my car<br />through you?<br /></div>
                          <div className="af-class-answer">Unlike online marketplaces that are <br />filled with flakers, ghosters and <br />lowballers, we make the process of <br />selling a car easy and we work hard <br />to ensure that you get a good price.</div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div className="af-class-slide-container w-container">
                          <div className="af-class-question">Where are you based? <br /></div>
                          <div className="af-class-answer">We are based in Vancouver Canada, <br />with parts of our team working in <br />Chicago and St. Louis.<br /></div>
                        </div>
                      </div>
                    </div>
                    <div className="af-class-left_arrow w-slider-arrow-left">
                      <div className="af-class-left_arrow_icon w-icon-slider-left" />
                    </div>
                    <div className="af-class-right_arrow w-slider-arrow-right">
                      <div className="af-class-right_arrow_icon w-icon-slider-right" />
                    </div>
                    <div className="af-class-slide-nav w-slider-nav w-round" />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-div-block-10">
              <div className="af-class-section-3 af-class-wf-section">
                <div className="af-class-container-3 w-container">
                  <div className="af-class-question_light">To get in touch, please email any questions to info@autodopt.com and we'll get back to you right away.</div>
                </div>
              </div>
            </div>
            <div className="af-class-div-block-5">
              <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar-2 w-nav">
                <a href="#" className="af-class-brand-2 w-nav-brand"><img src="images/Frame.png" loading="lazy" height={40} alt className="af-class-image-30" /></a>
                <div className="af-class-container-4 w-container">
                  <a href="#Our-Mission" className="af-class-nav_link w-nav-link">Our Mission</a>
                  <a href="#Who-we-are" className="af-class-nav_link w-nav-link">Who We Are</a>
                  <a href="#FAQ" className="af-class-nav_link w-nav-link">FAQ</a>
                  <div className="w-nav-button">
                    <div className="w-icon-nav-menu" />
                  </div>
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

export default IndexView

/* eslint-enable */