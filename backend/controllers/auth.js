const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });
};

const register = async (req, res) => {

    const { email, password, firstName, lastName, location, phone } = req.body;

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: 'User already exists with this email address'
        });
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
        email: email.toLowerCase(),
        password: hashedPassword,
        profile: {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            phone: phone?.trim(),
            location: {
                city: location.city?.trim(),
                state: location.state?.trim(),
                country: location.country?.trim()
            }
        },
        points: 100 // Starting points
    });

    const token = generateToken(user._id);

    const userResponse = {
        _id: user._id,
        email: user.email,
        profile: user.profile,
        points: user.points,
        role: user.role,
        rating: user.rating,
        isActive: user.isActive,
        createdAt: user.createdAt
    };

    res.status(201).json({
        success: true,
        message: 'Account created successfully! Welcome to ReWear.',
        data: {
            user: userResponse,
            token
        }
    });

}