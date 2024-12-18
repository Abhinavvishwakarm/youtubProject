import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload  } from "../middlewares/multer.midleware.js";
const router = Router()

// middleware inject //
router.route('/register').post(
    upload.fields([
        {
           name: 'avatar',
           maxCount: 1,
        },
        {
            name: 'coverImage',
            maxCount: 2,
        }
    ]),
    registerUser,
    )


export default router;