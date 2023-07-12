import React, { useState } from "react";
import questions from "./models/data.json";
import graphData from "./models/graphModel.json";

const selectedData = questions.map((question) => {
    return { Number: question.Number, value: "No" };
});

const AppContext = React.createContext();
const DataContext = ({ children }) => {
    const [selectedOptions, setSelectedOptions] = useState(selectedData);
    const [graphModel, setGraphModel] = useState([]);
    const [loading, setLoading] = useState(false)

    const resetGraphModel = () => setGraphModel([]);

    const resetSelectedOptions = () => {
        setSelectedOptions(
            questions.map((question) => {
                return { Number: question.Number, value: "No" };
            })
        );
    };

    const onSelectChange = (Number, optionSelected) => {
        let optionChanged = selectedOptions.map((option) => {
            if (option.Number === Number) {
                option.value = optionSelected;
            }
            return option;
        });
        setSelectedOptions(optionChanged);
    };

    return (
        <AppContext.Provider
            value={{
                selectedOptions,
                resetSelectedOptions,
                graphModel,
                onSelectChange,
                setGraphModel,
                resetGraphModel,
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
