//  selecting required elements

const clockDisplay = document.getElementById("clockDisplay");
const alarmTime = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarmBtn");
const stopAlarmBtn = document.getElementById("stopAlarmBtn");
const snoozeBtn = document.getElementById("snoozeBtn");
const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
const amPm = document.getElementById("amPm");
let alarmSound = document.getElementById("alarmSound");

let alarmSetTime = null;
let isAlarmSet = false;

//  Update Clock Every Second
setInterval(() => {
  let now = new Date();
  let hoursGot = now.getHours();
  let minutesGot = now.getMinutes();
  let secondsGot = now.getSeconds();

  let amPmValue = hoursGot >= 12 ? "PM" : "AM";

  let displayHour = (hoursGot % 12 || 12).toString().padStart(2, "0");
  let displayMinute = minutesGot.toString().padStart(2, "0");
  let displaySecond = secondsGot.toString().padStart(2, "0");

  hours.innerHTML = displayHour;
  minutes.innerHTML = displayMinute;
  seconds.innerHTML = displaySecond;
  amPm.innerHTML = amPmValue;

  // Check if it's time to trigger the alarm
  if (isAlarmSet) {
    const currentTime = `${hoursGot.toString().padStart(2, "0")}:${minutesGot.toString().padStart(2, "0")}`;
    if (currentTime === alarmSetTime) {
      console.log("⏰ Alarm time reached!");
      alarmSound.play();
      isAlarmSet = false; // Reset alarm or handle snooze
    }
  }
}, 1000);

// ✅ Set Alarm Button
setAlarmBtn.addEventListener("click", () => {
  alarmSetTime = alarmTime.value;
  isAlarmSet = true;
  console.log("Alarm set for: ", alarmSetTime);
});

// 🔕 Stop Alarm
stopAlarmBtn.addEventListener("click", () => {
  alarmSound.pause();
  alarmTime.value = "";
  console.log("⏰ Alarm stopped");
  alarmSound.currentTime = 0;
  isAlarmSet = false;
});
