var objpeople = [
    {
        username: "Deva",
        password: "deva"
    },
    {
        username: "Aravind",
        password: "aravind"
    },
    {
        username: "Bala",
        password: "bala"
    }
]
function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    
    for(i = 0; i < objpeople.length; i++) {
        if(username == objpeople[i].username && password == objpeople[i].password)
        {
            
        }
        
    }
    alert("incorrect username or password")
}
