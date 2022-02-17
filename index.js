const users = []

const addUsers = (ev) =>{
 ev.preventDefault();
 let userInfo = {
     id:Date.now(),
     name:document.getElementById('userName').value,
     lastName:document.getElementById('userLastName').value,
     number:document.getElementById('userNumber').value,
     mail:document.getElementById('userMail').value,
     day:document.getElementById('day').value,
     months:document.getElementById('months').value,
     years:document.getElementById('years').value
 }
    users.push(userInfo)
    localStorage.setItem('users',JSON.stringify(users))
    location.reload()
}



let raw = localStorage.getItem('users')
let person = JSON.parse(raw)
console.log(person)

document.getElementById('searchBut').addEventListener('click',function(){
    person.find((item)=>{
        let numb = item.number
        let searchInp = document.getElementById('searchInp').value
        if(searchInp === item.name && searchInp!=''){
        document.getElementById('divik').innerHTML += item.name
        document.getElementById('divik1').innerHTML += item.lastName
        document.getElementById('divik2').innerHTML +='('+numb.substring(0,3)+')-'+numb.substring(3,6)+'-'+numb.substring(6,10)
        document.getElementById('divik3').innerHTML += item.mail
        document.getElementById('divik4').innerHTML += item.day
        document.getElementById('divik5').innerHTML += item.months
        document.getElementById('divik6').innerHTML += item.years
        document.getElementById('allBlok').style.display = 'none'
        document.getElementById('searchAll').style.display = 'block'
        }

        return
        
    })
})

document.getElementById('but').addEventListener('click',addUsers)
