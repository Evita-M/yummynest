import { Request, Response } from 'express';
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from 'server/src/models/products';

// Create
async function httpCreateProduct(req: Request, res: Response) {
  const product = await createProduct(req.body);
  return res.status(201).json(product);
}

// Read
async function httpGetAllProducts(_req: Request, res: Response) {
  return res.status(200).json(await getAllProducts());
}

async function httpGetProduct(req: Request, res: Response) {
  const productId = req.params.id;
  const product = await getProduct(productId);

  if (!product) {
    return res.status(404).json({
      error: 'Product not found',
    });
  }

  return res.status(200).json(product);
}

// Update
async function httpUpdateProduct(req: Request, res: Response) {
  const productId = req.params.id;
  const productUpdateData = req.body;
  const updatedProduct = await updateProduct(productId, productUpdateData);
  return res.status(200).json(updatedProduct);
}

// Delete
async function httpDeleteProduct(req: Request, res: Response) {
  const productId = req.params.id;
  await deleteProduct(productId);
  return res.status(204).send();
}

export {
  httpGetAllProducts,
  httpGetProduct,
  httpCreateProduct,
  httpUpdateProduct,
  httpDeleteProduct,
};
