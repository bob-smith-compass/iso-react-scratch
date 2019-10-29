const a = {
    name: 'David',
    company: 'Ascension'
}

let b = {
    lname: 'Shams', ...a
}

console.log(b);