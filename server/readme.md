npm install json-server@0 
then add db.json 
then add  "json:server": "json-server --watch db.json" inside packege.json 
nvm use 14.0.0
npm install -g yarn
nvm use 12.0.1
npm install -g yarn
nvm list 
nvm setup install by going to this website -
-->https://github.com/coreybutler/nvm-windows/releases
this repository is basic use of graphql with react and in this also added server of graphql 

don't uncomment companytype as if you uncomment it will stop working 



query{
  
  getAllUsers(id:1){
    id,firstName
  }
}
mutation{
  
  
  createUser(firstName:"abhishek",lastName:"khadekar",email:"abhishek@fgmail.com",password:"fsdaf") {
    id
    firstName
  }
}
