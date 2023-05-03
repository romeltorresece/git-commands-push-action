const WorkingDirectory = require("./models/working-directory");
const GitCommand = require("./models/git-command");

//Initialize variables
let wd = new WorkingDirectory();
wd.addFile("index.html", "views", "<html>Hello</html>");
wd.addFile("index.js", "assets/scripts", "alert('Hi!')");

let git = new GitCommand(wd);


//1. Initialize git workspace
git.init();

//2. Check status
console.log("\n" + git.status());

//3. Add as index
git.add("views/index.html");

//4. Check status
console.log("\n" + git.status());

//5. Commit
console.log("\n" + git.commit("Added index.html file"));

//6. Push
console.log("\n" + git.push());
