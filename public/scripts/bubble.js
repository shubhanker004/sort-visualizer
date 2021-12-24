async function bubble(x) {
  if(document.getElementById("helper") !== null && x === 1) {

    const helper = document.getElementById("helper");
    helper.remove();
  }

  console.log(document.getElementById("codingArea"));

  if(document.getElementById("helper") === null && x === 1){
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
    const insrtn = document.querySelector('b').textContent;
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
  

  const best = document.getElementById('best');
  best.textContent="O(n)";

  const space = document.getElementById('space');
  space.textContent="O(1)";

  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    console.log("In ith loop");
    for (let j = 0; j < ele.length - i - 1; j++) {
      console.log("In jth loop");
      ele[j].style.background = "blue";
      ele[j + 1].style.background = "blue";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        console.log("In if condition");
        await waitforme(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "cyan";
      ele[j + 1].style.background = "cyan";
    }
    ele[ele.length - 1 - i].style.background = "black";
  }
  ele[0].style.background = "black";
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await bubble(1);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
