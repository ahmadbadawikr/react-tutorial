import { useState } from "react"

export function RegisterForm() {
    const [formFields, setFormFields] = useState({
        username: "",
        password: "",
        name:""
    })

    console.log(formFields)

    return (
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" value={formFields.username} onChange={(e) => {
                    setFormFields((currentState) => ({
                        ...currentState, 
                        username: e.target.value,}))
                }}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" value={formFields.password} onChange={(e)=>{
                    setFormFields((currentState) => ({
                        ...currentState, 
                        password: e.target.value,}))
                }}/>
            </div>
            <div>
                <label htmlFor="name">Display Name</label>
                <input id="name" value={formFields.name} onChange={(e)=>{
                    setFormFields((currentState) => ({
                        ...currentState, 
                        name: e.target.value,}))
                }}/>
            </div>
            <div>
                <span>Username: {formFields.username}</span>
            </div>
            <div>
                <span>Password: {formFields.password}</span>
            </div>
            <div>
                <span>Display Name: {formFields.name}</span>
            </div>
            <button>Sign Up</button>
        </form>
    )
}