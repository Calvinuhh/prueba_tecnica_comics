import { DataTypes, UUIDV4 } from "sequelize";

export default (database) => {
  database.define(
    "Issue",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      date: DataTypes.STRING,
      image: DataTypes.STRING,
      issue_number: DataTypes.SMALLINT,
      volume: DataTypes.STRING,
    },
    { timestamps: false }
  );
};
