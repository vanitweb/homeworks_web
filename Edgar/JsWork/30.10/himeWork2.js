function addContact(refreshCallback,id1,id2,id3) {
	let id = id1 + id2 + id3; 
    refreshCallback(id);
}

function refreshContactList(x) {
    console.log(x);
}

addContact(refreshContactList,8,1,3);