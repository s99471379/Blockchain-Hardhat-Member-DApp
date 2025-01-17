// SPDX-License-Identifier: MIT
// 指定Solidity版本，使用語義化版本號
// 了解更多：https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity >=0.8.20;

contract MembershipSystem {
    struct Member {
        string name;    // 成員名稱
        uint age;       // 成員年齡
        string email;   // 成員電子郵件
    }

    mapping(address => Member) private members;    // 使用映射來存儲成員資訊，以地址為索引

    event MemberAdded(address indexed memberAddress, string name, uint age, string email);   // 成員添加事件
    event MemberUpdated(address indexed memberAddress, string name, uint age, string email); // 成員更新事件

    // 添加成員函數
    function addMember(string memory name, uint age, string memory email) public {
        members[msg.sender] = Member(name, age, email);   // 使用發送交易的地址作為成員索引，將成員資訊存入映射
        emit MemberAdded(msg.sender, name, age, email);    // 觸發成員添加事件
    }

    // 更新成員函數
    function updateMember(string memory name, uint age, string memory email) public {
        require(isMember(msg.sender), "Member not found"); // 檢查成員是否存在
        members[msg.sender] = Member(name, age, email);   // 更新成員資訊
        emit MemberUpdated(msg.sender, name, age, email);  // 觸發成員更新事件
    }

    // 獲取成員函數
    function getMember(address memberAddress) public view returns (string memory name, uint age, string memory email) {
        require(isMember(memberAddress), "Member not found");   // 檢查成員是否存在
        Member storage member = members[memberAddress];   // 使用傳入的地址作為成員索引，獲取成員資訊
        return (member.name, member.age, member.email);    // 返回成員資訊
    }

    // 檢查成員是否存在的函數
    function isMember(address memberAddress) public view returns (bool) {
        return members[memberAddress].age != 0;   // 檢查成員的年齡是否為0，若不為0表示成員存在
    }

    fallback() external {
        // 处理未知的函数调用
    }

    receive() external payable {
        // 处理接收以太币的操作
    }
}
