let login = document.getElementById("login");
let guestLogin =document.getElementById("guestLogin");

login.addEventListener("submit",(e) => {
  e.preventDefault()
    
    let a = document.getElementById("email").value.trim()
    let b = document.getElementById("password").value.trim()
   let data2=JSON.parse(localStorage.getItem("details"));
    console.log(data2)
    let dbName=data2.Email;
    console.log(dbName)
    let dbPswd=data2.pswd;
    
     if(a === dbName && b ===dbPswd){
      window.location.href="../project/project.html"
       alert("login successful....")
    }else{
    alert("enter correct credentials")
    }

})
guestLogin.addEventListener("click",()=>{
  alert("logged in as Guest!")
  window.location.href="../project/project.html"
});

