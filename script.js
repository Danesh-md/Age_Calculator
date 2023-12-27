"use strict";
const output_year = document.querySelector(".oyear");
const output_month = document.querySelector(".omonth");
const output_day = document.querySelector(".oday");

const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

const submit_btn = document.querySelector(".submit");

const error_year = document.querySelector(".erroryear");
const error_month = document.querySelector(".errormonth");
const error_day = document.querySelector(".errorday");
submit_btn.addEventListener("click", calc_age);

let isValid = false;

input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    error_day.textContent = "Enter a valid date";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
    isValid = true;
  }
  if (+input_day.value === 0) {
    error_day.textContent = "Cannot be zero";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
    isValid = true;
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    error_month.textContent = "Enter a valid month";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
    isValid = true;
  }
  if (+input_month.value === 0) {
    error_month.textContent = "Cannot be zero";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
    isValid = true;
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2023) {
    error_year.textContent = "Enter a valid year";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
    isValid = true;
  }
  if (+input_year.value === 0) {
    error_year.textContent = "Cannot be zero";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
    isValid = true;
  }
});

function calc_age() {
  if (isValid) {
    let birthdate = `${input_month.value}/${input_day.value}/${input_year.value}`;
    console.log(birthdate);
    let bobj = new Date(birthdate);
    let agediff = Date.now() - bobj;
    let ageDate = new Date(agediff);
    let ageYear = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay() - 1;
    output_year.textContent = ageYear;
    output_month.textContent = ageMonth;
    output_day.textContent = ageDay;
  } else {
    alert("error");
  }
}
