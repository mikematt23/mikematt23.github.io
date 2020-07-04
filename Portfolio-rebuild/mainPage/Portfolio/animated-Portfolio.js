"use strict"

let htmlCSSButton = document.getElementById('showHtmlCSSProjects')
let javaScriptButton = document.getElementById('showJavaScriptProjects')
let javaScriptContainer = document.getElementById("javaScriptContainer")

let projectDiv1 = document.createElement("div")
let projectImg1 = document.createElement('img')
let projectLink1 = document.getElementById("a1")


// let projectDiv2 = document.createElement("div")
// let projectImg2 = document.createElement('img')
// let projectLink2 = document.createElement('a')

let projectDiv3 = document.createElement("div")
let projectImg3 = document.createElement('img')
let projectLink3 = document.getElementById("a3")

let projectDiv4 = document.createElement("div")
let projectImg4 = document.createElement('img')
let projectLink4 = document.getElementById("a4")

let projectDiv5 = document.createElement("div")
let projectImg5 = document.createElement('img')
let projectLink5 = document.getElementById("a2")



projectDiv1.classList.add("projectFlex")
projectImg1.classList.add('projectPic')

projectDiv3.classList.add("projectFlex")
projectImg3.classList.add('projectPic')
projectDiv4.classList.add("projectFlex")
projectImg4.classList.add('projectPic')
projectDiv5.classList.add("projectFlex")
projectImg5.classList.add('projectPic')




javaScriptButton.addEventListener('click',()=>{
  if(javaScriptContainer.childElementCount === 0){
    
    javaScriptContainer.style.overflow = "hidden auto"
  
  
    javaScriptContainer.style.height = '500px'

    projectImg1.src = ''
    projectDiv1.appendChild(projectImg1)
    projectDiv1.appendChild(projectLink1)
    projectLink1.innerHTML = "Charged"
    // projectImg2.src = 'HKS-2grsc0.jpg'
    // projectLink2.href = 'http://127.0.0.1:5501/Projects/javaScriptProjects/stressGame/stressGame.html'
    // projectDiv2.appendChild(projectImg2)
    // projectDiv2.appendChild(projectLink2)
    // projectLink2.innerHTML = "Stress Game"


    projectImg3.scr = ''
    projectDiv3.appendChild(projectImg3)
    projectDiv3.appendChild(projectLink3)
    projectLink3.innerHTML = "Pig Latin"

    projectImg4.src = ''
    projectDiv4.appendChild(projectImg4)
    projectDiv4.appendChild(projectLink4)
    projectLink4.innerHTML = "Tic-Tac-Toe"

    projectImg5.scr = ''
    projectDiv5.appendChild(projectImg5)
    projectDiv5.classList.add("projectFlex")
    projectImg5.classList.add('projectPic')
    projectDiv5.appendChild(projectLink5)
    projectLink5.innerHTML = "Moving Squares"
   
    javaScriptContainer.appendChild(projectDiv1)
    javaScriptContainer.appendChild(projectDiv3)
    javaScriptContainer.appendChild(projectDiv4)
    javaScriptContainer.appendChild(projectDiv5)

  }else if(javaScriptContainer.childElementCount > 0){
    projectDiv1.remove()
    projectDiv3.remove()
    projectDiv5.remove()
    projectDiv4.remove()
    javaScriptContainer.style.overflow = 'hidden'
  }
 
})