document.getElementById("reportCardForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("rollNumber").value;
  
    let electronics = parseFloat(document.getElementById("electronics").value);
    let dataStructure = parseFloat(document.getElementById("dataStructure").value);
    let compilerDesign = parseFloat(document.getElementById("compilerDesign").value);
    let softwareEngineering = parseFloat(document.getElementById("softwareEngineering").value);
  
    let total = electronics + dataStructure + compilerDesign + softwareEngineering;
    let percentage = (total / 400) * 100;
    let grade = "";
  
    if (percentage >= 90) {
      grade = "A+";
    } else if (percentage >= 80) {
      grade = "A";
    } else if (percentage >= 70) {
      grade = "B";
    } else if (percentage >= 60) {
      grade = "C";
    } else {
      grade = "Fail";
    }
  
    // Display results
    document.getElementById("rName").innerText = name;
    document.getElementById("rRoll").innerText = roll;
    document.getElementById("rTotal").innerText = total;
    document.getElementById("rPercentage").innerText = percentage.toFixed(2);
    document.getElementById("rGrade").innerText = grade;
  
    document.getElementById("resultSection").style.display = "block";
  });
  document.getElementById("reportCardForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("rollNumber").value;
  
    let electronics = parseFloat(document.getElementById("electronics").value);
    let dataStructure = parseFloat(document.getElementById("dataStructure").value);
    let compilerDesign = parseFloat(document.getElementById("compilerDesign").value);
    let softwareEngineering = parseFloat(document.getElementById("softwareEngineering").value);
  
    let total = electronics + dataStructure + compilerDesign + softwareEngineering;
    let percentage = (total / 400) * 100;
    let grade = "";
  
    if (percentage >= 90) {
      grade = "A+";
    } else if (percentage >= 80) {
      grade = "A";
    } else if (percentage >= 70) {
      grade = "B";
    } else if (percentage >= 60) {
      grade = "C";
    } else {
      grade = "Fail";
    }
  
    // Display results
    document.getElementById("rName").innerText = name;
    document.getElementById("rRoll").innerText = roll;
    document.getElementById("rTotal").innerText = total;
    document.getElementById("rPercentage").innerText = percentage.toFixed(2);
    document.getElementById("rGrade").innerText = grade;
  
    document.getElementById("resultSection").style.display = "block";
  });
    