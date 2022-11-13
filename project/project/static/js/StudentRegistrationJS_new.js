// class TableRegistration{


//     isScientific=true;
//     numberOFSubjects_A=7;
//     numberOFSubjects_S=10;

//     count=0;


//     //Create array of options to be added
//     array = ["اختيار التخصص ","Volvo","Saab","Mercades","Audi","mohammad"];



//     body;

//     table;

//     tableBody;

//     row;

//     cell;

//     selectBox; 

//     majorName;


//     tableCreate(majorName) {
//       this.majorName=majorName;
//         //body reference 
//         this.body = document.getElementsByTagName("body")[0];



//         // create elements <table> and a <tbody>
//         this.table = document.createElement("table");
//         this.table.className="tableOfMajor";





//       this.tableBody = document.createElement("tbody");




//            //number Subjects for students 
//            var numberOfSubjectsForStudents =this.checkIfScientific(majorName)+1;


//            for (var j = 0; j < numberOfSubjectsForStudents; j++) {

//              // table row creation
//          this.row = document.createElement("tr");
//          this.row.setAttribute("id","row");
//          this.row.setAttribute("class","rowSS");



//            // create a select box here
//            this.selectBox=document.createElement("select");
//           //  this.selectBox.setAttribute("onclick","tableRegistration.fa()");
//            this.selectBox.setAttribute("onchange","tableRegistration.ff(value,"+j+")"+"");
//            this.selectBox.setAttribute("class","tableRSS");






//            for (var i = 0; i < 1; i++) {

//              // put <td> at end of the table row
//            this.cell = document.createElement("td");  
//            this.cell.setAttribute("class","textNode");
//            if (j==0) {
//             var textNode= document.createTextNode("hello")

//           this.cell.appendChild(textNode);
//         } else {

//          this.selectBox.setAttribute("id","selectbox"+j);
//          this.cell.appendChild(this.selectBox);
//         }

//              this.row.appendChild(this.cell);

//            }


//          //append select box in cell





//            //add options in select box
//           // this.addOptions(); 
//            //this.fa(-1);


//            //row added to end of table body
//            this.tableBody.appendChild(this.row);
//          }

//         // cells creation


//         // append the <tbody> inside the <table>
//         this.table.appendChild(this.tableBody);
//         // put <table> in the <body>
//         this.body.appendChild(this.table);
//         // tbl border attribute to 
//         this.table.setAttribute("border", "2");
//       }



//       ff(value,j){
//         console.log(j);
//        // this.removeItem(value,j);

//         // for (let i = 0; i < this.checkIfScientific('academ')+1; i++) {
//         //   this.addOptions(i);

//         // }
//       }


//       fa()

//       {


//                 if (this.count==0) {
//           for (let i = 1; i < this.checkIfScientific(this.majorName)+1; i++) {
//             this.addOptions(i);

//                 }
//                         }

//             this.count++;

//       }





//       addOptions(indexSelectBox){

//         for (var i = 0; i < this.checkIfScientific(this.majorName)+1; i++)
//           {

//             var addOptions=document.getElementById("selectbox"+indexSelectBox);

//             var option = document.createElement("option");
//             option.value = i;
//             option.text = this.array[i];
//             addOptions.appendChild(option);
//           }

//       }

//       // removeItem(indexSelectBox,j){
//       //   var x= document.getElementById("");


//       //   for (var i = 0; i < this.checkIfScientific('academ')+1; i++)
//       //     {

//       //       if (i==j) {

//       //       }
//       //       else{
//       //       var addOptions=document.getElementById("selectbox"+i);
//       //       addOptions.remove(indexSelectBox);
//       //       }
//       //     }


//       // }


//       // reload(){
//       //   console.log("hello");
//       //   this.table.remove(0);
//       //   this.selectBox.remove();
//       //  // this.option.remove();
//       //   if (this.isScientific) {
//       //     this.tableCreate("academ")
//       //     this.fa();
//       //   } else {
//       //     this.tableCreate("scientific")
//       //     this.fa();
//       //   }


//       // }



//      checkIfScientific( major ){

//         if (major=='scientific') {
//             this.isScientific=true;
//             return this.numberOFSubjects_S;
//         } 
//         if (major=='academ') {
//             this.isScientific=false;
//             return this.numberOFSubjects_A;
//         }

//      }
// }


// var tableRegistration=new TableRegistration();

//  tableRegistration.tableCreate("academ");



//  function ff(){
//   console.log("hello");
//  }


// class TableRegistration {
//     // what is your majer 
//     isScientific = true;
//     // majer subject for academ 
//     numberOFSubjects_A = 7;
//     // majer subject for scientific
//     numberOFSubjects_S = 10;
//     //Create array of options to be added
//     array = ["اختيار التخصص", "القانون", 'الاداره', 'الانجليزيه', 'الرياضيات', 'اللغات الاوربيه', 'التاريخ', 'الجغرافيا', 'الحاسوب', 'امن المعلومات و الادله الرقميه'];

//     //for create table and select box 
//     body;
//     div;
//     table;
//     row;
//     cell;
//     //for create select box
//     selectBox;
//     optoin;

//     //for table create
//     tableCreate() {

//         //get body html element tage name for put table inside it 
//         this.body = document.getElementsByTagName("body")[0];
//         this.body.setAttribute("class", "mybody");

//         //panel create 
//         this.div = document.createElement("div");
//         this.div.className = "TablePanel";

//         //tabel crate 
//         this.table = document.createElement("table");
//         this.table.setAttribute("class", "myTable");

//         this.addSelectBox();
//     }

//     // addOnCell() {
//     //     var coloum = document.getElementById('cellId10');
//     //     coloum.remove();
//     //     var textNode = document.createTextNode('hello again');
//     //     this.cell.appendChild(textNode);
//     //     this.cell.appendChild(textNode);
//     //     this.row.appendChild(this.cell);
//     // }

//     addSelectBox() {
//         var count = 0;
//         for (let row = 0; row < 5; row++) {
//             //row create 
//             this.row = document.createElement("tr");
//             this.row.setAttribute("class", "myTableRow");
//             this.row.setAttribute("id", "rowId" + row);
//             for (let i = 0; i < 2; i++) {
//                 //create select box
//                 this.selectBox = document.createElement("select");
//                 this.selectBox.setAttribute("class", "selectBoxStyle");
//                 this.selectBox.setAttribute("id", "selectBoxId" + (count + 1));
//                 //column create
//                 this.cell = document.createElement("td");
//                 this.cell.setAttribute("class", "myTableCell");
//                 this.cell.setAttribute("id", "cellId" + count);
//                 //textNode create , index of select box  
//                 var textnode = document.createTextNode(count + 1);
//                 // text inside column 
//                 this.cell.appendChild(textnode);
//                 //select box inside coloumn 
//                 this.cell.appendChild(this.selectBox);
//                 // column inside row 
//                 this.row.appendChild(this.cell);
//                 count++;
//             }
//             //row inside table 
//             this.table.appendChild(this.row);
//         }
//         //table inside div panel
//         this.div.appendChild(this.table);
//         //div inside body
//         this.body.appendChild(this.div);
//         this.addOptions();
//     }

//     addOptions() {
//         //add option for select box 1-9
//         for (let i = 1; i <= 9; i++) {
//             var getIdbox = document.getElementById("selectBoxId" + i);
//             for (let optionNumber = 0; optionNumber <= 9; optionNumber++) {
//                 //create option for select box 
//                 this.option = document.createElement('option');
//                 this.selectBox.setAttribute("class", "optionStyle");
//                 this.selectBox.setAttribute("id", "optionId");
//                 this.option.value = optionNumber;
//                 this.option.text = this.array[optionNumber];
//                 getIdbox.appendChild(this.option);
//             }
//             //add option for select box 10
//             for (let optionNumber = 0; optionNumber <= 9; optionNumber++) {
//                 //create option for select box 
//                 var x = document.createElement('option');
//                 x.setAttribute("class", "optionStyle");
//                 x.setAttribute("id", "optionId");
//                 x.value = optionNumber;
//                 x.text = this.array[optionNumber];
//                 this.selectBox.appendChild(x);
//             }

//         }
//     }
// };



//create object


class TableRegistration {
    // what is your majer 
    isScientific = true;
    // majer subject for academ 
    numberOFSubjects_A = 7;
    // majer subject for scientific
    numberOFSubjects_S = 10;
    //Create array of options to be added
    array = ["اختيار التخصص", "القانون", 'الاداره', 'الانجليزيه', 'الرياضيات', 'اللغات الاوربيه', 'التاريخ', 'الجغرافيا', 'الحاسوب', 'امن المعلومات و الادله الرقميه'];

    //for create table and select box 
    body;
    container;
    row;
    col;
    //for create select box
    selectBox;
    optoin;

    //botton save 
    saveButton;

    form;

    //for table create
    tableCreate() {
        // git form from html
        this.form = document.getElementById("RegP");

        //get body html element tage name for put table inside it 
        this.body = document.getElementsByTagName("body")[0];
        this.body.setAttribute("class", "mybody");

        //create container
        this.container = document.createElement("div");
        this.container.setAttribute("class", "container rounded-5 mw-50 ");
        this.container.setAttribute("style", "width:fit-content ; ");
        //create row
        this.row = document.createElement("div");
        this.row.setAttribute("class", "row text-center ml-5 d-flex justify-content-between p-5 mw-100");
        // this.row.setAttribute("style", "height: fit-content;width:fit-content;");

        //csrf token
        // var inputElem = document.createElement('input');
        // inputElem.type = 'hidden';
        // inputElem.name = 'csrfmiddlewaretoken';
        // // var x = document.getElementsByName('csrfmiddlewaretoken').value;
        // // console.log(x);
        // var token = Math.random().toString(36).substring(32,64);
        // inputElem.value = token;
        // this.form.appendChild(inputElem);

        //append container inside body 
        this.form.appendChild(this.container);
        this.body.appendChild(this.form);
        this.container.appendChild(this.row);
        //method to add selectBox
        this.addSelectBox();
    }

    addSelectBox() {
        for (let index = 0; index < 7; index++) {
            //create select box
            this.selectBox = document.createElement("select");
            this.selectBox.setAttribute("class", "form-select ");
            this.selectBox.setAttribute("style", "width: fit-content;font-size:small ");
            this.selectBox.setAttribute("id", "selectBox" + index);
            this.selectBox.setAttribute("name", "selectBoxPost" + index);
            this.form.appendChild(this.selectBox);
            //create coloumn 
            this.col = document.createElement("div");
            this.col.setAttribute("class", "col-lg-8 col-sm-12 mt-5   text-start");
            this.col.setAttribute("style", "width:max-content;");
            //index for subject select 
            var textnode = document.createTextNode(index + 1 + " : ");
            //append textnode inside coloumn
            this.col.appendChild(textnode);
            //append selectBox inside coloumn
            this.col.appendChild(this.selectBox);

            for (let optionNumber = 0; optionNumber <= 9; optionNumber++) {
                //create option for select box 
                this.option = document.createElement('option');
                this.option.value = optionNumber;
                this.option.text = this.array[optionNumber];
                this.selectBox.appendChild(this.option);
            }
            //append coloumn inside row
            this.row.appendChild(this.col);
        }
        this.addSaveBotton();
    }

    addSaveBotton() {
        this.saveButton = document.createElement("input");
        this.saveButton.setAttribute("class", "btn btn-outline-primary btn-sm mt-5");
        this.saveButton.setAttribute("type", "submit");
        this.saveButton.setAttribute("value", " حفظ");


        this.col = document.createElement("div");
        this.col.setAttribute("class", "col-lg-12  col-sm-8 mb-2 text-end");
        this.col.setAttribute("style", "width: 60%");
        this.saveButton.setAttribute("style", "width: 40%");
        this.saveButton.setAttribute("id", "saveButton");
        this.saveButton.setAttribute("name", "saveButtonPost");
        this.col.appendChild(this.saveButton);
        this.row.appendChild(this.col);
    }
};

var tableRegistration = new TableRegistration();
tableRegistration.tableCreate();
// tableRegistration.addOnCell();
function close(){
console.log("hello");
}