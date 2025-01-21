import { useState } from 'react'
import Container from './components/Container'
import FeedbackForm from './components/ControlledForm'
import LoginForm from './components/UncontrolledForm'
import SingupForm from './components/UncontrolledForm2'

const App = () => {
  const LOGIN_FORM = 'LOGIN_FORM'
  const SIGNUP_FORM = 'SIGNUP_FORM'
  const FEEDBACK_FORM = 'FEEDBACK_FORM'

  const [showForm, setShowForm] = useState<string>('')

  return (
    <>
      <Container>
        <h1>ДЗ 40.1. React під контролем: Від стану до запитів</h1>
      </Container>

      <div className="buttons-group">
        <Container className="flex-center">
          <button onClick={() => setShowForm(LOGIN_FORM)}>Uncontrolled Component (event)</button>
          <button onClick={() => setShowForm(SIGNUP_FORM)}>Uncontrolled Component (useRef)</button>
          <button onClick={() => setShowForm(FEEDBACK_FORM)}>Controlled Component</button>
        </Container>
      </div>

      <Container>
        {showForm === LOGIN_FORM && <LoginForm />}
        {showForm === SIGNUP_FORM && <SingupForm />}
        {showForm === FEEDBACK_FORM && <FeedbackForm />}
      </Container>
    </>
  )
}

export default App
