import { userModal } from "../model/User.modal.js";

const createUser = async (req, res) => {
  const data = req.body;
  try {
    const user = await userModal.create(data);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModal.findAll();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const userController = {
  createUser,
  getAllUsers,
};
