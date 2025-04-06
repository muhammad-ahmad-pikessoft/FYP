const express=require("express");
const router=express.Router();
const AdoptionForm=require("../models/PetAdoptionForm");
const {authMiddleware}=require('../middlewares/authMiddleware')

router.post('/getadoptionforms',authMiddleware,async (req,res)=>{


try{
  
        const allforms=await AdoptionForm.find();
        // console.log("PET IMAGES URL: :",allforms[0].PetImage)

        console.log("ALL forms: ",allforms);
        if(allforms){
        res.status(200).json({allforms})}
        

        else{
         res.status(404).json({message:"No record found"})}

       }


catch(err){
    console.log(err);
    res.status(404).json({message:"Error finding data.Try again later"});
}

});



router.get('/getapprovedadoptionforms',async (req,res)=>{


try{
  
        const allforms=await AdoptionForm.find({Status:"Approved"});
        // console.log("PET IMAGES URL: :",allforms[0].PetImage)

        console.log("ALL forms: ",allforms);
        if(allforms){
        res.status(200).json({allforms})}
        

        else{
         res.status(404).json({message:"No record found"})}

       }


catch(err){
    console.log(err);
    res.status(404).json({message:"Error finding data.Try again later"});
}

});

module.exports=router;