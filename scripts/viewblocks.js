const { ethers, upgrades, providers } = require("hardhat");

async function main() {
  // 取得 Hardhat 提供的區塊提供者
  const provider = ethers.provider;

  // 取得最新的區塊號碼
  const latestBlockNumber = await provider.getBlockNumber();

  // 迴圈取得每個區塊的資訊並顯示
  for (let i = 0; i <= latestBlockNumber; i++) {
    const block = await provider.getBlock(i);
    console.log(`區塊 ${block.number}:`);
    console.log(`時間戳記: ${new Date(block.timestamp * 1000).toLocaleString()}`);
    console.log(`哈希值: ${block.hash}`);
    console.log(`上一個區塊的哈希值: ${block.parentHash}`);
    console.log(`交易數量: ${block.transactions.length}`);
    console.log(`總難度: ${block.difficulty}`);
    console.log(`礦工: ${block.miner}`);
    console.log("--------------------------------------------");
  }
}

// 執行程式碼
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
