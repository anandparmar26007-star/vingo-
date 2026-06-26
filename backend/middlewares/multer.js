import multer from "multer"
const storage=multer.diskStorage({
    destination:function (req, file, cb){
        cb(null,"./public");

        
    },filename:function (req, file, cb){
         cb(null, `${Date.now()}-${file.originalname}`);
    }

})

export const upload = multer({ storage: storage });
/*import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "public", "uploads");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("Upload Folder:", uploadDir);
        cb(null, uploadDir);
    },

    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`;
        console.log("Saving File:", fileName);
        cb(null, fileName);
    },
});

export const upload = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10 MB
    },
});*/