async function API() {
    try {
        const response = await fetch('https://66e526d55cc7f9b6273c69d2.mockapi.io/register')
        const data = await response.json()
        // console.warn(data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

// const APIdata = API();
// console.log(APIdata);

async function APIdata() {
    const apidata = await API()
    // console.log(apidata)
    const active = apidata.filter(register => register.IsActive)
    console.log(active)
    const structuredData = active.map((data) => { console.log(data) })
    // console.log(structuredData)
}

APIdata()