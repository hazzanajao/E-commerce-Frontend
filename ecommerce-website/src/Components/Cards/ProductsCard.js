import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import img2 from "../../assets/images/img2.jpg"
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Switch,
    Route, Redirect,} from "react-router-dom";
import {blue} from "@mui/material/colors";

function ProductsCard() {
    return (
        <div style={{ display :"block"}}>
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
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>

                    <CardActions >
                        <a href="/tvproduct" style={{backgroundColor:"green",borderRadius:"5px", padding:"8px", color:"white"}}>Click</a>
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
                        src={img2}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            TVs
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <a href="/tvproduct" style={{backgroundColor:"green",borderRadius:"5px", padding:"8px", color:"white"}}>Click</a>
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
                        src={img2}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Phones
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <a href="/tvproduct" style={{backgroundColor:"green",borderRadius:"5px", padding:"8px", color:"white"}}>Click</a>
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
                        src={img2}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ipads
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <a href="/tvproduct" style={{backgroundColor:"green",borderRadius:"5px", padding:"8px", color:"white"}}>Click</a>
                    </CardActions>
                </Card>
            </>

            <br></br>
        </div>

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
                            <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
                                Computers
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <a href="/tvproduct" style={{backgroundColor:"green",borderRadius:"5px", padding:"8px", color:"white"}}>Click</a>
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
                            src={img2}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
                                TVs
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <a href="/tvproduct" style={{backgroundColor:"green",borderRadius:"5px", padding:"8px", color:"white"}}>Click</a>
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
                            src={img2}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
                                Phones
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <a href="/tvproduct" style={{backgroundColor:"green",borderRadius:"5px", padding:"8px", color:"white"}}>Click</a>
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
                            src={img2}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
                                Ipads
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <a href="/tvproduct" style={{backgroundColor:"green",borderRadius:"5px", padding:"8px", color:"white"}}>Click</a>
                        </CardActions>
                    </Card>
                </>

                <br></br>
            </div>


</div>



    )
}

export default ProductsCard;
