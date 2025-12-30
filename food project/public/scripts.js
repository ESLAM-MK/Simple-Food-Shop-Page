const myMenu =document.querySelector('#button')
const myList =document.querySelector('#list')
myMenu.addEventListener('click',()=>{
    if(myList.classList.contains('hidden')){
        myList.classList.remove('hidden')
    }else{
                myList.classList.add('hidden')

    }
})
const show =document.querySelector('#show')
const card =document.querySelector('#cards')
show.addEventListener("click",()=>{
        if(card.classList.contains('hidden')||card.classList.contains('lg:hidden'))
        {
            card.classList.remove('hidden')
                card.classList.remove('lg:hidden')

            show.innerHTML = "remove cards";
        }
        else{
            card.classList.add('hidden')
             card.classList.add('lg:hidden')

            show.innerHTML = "show cards";
            
        }
})