import React from 'react'
import Input from '../Input/Input'
import '../../styles/Contact.css'
import Alert from '../Alert/Alert'

function Contact() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [errors, setErrors] = React.useState({})
  const [showSuccess, setShowSuccess] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // validate
    const errors = {}
    if (!name) errors.name = 'Name is required'
    if (!email) errors.email = 'Email is required'
    if (!message) errors.message = 'Message is required'
    setErrors(errors)

    const data = { name, email, message }

    if (!Object.keys(errors).length) {
      setShowSuccess(true)
    }

    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="contact-compo"
      style={{
        backgroundImage: `url('/img/contact-bg.png')`,
      }}
    >
      <div className="container">
        <h2>Contact</h2>
        <p className="mb-5">
          If you have any questions or want to work together, please feel free to contact .
        </p>

        {showSuccess && (
          <Alert type="success" autoClose={true}>
            message was sent successfully
          </Alert>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                errors={errors}
              />
            </div>
            <div className="col-md-6 mb-3">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errors={errors}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Input
                type="textarea"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                errors={errors}
              />
            </div>
          </div>

          <div>
            <button type="submit" className="btn mt-3">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
