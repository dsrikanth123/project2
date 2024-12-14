let login = document.getElementById("login");

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

