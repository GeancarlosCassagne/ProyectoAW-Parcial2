const { CategoriaModel } = require('../models');
const { CategoriaService } = require('../services');

class CategoriaController {

    async getAll(req, res) {

        try {
            const data = await CategoriaService.getAll();
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    }

}

module.exports = new CategoriaController();