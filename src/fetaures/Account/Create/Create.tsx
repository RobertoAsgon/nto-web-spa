import React, { useState, ChangeEvent, FormEvent } from 'react'
import { VOCATION, VocationModel } from '../../../services/player/playerModel'
import { dataVocation } from '../../../services/player/playerData'
import VocationCard from '../../../components/VocationCard/VocationCard'

interface CreateAccountForm {
  email: string
  password: string
  playerName: string
  vocation: VOCATION
}

const Create: React.FC = () => {
  const [form, setForm] = useState<CreateAccountForm>({
    email: '',
    password: '',
    playerName: '',
    vocation: VOCATION.NARUTO
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }))
  }

  const handleSelectVocation = (vocation: VOCATION) => {
    setForm((prevForm) => ({
      ...prevForm,
      vocation
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // VALIDAÇÕES
    console.log('form:', form)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Usuário:</label>
        <input type="text" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Digite seu usuário" />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Digite sua senha"
        />

        <label htmlFor="password">Confirme sua senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Digite sua senha"
        />

        <label htmlFor="playerName">Nome Personagem:</label>
        <input
          type="playerName"
          id="playerName"
          name="playerName"
          value={form.playerName}
          onChange={handleChange}
          placeholder="Nome do personagem"
        />

        {Array.from(dataVocation).map(([vocation, data]) => {
          const isSelectedVocation = vocation === form.vocation
          return (
            <VocationCard
              isSelectedVocation={isSelectedVocation}
              onSelectVocation={(vocation) => handleSelectVocation(vocation)}
              vocationModel={data}
            />
          )
        })}

        <button type="submit">Criar</button>
      </form>
    </div>
  )
}

export default Create
