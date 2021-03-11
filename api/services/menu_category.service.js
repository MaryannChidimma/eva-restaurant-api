const Category = require('../model/menu_category.model');
const CustomError = require('../utils/custom.error');
const cloudinary = require('cloudinary').v2;
require('dotenv');
const fs = require('fs');
class CategoryService {
    async getAll() {
        return await Category.find();
    }
    async getOne(id) {
        const category = await Category.findOne({ _id: id });
        if (!category) throw new CustomError('category does not exist')
        return category
    }

    async create(data, datas) {
       const {type, description} = data;
const { path, originalname} = datas;
        cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.api_key,
            api_secret: process.env.api_Secret
        })

        const uniqueFilename = new Date().toISOString()
        let data_ = { public_id: `eva-kitchen/${uniqueFilename}`, tags: `eva-kitchen` }
        let url = await cloudinary.uploader.upload(path, data_);
        if (!url) throw new CustomError('could not upload', 402)
       
        let category= new Category({
            type: type,
            description:description,
            imageurl: ['png', 'jepg', 'jpg'].includes(originalname.split('.')[1]) ? url.secure_url : '',
        })
        fs.unlinkSync(path)
        await category.save();

        return {
            category: category,
        };
}

    async update(id, data) {
        const {name, description}= data;
        const category = await Category.findByIdAndUpdate(
            id,
            data,
            { new: true }
        );
        if (!category) throw new CustomError("category not found", 404);
        return category;
    }
    async delete(id) {
        const category = await Category.remove({ _id: id });
        return category
    }
}

module.exports = new CategoryService();