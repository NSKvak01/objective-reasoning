// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin (user){
    return user.userRole === 'ADMIN'
}

function getEmail(user){
    return (user.firstName + '.' +user.lastName + "@codeimmersives.com").toLowerCase()
}

function getPlaylistLength(list){
    let number = 0;
    for (const song of list.songs){
        number++
    }
    return number
}

function getHardestHomework(arr){
    let homework = ''
    let num = []
        for (const work of arr){
            num.push(work.averageScore)
        } 
        const i = num.indexOf(Math.min.apply(null,num))
        if (arr[i]!==undefined){
        homework = arr[i].name
        } else {
            homework = ''
        }
    return homework
}

function createPhonebook(name, number){
    const phoneBook = {
    }
        for (let n=0;n<name.length;n++){
        phoneBook[name[n]] = number[n]
        }
    console.log(phoneBook)
    return phoneBook
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};