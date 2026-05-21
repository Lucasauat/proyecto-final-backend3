const adoptions = [];

const getAllAdoptions = (req,res)=>{
    res.status(200).json(adoptions);
};

const getAdoption = (req,res)=>{
    const adoption = adoptions.find(a => a.id === req.params.aid);

    if(!adoption){
        return res.status(404).json({error:"Adoption not found"});
    }

    res.status(200).json(adoption);
};

const createAdoption = (req,res)=>{
    const newAdoption = {
        id: Date.now().toString(),
        user: req.params.uid,
        pet: req.params.pid
    };

    adoptions.push(newAdoption);

    res.status(201).json(newAdoption);
};

export default {
    getAllAdoptions,
    getAdoption,
    createAdoption
};