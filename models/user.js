module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
      // Information about the user.
        firstname: 
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
              }
            },
        lastname: 
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [2]
              }
            },
        screenname: 
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6]
              },
            unique: true
          },
        password:  
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6]
              }
            },
        score: {type:DataTypes.INTEGER},
        email: 
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6]
              },
            unique: true
          }             
      });
 
    return user;
  };


