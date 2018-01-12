const Item = require('../models/item');
export default class ItemController {
    getAll(req, res, next) {
        Item.find().sort({'createdAt': -1}).exec(function(err, items) {
            if (err) return res.status(500).json({error: err.message});
            res.json({ items: items})
        });
    }
    getItemByID(req,res,next) {
        //findById(itemId,callback),itemId的格式必须是mongoId格式(如：51bb793aca2ab77a3200000d)
        const itemId = req.params.id;
        Item.findById(itemId, function(err,item){
            if (err) return res.status(500).json({error: err.message});
            res.json({ item: item})
        })
    }
    addItem(req,res,next) {
        if (req.body.title == undefined)return res.status(400).json({error: '标题不能为空！'});
        if (req.body.price == undefined)return res.status(400).json({error: '价格不能为空！'});
        if (req.body.category == undefined)return res.status(400).json({error: '类别不能为空！'});
        let item = new Item();
        for (let prop in req.body) {
            item[prop] = req.body[prop];
        }
        item.save(function(err) {
            if (err) return res.status(500).json({error: err.message});
            res.json({
                message: '存储成功了！'
            });
        });
    }
    deleteItem(req,res,next) {
        const data = req.body;
        Item.findOneAndRemove(data,function (err, item){
            if (err) return res.status(500).json({error: err.message});
            res.json({
                message: '删除成功了！'
            });
        });
    }
    updateItem(req,res,next) {
        const data = req.body;
        Item.update({_id:data._id},{ $set: data },function(err,item){
            if (err) return res.status(500).json({error: err.message});
            res.json({
                message: '更新成功了！'
            });
        });
    }
}
