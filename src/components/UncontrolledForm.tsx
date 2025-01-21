import { FormEvent } from 'react'

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement
  password: HTMLInputElement
}

interface LoginFormElements extends HTMLFormElement {
  elements: FormElements
}

const LoginForm = () => {
  const handleFormSubmit = (e: FormEvent<LoginFormElements>) => {
    e.preventDefault()
    const form = e.currentTarget
    const username = form.elements.username.value
    const password = form.elements.password.value
    console.log(`Username: ${username}, Password: ${password}`)
  }

  return (
    <div>
      <h2>Uncontrolled Component (event)</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" placeholder="Username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" id="password" placeholder="Password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
