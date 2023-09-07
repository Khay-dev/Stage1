let datess = document.querySelector(".date")
let timess = document.querySelector(".utc")


// Getting the Day 
let getDay = () => {
    let today = new Date()
    let now = today.getDay()
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    datess.innerHTML = days[now]
}

getDay()



// Getting Time
let getTime = () => {
    const now = new Date()
    const H = now.getHours()
    const M = now.getMinutes()
    const S = now.getSeconds()
    timess.innerHTML = `${H}:${M}:${S}`
}

setInterval(getTime, 1000);



