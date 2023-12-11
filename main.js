//variables available to all code in Room Booking Form

const singleroomCost = 25000;
const doubleroomCost = 35000;
const tripleroomCost = 40000;
const extrabedsCost = 8000;
const kidsCost = 5000;
let loyalty_points;
let totalCost;
let fvt = 0;



//To Do 6b: references of interactive elements in Room Booking Form

const roomForm = document.getElementById("room_booking_form");
const currentBooking = document.getElementById("output");
const titleOverallBooking = document.getElementById("title-overall");
const overallBooking = document.getElementById("overall_booking");
const btnbookNow = document.getElementById("bookNow");




//Booking details

const name = document.getElementById("fullName");
const email = document.getElementById("email");
const phoneNum = document.getElementById("PhoneNum")
const numAdults = document.getElementById("R_adult-1");
const checkWiFi = document.getElementById("wifi");
const checkPoolView = document.getElementById("pool_view");
const checkGardenView = document.getElementById("garden_view");
const checkInDate = document.getElementById("checkIn-1");
const checkOutDate = document.getElementById("checkout");

//for total cost calculation

const numSingle = document.getElementById("singleRoom");
const numDouble = document.getElementById("doubleRoom");
const numTriple = document.getElementById("tripleRoom");
const numChild = document.getElementById("R_child-1");
const extraBeds = document.getElementById("ExtraBed");
const promoCode = document.getElementById("promocode");

//extra requirements

const extraRequirements = document.getElementsByName("extra_requirements")

//Listen for events

window.addEventListener("load",init);
roomForm.addEventListener('input',updateOutput);
btnbookNow.addEventListener("click",diplayOverallbooking);

function init(){
    totalCost = 0;
}

//Function for Total Cost Button

function calculateRoomCost() {
    const checkin = new Date(checkInDate.value);
    const checkout = new Date(checkOutDate.value);
    const numDays = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24)) || 1;

    const roomCost = (singleroomCost * numSingle.value) +
        (tripleroomCost * numTriple.value) +
        (doubleroomCost * numDouble.value)+ (numChild.value*kidsCost);

    return roomCost * numDays;
}

function calculateTotalCost() {
    const roomCost = calculateRoomCost();
    const totalCost = roomCost +
        (extrabedsCost * extraBeds.value);

    return totalCost;
}

function updateOutput(event) {
    if (roomForm.checkValidity()) {
        event.preventDefault();
        console.log("total cost");

        const roomCost = calculateRoomCost();
        const totalCost = calculateTotalCost();

    currentBooking.innerHTML =`<ul class="b-details">
                                    <li>Name --------- :\t\t\t ${name.value}</li> 
                                    <li>Check In Date ---------  :\t\t\t${checkInDate.value}</li>
                                    
                                    <li>Check Out Date ---------  :\t\t\t${checkOutDate.value}</li>
                                    
                                    <li>Number of Adults ---------  :\t\t\t${numAdults.value}</li>
                                    
                                    <li>No. of Kids above 5yrs ---------  :\t\t\t\t${numChild.value} \t\t\t (LKR ${kidsCost.toFixed(2)} per kid for extra meals)</li> 
                                    
                                    <li>No. of Single Rooms ---------  :\t\t\t${numSingle.value} \t\t\t (LKR ${singleroomCost.toFixed(2)} per Single Room)</li>
                                    
                                    <li>No. of Double Rooms ---------  :\t\t\t${numDouble.value} \t\t\t(LKR ${doubleroomCost.toFixed(2)} per Double Room)</li> 
                                    
                                    <li>No. of Triple Rooms ---------  :\t\t\t${numTriple.value} \t\t\t(LKR ${tripleroomCost.toFixed(2)} per Triple Room)</li>
                                    
                                    <li>No. of Extra Beds ---------  :\t\t\t${extraBeds.value} \t\t\t (LKR ${extrabedsCost.toFixed(2)} per Extra Bed) </li>

                                    <li>Need Wi-Fi ? ---------  : \t\t\t${checkWiFi.checked ? 'Yes' : 'No'}</li>
                                    <li>Need Pool view ? ---------  : \t\t\t${checkPoolView.checked ? 'Yes' : 'No'}</li>
                                    <li>Need Gargen View ? ---------  : \t\t\t${checkGardenView.checked ? 'Yes' : 'No'}</li>
                                    <br>
                                    <hr>
                                    <li>Total Booking Cost ---------  : LKR.\t\t\t ${totalCost.toFixed(2)}</li>
                                    <hr>
                                </ul>`;
                
    }

    
                                    

}



//Function for Book Now

function diplayOverallbooking(event){
    if(roomForm.checkValidity()){
    event.preventDefault();
    console.log("overall booking cost");

    totalrooms = parseInt(numDouble.value)+parseInt(numSingle.value)+parseInt(numTriple.value);
    
    function calculateTotalCost() {
        const roomCost = calculateRoomCost();
        const totalCost = roomCost +
            (extrabedsCost * extraBeds.value);

    
        return totalCost;

    }
    
    const roomCost = calculateRoomCost();
    totalCost = roomCost +
            (extrabedsCost * extraBeds.value);

    if (promoCode.value.trim() === '123') {
        totalCost *= 0.95;
    }

    fvt = {Name: document.getElementById("fullName").value,
    Num_Adults: document.getElementById("R_adult-1").value,
    Num_Kids: document.getElementById("R_child-1").value,
    Extra_Beds: document.getElementById("ExtraBed").value,
    Single_Rooms: document.getElementById("singleRoom").value,
    Double_Rooms: document.getElementById("doubleRoom").value,
    Trible_Rooms: document.getElementById("tripleRoom").value,
    Total_Cost: totalCost}


overallBooking.innerHTML =`<table border = "1">
                           <tr>
                           <th>Name</th>
                           <td>${name.value}</td>
                           </tr>
                           <tr>
                           <th>Check In Date</th>
                           <td>${checkInDate.value}</td>
                           </tr>
                           <tr>
                           <th>Check Out Date</th>
                           <td>${checkOutDate.value}</td>
                           </tr>
                           <tr>
                           <th>No of Adults</th>
                           <td>${numAdults.value}</td>
                           </tr>
                           <tr>
                           <th>No of Kids (Above 5yrs)</th>
                           <td>${numChild.value}</td>
                           </tr>
                           <tr>
                           <th>No. of Single Rooms </th>
                           <td>${numSingle.value}</td>
                           </tr>
                           <tr>
                           <th>No. of Double Rooms</th>
                           <td>${numDouble.value}</td>
                           </tr>
                           <tr>
                           <th>No. of Triple Rooms</th>
                           <td>${numTriple.value}</td>
                           </tr>
                           <tr>
                           <th>Total Rooms</th>
                           <td>${totalrooms}</td>
                           </tr>
                           <tr>
                           <th>No. of Extra Beds</th>
                           <td>${extraBeds.value}</td>
                           </tr>
                           <tr>
                           <th>Wifi</th>
                           <td>${checkWiFi.checked ? 'Yes' : 'No'}</td>
                           </tr>
                           <tr>
                           <th>Pool view</th>
                           <td>${checkPoolView.checked ? 'Yes' : 'No'}</td>
                           </tr>
                           <tr>
                           <th>Garden View</th>
                           <td>${checkGardenView.checked ? 'Yes' : 'No'}</td>
                           </tr>
                           <tr>
                           <th>Discount</th>
                           <td>${promoCode.value === '123' ? '5%' : "No any discount"}</td>
                           </tr>
                           <tr>
                           <th>Total Booking Cost</th>
                           <td class="totalcost">LKR.${totalCost.toFixed(2)}</td>
                           </tr>`;

                                roomForm.reset();
                                currentBooking.innerHTML ="";
                                overallBooking.style.display = 'block';
                                titleOverallBooking.style.display = 'block';

                }else{
                    alert("Please fill the fields");
                }

} 


const localAdultCost = 5000;
const localKidCost = 2000;
const foreignAdultCost = 10000;
const foreigntKidCost = 5000;
const adultGuidenceCost = 1000;
const kidGuidenceCost = 500;
let adTotalCost;


const adForm = document.getElementById("adBookingForm");
const adCurrentUpdate = document.getElementById("Adoutput");


const adName = document.getElementById("adFullName");
const adEmail = document.getElementById("Ademail");
const adPhoneNum = document.getElementById("AdPhoneNum");
const bookingDate = document.getElementById("adDate");
const bookingTime = document.getElementById("time");


const checkduration = document.getElementById("duration");
const adAdults = document.getElementById("Ad_adult");
const adKids = document.getElementById("Ad_child");
const adType = document.getElementsByName("adventure");
const checkAdventure = document.getElementById("Ad_type");
const checkAdult = document.getElementById("adultGuidence");
const checkKids = document.getElementById("kidGuidence");
const checkLocal = document.getElementById("Adlocal");
const checkForeign = document.getElementById("AdForeign");


const guidenceType = document.getElementsByName("guidence");
const nationality = document.getElementsByName("localorforeign");

window.addEventListener("load",init);
adForm.addEventListener('input', updateAdBooking);
document.getElementById("localforeign").addEventListener('change', updateAdBooking);


function init(){
    adTotalCost = 0;
}

function updateAdBooking(event) {
    event.preventDefault();

    // Get selected nationality
    const selectedNationality = document.getElementById("localforeign").value || 'local';

    // Get cost and guidance cost based on nationality
    const costPerAdult = selectedNationality === 'local' ? localAdultCost : foreignAdultCost;
    const costPerKid = selectedNationality === 'local' ? localKidCost : foreigntKidCost;
    const guidanceCostPerAdult = checkAdult.checked ? adultGuidenceCost : 0;
    const guidanceCostPerKid = checkKids.checked ? kidGuidenceCost : 0;

    // Get duration value or default to 1
    const duration = parseInt(checkduration.value) || 1;

    // Calculate total cost
    const totalCost =
        (adAdults.value * costPerAdult + adKids.value * costPerKid) * duration +
        (adAdults.value * guidanceCostPerAdult + adKids.value * guidanceCostPerKid) * duration;

    // Update adTotalCost for potential external usage
    adTotalCost = totalCost;

    // Update the UI with the current booking details
    adCurrentUpdate.innerHTML = `
        <ul class="ad-details">
            <li>Name ----------------- : \t\t\t ${adName.value}</li>
            <li>Date ----------------- : \t\t\t ${bookingDate.value}</li>
            <li>Time ----------------- : \t\t\t ${bookingTime.value} \t\t\t AM</li>
            <li>Duration ------------- : \t\t\t ${duration} \t\t\t (Hours)</li>
            <li>Adventure Type ------- : \t\t\t ${checkAdventure.value}</li>
            <li>No of Adults ----- : \t\t\t ${adAdults.value}</li>
            <li>No of Kids ----- : \t\t\t ${adKids.value}</li>
            <li>Need Guidence for Adults ? ---------  : \t\t\t${checkAdult.checked ? 'Yes' : 'No'}</li>
            <li>Need Guidence for Kids ? ---------  : \t\t\t${checkKids.checked ? 'Yes' : 'No'}</li>
            <br>
            <hr>
            <li>Total Booking Cost ------------------- : LKR.\t\t\t ${adTotalCost.toFixed(2)}</li>
            <hr>
        </ul>`;
}

//Adventure Form Popup

const adOvarallBooking = document.getElementById("adTotalUpdate");
const adPopup = document.getElementById("popup");
const adbtnBooknow = document.getElementById("AdbookNow");
const okbtn = document.getElementById("okBtn");

adbtnBooknow.addEventListener("click", openPopup);
okbtn.addEventListener("click",closePopup);


function openPopup(event) {
    if(adForm.checkValidity()){
    event.preventDefault();

    // Get selected nationality
    const selectedNationality = document.getElementById("localforeign").value || 'local';

    // Get cost and guidance cost based on nationality
    const costPerAdult = selectedNationality === 'local' ? localAdultCost : foreignAdultCost;
    const costPerKid = selectedNationality === 'local' ? localKidCost : foreigntKidCost;
    const guidanceCostPerAdult = checkAdult.checked ? adultGuidenceCost : 0;
    const guidanceCostPerKid = checkKids.checked ? kidGuidenceCost : 0;

    // Get duration value or default to 1
    const duration = parseInt(checkduration.value) || 1;

    // Calculate total cost
    const totalCost =
        (adAdults.value * costPerAdult + adKids.value * costPerKid) * duration +
        (adAdults.value * guidanceCostPerAdult + adKids.value * guidanceCostPerKid) * duration;

    // Update adTotalCost for potential external usage
    adTotalCost = totalCost;

    adOvarallBooking.innerHTML = `
    <ul class="adoverall-details">
        <li>Name ----- : \t\t\t ${adName.value}</li>
        <li>Date ------ : \t\t\t ${bookingDate.value}</li>
        <li>Time ------ : \t\t\t ${bookingTime.value} \t\t\t AM</li>
        <br>
        <hr>
        <li>Total Booking Cost ---- : LKR.\t\t\t ${adTotalCost.toFixed(2)}</li>
        <hr>
    </ul>`;

    document.body.style.pointerEvents = 'none';

    adPopup.classList.add("open-popup");
    adPopup.style.pointerEvents = 'auto';


    adForm.reset();
    adCurrentUpdate.innerHTML ="";
}else{
    alert("Please fill the fields");
}
    
}

function closePopup(){
    adPopup.classList.remove("open-popup");
    document.body.style.pointerEvents = 'auto';
}


//loyalty points

const loyaltyPoints = document.getElementById("loyaltyPoints");
const lpPopup = document.getElementById("lpPopup");
const lpokbtn = document.getElementById("lpokBtn");
const lpdisplay = document.getElementById("lpUpdate");

loyaltyPoints.addEventListener("click", lpOpenPopup);
lpokbtn.addEventListener("click",lpClosePopup);


function lpOpenPopup(event) {

    loyalty_points = 0;

    if(totalrooms>3 ){

        loyalty_points = totalrooms*20;

    }else{
        alert('No loyalty points');
    }


    lpdisplay.innerText= `Your loyalty points: `+loyalty_points;



    lpPopup.classList.add("lpopen-popup");

}

function lpClosePopup(){
    lpPopup.classList.remove("lpopen-popup");
}

//Add to Favorites Button

const adFav = document.getElementById("favorites");

adFav.addEventListener("click", saveStorage);

function saveStorage(){
    localStorage.setItem("Favorites", JSON.stringify(fvt));
    alert("Your Details Successfuly Saved");
}


