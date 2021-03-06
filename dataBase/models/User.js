module.exports = (sequelize,DataTypes) =>{
    const User = sequelize.define('User', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },{
        tableName: 'users',
        timestamps: false
    });

    const Role = sequelize.import('./Role.js');
    const UserStatus = sequelize.import('./UserStatus.js');

    User.belongsTo(Role,{foreignKey:'role_id'});
    User.belongsTo(UserStatus,{foreignKey:'status_id'});


    return User;

};
