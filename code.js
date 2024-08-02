var users = [
    {user : "1_mohammad" , age : 23 , gender : "male"},
    {user : "2_ali" , age : 20 , gender : "male"},
    {user : "3-hossein" , age : 18 , gender : "male"},
    {user : "4_reza" , age : 24 , gender : "male"},
    {user : "1_zahra" , age : 30 , gender : "female"},
    {user : "2_sara" , age : 33 , gender : "female"},
    {user : "3-arezo" , age : 15 , gender : "female"},
    {user : "5_saeb" , age : 17 , gender : "male"},
    {user : "4_rooz" , age : 26 , gender : "female"},
    {user : "6_salman" , age : 35 , gender : "male"},
    {user : "7-ramin" , age : 36 , gender : "male"},
    {user : "5_mina" , age : 19 , gender : "female"},
    {user : "8-amir" , age : 40 , gender : "male"},
    {user : "6_aida" , age : 41 , gender : "female"},
    {user : "7_faweze" , age : 50 , gender : "female"},
    {user : "8_negin" , age : 29 , gender : "female"},
    {user : "9-negar" , age : 45 , gender : "female"},
    {user : "9-mohssen" , age : 44 , gender : "male"},
    {user : "10_arman" , age : 48 , gender : "male"},
    {user : "10_fatame" , age : 55 , gender : "female"}

    ]
  
function userAppend(){
for (var index = 0 ; index < users.length ; index ++){
    if (users[index].gender == "male"){
        var ul = document.getElementById("maleList")
        var li = document.createElement("li");
        li.setAttribute("class" , "maleTxt");
        li.appendChild(document.createTextNode(` Username: ${users[index].user}  | Age: ${users[index].age}`));
        ul.appendChild(li);
    }
    else if (users[index].gender == "female") {
        var ul = document.getElementById("femaleList")
        var li = document.createElement("li");
        li.setAttribute("class" , "femaleTxt");
        li.appendChild(document.createTextNode(` Username: ${users[index].user}  | Age: ${users[index].age}`));
        ul.appendChild(li);
    }
};
}
function maleAvatarAppear(){
    var boxDisappear = document.getElementById("femaleDiv")
    boxDisappear.classList.remove("female")
    boxDisappear.classList.add("femaleDisappear")
    var appear = document.getElementById("maleImg")
    appear.classList.remove("maleAvatarInvicible")
    appear.classList.add("maleAvatar")
}
function femaleAvatarAppear(){
    var boxDisappear = document.getElementById("maleDiv")
    boxDisappear.classList.remove("male")
    boxDisappear.classList.add("maleDisappear")
    var appear = document.getElementById("femaleImg")
    appear.classList.remove("femaleAvatarInvicible")
    appear.classList.add("femaleAvatar")
}
function maleAvatarDisappear(){
    var boxDisappear = document.getElementById("femaleDiv")
    boxDisappear.classList.add("female")
    boxDisappear.classList.remove("femaleDisappear")
    var disappear = document.getElementById("maleImg")
    disappear.classList.add("maleAvatarInvicible")
    disappear.classList.remove("maleAvatar")
}
function femaleAvatarDisappear(){
    var boxDisappear = document.getElementById("maleDiv")
    boxDisappear.classList.add("male")
    boxDisappear.classList.remove("maleDisappear")
    var disappear = document.getElementById("femaleImg")
    disappear.classList.add("femaleAvatarInvicible")
    disappear.classList.remove("femaleAvatar")
}
