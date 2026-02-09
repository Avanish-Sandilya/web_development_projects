
function addContact(props){
    const contact = {
        contactName:props.name,
        contactNumber:props.number
    }

    return contact;
}


function PhoneBook(props){
const contacts=[]

contacts.concat(addContact(props));

return contacts;

}

export default PhoneBook;