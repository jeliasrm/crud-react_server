import Product from '../model/productModel.js';

// Create a new product
export const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'No products found.' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single product
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.json({ message: 'Product deleted.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get products by category
export const getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category });
        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'No products found in this category.' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get products by price range
export const getProductsByPriceRange = async (req, res) => {
    try {
        const { min, max } = req.query;
        const products = await Product.find({ price: { $gte: min, $lte: max } });
        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'No products found within this price range.' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get products by rating
export const getProductsByRating = async (req, res) => {
    try {
        const { rating } = req.query;
        const products = await Product.find({ rating: { $gte: rating } });
        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'No products found with this rating.' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get products by quantity
export const getProductsByQuantity = async (req, res) => {
    try {
        const { quantity } = req.query;
        const products = await Product.find({ quantity: { $gte: quantity } });
        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'No products found with this quantity.' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};