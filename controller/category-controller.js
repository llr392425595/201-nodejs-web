import Category from '../models/category'
import constant from '../constant/constant'
export default class ItemController {
    getAll(req, res, next) {
        Category.find(function(err, categories) {
            if (err) return next(err);
            res.status(constant.httpCode.OK).json({ data: categories,count: categories.length})
        });
    }
    getCategoryByID(req,res,next) {
        const categoryId = req.params.categoryId;
        Category.findById(categoryId,(err, category)=>{
            if (err) return next(err);
            if(!category) return res.sendStatus(constant.httpCode.NOT_FOUND);
            res.status(constant.httpCode.OK).send(category);
        });
    }
    addCategory(req,res,next) {
        Category.create(req.body,(err, category)=>{
            if (err) return next(err);
            res.status(constant.httpCode.CREATED).send({ uri: `categories/${category._id}` });
        });
    }
    deleteCategory(req,res,next) {
        const categoryId = req.params.categoryId;
        Category.findOneAndRemove({_id:categoryId},(err, category)=>{
            if (err) return next(err);
            if(!category) return res.sendStatus(constant.httpCode.NOT_FOUND);
            return res.sendStatus(constant.httpCode.NO_CONTENT);
        });
    }
    updateCategory(req,res,next) {
        const categoryId = req.params.categoryId;
        Category.findOneAndUpdate({_id:categoryId},req.body,(err,category)=>{
            if (err) return next(err);
            if(!category) return res.sendStatus(constant.httpCode.NO_CONTENT);
            return res.sendStatus(constant.httpCode.NO_CONTENT);
        });
    }
}
