import { useContext } from "react";
import SelectInput from "./SelectInput";
import questions from "../models/data.json";
import graphData from "../models/graphModel.json";
import { AppContext } from "../context";

export default function Form() {
    const { selectedOptions, setGraphModel, resetGraphModel, resetSelectedOptions } =
        useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedOnes = selectedOptions
        .filter((option) => option.value === "Yes")
        .map((e) => e.Number);
        
        let newGraphModel = { ...graphData };
        questions.forEach((question) => {
            if (selectedOnes.includes(question.Number)) {
                const { Number, Question, Feature, ...newObj } = question;
                for (let key in newObj) {
                    newGraphModel[key] += newObj[key];
                }
            }
        });

        setGraphModel(newGraphModel);
    };

    const resetForm = () => {
        resetGraphModel()
        resetSelectedOptions()
    }

    return (
        <form className="ml-20 mr-20" onSubmit={handleSubmit}>
            {questions.map((question) => (
                <SelectInput
                    question={question.Question}
                    number={question.Number}
                    key={question.Number}
                />
            ))}
            <div className="flex justify-around">
                <button
                    type="submit"
                    className="group relative flex w-4/12 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
                <button
                    type="reset"
                    className="group relative flex w-4/12 justify-center rounded-md bg-[#FF0011] px-3 py-2 text-sm font-semibold text-white hover:bg-[#FF0033] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={resetForm}
                >
                    Reset
                </button>
            </div>
        </form>
    );
}
