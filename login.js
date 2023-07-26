
let button=document.querySelectorAll('button')

button.forEach(el=>{
    el.addEventListener('click',function(){
        let inputUsername=document.querySelector('.username').value
let inputPassword=document.querySelector('.password').value
        if(el.classList=='login'){
            if(inputPassword===''||inputUsername===''){
                alert('please input your username or password')
            }
            else{
              window.location.href='../menulogin/webiste/website.html'
            }
        }
        else if(el.classList=='cancel'){
            window.location.href='login.html'
        }
    })
})