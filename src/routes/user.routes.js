import { Router } from "express";
import { loginUser,logoutUser,refreshAccessToken,registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()
router.route("/register").post(
    upload.fields([
        {
            name :"avatar",
            maxCount :1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)

//secure routes
router.route("/logout").post(verifyJWT,logoutUser)

router.route("/refresh-access").post(refreshAccessToken)
// verifyJWT not used here because the entire code is written in user.controller therefore we do not need to verify it again
export default router;