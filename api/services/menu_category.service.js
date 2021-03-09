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

    async create(data) {
       const {type, description} = data;

    const category = new Category({
        type: type,
        description: description,
      
     })
     
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