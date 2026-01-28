require("dotenv").config();
const express=require("express");
const cors=require("cors");
const Razorpay=require("razorpay");

const app=express();
app.use(cors());
app.use(express.json());

const razorpay=new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_KEY_SECRET
});

app.post("/api/payment/create-order",async(req,res)=>{
  const order=await razorpay.orders.create({
    amount:req.body.amount*100,
    currency:"INR"
  });
  res.json(order);
});

app.listen(process.env.PORT||5000,()=>console.log("Backend running"));
