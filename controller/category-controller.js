import Category from '../models/category'
import statusCode from '../constant/statusCode'
export default class ItemController {
    getAll(req, res, next) {
        Category.find(function(err, categories) {
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.GET).json({ data: categories,count: categories.length})
        });
    }
    getCategoryByID(req,res,next) {
        const categoryId = req.params.id;
        Category.findById(categoryId, function(err,category){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
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
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.CREATE).json({
                message: '存储成功了！'
            });
        });
    }
    deleteCategory(req,res,next) {
        let data = req.body;
        Category.findOneAndRemove(data,function (err, category){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            if(category){
                return res.status(statusCode.DELETE).json({uri: `categories/${category._id}`});
            }else{
                return res.status(statusCode.INTERNALSERVERERROR).json({error: '没查到数据，删除失败！'});
            }
        });
    }
    updateCategory(req,res,next) {
        const data = req.body;
        Category.update({_id:data._id},{ $set: data },function(err,item){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.PUT).json({uri: `categories/${category._id}`});
        });
    }
}
