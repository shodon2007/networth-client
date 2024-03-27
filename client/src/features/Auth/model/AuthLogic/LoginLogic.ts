import { FormEvent } from "react"

export const LoginSubmit = async (e: FormEvent<HTMLElement>) => {
  e.preventDefault()

  try {

  } catch (err) {
    console.error(`Login error ! - ${err}`)
  }

  return console.log('submit!')
}