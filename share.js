let whatsappBtn=document.querySelector('.whatsappBtn');

whatsappBtn.addEventListener('click',()=>{
    let postUrl=encodeURI(document.getElementById('memeScroll').src);
let postTitle=encodeURI("Hey check out this funny meme: ")
    whatsappBtn.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle} ${postUrl}`
      );
   
})