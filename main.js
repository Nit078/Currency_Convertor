

const populate = async (value, Currency) => {
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_ajir7iOnk6ShlOCMRKeumKtQFFqbfaZKtrmciz3p&base_currency" + Currency
    let mystr = ""
    let response = await fetch(url)
    let rJson = await response.json()
    console.log(rJson)
    document.querySelector(".output").style.display="block"
    for (let key of Object.keys(rJson["data"])) {

        mystr += `

                    <tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr>
                                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = mystr;

}



const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()

    const value = parseInt(document.querySelector("input[name='quantity']").value)
    const Currency = parseInt(document.querySelector("select[name='Currency']").value)
    populate(value, Currency)
})





// const tableBody = document.querySelector("tbody");
// tableBody.innerHTML = `

// <tr>
// <td>Data1</td>
// <td>Data2</td>
// <td>Data3</td>
// </tr>
// `

