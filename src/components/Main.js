import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        
        <article id="web" className={`${this.props.article === 'web' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}style={{ display: 'none' }}>
          <h2 className="major">Web</h2>
          <p>In the winter, I build and maintain websites and social media properties and <a href="https://surreyhillscyclehire.co.uk">service bikes</a>.</p>
          <h4 className="major">Web Sites</h4>
          <div><a href="https://surreyhillscyclehire.co.uk">Surrey Hills Cycle Hire</a></div>
          <div><a href="http://petworthrealtennis.com">Petworth Real Tennis Court</a></div>
          <div><a href="https://hambledonfestival.co.uk">Hambledon Midsummer Festival</a></div>
          <div><a href="http://hambledonsurrey.co.uk">Hambledon Village</a></div>
          <div><a href="http://hvsdashboard.jonpetersen.co.uk/hvs1">Hambledon Village Shop Dashboard</a></div>
          {close}
        </article>

        <article id="bikes" className={`${this.props.article === 'bikes' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Bikes</h2>
          <p>In the summer, I provide guided bike tours and bike hire at <a href="http://surreyhillscyclehire.co.uk">Surrey Hills Cycle Hire</a>.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <p>Most of my career has been in the software industry, including 18 years at SPSS and as co-founder and co-owner of <a href="http://buuuk.com">buUuk</a>. Now I spend my time on <a href="https://surreyhillscyclehire.co.uk">Surrey Hills Cycle Hire</a>, <a href="https://hambledonfestival.co.uk">community projects</a>, outdoor activities and tech projects.</p>
          <p>If you live in the village of Hambledon (Surrey). I'll retune your TV, setup your iPhone/iPad, get your email working, fix your bike or walk your dog for a beer, or a bottle of wine if it's complicated. If you live on Woodlands Road I'll do it for free.</p> 
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form name="contact_form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/singeo" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://github.com/jonpetersen" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
