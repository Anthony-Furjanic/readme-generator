// TODO: Include packages needed for this application
const fs=require("fs")
const util= require("util")
const inquirer= require("inquirer")
const generateMarkdown=require("../develop/utils/generateMarkdown")
const writeFileAsync= util.promisify(fs.writeFile)
function askUser(){
    return inquirer.prompt([{
        type:"input",
        name:"websiteTitle",
        message:"what is the website title?",
    },
    {
        type:"input",
        name:"description",
        message:"make a brief description of your website",
    },
    {
        type:"input",
        name:"installation",
        message:"what are the requirements and/or steps to install your application?",
    },
    {
        type:"list",
        name:"license",
        message:"Which type of license are you using for this site?",
        choices: ["Apache","Academic","MIT","Open"]
    },





])
}




// TODO: Create a function to initialize app
async function init() {
try {
    const answers= await askUser()
    const makeContent= generateMarkdown(answers)
    await writeFileAsync("./res/README.md",makeContent)
    console.log("success")
} catch(err){
    console.log(err)
}
}

// Function call to initialize app
init();
