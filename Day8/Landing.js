console.log(document.getElementById("words").style.display);

document.getElementById("post").onclick =function(){
    let Post = document.getElementsByClassName("Post");
    for(let i = 0;i < Post.length;i++){
        Post[i].style.display ="flex";
    }
    let Aboutp = document.getElementsByClassName("About-page");
    for(let i = 0;i < Aboutp.length;i++){
        Aboutp[i].style.display ="none";
    }
    let About = document.getElementsByClassName("About");
    for(let i = 0;i < About.length;i++){
        About[i].style.display ="none";
    }
    let Contact = document.getElementsByClassName("Contact");
    for(let i = 0;i < Contact.length;i++){
        Contact[i].style.display ="none";
    }
    document.getElementById("post").style.color = "rgb(137, 248, 137)";
    document.getElementById("about").style.color = "rgb(203, 219, 203)";
    document.getElementById("contact").style.color = "rgb(203, 219, 203)";
}
document.getElementById("about").onclick =function(){
    let Post = document.getElementsByClassName("Post");
    for(let i = 0;i < Post.length;i++){
        Post[i].style.display ="none";
    }
    let Aboutp = document.getElementsByClassName("About-page");
    for(let i = 0;i < Aboutp.length;i++){
        Aboutp[i].style.display ="block";
    }
    let About = document.getElementsByClassName("About");
    for(let i = 0;i < About.length;i++){
        About[i].style.display ="flex";
    }
    let Contact = document.getElementsByClassName("Contact");
    for(let i = 0;i < Contact.length;i++){
        Contact[i].style.display ="none";
    }
    document.getElementById("post").style.color = "rgb(203, 219, 203)";
    document.getElementById("about").style.color = "rgb(137, 248, 137)";
    document.getElementById("contact").style.color = "rgb(203, 219, 203)";
}
document.getElementById("contact").onclick =function(){
    let Post = document.getElementsByClassName("Post");
    for(let i = 0;i < Post.length;i++){
        Post[i].style.display ="none";
    }
    let Aboutp = document.getElementsByClassName("About-page");
    for(let i = 0;i < Aboutp.length;i++){
        Aboutp[i].style.display ="none";
    }
    let About = document.getElementsByClassName("About");
    for(let i = 0;i < About.length;i++){
        About[i].style.display ="none";
    }
    let Contact = document.getElementsByClassName("Contact");
    for(let i = 0;i < Contact.length;i++){
        Contact[i].style.display ="flex";
    }
    document.getElementById("post").style.color = "rgb(203, 219, 203)";
    document.getElementById("about").style.color = "rgb(203, 219, 203)";
    document.getElementById("contact").style.color = "rgb(137, 248, 137)";
}
document.getElementById("span-holder").onclick = function(){
    document.getElementById("words").classList.toggle("show");
    
}

document.getElementById("sub-post").onclick = function(){
    document.getElementById("main-div").style.display = "none";
    document.getElementById("sub-navbar").style.display = "flex";
    document.getElementById("posts-section").style.display = "flex";
    document.getElementById("blog-section").style.display = "none";
}

document.getElementById("view").onclick = function() {
    document.getElementById("main-div").style.display = "none";
    document.getElementById("sub-navbar").style.display = "flex";
    document.getElementById("posts-section").style.display = "flex";
    document.getElementById("blog-section").style.display = "none";
}

document.getElementById("sub-blog").onclick = function() {
    document.getElementById("main-div").style.display = "none";
    document.getElementById("sub-navbar").style.display = "flex";
    document.getElementById("posts-section").style.display = "none";
    document.getElementById("blog-section").style.display = "flex";
}

document.getElementById("blog-view").onclick = function() {
    document.getElementById("main-div").style.display = "none";
    document.getElementById("sub-navbar").style.display = "flex";
    document.getElementById("posts-section").style.display = "none";
    document.getElementById("blog-section").style.display = "flex";
}

document.getElementById("sub-About").onclick = function(){
    document.getElementById("main-div").style.display = "flex";
    document.getElementById("sub-navbar").style.display = "none";
    document.getElementById("posts-section").style.display = "none";
    document.getElementById("blog-section").style.display = "none";
}


