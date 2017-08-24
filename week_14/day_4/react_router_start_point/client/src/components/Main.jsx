import React, { Component } from 'react'
import About from './About'
import Home from './Home'
import Pricing from './Pricing'
import Mail from './Mail'

class Main extends Component {
  constructor() {
    super()
    this.state = { page: null }

    this.gotoHome = this.gotoHome.bind(this)
    this.gotoAbout = this.gotoAbout.bind(this)
    this.gotoPricing = this.gotoPricing.bind(this)
    this.gotoMail = this.gotoMail.bind(this)
  }

  render() {
    const child = this.pageComponent()
    return (
      <div>
        <h4>Main App</h4>
        <ul>
          <li><a onClick={this.gotoHome} href=''>Home</a></li>
          <li><a onClick={this.gotoAbout} href=''>About</a></li>
          <li><a onClick={this.gotoPricing} href=''>Pricing</a></li>
          <li><a onClick={this.gotoMail} href=''>Contact</a></li>
        </ul>
        {child}
      </div>
    )
  }

  pageComponent() {
    switch (this.state.page) {
    case '/about': return <About />
    case '/pricing': return <Pricing />
    default: return <Home />
    case '/mail': return <Mail />
    }
  }

  gotoHome(event) {
    event.preventDefault()
    this.setState( { page: '/home' })
  }

  gotoAbout(event) {
    event.preventDefault()
    this.setState( { page: '/about' })
  }

  gotoPricing(event) {
    event.preventDefault()
    this.setState( { page: '/pricing' })
  }

  gotoMail(event) {
    event.preventDefault()
    this.setState( { page: '/mail' })
  }
}


export default Main
