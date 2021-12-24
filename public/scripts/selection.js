async function selection(x) {
  console.log("In selection()");

  if(document.getElementById("helper") !== null && x === 2) {
    const helper = document.getElementById("helper");
    helper.remove();
  }

  console.log(document.getElementById("codingArea"));

  if(document.getElementById("helper") === null && x === 2){
    const helper = document.createElement("div");
    document.getElementById("cntnr").append(helper);
    helper.setAttribute("id", "helper");
    const coding = document.createElement("div");
    coding.setAttribute("id", "codingArea");
    document.getElementById("helper").append(coding);
    coding.classList.add("itemOne");
    console.log(document.getElementById("editor") === null)
    let txtAr;
    txtAr = document.createElement("textarea");
    coding.append(txtAr);
    txtAr.setAttribute("id", "editor");
    coding.setAttribute("class", "itemOne");
    const insrtn = document.querySelector('s').textContent;
    console.log(document.getElementById("editor"));
    txtAr.textContent= insrtn;

    var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
      mode: "javascript",
      theme: "dracula",
      readOnly: true,
      showCursorWhenSelecting: false,
    });
    
    editor.setSize("100%", "70vh");
    console.log(editor.getValue());
  }
  

  const space = document.getElementById('space');
  space.textContent="O(1)";


  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    console.log("In ith loop");
    let min_index = i;
    ele[i].style.background = "blue";
    for (let j = i + 1; j < ele.length; j++) {
      console.log("In jth loop");
      ele[j].style.background = "red";

      await waitforme(delay);
      if (
        parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
      ) {
        console.log("In if condition height comparision");
        if (min_index !== i) {
          ele[min_index].style.background = "cyan";
        }
        min_index = j;
      } else {
        ele[j].style.background = "cyan";
      }
    }
    await waitforme(delay);
    swap(ele[min_index], ele[i]);
    ele[min_index].style.background = "cyan";
    ele[i].style.background = "black";
  }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await selection(2);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
