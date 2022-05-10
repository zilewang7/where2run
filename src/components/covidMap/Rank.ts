import React from "react";
import { covidData } from "./testData";

export interface CovidData {
    [key: string]: {
        location: string,
        total_cases: string,
        new_cases: number,
        new_cases_per_million: number,
        new_deaths: number,
        total_deaths_per_million: number,
        total_deaths: number
    }
}

export const Rank = (covidData: CovidData) => {
    console.log(covidData.CHN.location);
}