# **DecentralizedExchanges Frontend**

The frontend of Simple DexSite is a decentralized exchange (DEX) web application built with React. It provides a user-friendly interface for swapping tokens on the Ethereum blockchain. The frontend utilizes the Ant Design library for styling, which offers a wide range of pre-designed components and styles.

## **Features**

- Connects to MetaMask using the Wagmi library, enabling users to interact with their Ethereum accounts securely.
- Utilizes the Moralis API to fetch token prices and display real-time information to users.
- Makes API calls using the Axios library to retrieve data from external sources.
- Implements the 1inch aggregator to execute the actual token swaps efficiently.
- Styled using Ant Design, a popular React UI library with a rich set of pre-designed components and styles.

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