import React from "react"
import {Card, CardMedia} from "@mui/material";
import img2 from "../../assets/images/img2.jpg";
import Grid from "@mui/material/Grid";
import ProductList from "../ProductList/ProductList";
import ProductsCard from "../Cards/ProductsCard";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ProductSlider from "../ProductSlider/ProductSlider";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function SignupForm(props) {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [rePassword, setRePassword] = React.useState('')
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

    function handleRePasswordChange(event) {
        const {value} = event.target
        setRePassword(value)
    }

    return (
        <Grid container spacing={1}>

            <Grid item xs={6} >
                <br/><br/><br/>
                <Item>
                    <br/>
                    <h3><strong>Sign Up</strong></h3>
                            <div className="signup-form"  style={{  justifyItem: "space-around", margin: "10px"}}>
                                <form style={{ padding:"20px", width:"100%"}}>

                                    <div style={{width:"100%", marginBottom:"25px"}}>
                                        <label htmlFor="card_name" style={{padding:"5px"}}>Name</label><br></br>
                                        <input id="card_name"   onChange={handleNameChange} value={name} style={{width:"50%", height:"35px"}}/>
                                    </div>

                                    <div style={{width:"100%", marginBottom:"25px"}}>
                                        <label htmlFor="card_email" style={{padding:"5px"}}>email</label><br></br>
                                        <input id="card_email"  onChange={handleEmailChange} value={email} style={{width:"50%", height:"35px"}}/>
                                    </div>

                                    <div style={{width:"100%",display:"inline-block", marginBottom:"25px"}}>
                                        <label htmlFor="card_password" style={{padding:"5px"}}>password</label><br></br>
                                        <input id="card_password"  onChange={handlePasswordChange} value={password} style={{width:"50%", height:"35px"}}/>
                                    </div>

                                    <div style={{width:"100%",display:"inline-block", marginBottom:"25px"}}>
                                        <label htmlFor="card_repassword" style={{padding:"5px"}}>rePassword</label><br></br>
                                        <input id="card_repassword"  onChange={handleRePasswordChange} value={rePassword} style={{width:"50%", height:"35px"}}/>
                                    </div>

                                    <button className="signup-buttons"style={{padding:"12px", backgroundColor:"gold",borderRadius:"15px", border:"hidden"}} >
                                        <button className="primary" type="signup"
                                                style={{padding:"8px",
                                                    backgroundColor:"green",
                                                    color:"white",
                                                    border:"hidden",
                                                    margin:"2px",
                                                    borderShadow:"0 0 4px black"
                                                }} >Signup</button>
                                        <button className="secondary" type="cancel"
                                                style={{padding:"8px",
                                                    backgroundColor:"red",
                                                    color:"white",
                                                    border:"hidden",
                                                    margin:"2px",
                                                    borderShadow:"0 0 4px black"
                                                }}

                                        >Cancel</button>
                                        <br/>
                                    </button>
                                </form>

                            </div>
                </Item>

            </Grid>

            <Grid item xs={6} >
                <br/><br/><br/>
            <Item><br/>
                <h3><strong>Login </strong></h3>
                <div className="signup-form"  style={{  justifyItem: "space-around", margin: "10px"}}>
                    <form style={{ padding:"20px", width:"100%"}}>

                        <div style={{width:"100%", marginBottom:"25px"}}>
                            <label htmlFor="card_name" style={{padding:"5px"}}>Name</label><br></br>
                            <input id="card_name"   onChange={handleNameChange} value={name} style={{width:"50%", height:"35px"}}/>
                        </div>

                        <div style={{width:"100%", marginBottom:"25px"}}>
                            <label htmlFor="card_email" style={{padding:"5px"}}>email</label><br></br>
                            <input id="card_email"  onChange={handleEmailChange} value={email} style={{width:"50%", height:"35px"}}/>
                        </div>

                        <div style={{width:"100%",display:"inline-block", marginBottom:"25px"}}>
                            <label htmlFor="card_password" style={{padding:"5px"}}>password</label><br></br>
                            <input id="card_password"  onChange={handlePasswordChange} value={password} style={{width:"50%", height:"35px"}}/>
                        </div>

                        <button className="signup-buttons"style={{padding:"12px", borderRadius:"15px", border:"hidden"}} >
                            <button className="primary" type="signup"
                                    style={{padding:"8px",
                                        backgroundColor:"green",
                                        color:"white",
                                        border:"hidden",
                                        margin:"2px",
                                        borderShadow:"0 0 4px black"
                                    }} >Login</button>
                            <button className="secondary" type="cancel"
                                    style={{padding:"8px",
                                        backgroundColor:"red",
                                        color:"white",
                                        border:"hidden",
                                        margin:"2px",
                                        borderShadow:"0 0 4px black"
                                    }}

                            >Cancel</button>
                            <br/>
                        </button>
                        <br/><br/><br/><br/><br/>
                    </form>
                </div>
            </Item>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            </Grid>
        </Grid>

    )

}

export default SignupForm;


