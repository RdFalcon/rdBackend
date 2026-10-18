import multer from "multer";
import crypto from "node:crypto";
import fs from "node:fs";

const uploadPath = "C:/tmp/my-uploads";

fs.mkdirSync(uploadPath, { recursive: true });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(16, function (err, raw) {
            if (err) return cb(err);
            cb(null, file.fieldname + "-" + raw.toString("hex"));
        });
    }
});

export const upload = multer({ storage: storage });