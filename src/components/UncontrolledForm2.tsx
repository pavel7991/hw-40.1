import { FormEvent } from 'react'
import { useRef } from 'react'

const SingupForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (usernameRef.current && emailRef.current && passwordRef.current) {
      const username = usernameRef.current?.value
      const email = emailRef.current?.value
      const password = passwordRef.current?.value
      console.log(`Username: ${username}, Email: ${email}, Password: ${password}`)
    }
  }

  return (
    <div>
      <h2>Uncontrolled Component (useRef)</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input ref={usernameRef} type="text" id="username" placeholder="Username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input ref={emailRef} type="text" id="email" placeholder="Email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input ref={passwordRef} type="text" id="password" placeholder="Password" name="password" />
        </div>
        <button type="submit">SingUp</button>
      </form>
    </div>
  )
}

export default SingupForm
