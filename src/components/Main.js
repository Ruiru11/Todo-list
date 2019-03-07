
import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const Main = () => (
  <div>
    <Container fluid>
      <Header as='h2'>About this</Header>
      <p>
        This is a simple todo application. Data displayed is fetched from <a href="https://jsonplaceholder.typicode.com/todos">Here</a>  which is a free api used for testing.
        Scope of React topics tackled. 
        <ul>
            <li>Render</li>
            <li>Class Components</li>
            <li>Functional components</li>
            <li>ComponentwillMount life cycle</li>
            <li>Finnal props</li>
        </ul>
      </p>
     
    </Container>
  </div>
)

export default Main