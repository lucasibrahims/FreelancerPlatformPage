//DADOS
const web3 = new Web3(ethereum);
const freelancePlatformABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "freela",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "freelancerId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "skills",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "experience",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "portfolio",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "rating",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "rateCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "freelancerCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "freelancers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "freelancerId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "skills",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "experience",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "portfolio",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "rating",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "rateCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "jobCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "jobs",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "jobId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "jobTitle",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "jobDescription",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "jobBudget",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "client",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "freelancer",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "jobCompleted",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "jobApproved",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_budget",
          "type": "uint256"
        }
      ],
      "name": "postJob",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_jobId",
          "type": "uint256"
        }
      ],
      "name": "applyForJob",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_jobId",
          "type": "uint256"
        }
      ],
      "name": "completeJob",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_jobId",
          "type": "uint256"
        }
      ],
      "name": "approveJob",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_skills",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_experience",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_portfolio",
          "type": "string"
        }
      ],
      "name": "addFreelancer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_freelancer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_rating",
          "type": "uint256"
        }
      ],
      "name": "rateFreelancer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
const freelancePlatformAddress = "0x06aaF62e22528e498385fEB0479788Bbe5f0aeb0";
const instance = new web3.eth.Contract(freelancePlatformABI, freelancePlatformAddress)

//ELEMENTS HTML
const connectWalletBtn = document.getElementById("connectWalletBtn")

//ADD FREELANCER ELEMENTS
const freelancerNameInput = document.getElementById("freelancer-name-input")
const freelancerSkillsInput = document.getElementById("freelancer-skills-input")
const freelancerExperienceInput = document.getElementById("freelancer-experience-input")
const freelancerPortfolioInput = document.getElementById("freelancer-portfolio-input")
const addFreelancerBtn = document.getElementById("add-freelancer-btn")

//POST JOB ELEMENTS
const jobTitleInput = document.getElementById("job-title-input")
const jobDescriptionInput = document.getElementById("job-description-input")
const jobBudgetInput = document.getElementById("job-budget-input")
const postJobBtn = document.getElementById("post-job-btn")

//RATE FREELANCER ELEMENTS
const addressRateInput = document.getElementById("address-rate")
const availableFreelancerZone = document.getElementById("available-freelancers")

//JOBS ZONES ELEMENTS
const availableZone = document.getElementById("available-jobs");
const pendentZone = document.getElementById("pendent-jobs");
const completedZone = document.getElementById("completed-jobs");


//ASYNC FUNCTIONS
async function connectWallet() {
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            return accounts[0]
        } catch (error) {
            console.log(error);
        }
    } else {
        alert("Please Install Metamask!")
    }
}

async function postJob(_title, _description, _budget){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let call = await instance.methods.postJob(_title, _description, (_budget)).send({ from: accounts[0], value: _budget * 10 ** 18})
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}

async function addFreelancer(_name, _skills, _experience, _portfolio){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let call = await instance.methods.addFreelancer(_name, _skills, _experience, _portfolio).send({ from: accounts[0] })
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}

async function rateFreelancer(_address, _rating){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            getFreelancer(_address).then(async (res) => {
                let freelanceRating = Number(res.rating);
                let freelanceCountRate = Number(res.rateCount) + 1;
                let rate = (freelanceRating + _rating)/freelanceCountRate;
                rate = Math.round(rate)
                let call = await instance.methods.rateFreelancer(_address, Math.round(Number(rate))).send({ from: accounts[0] })
                return call;
            });
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}

async function getJobs(){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let numberOfJobs = await instance.methods.jobCounter().call({ from: accounts[0] })
            let jobs = [];
            for(let i = 1; i<=numberOfJobs; i++)
            {
                let call = await instance.methods.jobs(i).call({ from: accounts[0] })
                jobs.push(call);
            }
            return jobs;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}

async function applyForJob(_id){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let call = await instance.methods.applyForJob(_id).send({ from: accounts[0] })
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}
async function completeJob(_id){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let call = await instance.methods.completeJob(_id).send({ from: accounts[0] })
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}

async function approveJob(_id){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let call = await instance.methods.approveJob(_id).send({ from: accounts[0] })
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}


async function getFreelancer(_address)
{
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let call = await instance.methods.freelancers(_address).call({ from: accounts[0] })
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}

async function getAllFreelancer()
{
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let numberOfFreelancers = await instance.methods.freelancerCounter().call({ from: accounts[0] })
            let freelancers = [];
            for(let i=0; i<numberOfFreelancers; i++){
            let call = await instance.methods.freela(i).call({ from: accounts[0] })
            freelancers.push(call);
            }
            return freelancers;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}



//FUNCTIONS
connectWalletBtn.addEventListener("click", () => {
    connectWallet().then((res) => {
        connectWalletBtn.innerHTML = res.slice(0, 7) + "..." + res.slice(35, -1);
        alert("conected");
    }).catch((err) => {
        alert(err);
    })
});

postJobBtn.addEventListener("click", () => {
    postJob(jobTitleInput.value, jobDescriptionInput.value, Number(jobBudgetInput.value)).then((res) => {
        alert("Posted!");
    }).catch((err) => {
        alert(err);
    })
});

addFreelancerBtn.addEventListener("click", () => {
    addFreelancer(freelancerNameInput.value, freelancerSkillsInput.value, freelancerExperienceInput.value, freelancerPortfolioInput.value).then((res) => {
        alert("Added!");
    }).catch((err) => {
        alert(err);
    })
});


const rating = document.querySelectorAll('.rating input');
for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener('change', function() {
    if(addressRateInput.value == "")
    {
        alert("Enter the Address!")
    }
    else
    {rateFreelancer(addressRateInput.value, Number(this.value)).then((res) => {
        console.log(this.value); 
    }).catch((err) => {
        alert(err);
    })}
    alert("Rated!");
  });
}


getJobs().then((res) => {
    if(res!=undefined){
    if(res.length>0)
    {
        let jobsElement = [];
        for(let i=0; i<res.length; i++)
        {
            jobsElement[i] = document.createElement("div")
            jobsElement[i].className = "job"
            let jobTitle = document.createElement("h2")
            jobTitle.className = "job-title"
            jobTitle.innerHTML = res[i].jobTitle;
            jobsElement[i].appendChild(jobTitle);
            let descriptionTitle = document.createElement("p");
            descriptionTitle.className = "job-information-title";
            descriptionTitle.innerHTML = "Description";
            jobsElement[i].appendChild(descriptionTitle);
            let description = document.createElement("p");
            description.className = "job-information";
            description.innerHTML = res[i].jobDescription;
            jobsElement[i].appendChild(description);
            let clientTitle = document.createElement("p");
            clientTitle.className = "job-information-title";
            clientTitle.innerHTML = "Client";
            jobsElement[i].appendChild(clientTitle);
            let client = document.createElement("p");
            client.className = "job-information";
            client.innerHTML = res[i].client; 
            jobsElement[i].appendChild(client);


            if(res[i].jobCompleted && !res[i].jobApproved)
            {
                getFreelancer(res[i].freelancer).then((resposta) => {
                    console.log(res[i].freelancer)
                    let freelancerTitle = document.createElement("p");
                    freelancerTitle.className = "job-information-title";
                    freelancerTitle.innerHTML = "Freelancer";
                    jobsElement[i].appendChild(freelancerTitle);
                    let freelancer = document.createElement("p");
                    freelancer.className = "job-information";
                    freelancer.innerHTML = resposta.name; 
                    jobsElement[i].appendChild(freelancer);
                    let acceptBtn = document.createElement("button");
                    acceptBtn.className = "accept-job-button"
                    acceptBtn.innerHTML = "Approved"
                    jobsElement[i].appendChild(acceptBtn);
                    completedZone.appendChild(jobsElement[i]);
                    acceptBtn.addEventListener("click", () => {
                        approveJob(i+1).then((res) => {
                            alert("Approved!");
                        }).catch((err) => {
                            alert(err);
                        })
                    })
                })


            }
            else if(res[i].freelancer != "0x0000000000000000000000000000000000000000" && !res[i].jobApproved)
            {
                let acceptBtn = document.createElement("button");
                acceptBtn.className = "accept-job-button"
                acceptBtn.innerHTML = "Completed"
                jobsElement[i].appendChild(acceptBtn);
                pendentZone.appendChild(jobsElement[i]);
                acceptBtn.addEventListener("click", () => {
                    completeJob(i+1).then((res) => {
                        alert("Completed!");
                    }).catch((err) => {
                        alert(err);
                    })
                })
            }
            else if(!res[i].jobApproved){
                let budgetTitle = document.createElement("p");
                budgetTitle.className = "job-information-title";
                budgetTitle.innerHTML = "Budget";
                jobsElement[i].appendChild(budgetTitle);
                let budget = document.createElement("p");
                budget.className = "job-information";
                budget.innerHTML = `${res[i].jobBudget} ETH`; 
                jobsElement[i].appendChild(budget);
                let acceptBtn = document.createElement("button");
                acceptBtn.className = "accept-job-button"
                acceptBtn.innerHTML = "Accept"
                jobsElement[i].appendChild(acceptBtn);
                availableZone.appendChild(jobsElement[i]);
                acceptBtn.addEventListener("click", () => {
                    applyForJob(i+1).then((res) => {
                        alert("Accepted!");
                    }).catch((err) => {
                        alert(err);
                    })
                })
            }
        }
    }};

    getAllFreelancer().then((res) => {
        if(res!=undefined){
            if(res.length>0)
            {
                let freelancerElement = [];
                for(let i=0; i<res.length; i++)
                {
                    freelancerElement[i] = document.createElement("div")
                    freelancerElement[i].className = "freelancer"
                    let freelancerName = document.createElement("h2")
                    freelancerName.className = "job-title"
                    freelancerName.innerHTML = res[i].name;
                    freelancerElement[i].appendChild(freelancerName);
                    let skillsTitle = document.createElement("p");
                    skillsTitle.className = "job-information-title";
                    skillsTitle.innerHTML = "Skills";
                    freelancerElement[i].appendChild(skillsTitle);
                    let skills = document.createElement("p");
                    skills.className = "job-information";
                    skills.innerHTML = res[i].skills;
                    freelancerElement[i].appendChild(skills);
                    let experienceTitle = document.createElement("p");
                    experienceTitle.className = "job-information-title";
                    experienceTitle.innerHTML = "Experience";
                    freelancerElement[i].appendChild(experienceTitle);
                    let experience = document.createElement("p");
                    experience.className = "job-information";
                    experience.innerHTML = res[i].experience;
                    freelancerElement[i].appendChild(experience);
                    let portfolioTitle = document.createElement("p");
                    portfolioTitle.className = "job-information-title";
                    portfolioTitle.innerHTML = "Portfolio";
                    freelancerElement[i].appendChild(portfolioTitle);
                    let portfolio = document.createElement("p");
                    portfolio.className = "job-information";
                    portfolio.innerHTML = res[i].portfolio;
                    freelancerElement[i].appendChild(portfolio);
                    let ratingTitle = document.createElement("p");
                    ratingTitle.className = "job-information-title";
                    ratingTitle.innerHTML = "Rating";
                    freelancerElement[i].appendChild(ratingTitle);
                    let rating = document.createElement("p");
                    rating.className = "job-information";
                    rating.innerHTML = res[i].rating;
                    freelancerElement[i].appendChild(rating);
                    availableFreelancerZone.appendChild(freelancerElement[i]);
                }
            }
        }
    })
});

getFreelancer("0x44b28AC5aba0d1fD62CdAf46B699F4270d3C8996").then((res) => 
console.log(res))