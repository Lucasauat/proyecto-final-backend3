import { Router } from "express";

const router = Router();

let users = [];

router.get("/", (req,res)=>{
    res.status(200).json(users);
});

router.post("/", (req,res)=>{

    const { name, email } = req.body;

    if(!name || !email){
        return res.status(400).json({
            error:"Missing data"
        });
    }

    const newUser = {
        id: Date.now().toString(),
        name,
        email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

router.post("/login", (req,res)=>{

    const token = "fake-jwt-token";

    res.status(200).json({
        token
    });
});

export default router;