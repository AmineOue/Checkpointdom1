const container = document.getElementById("container");
const boxes = document.getElementsByClassName("box");
const totalPrice = document.getElementById("totale-price");

let total = 0;

for(let i = 0; i<boxes.length;i++){
    const box = boxes[i]
    const plus= box.getElementsByClassName("plus")[0];
    const minus= box.getElementsByClassName("minus")[0];
    const quantity = box.getElementsByTagName("input")[0];
    const deleteBtn = box.getElementsByClassName("delete")[0];
    const myHeart = box.getElementsByClassName("heart")
    console.log(myHeart[0])
    const price = parseInt(box.getElementsByClassName("price")[0].innerText.substring(1))
    

    plus.addEventListener("click", ()=>{
        quantity.value++
        total += price
        totalPrice.innerText = `Total Price $${total}`
    })
    minus.addEventListener("click", ()=>{
        if(quantity.value>1){}
        quantity.value--
        total -= price
        totalPrice.innerText = `Total Price $${total}`
    })
    deleteBtn.addEventListener("click", ()=>{
        box.remove();
        total -=price * quantity.value;
        totalPrice.innerText = `Total Price $${total}`

    })
    myHeart[0].addEventListener("click", () => {
        if (myHeart[0].style.backgroundColor == "red"){myHeart[0].style.backgroundColor = "grey"}
        else {myHeart[0].style.backgroundColor = "red"}
    })
}