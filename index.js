a= document.getElementById("hex")

function change()
{
    nc= Math.floor(Math.random()* 16777215 ).toString(16)
    nc= "#"+nc
    document.body.style.backgroundColor= nc
    document.getElementById("hex").innerText= nc
}