async function partitionLomuto(ele, l, r) {
  console.log("In partitionLomuto()");
  let i = l - 1;
  // color pivot element
  ele[r].style.background = "red";
  for (let j = l; j <= r - 1; j++) {
    console.log("In partitionLomuto for j");
    // color current element
    ele[j].style.background = "yellow";
    // pauseChamp
    await waitforme(delay);

    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      console.log("In partitionLomuto for j if");
      i++;
      swap(ele[i], ele[j]);
      // color
      ele[i].style.background = "orange";
      if (i != j) ele[j].style.background = "orange";
      // pauseChamp
      await waitforme(delay);
    } else {
      // color if not less than pivot
      ele[j].style.background = "pink";
    }
  }
  i++;
  // pauseChamp
  await waitforme(delay);
  swap(ele[i], ele[r]); // pivot height one
  console.log(`i = ${i}`, typeof i);
  // color
  ele[r].style.background = "pink";
  ele[i].style.background = "black";

  // pauseChamp
  await waitforme(delay);

  // color
  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background != "black") ele[k].style.background = "cyan";
  }

  return i;
}

async function quickSort(ele, l, r, x) {
  console.log("In quickSort()", `l=${l} r=${r}`, typeof l, typeof r);

  if(document.getElementById("helper") !== null && x === 4) {
    // const body = document.body;
    // body.remove();
    const helper = document.getElementById("helper");
    helper.remove();
  }

  console.log(document.getElementById("codingArea"));

  if(document.getElementById("helper") === null && x === 4){
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
    const insrtn = document.querySelector('q').textContent;
    console.log(document.getElementById("editor"));
    txtAr.textContent= insrtn;

    var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
      mode: "javascript",
      theme: "dracula",
      readOnly: true,
      showCursorWhenSelecting: false,
    });
    
    editor.setSize("100%", "85vh");
    console.log(editor.getValue());
  }
  
  const avg = document.getElementById('avg');
  avg.textContent="O(n logn)";

  const best = document.getElementById('best');
  best.textContent="O(n logn)";

  const space = document.getElementById('space');
  space.textContent="O(n)";


  if (l < r) {
    let pivot_index = await partitionLomuto(ele, l, r);
    await quickSort(ele, l, pivot_index - 1);
    await quickSort(ele, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = "black";
      ele[l].style.background = "black";
    }
  }
}

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener("click", async function () {
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = ele.length - 1;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await quickSort(ele, l, r, 4);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
