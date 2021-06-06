import React, { useState } from 'react';
import './component.css';


const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [allEntry, setAllEntry] = useState([])

    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = {id: new Date().getTime().toString(), email, password }

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry)
        setEmail('')
        setPassword('')
    }


    return (
        <div>
        <div className="main" >
            <form action="" onSubmit={submitForm}>
                <h1 className="head">
                    Form Validation
            </h1>
                <div>
                    <h3 className="textfeild">Email</h3>
                    <input type="email" name="email" id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <h3 className="textfeild">Password</h3>
                    <input type="password" name="password" id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <button className="btn" type="submit">submit</button>
            </form>

        </div>
        <br />
            <div>        
            {
                allEntry.map((Current)=> {
                    const{id,email,password} = Current;
                    return(
                    <div className="DataStyle" key={id}> 
                        <p>Email:{email}</p>
                        <p>Password:{password}</p>
                        <p>ID:{id}</p>
                        </div>
                    
                    )
                })
            }
            </div>
        </div>
    )
};
export default Form;