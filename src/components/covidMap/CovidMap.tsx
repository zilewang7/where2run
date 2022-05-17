import React, { useCallback, useEffect, useState } from "react";
import styles from "./CovidMap.module.css";
// import { covidData as testData } from "./testData";
import { Data, useRank } from "./useRank";
import { Divider, Typography, Table, Spin } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { fetchData, } from "../../redux/reducers/covidDataReducer";
import { useDispatch } from "react-redux";
// import { useSelector } from "../../redux/hooks";

const { Column, ColumnGroup } = Table;

export const CovidMap: React.FC = () => {
    // const { rankedCovidData: rankData, loading, error } = useRankedCovidData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const dispatch = useCallback(useDispatch(), [])
    // const { covidData, loading, error } = useSelector(state => (state as any).covidDate);
    // console.log('init', 'CovidData', covidData, 'loading', loading, 'error', error);
    // new Promise(()=>{
    //     (dispatch as any)(GetData())
    // }).finally(() => {
    //     const getRank = useRank()
    // const rankData = getRank(covidData)
    // });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getRank = useCallback(useRank(), [])

    const [rankData, setRankData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    // useEffect(() => {

    //     console.log('useEffect', 'CovidData', covidData, 'loading', loading, 'error', error)
    //     if (covidData) {
    //         setRankData(getRank(covidData))
    //     }
    // }, [covidData, getRank])

    // const getRank = useRank()


    // useEffect(() => {
    //     (dispatch as any)(GetData()).then(() => {
    //         console.log('useEffect', 'CovidData', covidData, 'loading', loading, 'error', error);

    //         setRankData(getRank(covidData))
    //     })
    // }, [covidData, dispatch, error, getRank, loading])

    useEffect(() => {
        (dispatch as any)(fetchData())
            .unwrap()
            .then((originalPromiseResult) => {
                console.log('originalPromiseResult', originalPromiseResult)
                // dispatch(setCovidData(originalPromiseResult));
                setRankData(getRank(originalPromiseResult));
                setLoading(false)
                // handle result here
            })
            .catch((rejectedValueOrSerializedError) => {
                console.log(rejectedValueOrSerializedError)
                setLoading(false)
                setError(rejectedValueOrSerializedError.message);

                // handle error here
            })
    }, [dispatch, getRank]);





    // console.log('dispatch', 'CovidData', covidData, 'loading', loading, 'error', error)

    // console.log('rankData', rankData)



    // dispatch()

    // const [covidData, setCovidData] = useState<any>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string>('none');

    // useEffect(() => {
    //     const fetchCovidData = async () => {
    //         try {
    //             // const covidData = await fetch("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json");
    //             // const data = await covidData.json();
    //             const { data } = await axios.get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json",
    //                 {
    //                     headers: {},
    //                 })
    //             setCovidData(data);
    //         } catch (e: any) {
    //             setError(e.message);
    //             return;
    //         }
    //         setLoading(false)
    //     };
    //     fetchCovidData();
    // }, [])

    // const getRank = useRank();
    // let rankData = useRef<any>();

    // useEffect(() => {
    //     if (covidData) {
    //         rankData.current = getRank(covidData);
    //     }
    // }, [covidData, getRank])

    // if (loading) {
    //     return <>ni kan ni ma ne</>
    // }

    return (
        <div className={styles.content}>
            <Divider><Typography.Title type="danger">疫情现状</Typography.Title></Divider>
            {(error !== null) ? <><h2>数据获取出错</h2><p>{error}</p></> : <>
                {loading ? <Spin size="large" /> :
                    <>
                        <Table
                            dataSource={rankData}
                            summary={() => {
                                let dataOfChina: Data = rankData[0];
                                for (let i = 0; i < rankData.length; i++) {
                                    if (rankData[i].location === "China") {
                                        dataOfChina = rankData[i];
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