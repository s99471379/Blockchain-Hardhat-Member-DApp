async function main() {
  const MembershipSystem = await ethers.getContractFactory("MembershipSystem");
  const membership_system = await MembershipSystem.deploy();
  console.log("Contract Deployed to Address:", membership_system.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });