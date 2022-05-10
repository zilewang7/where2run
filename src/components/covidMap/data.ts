export const getCovidData = async () => {
    try {
        const covidData = await fetch("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json");
        const data = await covidData.json();
        return data;
    } catch (e: any) {
        console.log(e.message);
    }
};