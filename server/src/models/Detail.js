import { DataTypes, UUIDV4 } from "sequelize";

export default (database) => {
  database.define(
    "Detail",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      date: DataTypes.STRING,
      description: DataTypes.STRING,
      issue_number: DataTypes.SMALLINT,
      characters: DataTypes.ARRAY(DataTypes.STRING),
      locations: DataTypes.ARRAY(DataTypes.STRING),
      authors: DataTypes.ARRAY(DataTypes.STRING),
      volume: DataTypes.STRING,
    },
    { timestamps: false }
  );
};
