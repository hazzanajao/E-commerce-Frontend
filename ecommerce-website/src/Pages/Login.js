import Google from "../assets/images/google.png";
import Facebook from "../assets/images/facebook.png";
import LoginImg from "../assets/images/loginImg.png"

function Login(){

    const google = () => {
        window.open("http://localhost:3000/auth/google/callback", "_self");
    };

    const facebook = () => {
        window.open("http://localhost:3000/auth/facebook", "_self");
    };


    return(
        <>
            <div className="login">
                <h4 className="loginTitle">Login Options</h4>
                <div className="wrapper">

                    <img className="loginImage" src={LoginImg} alt="login"/>

                    <div className="left">
                        <div className="loginButton google" onClick={google}>
                            <img src={Google} alt="" className="icon" />
                            Google
                        </div>

                        <div className="loginButton facebook" onClick={facebook}>
                            <img src={Facebook} alt="" className="icon" />
                            Facebook
                        </div>
                    </div>



                    <div className="center">
                        <div className="line" />
                        <div className="or">OR</div>
                    </div>


                    <div className="right">
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password" />
                        <button className="submit">Login</button>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Login;
