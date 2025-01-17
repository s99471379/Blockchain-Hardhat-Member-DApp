# Web3 Member Management

This project is a decentralized application (DApp) built using Hardhat and Web3.js. It provides functionality to add and manage members on the Ethereum blockchain, leveraging smart contracts for secure and transparent operations.

---

## Features

- **Add Members**: Allows adding members with attributes like name, age, and email to the blockchain.
- **Blockchain Integration**: Utilizes Ethereum blockchain for transparent and immutable member management.
- **Web3.js**: Enables interaction between the web application and the blockchain.
- **MetaMask Support**: Seamlessly integrates with MetaMask for transaction signing.
- **Hardhat Development**: Supports smart contract deployment and testing.

---

## Technology Stack

- **Framework**: Hardhat
- **Programming Language**: JavaScript, Solidity
- **Blockchain**: Ethereum
- **Web Interface**: HTML, JavaScript (with Web3.js)
- **Dependencies**: [View package.json](./package.json)

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/s99471379/Web3-Member-Management.git
   cd Web3-Member-Management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the project root directory with the following:
     ```env
     API_URL=<Your-Ethereum-Node-URL>
     PRIVATE_KEY=<Your-Private-Key>
     ```

4. Compile the smart contract:

   ```bash
   npx hardhat compile
   ```

5. Deploy the smart contract:

   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

---

## Usage

1. **Web Interface**:
   - Open `add.html` in a browser.
   - Enter member details (name, age, email) and submit to add a new member.

2. **Blockchain Interaction**:
   - Use `addmember.js` to interact with the blockchain programmatically.
   - View blockchain details like blocks and transactions using `viewblocks.js`.

---

## Example Workflow

- Deploy the smart contract using Hardhat.
- Open the web interface or use Web3.js scripts to interact with the deployed contract.
- Members added via the web or script are securely stored on the blockchain.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

This project uses Hardhat for smart contract development and Web3.js for blockchain interactions, demonstrating the potential of decentralized applications in member management.
