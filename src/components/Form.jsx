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
        <form className="border border-[#D6F1FD]" onSubmit={handleSubmit}>
            {questions.map((question) => (
                <SelectInput
                    question={question.Question}
                    number={question.Number}
                    key={question.Number}
                />
            ))}
            <div className="flex justify-around mt-7 mb-7">
                <button
                    type="submit"
                    className="hover:transition-all group relative flex w-4/12 justify-center rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Recommend
                </button>
                <button
                    type="reset"
                    className="hover:transition-all group relative flex w-4/12 justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={resetForm}
                >
                    Reset
                </button>
            </div>
        </form>
    );
}
