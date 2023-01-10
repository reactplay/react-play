/* eslint-disable prettier/prettier */
import { Configuration, OpenAIApi } from 'openai';

async function useOpenAi() {
    // eslint-disable-next-line no-console
    console.log('fetchResponse');
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Suggest 10 unique React.js project ideas ( using bullet points exactly like this '• ') that are not very common`,
            temperature: 0.9,
            max_tokens: 3960,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        });
        // eslint-disable-next-line no-console
        console.log(response);
        const points = response.data.choices[0].text;
        // eslint-disable-next-line no-console
        console.log(points);
        var ideas = points.split('• ').map(line => line.trim())
        ideas = ideas.slice(1);
        // eslint-disable-next-line no-console
        console.log('the points are', ideas);

        return {
            success: true,
            ideas
        };
    }
    catch (error) {
        if (error.response) {
            console.error(error.response.status, error.response.data);

            return {
                success:false,
                message: error.response.data
            };
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);

            return {
                success: false,
                message: 'An error occurred during your request.',
            };
        }
    }
}


export default useOpenAi;