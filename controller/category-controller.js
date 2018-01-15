import Category from '../models/category'
import statusCode from '../config/statusCode'
export default class ItemController {
    getAll(req, res, next) {
        Category.find(function(err, categories) {
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.GET).json({ categories: categories})
        });
    }
    getCategoryByID(req,res,next) {
        const categoryId = req.params.id;
        Category.findById(categoryId, function(err,category){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.GET).json({ category: category})
        })
    }
    addCategory(req,res,next) {
        if (req.body.name == undefined)return res.status(statusCode.INTERNALSERVERERROR).json({error: '类型名不能为空'});
        let category = new Category();
        for (let prop in req.body) {
            category[prop] = req.body[prop];
        }
        category.save(function(err) {
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.CREATE).json({
                message: '存储成功了！'
            });
        });
    }
    deleteCategory(req,res,next) {
        const data = req.body;
        Category.findOneAndRemove(data,function (err, category){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.DELETE).json({
                message: '删除成功了！'
            });
        });
    }
    updateCategory(req,res,next) {
        const data = req.body;
        Category.update({_id:data._id},{ $set: data },function(err,item){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.PUT).json({
                message: '更新成功了！'
            });
        });
    }
}
