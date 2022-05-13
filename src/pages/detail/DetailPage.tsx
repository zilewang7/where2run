import React from "react";
import styles from "./DetailPage.module.css"
import { useParams } from 'react-router-dom'



export const DetailPage: React.FC = (props) => {
    let id = Object.values(useParams());
    console.log(useParams());
    return (
        <h1>详情页{id}</h1>
    );
}