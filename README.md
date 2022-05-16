This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Stack: NextJS, ChartJS, Typescript, Scss, CssModules with Context as State Manager.

## Running the application

Download the project or clone it to a local folder

Install modules

```bash
npm install
# or
yarn install
```

Log in into https://rapidapi.com/edamam/api/edamam-food-and-grocery-database/details and copy your X-RapidAPI-Key

Create an .env.local file at the root of the folder and create the following variable
Your project structure should look like this:

![image](https://user-images.githubusercontent.com/34045326/168623833-8cf14c1b-a79b-4738-9f51-bc53b0fce06f.png)

```bash
FOOD_API_KEY=your_api_key
```

Run the application

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Obs.: This project was developed in less than 48 hours, so I didn't have time to create the responsiveness for other resolutions other than mobile.
