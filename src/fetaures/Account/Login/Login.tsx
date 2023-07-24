import React, { useState, ChangeEvent, FormEvent } from 'react'

interface LoginForm {
  email: string
  password: string
}

const Login: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({ email: '', password: '' })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // VALIDAÇÕES
    console.log('Email:', form.email)
    console.log('Senha:', form.password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Digite seu usuário"
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Digite sua senha"
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login
