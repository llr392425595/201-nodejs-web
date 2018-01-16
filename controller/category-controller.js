import Category from '../models/category'
import statusCode from '../constant/statusCode'
export default class ItemController {
    getAll(req, res, next) {
        Category.find(function(err, categories) {
            if (err) return next(err);
            res.status(statusCode.GET).json({ data: categories,count: categories.length})
        });
    }
    getCategoryByID(req,res,next) {
        const categoryId = req.params.id;
        Category.findById(categoryId, function(err,category){
            if (err) return next(err);
            if(!category) return res.status(statusCode.NO_CONTENT).json({error: "没找到数据"}); 
            res.status(statusCode.GET).json({ data: category})
        })
    }
    addCategory(req,res,next) {
        if (req.body.name == undefined)return res.status(statusCode.INTERNALSERVERERROR).json({error: '类型名不能为空'});
        let category = new Category();
        for (let prop in req.body) {
            category[prop] = req.body[prop];
        }
        category.save(function(err) {
            if (err) return next(err);
            res.status(statusCode.CREATE).json({ uri: `categories/${category._id}` });
        });
    }
    deleteCategory(req,res,next) {
        let data = req.body;
        Category.findOneAndRemove(data,function (err, category){
            if (err) return next(err);
            if(!category) return res.status(statusCode.NOT_FOUND).json({error: '没查到数据，删除失败！'});
            return res.status(statusCode.DELETE).json({uri: `categories/${category._id}`});
        });
    }
    updateCategory(req,res,next) {
        const newData = req.body;
        Category.findOneAndUpdate({_id:newData._id},newData,function(err,category){
            if (err) return next(err);
            if(!category) return res.status(statusCode.NO_CONTENT).json({error: "没找到数据"}); 
            res.status(statusCode.PUT).json({uri: `categories/${category._id}`});
        });
    }
}
