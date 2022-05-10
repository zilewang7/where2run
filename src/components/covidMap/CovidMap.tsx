import React from "react";
import styles from "./CovidMap.module.css";
import { covidData } from "./testData";
import { Rank } from "./Rank";
import { Divider, Typography, Table, Tag, Space } from "antd";

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        location: "string",
        total_cases: "string",
        new_cases: "number",
        new_cases_per_million: "number",
        new_deaths: "number",
        total_deaths_per_million: "number",
        total_deaths: "number"
    },
    {
        key: '2',
        location: "string",
        total_cases: "string",
        new_cases: "number",
        new_cases_per_million: "number",
        new_deaths: "number",
        total_deaths_per_million: "number",
        total_deaths: "number"
    },
    {
        key: '3',
        location: "string",
        total_cases: "string",
        new_cases: "number",
        new_cases_per_million: "number",
        new_deaths: "number",
        total_deaths_per_million: "number",
        total_deaths: "number"
    },
];

export const CovidMap: React.FC = () => {

    return (
        <div className={styles.content}>
            <Divider><Typography.Title type="danger">疫情现状</Typography.Title></Divider>
            <Table dataSource={data}>
                <Column title="排名" dataIndex="key" key="key" />
                <Column title="国家/地区" dataIndex="location" key="location" />
                <Column title="累计确诊" dataIndex="total_cases" key="total_cases" />
                <ColumnGroup title="新增">
                    <Column title="日新增" dataIndex="new_cases" key="new_cases" />
                    <Column title="每百万人新增" dataIndex="new_cases_per_million" key="new_cases_per_million" />
                </ColumnGroup>
                <ColumnGroup title="死亡">
                    <Column title="日死亡" dataIndex="new_deaths" key="new_deaths" />
                    <Column title="每百万人死亡" dataIndex="total_deaths_per_million" key="total_deaths_per_million" />
                    <Column title="累计死亡" dataIndex="total_deaths" key="total_deaths" />
                </ColumnGroup>
            </Table>
        </div>
    )
};