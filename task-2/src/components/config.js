const url = 'https://reqres.in/api/users?page=1';

export async function fetchAPI(){
    const users = await fetch(url).then(res => res.json().catch((err) => {console.log("Fetching Data unsuccessful", err.message)} ));
    return users
}