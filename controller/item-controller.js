import Item from '../models/item'
import constant from '../constant/constant'
export default class ItemController {
    getAll(req, res, next) {
        Item.find(function(err, items) {
            if (err) return next(err);
            res.status(constant.httpCode.OK).json({ data: items,count: items.length })
        });
    }
    getItemByID(req,res,next) {
        //findById(itemId,callback),itemId的格式必须是mongoId格式(如：51bb793aca2ab77a3200000d)
        const itemId = req.params.itemId;
        Item.findById(itemId)
            .populate('category')
            .exec((err,item)=>{
                if (err) return next(err);
                if(!item) return res.sendStatus(constant.httpCode.NO_CONTENT);
                return res.status(constant.httpCode.OK).send(item)
            });
    }
    addItem(req,res,next) {
        Item.create(req.body,( err, item )=>{
            if(err) return next(err);
            return res.status(constant.httpCode.CREATED).json({uri: `items/${item._id}`});
        });
    }
    deleteItem(req,res,next) {
        const itemId = req.params.itemId;
        Item.findOneAndRemove(itemId, (err, item) => {
            if (err) return next(err);
            if(!item) return res.sendStatus(constant.httpCode.NOT_FOUND);
            return res.sendStatus(constant.httpCode.NO_CONTENT);
        });
    }
    updateItem(req,res,next) {
        Item.findByIdAndUpdate(req.params.itemId, req.body, (err, item) => {
            if (err) return next(err);
            if (!item) return res.sendStatus(constant.httpCode.NOT_FOUND);
            return res.sendStatus(constant.httpCode.NO_CONTENT);
        });
    }
}
