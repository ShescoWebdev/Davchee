import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    clientName: { 
        type: String, 
        required: true, 
        trim: true 
    },
    quote: { 
        type: String, 
        required: true 
    },
    rating: { 
        type: Number, 
        min: 1, 
        max: 5, 
        default: 5 
    },
    serviceType: { 
        type: String 
    },
    approved: { 
        type: Boolean, 
        default: false 
    }, // admin approves before it goes public
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);