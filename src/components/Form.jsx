import SelectInput from "./SelectInput";

const questions = [
    {
        Question: "Are you trying to impliment SPA?",
        React: 10,
        Angular: 10,
        Vue: 10,
        NextJS: 0,
        NuxtJS: 0,
        Meteor: 0,
        Express: 0,
    },
    {
        Question: "Are you trying to impliment MPA?",
        React: "",
        Angular: "",
        Vue: "",
        NextJS: 10,
        NuxtJS: 10,
        Meteor: 10,
        Express: 10,
    },
    {
        Question: "Do you need SEO?",
        React: 2,
        Angular: 2,
        Vue: 2,
        NextJS: 10,
        NuxtJS: 10,
        Meteor: 10,
        Express: 10,
    },
    {
        Question: "Do you need Accessibility?",
        React: 2,
        Angular: 2,
        Vue: 2,
        NextJS: 10,
        NuxtJS: 10,
        Meteor: 10,
        Express: 10,
    },
    {
        Question: "Do you need state managment?",
        React: 2,
        Angular: 2,
        Vue: 2,
        NextJS: 10,
        NuxtJS: 10,
        Meteor: 10,
        Express: 9,
    },
    {
        Question: "Do you need PWA?",
        React: 0,
        Angular: 8,
        Vue: 0,
        NextJS: 5,
        NuxtJS: 5,
        Meteor: 5,
        Express: 5,
    },
];

export default function Form() {
    return (
        <div className="ml-20 mr-20">
            <SelectInput question={questions[0].Question}/>
            <SelectInput question={questions[1].Question}/>
        </div>
    );
}
