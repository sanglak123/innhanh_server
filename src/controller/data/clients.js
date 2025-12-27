const {
  Products,
  Images,
  Categorys,
  InNhanh79s,
  Users,
  Brands,
} = require('../../db/models');

const controller_data_clients = {
  Products: async (req, res) => {
    try {
      const count = await Products.count();
      const rows = await Products.findAll();

      return res.status(200).json({ rows, count });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  BestSeller: async (req, res) => {
    try {
      const rows = await Products.findAll({
        where: {
          best: true,
        },
        include: [{ model: Images, attributes: ['id', 'folder', 'filename'] }],
        limit: 6,
        order: [['id', 'desc']],
      });
      return res.status(200).json({ rows });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Categorys: async (req, res) => {
    try {
      const rows = await Categorys.findAll();
      const count = await Categorys.count();
      return res.status(200).json({ rows, count });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Images: async (req, res) => {
    try {
      const { folder } = req.query;
      const where = {
        folder: folder,
      };
      const rows = await Images.findAll({ where: where });
      const count = await Images.count({ where: where });
      return res.status(200).json({ rows, count });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  InNhanh79: async (req, res) => {
    try {
      const in79 = await InNhanh79s.findOne({
        include: [{ model: Brands }],
      });
      return res.status(200).json({ row: in79 });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  ListCVTV: async (req, res) => {
    try {
      const count = await Users.count({
        where: {
          isCVTV: true,
        },
      });
      const rows = await Users.findAll({
        where: {
          isCVTV: true,
        },
        attributes: ['displayname', 'fullname', 'email', 'phone', 'avatar'],
      });
      return res.status(200).json({ rows, count });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = {
  controller_data_clients,
};
