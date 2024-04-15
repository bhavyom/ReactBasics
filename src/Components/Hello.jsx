const name = "Sam"

function display(){
    return "This is Great!"
}
function Hello(){
    return <h1>Hello from the component! {display()}</h1>
}

export default Hello;