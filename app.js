let x = "";
let text = "";
let text1 = "";
let y = "";
let univDur = "";
let univDur1 = "";
let univDur2 = "";
let univOne = "";
let univTwo = "";
let univThree = "";
let courseOne = "";
let courseTwo = "";
let courseThree = "";
let cent = "";
let eaddy = "";
let birth = "";
let office = "";
let start1 = "";
let end1 = "";
let start2 = "";
let end2 = "";
let start3 = "";
let end3 = "";
let origin = "";
let empStatus = "";
let uempStatus = "";
let sempStatus = "";

const getEmail = () => {
  eaddy = document.getElementById("eaddy").value;
  document.getElementById("em").innerHTML = `${eaddy}`;
};

function dateOfBirth() {
  birth = document.getElementById("birth").value;
  document.getElementById("dob").innerHTML = `${birth}`;
}

function getWork() {
  office = document.getElementById("work").value;
  document.getElementById("pow").innerHTML = `${office}`;
}

function getDur1() {
  start1 = document.getElementById("start1").value;
  end1 = document.getElementById("end1").value;

  const getdur1 = (start1, end1) => Math.abs(start1 - end1);
  univDur = `${getdur1(start1, end1)}`;

  document.getElementById("duration1").value = univDur;
}

function getUniDet1() {
  document.getElementById("unidur1").innerHTML = `${univDur} years`;
  univOne = document.getElementById("univ1").value;
  document.getElementById("uni1").innerHTML = `${univOne}`;
  courseOne = document.getElementById("course1").value;
  document.getElementById("cour1").innerHTML = `${courseOne}`;
  start1 = document.getElementById("start1").value;
  document.getElementById("st1").innerHTML = `${start1}`;
  end1 = document.getElementById("end1").value;
  document.getElementById("e1").innerHTML = `${end1}`;
}

function getDur2() {
  start2 = document.getElementById("start2").value;
  end2 = document.getElementById("end2").value;

  const getdur2 = (start2, end2) => Math.abs(start2 - end2);
  univDur1 = `${getdur2(start2, end2)}`;

  document.getElementById("duration2").value = univDur1;
}

function getUniDet2() {
  document.getElementById("unidur2").innerHTML = `${univDur1} years`;
  univTwo = document.getElementById("univ2").value;
  document.getElementById("uni2").innerHTML = `${univTwo}`;
  courseTwo = document.getElementById("course2").value;
  document.getElementById("cour2").innerHTML = `${courseTwo}`;
  start2 = document.getElementById("start2").value;
  document.getElementById("st2").innerHTML = `${start2}`;
  end2 = document.getElementById("end2").value;
  document.getElementById("e2").innerHTML = `${end2}`;
}

function getDur3() {
  start3 = document.getElementById("start3").value;
  end3 = document.getElementById("end3").value;

  const getdur3 = (start3, end3) => Math.abs(start3 - end3);
  univDur2 = `${getdur3(start3, end3)}`;

  document.getElementById("duration3").value = univDur2;
}

function getUniDet3() {
  document.getElementById("unidur3").innerHTML = `${univDur2} years`;
  univThree = document.getElementById("univ3").value;
  document.getElementById("uni3").innerHTML = `${univThree}`;
  courseThree = document.getElementById("course3").value;
  document.getElementById("cour3").innerHTML = `${courseThree}`;
  start3 = document.getElementById("start3").value;
  document.getElementById("st3").innerHTML = `${start3}`;
  end3 = document.getElementById("end3").value;
  document.getElementById("e3").innerHTML = `${end3}`;
}

function submitNames() {
  x = document.getElementById("firstname").value;
  y = document.getElementById("lastname").value;
  document.getElementById("demo").innerHTML = `${x}`;
  document.getElementById("demo1").innerHTML = `${y}`;
}

function convertCM() {
  cent = document.getElementById("cm").value;

  const centToFeet = (cent) => Math.floor(cent / 30);
  const centToInch = (cent) => cent / 30;
  text = `${centToFeet(cent)}Ft`;
  text1 = `${Math.round(
    Math.abs(centToFeet(cent) - centToInch(cent)) * 10
  )} Inches`;

  document.getElementById("feet").innerHTML = text;
  document.getElementById("inch").innerHTML = text1;
}

function getNationality() {
  origin = document.getElementById("nation").value;
  document.getElementById("nationality").innerText = `${origin}`;
}

function getEmploymentStatus() {
  empStatus = document.getElementById("emp").value;
  uempStatus = document.getElementById("unemp").value;
  sempStatus = document.getElementById("semp").value;

  if (document.getElementById("emp").checked) {
    document.getElementById("empstat").innerHTML = `${empStatus}`;
  } else if (document.getElementById("unemp").checked) {
    document.getElementById("empstat").innerHTML = `${uempStatus}`;
  } else if (document.getElementById("semp").checked) {
    document.getElementById("empstat").innerHTML = `${sempStatus}`;
  } else {
    document.getElementById("empstat").innerHTML = "Please select a button";
  }
}

const submitAll = () => {
  getEmail();
  dateOfBirth();
  getWork();
  getUniDet1();
  getUniDet2();
  getUniDet3();
  submitNames();
  convertCM();
  getNationality();
  getEmploymentStatus();
};
submitAll();
