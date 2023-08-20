# AIShirt

## 1. Getting Started

1. Clone this repo
   - You'll notice it has two folders: client and server
2. Navigate into the client folder. Inside your terminal run `npm install` to get all the dependancies
3. Navigate into the server folder. Inside your terminal run `npm install` to get all the dependancies

❗❗❗ In order to use Dall-E, you'll need to have a paid account with openAI to generate images from a prompt.
❗❗❗ Otherwise you'll get an error. If you'd like to see that functionality, follow steps 2 - 4. Otherwise, go straight to step 5.

## 2. Setting up Open AI (Optional)

1. Create an account
2. You can head to [OpenAI's Billing Platform](https://platform.openai.com/account/billing/overview) to enter your payment info.
3. Optional. I like to set a [hard limit](https://platform.openai.com/account/billing/limits) to prevent over usage from the platform
4. Create a new [API Key](https://platform.openai.com/account/api-keys).

## 3. Using your Open AI API Key (Optional)

1. Inside of your server folder, create a `.env` file.
2. Inside of your env file, create a new variable `OPEN_AI_API_KEY` that will be equal to the api key you generated from openAPI.
   Ex(`OPEN_AI_API_KEY="sk-123Example"`)

## 4. Run your Server (Optional: if using image generator)

1. Run your server `npm run start`

## 5. Run your Client

1. run `npm run dev`
2. If you're also using the image generator feature, make sure to simultaneously running the server.

## Notes

I've deployed the backend of this to render.com so if you were to just clone this,
you can just use the frontend (client) portion of this project and it should work without you having to setup the backend OR check out the deployed version [here](https://johnson-tech-ai-tshirt.netlify.app/)
