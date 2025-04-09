import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); 
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif|pdf/; 
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype) {
    cb(null, true); 
  } else {
    cb(new Error("File type not allowed"), false); 
  }
};
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter,
});
export const multerMiddleware = upload.single("file");
export default function withMulter(handler) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      multerMiddleware(req, res, (err) => {
        if (err) return reject(err);
        resolve(handler(req, res)); 
      });
    });
}
