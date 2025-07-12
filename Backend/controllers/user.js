const User = require('../models/User');
const PointTransaction = require('../models/PointTransaction');
const bcrypt = require('bcryptjs');

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateProfile = async (req, res) => {
    try {
        const { profile, preferences } = req.body;
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (profile) {
            user.profile = { ...user.profile, ...profile };
        }
        if (preferences) {
            user.preferences = { ...user.preferences, ...preferences };
        }

        await user.save();

        const updatedUser = await User.findById(req.user._id).select('-password');
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPublicProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
            .select('profile rating createdAt')
            .populate('profile');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPointsBalance = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('points');
        res.json({ points: user.points });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProfile,
    updateProfile,
    getPublicProfile,
    getPointsBalance
}