import { toast } from "react-toastify";

async function generateOpenAIResponse(apiUrl, question_list) {
   try {
    let res = await fetch(apiUrl + "/openai/rec", {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            criteria: question_list.join('\n')
        })
    })

    if(res.status !== 200){
        toast.dismiss()
        toast.error('Sorry something went wrong! Try Again!')
        throw new Error('Sorry something went wrong! Try Again!');
    }else {
        res = await res.json()
    }

    return res !== undefined ? (res?.matches || res) : []
   } catch (error) {
        // console.log(error)
        throw new Error('Sorry something went wrong! Try Again!');
   }
}

export { generateOpenAIResponse }