import { QueryInterface, SequelizeStatic } from "sequelize";

export = {
    /**
     * Write code here for migration.
     *
     * @param queryInterface
     * @param Sequelize
     */
    up: async (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return queryInterface.createTable("resources", {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false
            },
            highlights: {
                type: Sequelize.STRING,
                allowNull: true
            },
            pic_namespace: {
                type: Sequelize.STRING,
                allowNull: true
            },
            createdAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            deletedAt: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },

    /**
     * Write code here for migration rollback.
     *
     * @param queryInterface
     * @param Sequelize
     */
    down: async (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return Promise.all([
            queryInterface.dropTable("resources"),
        ]);
    }
};
