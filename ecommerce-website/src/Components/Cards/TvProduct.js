import Grid from "@mui/material/Grid";
import ProductList from "../ProductList/ProductList";
import ProductsCard from "./ProductsCard";
import React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import img2 from "../../assets/images/img2.jpg";
import {Slide} from "react-slideshow-image";
import img3 from "../../assets/images/img3.jpg";
import ProductQuantitySelection from "../Selection/ProductQuantitySelection";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




function TvProduct(props){

    const productInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus mauris a lacinia bibendum.Phasellus mattis, nibh id tempus dictum, leo ligula posuere nunc, quis imperdiet magna eros id nulla.\\n\" +\n" +
        "                                 Sed non pellentesque erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut laoreet leo neque, eget euismod arcu elementum id. Proin fermentum blandit leo,\\n\" +\n" +
        "                                 ut lacinia leo pellentesque nec. In eu finibus nulla, sed fringilla ligula. Mauris mollis augue atefficitur mollis. Donec ultricies urna vitae ultricies pulvinar. Mauris pulvinar placerat mi pulvinar varius.\\n\" +\n" +
        "                                 Donec quis sollicitudin ex. Aliquam imperdiet augue augue, non laoreet tellus molestie vel. Duis eget gravida nulla\"  "


    return(
        <>
            <Grid container spacing={1}>
                {/*left for side selections */}
                <Grid item xs={3}>
                    <Item>
                        <br/>

                        <div> Side A
                            <Card sx={{maxWidth: 360, margin: "5px", textAlign: "left"}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image=""
                                    src={img2}
                                />
                            </Card>
                        </div>

                        <br/>

                        <div> Side B
                            <Card sx={{maxWidth: 360, margin: "5px", textAlign: "left"}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image=""
                                    src={img2}
                                />
                            </Card>
                        </div>

                        <br/>

                        <div> Side C
                            <Card sx={{maxWidth: 360, margin: "5px", textAlign: "left"}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image=""
                                    src={img2}
                                />
                            </Card>
                        </div>

                        <div> Side D
                            <Card sx={{maxWidth: 360, margin: "5px", textAlign: "left"}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image=""
                                    src={img2}
                                />
                            </Card>
                        </div>

                        <br/>

                    </Item>
                </Grid>

                {/*Middle for Product display */}

                <Grid item xs={6}>
                    <Item>
                        <br/> <br/>
                      <h3>Lenovo Computer New Product  €540</h3>

                        <Slide>
                            <div className="each-slide-effect" style={{display:"flex",justifyContent:"center",backgroundColor:"yellow", width:"100%", position:"relative"}}>
                                <img src={img2} alt="promo-productA" className="product-a" />
                            </div>
                            <div className="each-slide-effect"  style={{display:"flex",justifyContent:"center",backgroundColor:"yellow", width:"100%"}}>
                                <img src={img3} alt="promo-productB" className="product-b"/>
                            </div>
                        </Slide>

                        <br/>
                        <p style={{textAlign:"left"}}>Product is available at any of our sales outlet<br/>
                            visit us for promo prices between 10.2 - 10.3 2023.
                            <br/> <br/>
                            <strong>Price discount : 20% </strong>
                            <br/> <br/>
                            <strong>Product Details :  </strong>
                            Brand	:<br/>
                            Material :<br/>
                            Item dimensions L x W x H	18.2 x 11 x 2.8 centimetres<br/>
                            Weight	: 454 Grams<br/>
                            Item Package Quantity	1<br/><br/>
                            <strong>About this item</strong>

                             <p>{productInfo}</p>

                        </p>



                    </Item>
                </Grid>

                {/*Right for Product display */}

                <Grid item xs={3} >
                    <Item style={{textAlign:"left"}}><br/><br/>
                        <h3 style={{backgroundColor:"gold", padding :"8px",textAlign:"center" ,  borderRadius:"63px", display:"flex"}}>
                            <strong style={{flex:"start", width:"100%"}}>€540</strong>
                            <strong style={{flex:"right",color:"red", width:"100%"}}>€540</strong>
                        </h3>
                        <br/>
                        <p >FREE delivery, on <strong>Mondays</strong> and <strong>Wednesday</strong> within Finland,for evey first Order</p>
                        <p style={{color:"green"}}> In Stock </p>
                        {/*Placing ProductQuantitySelection component here*/}
                        <ProductQuantitySelection/>

                    </Item>

                      <br/>

                        <Item style={{textAlign:"left"}}><br/><br/>
                            <h3 style={{backgroundColor:"gold", padding :"8px",textAlign:"center" ,  borderRadius:"63px", display:"flex"}}>
                                <strong style={{flex:"start", width:"100%"}}>€540</strong>
                                <strong style={{flex:"right",color:"red", width:"100%"}}>€540</strong>
                            </h3>
                            <br/>
                            <p >FREE delivery, on <strong>Mondays</strong> and <strong>Wednesday</strong> within Finland,for evey first Order</p>
                            <p style={{color:"green"}}> In Stock </p>
                            {/*Placing ProductQuantitySelection component here*/}
                            <ProductQuantitySelection/>

                        </Item>



                </Grid>


            </Grid>
        </>
    )
}

export default TvProduct
