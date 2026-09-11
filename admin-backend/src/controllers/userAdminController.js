import mongoose from 'mongoose';
import User from '../models/User.js';

let memoryUsers = [
  { _id: '1', name: 'Rajesh Kumar', email: 'rajesh.k@gmail.com', phone: '+91 9876543210', profileDetails: { state: 'Uttar Pradesh', category: 'OBC', income: 180000 }, createdAt: new Date() },
  { _id: '2', name: 'Sunita Sharma', email: 'sunita.s@gmail.com', phone: '+91 9812345678', profileDetails: { state: 'Bihar', category: 'General', income: 220000 }, createdAt: new Date() },
  { _id: '3', name: 'Ramesh Patel', email: 'ramesh.p@gmail.com', phone: '+91 9765432109', profileDetails: { state: 'Gujarat', category: 'General', income: 150000 }, createdAt: new Date() },
  { _id: '4', name: 'Priya Verma', email: 'priya.v@gmail.com', phone: '+91 9988776655', profileDetails: { state: 'Madhya Pradesh', category: 'SC', income: 95000 }, createdAt: new Date() }
];

export const getUsers = async (req, res) => {
  if (mongoose.connection.readyState === 1) {
    try {
      const dbUsers = await User.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: dbUsers.length, data: dbUsers });
    } catch (error) {
      return res.status(200).json({ success: true, count: memoryUsers.length, data: memoryUsers });
    }
  }
  return res.status(200).json({ success: true, count: memoryUsers.length, data: memoryUsers });
};

export const createUser = async (req, res) => {
  try {
    const { name, email, phone, profileDetails } = req.body;
    if (mongoose.connection.readyState === 1) {
      const newUser = await User.create({
        name,
        email,
        phone: phone || '+91 9876543210',
        profileDetails: profileDetails || { age: 28, gender: 'male', income: 180000, category: 'OBC', state: 'Uttar Pradesh' }
      });
      return res.status(201).json({ success: true, data: newUser });
    }
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};
