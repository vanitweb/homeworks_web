let messages =
[
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date());
readMap.set(messages[1], new Date());
readMap.set(messages[2], new Date());
readMap.set(messages[1], new Date());
function read_message(user)
{
	console.log(messages[user]);
}
read_message(1);
console.log(new Date());
