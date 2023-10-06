
function Output(str) {
    outputLabel.innerText += "\n" + str;
    // alert(str);
    console.log(str);
}

let reader = new FileReader();
reader.onload = function (evt) {
    Output(evt.target.result);
}
function OutputFile(f) {
    if (reader.readyState == 1) {
        console.log("reader is busy !!");
        return;
    }
    reader.readAsText(f);
    // while(reader.readyState == 0 || reader.readyState == 2) {
    //     console.log("wait for file read !!")
    //     break;
    // }
}

let outputLabel = document.getElementById("outputId");
let inputFile = document.getElementById("inputId");
let dropBox = document.getElementById("dropBox");


function CreateNode(f) {
    let tableBody = document.getElementById("tableBody");
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    tdName.innerHTML = f.name
    tr.appendChild(tdName);
    let tdSize = document.createElement("td");
    tdSize.innerHTML = f.size;
    tr.appendChild(tdSize);
    let tdType = document.createElement("td");
    tdType.innerHTML = f.type;
    tr.appendChild(tdType);
    let tdTime = document.createElement("td");
    tdTime.innerHTML = new Date(f.lastModified);
    tr.appendChild(tdTime);
    tableBody.appendChild(tr);
}

function Mydragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function Mydragover(e) {
    e.stopPropagation();
    e.preventDefault();
}

function Mydrop(e) {
    e.stopPropagation();
    e.preventDefault();
    const files = e.dataTransfer.files;
    // Output(files.length);
    for (let i = 0; i < files.length; ++i) {
        Output(files[i].name);
        // Output((new Date(files[i].lastModified)));
        // Output(files[i].webkitRelativePath);
        // Output(files[i].size);
        // Output(files[i].type);

        OutputFile(files[i]);
        CreateNode(files[i]);
    }
}

dropBox.addEventListener("dragenter", Mydragenter, false);
dropBox.addEventListener("dragover", Mydragover, false);
dropBox.addEventListener("drop", Mydrop, false);

function process() {
    fileList = inputFile.files;
    Output(fileList);
    for (let f in fileList) {
        // Output(f.name);
    }
}

function calculate() {
    Output("calculate");
}

function generate() {
    Output("generate");
}

function clearAll() {
    Output("clear All !!");
}