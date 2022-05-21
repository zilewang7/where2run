import React, { useEffect } from "react";
import styles from "./CovidMap.module.css";
import { Divider, Typography, Table, Spin } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { getCovidData, } from "../../redux/slices/covidDataSlice";
import { useSelectorWithType, useDispatchWithType } from "../../redux/hooks";

const { Column, ColumnGroup } = Table;

export const CovidMap: React.FC = () => {
    const { covidData, loading, error } = useSelectorWithType(state => state.covidData);
    const dispatch = useDispatchWithType();
    useEffect(() => {
        dispatch(getCovidData());
    }, [dispatch]);

    return (
        <div className={styles.content}>
            <Divider><Typography.Title type="danger">疫情现状</Typography.Title></Divider>
            {(error !== null) ? <><h2>数据获取出错</h2><p>{error}</p></> : <>
                {loading ? <Spin size="large" /> :
                    <>
                        <Table
                            dataSource={covidData}
                            summary={() => {
                                let dataOfChina = covidData[0];
                                for (let i = 0; i < covidData.length; i++) {
                                    if (covidData[i].location === "China") {
                                        dataOfChina = covidData[i];
                                        break;
                                    }
                                }
                                return (
                                    <>
                                        <Table.Summary.Row className={styles.rowOfChina}>
                                            <Table.Summary.Cell index={0}>{dataOfChina.key}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={1}>{dataOfChina.location}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={3}>{dataOfChina.total_cases}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={4}>{dataOfChina.new_cases}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={5}>{dataOfChina.new_cases_per_million}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={6}>{dataOfChina.new_deaths}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={7}>{dataOfChina.total_deaths_per_million}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={7}>{dataOfChina.total_deaths}</Table.Summary.Cell>
                                        </Table.Summary.Row>
                                    </>
                                )
                            }}
                        >
                            <Column title="名次" dataIndex="key" key="key" />
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
                    </>
                }</>}
            <p>数据来源: <GithubOutlined /> <a href="https://github.com/owid/covid-19-data">COVID-19 Dataset by Our World in Data</a></p>
        </div>
    )
};