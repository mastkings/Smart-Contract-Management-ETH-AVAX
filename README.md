# Building on Avalanche - Smart Contract Management - ETH + AVAX

# Description:
This is the second project in AVAX-Intermediate, in this project I am tasked to create a simple contract with 2-3 functions. Then show the values of those functions in frontend of the application.

# Requirements:
1. MetaMask extension installed in your web browser.

#Getting Started:

1. Clone the Repository:
   Download the entire repository from GitHub to access all the project contents.

2. Install Dependencies:
   In the project directory, open your terminal or command prompt and run the following command to install the required dependencies using npm:

   ```
   yarn install
   ```

3. Start Local Hardhat Node:
   After installing the dependencies, run the following command to start the local Hardhat node:

   ```
   npx hardhat node
   ```

4. Deploy the Contract:
   Open a second terminal and deploy the contract on the local Hardhat node using the following command:

   ```
   npx hardhat run scripts/deploy.js --network localhost

   # or

   npx hardhat run scripts/deploy.js --network fuji
   ```

5. Configure MetaMask:
   - Add Hardhat Network: In MetaMask, add a new network with the following settings:
     - Network Name: Hardhat
     - New RPC URL: http://localhost:8545
     - Chain ID: 1337

   - Import Account: In the first terminal where the Hardhat node is running, copy any of the private keys (preferably the first one) and import it into MetaMask.

6. Start the Frontend:
   In the second terminal, run the following command to start the application frontend in development mode:

   ```
   npm run dev
   # or
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

7. Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

8. Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


- Get Help: To get help or view available Hardhat commands, run:

  ```
  npx hardhat help
  ```

- Test the Contract: To run tests for the smart contract, use the following command:

  ```
  npx hardhat test
  ```

# Author:
[[Kings](https://github.com/mastkings)] 

# License
This project is licensed under the MIT License.














