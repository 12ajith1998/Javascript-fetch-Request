const getRandomuserData = (gender) => {
    fetch(`https://randomuser.me/api/?gender=${gender}`)
        .then(data => data.json())
        .then(data => console.log(data));
};

document.querySelector('button').addEventListener('click', () => {

    const gender = document.querySelector('input[name="gender"]:checked').value;
    getRandomuserData(gender);
})
// getRandomuserData();    