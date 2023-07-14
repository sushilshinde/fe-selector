import React, { useState } from "react";
import questions from "./models/data.json";
import graphData from "./models/graphModel.json";

const selectedData = questions.map((question) => {
    return { Number: question.Number, value: "No" };
});

const AppContext = React.createContext();
const DataContext = ({ children }) => {
    const [{ graphModel, selectedOptions }, setChartData] = useState({ graphModel: [], selectedOptions: selectedData })
    const [loading, setLoading] = useState(false)

    const reset = () => setChartData({ graphModel: [], selectedOptions: selectedData.map((question) => {
        return { Number: question.Number, value: "No" };
    }) })


    const onSelectChange = (Number, optionSelected) => {
        console.log(selectedOptions)
        let optionChanged = selectedOptions.map((option) => {
            if (option.Number === Number) {
                option.value = optionSelected;
            }
            return option;
        });
        setChartData({ graphModel, selectedOptions: optionChanged })
    };

    return (
        <AppContext.Provider
            value={{
                selectedOptions,
                reset,
                graphModel,
                onSelectChange,
                setChartData,
                loading,
                setLoading
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext };

export default DataContext;
