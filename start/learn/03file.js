function printname(hello)
{
    console.log(`The result is : ${hello}`)
}
function add(a,b,c)
{
    if (c){
        c(a+b)
    }
    else {
        return (a+b)
    }
}
add(3,4,printname)