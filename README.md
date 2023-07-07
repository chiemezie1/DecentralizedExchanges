# **DecentralizedExchanges**

DecentralizedExchanges is a decentralized exchange (DEX) web application that allows users to swap tokens. It leverages Web3 technologies to connect with the Ethereum blockchain and provides a seamless swapping experience for users.

## **Project Structure**

The project structure is organized as follows:

```
├── dex/                                # Frontend directory
│   ├── src/                            # Source files
│   │   ├── components/                 # Components directory
│   │   │   ├── Header/                 # Header component
│   │   │   ├── Swap/                   # Swap component
│   │   │   └── Tokens/                 # Tokens component
│   │   ├── App.js                      # Main component for the application
│   │   ├── index.js                    # Entry point of the application
│   │   └── eth.svg                     # SVG file for the Tokens logo
│   ├── public/                         # Public assets
│   ├── package.json                    # Frontend dependencies and scripts
│   └── README.md                       # Frontend README
├── dexBack/                            # Backend directory
│   ├── index.js                        # Node.js server file
│   ├── .env                            # Environment variables
│   ├── package.json                    # Backend dependencies and scripts
│   └── README.md                       # Backend README
└── README.md                           # Main README

```

## **Backend (dexBack)**

The **`dexBack`** directory contains the backend code for the DecentralizedExchanges, this is where the calls are made by the API.

### **Features**

- Node.js server file (**`index.js`**) to handle backend logic.
- Environment variables defined in **`.env`** for configuration.

### **Prerequisites**

Before running the backend locally, make sure you have the following prerequisites installed:

- Node.js (v16.0.0 or higher)
- npm (v6.0.0 or higher)

### **Installation**

1. Navigate to the backend directory:
    
    ```
    cd dexBack
    
    ```
    
2. Install the dependencies:
    
    ```
    npm install
    
    ```
    


### **Configuration**

1. Obtain an API key from Moralis (**https://moralis.io/**).
2. Create a **`.env`** file in the frontend directory.
3. Add the following environment variables to the **`.env`** file:
    
    ```
    MORALIS_KEY = "your_moralis_api_key"
    
    ```

### **Usage**

1. Start the backend server:
    
    ```
    node index.js
    
    ```
    
    The server will start running on the specified port (usually **`http://localhost:3002`**).
    

## **Frontend (dex)**

The **`dex`** directory contains the frontend code for the DecentralizedExchanges project.

### **Features**

- Connects to MetaMask using the Wagmi library, enabling users to interact with their Ethereum accounts securely.
- Utilizes the Moralis API to fetch token prices and display real-time information to users.
- Makes API calls using the Axios library to retrieve data from external sources.
- Implements the 1inch aggregator to execute the actual token swaps efficiently.
- Built with React, a popular JavaScript library for building user interfaces.

### **Prerequisites**

Before running the frontend locally, make sure you have the following prerequisites installed:

- Node.js (v16.0.0 or higher)
- npm (v6.0.0 or higher)
- MetaMask extension for your browser

### **Installation**

1. Navigate to the frontend directory:
    
    ```
    cd dex
    
    ```
    
2. Install the dependencies:
    
    ```
    npm install
    
    ```
    

### **Usage**

1. Start the frontend development server:
    
    ```
    npm start
    
    ```
    
2. Open your browser and navigate to **`http://localhost:3000`** to access the Simple DexSite frontend.
3. Connect your MetaMask wallet to the application by clicking on the Connect button and approving the connection in the MetaMask popup.
4. Choose the tokens you want to swap, enter the desired amounts, and click on the Swap button.
5. Confirm the transaction in MetaMask to complete the token swap.



## **Contributing**

Contributions to the Simple DexSite project are welcome and encouraged! If you encounter any issues or have suggestions for improvements, please open an issue on the project's GitHub repository.

## **License**

This project is Unlicensed. Feel free to modify and distribute this project as per the terms of the license.

## **Acknowledgments**

- The Wagmi library for simplifying the integration with MetaMask.
- The Moralis API for providing token price data and real-time information.
- The Axios library for making API calls.
- The 1inch aggregator for efficient token swaps.
- The React community for building a powerful and flexible user interface library.