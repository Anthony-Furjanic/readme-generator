// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.websiteTitle}
##description
<br/>
${data.description}
<br/>
##installation
<br/>
${data.installation}
<br/>
##usage
<br/>
${data.usage}
<br/>
##credits
<br/>
${data.credits}
<br/>
##features
<br/>
${data.features}
<br/>
##license
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
`;
}

module.exports = generateMarkdown;
