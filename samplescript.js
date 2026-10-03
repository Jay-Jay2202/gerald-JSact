const buttonname = document.getElementById('changeName');
const buttonbg = document.getElementById('changeBackground');
const buttonhide = document.getElementById('toggleDetails');
const studentname = document.getElementById('studentName');
const container = document.getElementById('profile');
const details = document.getElementById('details')

buttonname.addEventListener("click", function(){
    if(studentname.textContent=="Diamada, Gerald A."){
    studentname.textContent = "Jay Jay";}
    else{
        studentname.textContent = "Diamada, Gerald A.";
    }
}
)

buttonbg.addEventListener('click', function(){
    if (container.style.backgroundColor=="white"){
    container.style.backgroundColor="#88c5c0";}
    else{
        container.style.backgroundColor="white";
    }
})

buttonhide.addEventListener("click", function(){
    if (details.style.display=="none"){
        details.style.display="block";
    }
    else{
        details.style.display="none";
    }
})
