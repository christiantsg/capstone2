window.onload = function LoadParkData() {
    //load the dropdown list with park data
    initParkDataDropdown();
    document.getElementById("searchButton").addEventListener("click", runSearch);
};
    function initParkDataDropdown() {
    const parkTypeList = document.getElementById("parkTypeList");
    let length4 = nationalParksArray.length;

    for (let i = 0; i < length4; i++) {
    //create the option element
    let theOption4 = document.createElement("option");
    //set the text and value of the option you created
    console.log(nationalParksArray[i].name);
    theOption4.textContent = nationalParksArray[i].name;
    theOption4.value = nationalParksArray[i].name;
    //append the option as a child of (inside) the
    //select element
    parkTypeList.appendChild(theOption4); //adding to the dropdown
    }
} 

//invoke the function
function runSearch()
{
    //Select the selected value from the ParkTypeData list
    const  parkTypeList = document.getElementById("parkTypeList");
    const selectedParkData = parkTypeList.value;
}

function loadData() {
    var down = document.getElementById("parkTypeList");
    for (let i = 0; i < nationalParksArray.length; i++) {
        var optn = nationalParksArray[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        down.appendChild(el);
    }
    down.innerHTML = "Elements Added";
}