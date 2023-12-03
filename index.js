
import app from "./app.js";
import db from "./config/db.js";
import { userModal } from "./model/User.modal.js";

const port = 5000;

const initApp = async () => {
  console.log("Testing the database connection..");

  try {
    await db.authenticate();
    console.log("Database connected...");

    // userModal.sync({ alter: true });

    app.listen(port, () => {
      console.log(`Server listening at port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initApp();
