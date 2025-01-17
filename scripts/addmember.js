// 引入Web3.js庫
const Web3 = require('web3');

// 使用Web3提供的HTTP或WebSocket提供者建立Web3實例
const web3 = new Web3('https://127.0.0.1:8545');

// 您的合約地址
const contractAddress = 'contractAddress';

// 您的私鑰（用於簽署交易）
const privateKey = '0xprivateKey';

// 您要新增的成員資訊
const memberName = 'Name';
const memberAge = 22;
const memberEmail = 'Email';

// 建立合約實例
const contract = new web3.eth.Contract(ABI, contractAddress);

// 根據私鑰建立交易
const addMemberTransaction = contract.methods.addMember(memberName, memberAge, memberEmail);

// 估算交易成本
addMemberTransaction.estimateGas()
  .then(gas => {
    // 建立交易物件
    const transactionObject = {
      to: contractAddress,
      data: addMemberTransaction.encodeABI(),
      gas,
    };

    // 簽署交易
    web3.eth.accounts.signTransaction(transactionObject, privateKey)
      .then(signedTx => {
        // 發送簽署的交易
        web3.eth.sendSignedTransaction(signedTx.rawTransaction)
          .on('receipt', receipt => {
            // 成功接收到交易收據後，可確認交易已被記錄在區塊鏈上
            console.log('交易已成功：', receipt);
          })
          .catch(error => {
            console.error('發送交易時發生錯誤：', error);
          });
      })
      .catch(error => {
        console.error('簽署交易時發生錯誤：', error);
      });
  })
  .catch(error => {
    console.error('估算交易成本時發生錯誤：', error);
  });
