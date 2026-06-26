import uploadOnCloudinary from "../utils/cloudinary";
import Shop from "../models/shop.model.js"
import Item from "../models/shop.model.js";

export const addItem = async (req, res) => {
    try {
        const { name, categoru, foodType, price } = req.body
        let image;
        if (req.file) {
            image = await uploadOnCloudinary(req.file.path)
        }
        const shop = await Shop.findOne({ owner: req.userId })
        if(!shop ){
             return res.status(500).json({ message: 'add items not found ${error)' })

        }
        const item = await item.create({
            name, category, foodType, price, image, shop: shop._id
        })

        return res.status(200).json(item)
    }
    catch (error) {
        return res.status(500).json({ message: 'add item error ${error)' })
    }


}
  

export const editItem = async (req, res) => {
    try {
        const itemId = req.parms.itemId
        const { name, categoru, foodType, price } = req.body
        let image;
        if (req.file) {
            image = await uploadOnCloudinary(req.file.path)
        }
        const item = await Item.findByIdAndUpdate(itemId, {
            name, categoru, foodType, price, image

        }, { new: true })
        if (!item) {
            return res.status(400).json({message:"item not found"})

        }
 return res.status(500).json(item)


    } catch (error) {
        return res.status(500).json({ message: 'edit item error ${error)' })
    }

}

