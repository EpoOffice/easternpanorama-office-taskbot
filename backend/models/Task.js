const { DataTypes } = require('sequelize');

const sequelize = require('../config/db');

const Task = sequelize.define('Task', {
    task: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    doer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    urgency: {
        type: DataTypes.STRING
    },
    dueDate: {
        type: DataTypes.DATE
    },
    cancellationRequested: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    cancellationReason: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'revised', 'canceled'),
        allowNull: false,
        defaultValue: 'pending',
    },
    extensionRequestedDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    department: {               // 👈 Optional, for filtering/reporting
        type: DataTypes.STRING,
        allowNull: true
    }

});


module.exports = Task;