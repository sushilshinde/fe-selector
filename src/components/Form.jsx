import { useContext } from "react";
import SelectInput from "./SelectInput";
import questions from "../models/data.json";
import graphData from "../models/graphModel.json";
import { AppContext } from "../context";
import { toast } from "react-toastify";
import { generateOpenAIResponse } from "../services";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Form() {
    const { selectedOptions, setChartData, reset, setLoading } =
        useContext(AppContext);

    const handleSubmit = async(e) => {
        e.preventDefault();
        toast.info('Please wait while we load your data...')

        console.log(selectedOptions)

        const selectedOnes = selectedOptions
        .filter((option) => option.value === "Yes")
        .map((e) => e.Number);

        let question_list = [];
        questions.forEach((question) => {
                if (selectedOnes.includes(question.Number)) {
                    question_list.push(question_list.length + 1 + '. '+question.gptPrompt)
                }
        });

        console.log(question_list.join('\n'))

        setLoading(true)

        try {
            const response = await generateOpenAIResponse(API_BASE_URL, question_list)
            console.log(response)
            setChartData({ graphModel: response, selectedOptions });
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.dismiss()
            toast.error('Sorry something went wrong! Try Again!')
            reset()
        }

    };

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
                    onClick={() => reset()}
                >
                    Reset
                </button>
            </div>
        </form>
    );
}
