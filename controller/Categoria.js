const categoriaSchema = require("../models/Categoria");
const ErrorResponse = require('../utils/errorResponse');

exports.getCategorias = async (req, res, next) => {
  try {
    const categoria = await categoriaSchema.find();
    res.status(200).json({ data: categoria });
  } catch (err) {
    next(new ErrorResponse(`Categoria no existentes}`, 404));
  }
};

exports.createCategoria = async (req, res, next) => {
  try {
    const categoria = await categoriaSchema.create(req.body);
    res.status(201).json({
      "created succesfully": categoria,
    });
  } catch (err) {
    next(err)
  }
};

exports.updateCategoria = async (req, res, next) => {
  try {
    const categoria = await categoriaSchema.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if(!categoria){
      res.status(404).json({success : false})
    }
    res.status(200).json({ data: categoria });
  } catch (err) {
    next(err)
  }
};

exports.deleteCategoria = async (req, res, next) => {
  try {
    const categoria = await categoriaSchema.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: `ID : ${req.params.id} deleted ` });
  } catch (err) {
    next(err)
  }
};

exports.getCategoria = async (req, res, next) => {
  try {
    const categoria = await categoriaSchema.findById(req.params.id);
    if (!categoria) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: categoria,
    });
  } catch (err) {
    next(new ErrorResponse(`No se encontro categoria con el id ${req.params.id}`, 404));
  }
};
