import mongoose from 'mongoose'

const productSchema = mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    collectionName: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    totalInStock: {
        type: Number,
        required: true,
        default: 0
    },
    sizeInStock: {
        small: { name: String, type: Number, required: true, default: 0},
        medium: { name: String, type: Number, required: true, default: 0},
        large: { name: String, type: Number, required: true, default: 0}
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product