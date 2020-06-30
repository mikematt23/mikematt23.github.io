"use strict"

let htmlCSSButton = document.getElementById('showHtmlCSSProjects')
let javaScriptButton = document.getElementById('showJavaScriptProjects')
console.log(javaScriptButton)

let projectDiv1 = document.createElement("div")
let projectImg1 = document.createElement('img')
let projectLink1 = document.createElement('a')

let projectDiv2 = document.createElement("div")
let projectImg2 = document.createElement('img')
let projectLink2 = document.createElement('a')

let projectDiv3 = document.createElement("div")
let projectImg3 = document.createElement('img')
let projectLink3 = document.createElement('a')

let projectDiv4 = document.createElement("div")
let projectImg4 = document.createElement('img')
let projectLink4 = document.createElement('a')

let projectDiv5 = document.createElement("div")
let projectImg5 = document.createElement('img')
let projectLink5 = document.createElement('a')

let htmlCSSContainer = document.getElementById("htmlCSSContainer")
let javaScriptContainer = document.getElementById("javaScriptContainer")

projectDiv1.classList.add("projectFlex")
projectImg1.classList.add('projectPic')
projectDiv2.classList.add("projectFlex")
projectImg2.classList.add('projectPic')
projectDiv3.classList.add("projectFlex")
projectImg3.classList.add('projectPic')
projectDiv4.classList.add("projectFlex")
projectImg4.classList.add('projectPic')
projectDiv5.classList.add("projectFlex")
projectImg5.classList.add('projectPic')
// htmlCSSButton.addEventListener("click",()=>{



javaScriptButton.addEventListener('click',()=>{
  console.log(javaScriptContainer.childElementCount)
  if(javaScriptContainer.childElementCount === 0){
    
    javaScriptContainer.style.overflow = "hidden auto"
    //htmlCSSContainer.style.overflow ="hidden"
  
  
    javaScriptContainer.style.height = '500px'

    projectImg1.src = ''
    projectLink1.href = 'http://127.0.0.1:5501/Projects/Charged/Landing-page/Landing-page.html'
    projectDiv1.appendChild(projectImg1)
    projectDiv1.appendChild(projectLink1)
    projectLink1.innerHTML = "Charged"
   
    // projectImg2.src = 'HKS-2grsc0.jpg'
    // projectLink2.href = 'http://127.0.0.1:5501/Projects/javaScriptProjects/stressGame/stressGame.html'
    // projectDiv2.appendChild(projectImg2)
    // projectDiv2.appendChild(projectLink2)
    // projectLink2.innerHTML = "Stress Game"


    projectImg3.scr = ''
    projectLink3.href = 'http://127.0.0.1:5501/Projects/javaScriptProjects/pigLatin/pigLatin.html'
    projectDiv3.appendChild(projectImg3)
    projectDiv3.appendChild(projectLink3)
    projectLink3.innerHTML = "Pig Latin"

    projectImg4.src = ''
    projectLink4.href = 'http://127.0.0.1:5501/Projects/javaScriptProjects/ticTacToe/tic-tac-toe.html'
    projectDiv4.appendChild(projectImg2)
    projectDiv4.appendChild(projectLink4)
    projectLink4.innerHTML = "Tic-Tac-Toe"

    projectImg5.scr = ''
    projectLink5.href = 'http://127.0.0.1:5501/Projects/htmlProjects/movingSquares/movingSquare.html'
    projectDiv5.appendChild(projectImg5)
    projectDiv5.classList.add("projectFlex")
    projectImg5.classList.add('projectPic')
    projectDiv5.appendChild(projectLink5)
    projectLink5.innerHTML = "Moving Squares"
   
    javaScriptContainer.appendChild(projectDiv1)
    javaScriptContainer.appendChild(projectDiv2)
    javaScriptContainer.appendChild(projectDiv3)
    javaScriptContainer.appendChild(projectDiv4)
    javaScriptContainer.appendChild(projectDiv5)

  }else if(javaScriptContainer.childElementCount > 0){
    projectDiv1.remove()
    projectDiv3.remove()
    projectDiv5.remove()
    projectDiv2.remove()
    projectDiv4.remove()
    javaScriptContainer.style.overflow = 'hidden'
  }
 
})