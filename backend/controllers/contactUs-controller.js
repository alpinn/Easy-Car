import Contact from "../models/contactUs-model.js";

export const getContactUs = async (req, res) => {
    try {
        const response = await Contact.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createContactUs = async(req, res) => {
    const {name, email, pesan} = req.body;
    try {
        const newContact = new Contact({
            name: name,
            email: email,
            pesan: pesan,
        });
        await newContact.save();
        res.status(201).json({msg: "Contact Us Created Successfuly"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}