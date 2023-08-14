# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Getting Started
You'll Need:

1. Vite
2. React

Dependencies:

1. Threejs
2. Threejs/Fiber
3. Threejs/Drei
4. Maath - math helpers
5. Valtio
6. Framer Motion
7. Tailwind

Questions - as I follow along

How is the Tshirt being rendered in both pages but not found as a component in both pages?
-It's being rendered in Appjsx where the other two components are the dynamic things components

Things to review

1. ThreeJS - Camera motion for tracking mouse
   What I undedrstand - using the useFrame hook and a reference node, you can rotate the model using two things. The position of the pointer and the position given from the state variable from useFrame.
   Left to understand - How is that equation we used helpful? what are the differences in the two previosuly mentioned variables ?

Backend Notes
Package Installations and package.json changes
Package.json

1. Add 'start' script
2. Add 'type': 'module' which allows imports like the way react imports files
   Package Installations
3. Cloudinary - use to save images
4. Cors - To allow for cross origin requests
5. dotenv - For storing environment variabls
6. Express - Server to build API's
7. Mongoose - and ODM (Object Database Modelling Tool) to translate code from mongoDB to Node.js server
8. Nodemon - a tool that helps develop Node. js based applications by automatically restarting the node application when file changes in the directory are detected.

TO START:
Fork or Clone this Repo
In your terminal, head into the server and install all dependancies
Run 'npm start'

In a new terminal, open the client foler and install all dependancies
Run 'npm run dev'
