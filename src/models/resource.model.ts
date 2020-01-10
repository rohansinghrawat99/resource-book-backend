import {
    AllowNull,
    AutoIncrement,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    Unique
} from "sequelize-typescript";

import { Helpers } from "../util/helpers.util";


@Table({
    timestamps: true,
    paranoid: true,
    tableName: "resources"
})

export class Resource extends Model<Resource> {
    @Unique
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column(DataType.STRING)
    title: string;

    @Column(DataType.STRING)
    description: string;

    @Column(DataType.STRING)
    highlights: string;


    @Column(DataType.STRING)
    pic_namespace: string;

}
