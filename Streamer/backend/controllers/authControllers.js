const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const register = async (req, res) => {
    const { username, email, password } = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully '});
    }catch(error){
        res.status(500).json({ message: 'error registering user'});
    }
};
const login = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ message: 'Invalid credentials '});
        }
        const token = jwt.sign({ userId: user._id }, process.env.SECREET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch(error) {
        res.status(500).json({ message: 'Error logging in' });
    }
};
module.exports = { register, login };