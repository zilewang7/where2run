

export interface Data {
    key?: number,
    location: string,
    total_cases: number,
    new_cases: number,
    new_cases_per_million: number,
    new_deaths: number,
    total_deaths_per_million: number,
    total_deaths: number
}

export const useRank = () => {
    const getRank = (covidData) => {
        if (!covidData) return []
        let rankTable: Data[] = [];

        Object.values(covidData).forEach((info: any, index) => {
            if (info.continent) {
                rankTable.push({
                    location: info.location,
                    total_cases: info.total_cases,
                    new_cases: info.new_cases,
                    new_cases_per_million: info.new_cases_per_million,
                    new_deaths: info.new_deaths,
                    total_deaths_per_million: info.total_deaths_per_million,
                    total_deaths: info.total_deaths
                })
            }
        })

        let quickSort = (arr) => {
            if (arr.length <= 1) { return arr; }
            let pivotIndex = Math.floor(arr.length / 2);
            let pivot = arr.splice(pivotIndex, 1)[0];
            let left: Data[] = [];
            let right: Data[] = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].total_cases < pivot.total_cases) {
                    right.push(arr[i]);
                } else {
                    left.push(arr[i]);
                }
            }
            return quickSort(left).concat([pivot], quickSort(right));
        };

        rankTable = quickSort(rankTable);

        rankTable.forEach((info, index) => {
            info.key = index + 1;
        })

        return rankTable;
    }
    return getRank;
}

// export const useRankedCovidData = () => {
//     const { covidData } = useSelector((state) => state.covidDate);
//     const [rankedCovidData, setRankedCovidData] = useState<any>()
//     const [loading, setLoading] = useState(true);
//     const dispatch = useDispatch()
//     const getRank = useRank();
//     const handleGetCovidData = useCallback(async () => {
//         console.log('handle execute')
//         await getCovidData(dispatch);

//     }, [dispatch])

//     // useEffect(() => {
//     handleGetCovidData().then(() => {
//         setRankedCovidData(getRank(covidData))
//         console.log('covidData: ', covidData)
//         setLoading(false)
//     })
//     // }, [covidData, getRank, handleGetCovidData])

//     return {
//         rankedCovidData,
//         loading,
//         error: null
//     }
// }