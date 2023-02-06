# 🦸🏻‍♀️ Marvel

## 📝 Description

This project consumes the official Marvel API. Shows all available characters, a brief biography and the comics in which they participated. It was developed to better understand VueJS concepts. Besides that, infinite scroll has also been implemented as a new learning concept.

## 🏗️ Built with

<div>
    <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
    <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
<div />


## 🚀 Run the aplication

### Cloning the Application
   
   1. Clone
    
      ```sh
      git clone https://github.com/emilynakano/marvel-vuejs.git
      ```
    
   2. Navigate to the application
      ```sh
      cd marvel
      ```
    
   3. Install the dependencies
    
       ```sh
       npm i
        ```
    
### Environment variables
    
  1. Create an env file
    
       ```sh
       touch .env
       ```
    
2. In the .env file, set up the following variables:
    
    Variable | Type | Description
    --- | --- | ---
    VITE_PUBLIC_KEY | `String` | Public Key provided by the Marvel API 
    VITE_PRIVATE_KEY | `String` | Private Key provided by the Marvel API 
    


### Running

  1. Run in the developer mode
    
       ```sh
       npm run dev
       ```
    
