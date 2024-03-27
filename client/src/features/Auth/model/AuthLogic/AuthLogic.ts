import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const AuthSubmit = async (e: FormEvent<HTMLElement>) => {
  e.preventDefault()
  const navigate = useNavigate();

  try {


    navigate('/main/feed')
  } catch (err) {
    console.error(`in authtorization error ! - ${err}`)
  }
}