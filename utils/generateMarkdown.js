// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
      return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)`;
  } 
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){

  } 
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){

  } 
  else {
    return "";
  }
}

function createDescription(title, description, link) {
    if(link) {
       return `${description}
       View the deployed page at [${title}](${link}).`;
    }
    else {
        return `${description}`;
    }
}


function createTableOfContents(content) {
    let contentsList ='';
    content.forEach((item) =>{
        if(item.content && item.header === 'Screenshots') {
          contentsList += ` * [${item.header}](#${(item.header).toLowerCase()})`;
        }
        else if (item.content) {
          contentsList +=`* [${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})`;
        }
    });
    return contentsList;
};

function createInstallation(install) {
    if(install) {
        return `To use this application , please install:
        \`\`\`
        ${install}
        \`\`\``
    }else{
      return '';
    }
}

function createScreenshots(screenshotItems) {
    let allScreenshots ='';
    if(screenshotItems) {
      screenshotItems.forEach(shot => {
        allScreenshots +=`![${shot.screenshotAlt}](${shot.screenshotLink})
        ${shot.screenshotDesc}`;
      });
        return `${allScreenshots}`;
    }
    else {
      return '';
    }
}

function createBuiltWith(builtWith) {
    let allTechnologies ='';

    if(builtWith){
        builtWith.forEach(item => {
            allTechnologies+=`
            * ${item}`
        });
        return `${allTechnologies}`;
     }
     else {
       return '';
     }
}

function  createUsage(usage,screenshots) {
  return `${usage} ${createScreenshots(screenshots)}`
};

function createLicense(license) {
    if(license) {
      return `This application is licensed under the ${license} license.`;
    }
    else {
      return '';
    }
}

function createTest(test) {
  if(test) {
    return `To run tests on the application, install
    \`\`\`
    ${test}
    \`\`\`
    and run \` npm run test \` from the command line.`
  }
  else {
    return '';
  };
};

function createQuestions(email, github, repo) {
  if(email) {
    return `If you have any questions about the repo, please [open an isuue] (https://hithub.com/${github}/${repo}/issues) or contact me via email at ${email}. You can find more of my work on my Github,[${github}](https://github.com/${github}/).`
  }
  else{
    return '';
  }
}

function createCredits(creditItem) {
  let allCredits ='';
  if(creditItem) {
    creditItem.forEach((credit)=>{
      allCredits +=`* [${credit.creditName}](${credit.creditLink})`;
    });
    return allCredits;
  }
  else {
    return '';
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, github, repo, license} =data;
  let readmeContents = '';
  const sectionArr = [
    {
        header: 'Installation',
        content: createInstallation(data.installation)
    },
    {
      header: 'Usage',
      content: createUsage(data.usage)
    },
    {
      header: 'Screenshots',
      content: createScreenshots(data.screenshots)
    },
    {
      header: 'Built With',
      content: createBuiltWith(data['built With'])
    },
    {
      header :'License',
      content:createLicense(license)
    },
    {
      header:'Contributing',
      content: data.contributing
    },
    {
      header:'Tests',
      content: createTest(data.tests)
    },
    {
      header: 'Questions',
      content: createQuestions(data.questions, github, repo)
    },
    {
      header : 'Credits',
      content: createCredits(data.credits)
    }
    
  ];

  sectionArr.forEach((sectionItem)=> {
    if(sectionItem.content && sectionItem.header === 'Screenshots') {
        readmeContents +=`### ${sectionItem.header}
        ${sectionItem.content}`;
    }
    else if(sectionItem.content) {
        readmeContents +=`## ${sectionItem.header}
        ${sectionItem.content}`;
    }

  });


  return `# ${title}
  [![Issues](https://img.shields.io/github/issues/${github}/${
    repo
  })](https://github.com/${github}/${
    repo
  }/issues) [![Issues](https://img.shields.io/github/contributors/${
    github
  }/${repo})](https://github.com/${github.com}/${github}/${
    repo
  }/graphs/contributors) ${renderLicenseBadge(license)}
  ## Description
  ${createDescription(title, data.description, data.link)}
  ## Contents
  ${createTableOfContents(sectionArr)}
  ${readmeContents}`;
}

module.exports = generateMarkdown;
