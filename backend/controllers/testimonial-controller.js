import Testimonial from "../models/testimonal-model.js";

export const getTestimonials = async(req, res) => {
    try {
        const response = await Testimonial.find({}).populate('user_id', ['name', 'email']).select(['name', 'opinion']);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createTestimonial = async(req, res) => {
    const {name, opinion} = req.body;
    try {
        const newTestimonial = new Testimonial({
            name: name,
            opinion: opinion,
            user_id: req.userId
        });
        await newTestimonial.save();
        res.status(201).json({msg: "Pembuatan Testimonial Berhasil"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateTestimonial = async(req, res) => {
    try {
        const testimonial = await Testimonial.findOne({ _id: req.params.id });
        if(!testimonial) return res.status(404).json({msg: "Testimonial not found"})
        const {name, opinion} = req.body;
        await Testimonial.findByIdAndUpdate(testimonial._id, {name, opinion});
        res.status(200).json({msg: "Testimonial updated successfuly"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const deleteTestimonial = async(req, res) => {
    try {
        const testimonial = await Testimonial.findOne({ _id: req.params.id });
        if(!testimonial) return res.status(404).json({msg: "Testimonial not found"})
        await Testimonial.findByIdAndDelete(testimonial._id);
        res.status(200).json({msg: "Testimonial deleted successfuly"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}