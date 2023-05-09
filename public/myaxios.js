document.getElementById('user-form').addEventListener('submit', async(e)=>{
    e.preventDefault(); // 기본적인 서브밋 기능 삭제
    // alert('출력');

    // axios.post('/users/save',{data:"qwerqwerqwer"})
    // .then(result =>{console.log(result)});

    // const result = await axios.post('/users/save',{data:"qwerqwerqwer"})

    const username = document.getElementById('username').value
    const age = document.getElementById('age').value
    const married = document.getElementById('married').value

    const info = document.getElementById('info')
    axios.post('/users/save',{username,age,married})
    .then((result)=>{
        info.textContent = result.data
    })
    .catch((err)=>{
        info.textContent = result.data
    })
})