const startsE1 = document.querySelectorAll(".fa-star")
const emojisE1 = document.querySelectorAll(".fa-regular")
const colorsArry = ["red","orange","yellow","lightgreen","green"]

updateRating(0);

startsE1.forEach((startsE1,index)=>{
    startsE1.addEventListener("click",  () => {
        updateRating(index)

    }
        );
});

function updateRating(index){
    startsE1.forEach((startsE1, idx)=>{
        if(idx < index+1){
            startsE1.classList.add("active")
        }else{
            startsE1.classList.remove("active")
        }
    });

    emojisE1.forEach(emojiE1=>{
        emojiE1.style.transform=`translateX(-${index * 50}px)`;
        emojiE1.style.color = colorsArry[index]
    })
 
} 
