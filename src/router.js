const express = require('express');
const router = express();
const bp = require("body-parser");
const validator = require('validator');
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));
require("./database.js");
const { Register, User } = require("./collections.js")

router.post("/registerData", async (req, res) => {
    const { username, email, password, confirmpass } = req.body;
    if (username !== "" && email !== "" && password !== "" && confirmpass !== "") {

        try {
            if (!validator.isEmail(email)) {
                return res.status(422).json({ error: "emailrejected" });
            }
            if (!validator.isStrongPassword(password)) {
                return res.status(422).json({ error: "passwordrejected" });
            }

            const userdata = await Register.find({})
            const finduser = userdata.find((user) => {
                return user.email === email
            })

            if (finduser) {
                return res.status(422).json({ error: "UserExist" });
            }

            const register = new Register({
                username, email, password, confirmpass
            })
            console.log(register)
            await register.save();
            return res.status(201).json({ message: 'Sucess' })
        }
        catch (e) {
            res.json(e);
        }

    }

    else {
        return res.status(422).json("");
    }
})

router.post("/Favourites", async (req, res) => {
    const { info, email, value } = req.body;
    console.log(value,email)

    try {

        const userdata = await User.find({});

        const userfind = userdata.find((u) => {
            return u.email === email;
        })

        var data=[];

        if (userfind) {
            console.log("user found")
            data = userfind.Data;
            const deleteuser = await User.findByIdAndDelete(userfind.id);
            
        }
        else {
            console.log("no user found")
        }

        if (value == '0') {
             let a=0;

             for(let i of data){
                if(i.label==info.label){
                   
                    a=1;
                    break;
                }
                
             }
             if(a==0 || data.length==0){
                data.push(info)
             }
        }

        else{
            var arr=data;
            data=[];
            for(let i of arr){
                if(i.label!=info.label){
                    data.push(i)
                }
             }
        }

        const user = new User({
            email: email,
            Data: data
        })
        

        await user.save();

console.log("--------------------------")
for (let i of user.Data) {
    console.log(i.label)
}

    }
    catch (e) {

    }

    res.status(201).json({ message: "Success" });
})

router.post("/getFavourites",async(req,res)=>{
       const {email}=req.body;
    try{
          const users=await User.find({});

          const findUser=users.find((user)=>{
            return user.email==email;
          })
        
          if(findUser){
                 
            return res.status(201).json({message:findUser.Data});
          }
          else{
                 return res.status(401).json({message:"user not found"});
          }


    }
    catch(e){
        return res.send("e");
    }
})

router.post("/LoginData", async (req, res) => {
    const { username, email, password } = req.body;

    if (username !== "" && email !== "" && password !== "") {
        try {
            const userdata = await Register.find({})
            const finduser = userdata.find((user) => {
                return user.email === email
            })

            if (finduser === undefined) {
                console.log("a");
                return res.status(422).json({ error: 'UserNotFound' })
            }
            else if (finduser.password !== password) {

                return res.status(422).json({ error: "passwordincorrect" });
            }
            else {
                return res.status(201).json({ message: "Success" });
            }



        } catch (error) {
            return res.send("error")

        }
        //return res.status(200).json("successfull")
    }

    else {
        return res.status(422).json("");
    }
})

module.exports = router;