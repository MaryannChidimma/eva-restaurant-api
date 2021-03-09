const Menu = require('../model/menu.model');
const CustomError = require('../utils/custom.error');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

class MenuService {
    async getAll() {
        return await Menu.find();
    }
    async getOne(id) {
        const menu = await Menu.findOne({ _id: id });
        if (!menu) throw new CustomError('menu does not exist')
        return menu
    }

    async create(data, filedata) {
        const { category, name, price, } = data;
        let { path, originalname } = filedata
        cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.api_key,
            api_secret: process.env.api_Secret
        })

        const uniqueFilename = new Date().toISOString()
        let data_ = { public_id: `eva-kitchen/${uniqueFilename}`, tags: `eva-kitchen` }
        let url = await cloudinary.uploader.upload(path, data_);
        if (!url) throw new CustomError('could not upload', 402)
       
        let menu = new Menu({
            category: category,
            food: food,
            price: price,
            imageurl: ['png', 'jepg', 'jpg'].includes(originalname.split('.')[1]) ? url.secure_url : '',
        })
        fs.unlinkSync(path)
        await menu.save();

        return {
            menu: menu,
        };
    }

    async update(id, data) {
        const { category, name, price, quantity } = data;
        const menu = await Menu.findByIdAndUpdate(
            id,
            data,
            { new: true }
        );
        if (!menu) throw new CustomError("menu not found", 404);
        return menu;
    }
    async delete(id) {
        const menu = await Menu.remove({ _id: id });
        return menu
    }
}
module.exports = new MenuService();