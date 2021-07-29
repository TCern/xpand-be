import { Model, DataTypes } from "sequelize/types"

export class Planet extends Model {
    name
    imageSource
    description
    captain
    robots
  
    static initModel = initModel
    static initAssociations = initAssociations
  }
  
  function initModel() {
    // TODO
    const modelConfig = getModelConfig(DATABASE_MODELS.ACCOUNTS)
  
    Planet.init(
      {
        name: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        imageSource: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        description: {
          type: DataTypes.STRING(255),
          allowNull: true
        }
      },
      modelConfig
    )
  }
  
  function initAssociations() {
    // TODO
    Planet.belongsTo(Captain, {
      through: DATABASE_MODELS.CAPTAIN,
      as: 'assignedPlanets',
    })
  }