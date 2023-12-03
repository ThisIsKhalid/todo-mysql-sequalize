import { Sequelize } from "sequelize";

const sequelize = new Sequelize("todo", "root", "123456789", {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default sequelize;
