async function insertion(x) {
  console.log("In insertion()");

  if(document.getElementById("helper") !== null && x === 3) {

    const helper = document.getElementById("helper");
    helper.remove();
  }

  console.log(document.getElementById("codingArea"));
  if(document.getElementById("helper") === null && x === 3){
    const helper = document.createElement("div");
    document.getElementById("cntnr").append(helper);
    helper.setAttribute("id", "helper");
    const coding = document.createElement("div");
    coding.setAttribute("id", "codingArea");
    document.getElementById("helper").append(coding);
    coding.classList.add("container");
    coding.classList.add("itemOne");
    console.log(document.getElementById("editor") === null)
    let txtAr;
    txtAr = document.createElement("textarea");
    coding.append(txtAr);
    txtAr.setAttribute("id", "editor");
    coding.setAttribute("class", "itemOne");
    const insrtn = document.querySelector('i').textContent;
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
  console.log(ele);
  ele[0].style.background = "black";
  for (let i = 1; i < ele.length; i++) {
    console.log("In ith loop");
    let j = i - 1;
    let key = ele[i].style.height;
    ele[i].style.background = "cyan";

    await waitforme(delay);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      console.log("In while loop");
      ele[j].style.background = "yellow";
      ele[j + 1].style.height = ele[j].style.height;
      j--;

      await waitforme(delay);

      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "black";
      }
    }
    ele[j + 1].style.height = key;
    ele[i].style.background = "black";
  }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await insertion(3);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});

