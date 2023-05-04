// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
contract userDB {

    struct userInfo{
        
        string email;
        string password;
    }

    mapping(string => userInfo) public membership;
    //mapping (uint256 => mapping(string => bytes32)) public id_vs_hash;

    function saveUser(
    
    string memory user_email, 
    string memory password) external {
        require(bytes(membership[user_email].email).length == 0, "account already exits with this email!");
        if(bytes(membership[user_email].email).length == 0){
        
        membership[user_email].email = user_email;
        membership[user_email].password = password;
        }

    }


    function updateUser(string memory user_email, uint256 option, string memory data) external {
        if (option == 0) {
            membership[user_email].email = data;
        }
        else if (option == 1) {
            membership[user_email].password = data;
        }
       

    }

     function removeUser( string memory user_email) external {
            delete membership[user_email];
    }
    function getUser(string memory email)public view returns (userInfo memory){

        return membership[email];
    }
}
