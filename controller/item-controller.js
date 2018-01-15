import Item from '../models/item'
import statusCode from '../config/statusCode'
export default class ItemController {
    getAll(req, res, next) {
        Item.find(function(err, items) {
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.GET).json({ items: items})
        });
    }
    getItemByID(req,res,next) {
        //findById(itemId,callback),itemId的格式必须是mongoId格式(如：51bb793aca2ab77a3200000d)
        const itemId = req.params.id;
        Item.findById(itemId, function(err,item){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.GET).json({ item: item})
        })
    }
    addItem(req,res,next) {
        if (req.body.title == undefined)return res.status(statusCode.INTERNALSERVERERROR).json({error: '标题不能为空！'});
        if (req.body.price == undefined)return res.status(statusCode.INTERNALSERVERERROR).json({error: '价格不能为空！'});
        if (req.body.category_id == undefined)return res.status(statusCode.INTERNALSERVERERROR).json({error: '类别不能为空！'});
        let item = new Item();
        for (let prop in req.body) {
            item[prop] = req.body[prop];
        }
        item.save(function(err) {
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.CREATE).json({
                message: '存储成功了！'
            });
        });
    }
    deleteItem(req,res,next) {
        const data = req.body;
        Item.findOneAndRemove(data,function (err, item){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            if(item){
                return res.status(statusCode.DELETE).json({message: '删除成功了！'});
            }else{
                return res.status(statusCode.INTERNALSERVERERROR).json({message: '没查到数据，删除失败！'});
            }
        });
    }
    updateItem(req,res,next) {
        const newData = req.body;
        Item.findOneAndUpdate({_id:newData._id},newData,function (err, item){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            if(item){
                return res.status(statusCode.PUT).json({message: '更新成功了！'});
            }else{
                return res.status(statusCode.INTERNALSERVERERROR).json({message: '没查到数据，更新失败！'});
            }
        });
    }
}
