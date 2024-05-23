const fs = require(`fs`);
const path = require(`path`);

const filePath = path.join(__dirname, `./users.json`);

let users;
try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    users = JSON.parse(fileContent);
} catch (error) {
    users = []
}

let uniqueID = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;


function writeJson() {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}


module.exports = {users, uniqueID,writeJson};