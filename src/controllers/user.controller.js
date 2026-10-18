
import { asyncHandler } from "../utils/asynchHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const regitsterUser = asyncHandler(async function (req, res) {
    console.log("REGISTER CONTROLLER REACHED");
    const { fullname, email, username, password } = req.body;
    console.log("Request body:", req.body);
console.log("fullname:", fullname);
console.log("email:", email);
console.log("username:", username);
console.log("password received:", Boolean(password));


    if (
        [fullname, email, username, password].some(function (field) {
            return !field || field.trim() === "";
        })
    ) {
        throw new ApiError(
            400,
            "All fields are required"
        );
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (existedUser) {
        throw new ApiError(
            409,
            "User with email or username already exists"
        );
    }

    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    let coverImage = null;

    if (coverImageLocalPath) {
        coverImage = await uploadOnCloudinary(coverImageLocalPath);
    }

    if (!avatar || !avatar.url) {
        throw new ApiError(400, "Avatar upload failed");
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser) {
        throw new ApiError(
            500,
            "Something went wrong while registering the user"
        );
    }

    return res.status(201).json(
        new ApiResponse(
            201,
            createdUser,
            "User registered successfully"
        )
    );
});

export { regitsterUser };
