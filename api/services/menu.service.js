const Menu = require('../model/menu.model');
const CustomError = require('../utils/custom.error');
const err = require('../utils/custom.error');

class MenuService {
    async getAll() {
        return await Menu.find().select("category, food, price");
    }
    async getOne(id) {
        const menu = await Menu.findOne({ _id: id });
        if (!menu) throw new CustomError('menu does not exist')
        return menu
    }

    async create(data) {
        const { category, name, price, quantity } = data;

        return await new Menu({

            category: category,
            food: name,
            price: price,
        }).save();
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