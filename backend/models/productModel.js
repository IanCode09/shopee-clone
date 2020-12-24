import mongoose from 'mongoose'

const { ObjectId} = mongoose.Schema.Types

const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true }
    },

    {
        timestamps: true
    }
)

const productSchema = mongoose.Schema(
    {
        user: {
            type: ObjectId,
            required: true,
            ref: 'User'
        },

        nameProduct: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        categories: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        merk: {
            type: String,
            required: true,
        },

        stock: {
            type: Number,
            required: true,
            default: 0
        },

        address: {
            type: String,
            required: true
        },

        dataReviews: [reviewSchema],

        rating: {
            type: Number,
            required: true,
            default: 0
        },

        reviews: {
            type: Number,
            required: true,
            default: 0
        },

        isDiskon: {
            type: Boolean,
            default: false
        }
    },

    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema)

export default Product