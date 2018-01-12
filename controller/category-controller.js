const Category = require('../models/category');
export default class ItemController {
    getAll(req, res, next) {
        Category.find().sort({'createdAt': -1}).exec(function(err, categories) {
            if (err) return res.status(500).json({error: err.message});
            res.json({ categories: categories})
        });
    }
    getCategoryByID(req,res,next) {
        const itemId = req.params.id;
        Category.findById(itemId, function(err,category){
            if (err) return res.status(500).json({error: err.message});
            res.json({ category: category})
        })
    }
    addCategory(req,res,next) {
        if (req.body.name == undefined)return res.status(400).json({error: '类型名不能为空'});
        let category = new Category();
        for (let prop in req.body) {
            category[prop] = req.body[prop];
        }
        category.save(function(err) {
            if (err) return res.status(500).json({error: err.message});
            res.json({
                message: '存储成功了！'
            });
        });
    }
    deleteCategoty(req,res,next) {
        const data = req.body;
        Category.findOneAndRemove(data,function (err, item){
            if (err) return res.status(500).json({error: err.message});
            res.json({
                message: '删除成功了！'
            });
        });
    }
    updateCategoty(req,res,next) {
        const data = req.body;
        Category.update({_id:data._id},{ $set: data },function(err,item){
            if (err) return res.status(500).json({error: err.message});
            res.json({
                message: '更新成功了！'
            });
        });
    }
}
