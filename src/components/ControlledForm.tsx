import { FormEvent, ChangeEvent } from 'react'
import { useState } from 'react'

interface FormDataInterface {
  name: string
  email: string
}

const initialFormData: FormDataInterface = {
  name: '',
  email: ''
}

const FeedbackForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`Name: ${formData.name}, Number phone: ${formData.email}`)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <h2>Controlled Component</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            value={formData.name}
            onChange={handleInputChange}
            type="text"
            id="name"
            placeholder="Name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="number-phone">Email: </label>
          <input
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            id="number-phone"
            placeholder="Email"
            name="email"
          />
        </div>
        <button type="submit">Send me</button>
      </form>
    </div>
  )
}

export default FeedbackForm
