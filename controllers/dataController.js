import Data from "../models/Data.js";

export const createEntry = async (req, res) => {
  const { name, email, phone, reason } = req.body;

  try {
    const dataEntry = await Data.create({
      name: name,
      email: email,
      phone: phone,
      reason: reason,
    });
  } catch (error) {
    console.log(error);
  }

  return res.status(201).json(dataEntry);
};

export const getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
