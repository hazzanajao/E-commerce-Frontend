import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import img2 from "../assets/images/img2.jpg"
import OLEDTV from "../assets/images/OLEDTV.PNG"
import Iphones from "../assets/images/Iphones.PNG"
import Ipads from "../assets/images/Ipads.PNG"

function ProductsCard() {
    {/*This is the parent component I want to dynamically pass data to children components:
       computerData, Tv_data, Phone_data etc. To demonstrate knowledge acquired.

       Intention: As Home Page Directories
    */
    }
    const computerData = "This computer  has core i7 processor, it is suitable for all complex computational analysis" +
        "This computer is has core i7 processor, it is suitable for all complex computational analysis. "

    const tvData = "This is  OLED flat screen computer, is an all purpose display unit suitable for cinema and ads purposes  "

    const phoneData = "This is a dual sim mobile phone with unlimited broad band connectivity suitable for browsing, graphic design and photography. "

    const ipadData = "Our Ipads are design for commercial applications with Quad-core processor, it is suitable for all complex computational analysis."

    return (

        <div className="container-card" style={{display: "flex", justifyContent: "space-around", margin: "10px"}}>
            <>
                <Card sx={{maxWidth: 360, margin: "5px", textAlign: "left"}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image=""
                        src={img2}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Computers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {computerData}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <a href="/tvproduct" style={{
                            backgroundColor: "green",
                            borderRadius: "5px",
                            padding: "8px",
                            color: "white"
                        }}>Click</a>
                    </CardActions>
                </Card>
            </>

            <>

                <Card sx={{maxWidth: 360, margin: "5px", textAlign: "left"}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image=""
                        src={OLEDTV}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            TVs
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {tvData}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href="/tvproduct" style={{
                            backgroundColor: "green",
                            borderRadius: "5px",
                            padding: "8px",
                            color: "white"
                        }}>Click</a>
                    </CardActions>
                </Card>

            </>
            <>
                <Card sx={{maxWidth: 360, margin: "5px", textAlign: "left"}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image=""
                        src={Iphones}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Phones
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {phoneData}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href="/tvproduct" style={{
                            backgroundColor: "green",
                            borderRadius: "5px",
                            padding: "8px",
                            color: "white"
                        }}>Click</a>
                    </CardActions>
                </Card>
            </>

            <>
                <Card sx={{maxWidth: 360, margin: "5px", textAlign: "left"}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image=""
                        src={Ipads}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ipads
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {ipadData}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href="/tvproduct" style={{
                            backgroundColor: "green",
                            borderRadius: "5px",
                            padding: "8px",
                            color: "white"
                        }}>Click</a>
                    </CardActions>
                </Card>
            </>

            <br></br>

        </div>


    )
}

export default ProductsCard;
