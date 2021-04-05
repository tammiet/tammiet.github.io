import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div class="about-content">
        <div class="my-image">
          <StaticImage src="../images/tammie-amsterdam.jpeg" alt="Tammie" />
        </div>
        <div class="about-text">
          <h2>About</h2>
          I'm a full stack developer with experience developing in React, Django, C#, and SQL.
          Since graduating from <Link to="https://calvin.edu/">Calvin College</Link> two years ago I've worked as a consultant for <Link to="http://thenewfoundry.com/">NewFoundry</Link> and <Link to="https://menloinnovations.com/">Menlo Innovations</Link>.
          I am passionate about helping more girls discover a love for computers.
          Until I graduated from college, I was a facilitator at <Link to="https://girlswhocode.com/">Girls Who Code</Link> and part of <Link to="https://sites.google.com/view/ignitecs">Google's IgniteCS</Link> program.
          <br />
          <br />
          Go to <Link to="/questions">10 Questions</Link> for a Q&A with me!
        </div>
      </div>
    </main>
  )
}

export default IndexPage
