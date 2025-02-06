// document.querySelector(".box")
// <div class=​"box">​Hey, I am a box​</div>​
// document.querySelector(".box").innerHTML
// 'Hey, I am a box'
// document.querySelector(".container").innerHTML
// '\n        <div class="box">Hey, I am a box</div>\n    '
// document.querySelector(".box").innerText
// 'Hey, I am a box'
// document.querySelector(".container").innerText
// 'Hey, I am a box'

// document.querySelector(".container").innerText
// 'Hey, I am a box\nHey, I am a box'
// document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">Hey, I am a box</div>\n        <div class="box">Hey, I am a box</div>\n    </div>'
// document.querySelector(".container").tagName
// 'DIV'
// document.querySelector(".container").nodeName
// 'DIV'
// document.querySelector(".container").textContent
// '\n        Hey, I am a box\n        Hey, I am a box\n    '
// document.querySelector(".container").hidden
// false
// document.querySelector(".container").hidden = true
// true
// document.querySelector(".container").hidden //adds hidden attribute to the element
// true

// document.querySelector(".box").innerHTML
// 'Hey, I am a box'
// document.querySelector(".box").innerHTML = "Aditya"
// 'Aditya'
// document.querySelector(".box").hasAttribute("style")
// false

// document.querySelector(".box").hasAttribute("style")
// true
// document.querySelector(".box").getAttribute("style")
// 'display: flex;'
// document.querySelector(".box").setAttribute("style", "display: inline")
// undefined
// document.querySelector(".box").getAttribute("style")
// 'display: inline'
// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
// document.querySelector(".box").removeAttribute("style")
// undefined
// document.querySelector(".box").hasAttribute("style")
// false

// document.designMode = "off"
// 'off'

// accessing custom attributes
// document.querySelector(".box").dataset
// DOMStringMap {createdby: 'Aditya', conceptby: 'Gupta ji'}

// node removal
// document.querySelector(".box").remove()

// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']
// document.querySelector(".container").className
// 'container red bg-green'
// document.querySelector(".container").classList.add("adi");
// undefined
// document.querySelector(".container").classList.remove("adi");
// undefined
// document.querySelector(".container").classList.remove("red");
// undefined
// document.querySelector(".container").classList.toggle("red"); //add or removes the class red (toggles..)
// true