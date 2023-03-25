function SignupForm(Props) {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function handleNameChange(event) {
        const {value} = event.target
        setName(value)
    }

    function handleEmailChange(event) {
        const {value} = event.target
        setEmail(value)
    }

    function handlePasswordChange(event) {
        const {value} = event.target
        setPassword(value)
    }

    return (
        <div className="gridContainer">
        <div className="signup-form">
            <form>

                <div>
                    <label htmlFor="card_name">name</label>
                    <input id="card_name" value={name} onChange={handleNameChange}/>
                </div>

                <div>
                    <label htmlFor="card_email">email</label>
                    <input id="card_email" value={email} onChange={handleEmailChange}/>
                </div>

                <div>
                    <label htmlFor="card_password">password</label>
                    <input id="card_password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button className="signup-buttons">
                    <button className="primary" type="signup">Signup</button>
                    <button className="secondary" type="cancel">Cancel</button>
                </button>
            </form>

        </div>
        </div>
    )

}

export default SignupForm;
