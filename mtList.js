window.onload = function LoadData() {
    //load the dropdown list with location data
    initMountainsDropdown();
    document.getElementById("searchButton").addEventListener("click", runSearch);
};
    function initMountainsDropdown() {
    const mountainsList = document.getElementById("mountainsList");
    let length3 = mountainsArray.length;

    for (let i = 0; i < length3; i++) {
    //create the option element
    let theOption3 = document.createElement("option");
    //set the text and value of the option you created
    console.log(mountainsArray[i].name);
    theOption3.textContent = mountainsArray[i].name;
    theOption3.value = mountainsArray[i].name;
    //append the option as a child of (inside) the
    //select element
    mountainsList.appendChild(theOption3); //adding to the dropdown
    }
} 


//invoke the function
function runSearch()
{
    //Select the selected value from the mountains list
    const  mountainsList = document.getElementById("mountainsList");
    const selectedMountains = mountainsList.value;
}

function loadData() {
    var down = document.getElementById("mountainsList");
    for (let i = 0; i < mountainsArray.length; i++) {
        var optn = mountainsArray[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        down.appendChild(el);
    }
    down.innerHTML = "Elements Added";
}





//function LoadDataOfAdropdown(parklist, statesList);
//function LoadDataOfAdropdown(statesList);







//window.onload = function () {
    // load the dropdown list
    //locationDisplayDropDown();
    //parksTypeDropDown();
 //};
  //function locationDisplayDropDown() {
    // load the dropdown list
    //const dropDownList = document.getElementById("locationList");
    //let length = locationsArray.length;
    //for (let i = 0; i < length; i++) {
  
      // create the option element
     //let theOption = new Option(locationsArray[i], locationsArray[i]);
  
      // append the option as a child of (inside) the
      // select element
      //dropDownList.appendChild(theOption);
   // }
  //};