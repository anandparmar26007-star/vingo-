import uploadOnCloudinary from "../utils/cloudinary.js";
import Shop from "../models/shop.model.js";

export const createEditShop = async (req, res) => {
  try {
    const { name, city, state, address } = req.body;
    
    // Check if you are updating an existing shop or creating a new one
    let myShop = await Shop.findOne({ /* your query condition, e.g., owner: req.userId */ });
    

    if (myShop) {
      // Update logic
      myShop.name = name;
      myShop.city = city;
      myShop.state = state;
      myShop.address = address;
      await myShop.save();
    } else {
      // Creation logic: Note the capital 'Shop' model calling .create()
      // and assigning the result to a distinctly named variable 'newShop'
      const newShop = await Shop.create({
        name,
        city,
        state,
        address,
        image: req.file ? req.file.path : undefined // if using multer/cloudinary
      });
      myShop = newShop;
    }

    // Return the updated or newly created shop back to your frontend React app
    return res.status(200).json(myShop);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "create shop error " + error.message });
  }
};


export const getMyShop = async (req, res) => {
    try {
        const shop = await Shop.findOne({ owner: req.userId })
        if (!shop) {
            return res.status(404).json({
                message: "Shop not found",
            });
        }
        return res.status(200).json(shop)

    } catch (error) {
        return res.status(500).json({
            message: `get my shop error ${error.message}`
        })

    }
}
/*export const createEditShop = async (req, res) => {
    try {
        const { name, city, state, address } = req.body;
        let image ;

        if (req.file) {
            image = await uploadOnCloudinary(req.file.path);
        } 
        let shop=await shop.findOne({owner:req.userId})
        if (!shop) {
            shop = await Shop.create({
                name, city, state, address, image, owner: req.userId
            });


        } else {
            shop = await Shop.findByIdAndUpdate(
                shop._id,
                { name, city, state, address, image, owner: req.userId },
                { new: true }
            );
        }
        await shop.populate("owner", "name email");
        return res.status(201).json(shop)

    }
    catch (error) {
        return res.status(500).json({
            message: `create shop error ${error.message}`
        });

    }
}*//*import Shop from "../models/shop.model.js";

// 1. CREATE OR EDIT SHOP CONTROLLER
export const createEditShop = async (req, res) => {
    try {
        // Direct req.body se Base64 image ke saath saara data nikalein
        const { name, city, state, address, image } = req.body;

        // Validation check karein
        if (!name || !city || !state || !address) {
            return res.status(400).json({ 
                success: false, 
                message: "All fields (Name, City, State, Address) are required." 
            });
        }

        // Check karein ki kya is user (Owner) ki shop pehle se bani hui hai
        let shop = await Shop.findOne({ owner: req.userId });

        if (!shop) {
            // CASE A: Agar shop nahi bani, toh Nayi Shop banayein
            if (!image) {
                return res.status(400).json({ success: false, message: "Shop image is required for new shop." });
            }

            shop = await Shop.create({
                name,
                city,
                state,
                address,
                image, // Base64 string directly saved in MongoDB
                owner: req.userId
            });
            console.log(">>> New Shop Created directly in MongoDB");
        } else {
            // CASE B: Agar shop pehle se hai, toh use Update (Edit) karein
            // Agar user ne nayi image select nahi ki, toh purani wali hi image variable me rahegi
            const updatedImage = image || shop.image;

            shop = await Shop.findByIdAndUpdate(
                shop._id,
                { 
                    name, 
                    city, 
                    state, 
                    address, 
                    image: updatedImage, 
                    owner: req.userId 
                },
                { new: true } // Taaki hume updated data mile
            );
            console.log(">>> Shop Updated directly in MongoDB");
        }

        // User ka details card populate karein (agar user model me name/email ho)
        await shop.populate("owner", "name email");

        // Frontend ko updated data return karein jisse Redux sahi se save ho sake
        return res.status(200).json(shop);

    } catch (error) {
        console.error("🚨 CREATE/EDIT SHOP ERROR 🚨", error);
        return res.status(500).json({
            success: false,
            message: `Create/Edit shop error: ${error.message}`
        });
    }
};

// 2. GET MY SHOP CONTROLLER
export const getMyShop = async (req, res) => {
    try {
        // Owner ID ke basis par database se shop ko dhoodhein
        const shop = await Shop.findOne({ owner: req.userId });
        
        if (!shop) {
            return res.status(404).json({
                success: false,
                message: "Shop not found",
            });
        }
        
        return res.status(200).json(shop);

    } catch (error) {
        console.error("🚨 GET MY SHOP ERROR 🚨", error);
        return res.status(500).json({
            success: false,
            message: `Get my shop error: ${error.message}`
        });
    }
};*/