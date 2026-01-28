const express=require("express");
const Toy=require("../models/Toy");
const router=express.Router();

router.get("/",async(req,res)=>{
  res.json(await Toy.find());
});

router.post("/",async(req,res)=>{
  await new Toy(req.body).save();
  res.json({msg:"added"});
});

router.delete("/:id",async(req,res)=>{
  await Toy.findByIdAndDelete(req.params.id);
  res.json({msg:"deleted"});
});

module.exports=router;
