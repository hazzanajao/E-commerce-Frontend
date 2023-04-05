import React from "react";

import {Card} from "@mui/material";

const {useSelector} = require("react-redux");

function AllOrders(){

    const orders = useSelector((state) => state.allOrders.orders);

    return (
        <div className="OrderList" style={{margin:"35px", width:"100%"}}>
            <ul className="grid grid-cols-4 gap-10">
                {orders.map((order) => (
                    <Card key={order.productId} style={{padding:"10px"}}>
                        <h1>{order.userId}</h1>
                        <h3>{order.purchasedAt}</h3>
                    </Card>
                ))
                }
            </ul>
        </div>
    );


}
export default AllOrders;
