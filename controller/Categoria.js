const categoriaSchema = require("../models/Categoria");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require('../midlewares/async');

exports.getCategorias = asyncHandler(async (req, res, next) => {
    const categoria = await categoriaSchema.find();
    res.status(200).json({ data: categoria });
});

exports.createCategoria = asyncHandler(async (req, res, next) => {
    const categoria = await categoriaSchema.create(req.body);
    res.status(201).json({
      "created succesfully": categoria,
    });
});

exports.updateCategoria = asyncHandler( async (req, res, next) => {
    const categoria = await categoriaSchema.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!categoria) {
      return next(
        new ErrorResponse(
          `Categoria no encontrada con el id ${req.params.id}`,
          404
        )
      );
    }
    res.status(200).json({ data: categoria });
});

exports.deleteCategoria = asyncHandler(async (req, res, next) => {
    const categoria = await categoriaSchema.findByIdAndRemove(req.params.id);
    if (!categoria) {
      return next(
        new ErrorResponse(
          `Categoria no encontrada con el id ${req.params.id}`,
          404
        )
      );
    }
    res.status(200).json({ message: `ID : ${req.params.id} deleted ` });
});

exports.getCategoria = asyncHandler(async (req, res, next) => {
    const categoria = await categoriaSchema.findById(req.params.id);
    if (!categoria) {
      return next(
        new ErrorResponse(
          `Categoria no encontrada con el id ${req.params.id}`,
          404
        )
      );
    }
    res.status(200).json({
      success: true,
      data: categoria,
    });
});
