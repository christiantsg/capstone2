window.onload = function LoadLocation() {
    //load the dropdown list with location data
    const statesList = document.getElementById("statesList");
    let length = locationArray.length;

    for (let i = 0; i < length; i++) {
    //create the option element
    let theOption = document.createElement("option");
    //set the text and value of the option you created
    theOption.textContent = locationsArray[i];
    theOption.value = locationArray[i];
    //append the option as a child of (inside) the
    //select element
    statesList.appendChild(theOption); //adding to the dropdown
    }
// load the dropdown list with location data
    const parkList = document.getElementById("parkList");
    let length2 = parkTypesArray.length;

    for (let i = 0; i < length2; i++) {
    //create the option element
    let theOption2 = document.createElement("option");
    //set the text and value of the option you created
    theOption2.textContent = parkTypesArray[i];
    theOption2.value = parkTypesArray[i];
    //append the option as a child of (inside) the
    //select element
    parkList.appendChild(theOption2); //adding to the dropdown
    
    }
};

function LoadDataOfAdropdown(myArralist, myDropDown) {
    const parkList = document.getElementById(statesList);

    for (let i = 0; i < myArralist; i++) {
    // create the option element
    let theOption2 = document.creatElement("option");
    // set the text and value of the option you created
    theOption2.textContent = myArralist[i];
    theOption2.value = myArralist[i];
    // append the option as a child of (inside) the
    // select element
    myArralist.appendChild(theOption2); //adding to the dropdown

}
}

//invoke the function
function LoadDataOfAdropdown(parklist, statesList);
function LoadDataOfAdropdown(statesList);







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