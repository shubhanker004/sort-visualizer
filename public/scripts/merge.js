async function merge(ele, low, mid, high) {
  console.log("In merge()");
  console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await waitforme(delay);
    console.log("In merge left loop");
    console.log(ele[low + i].style.height + " at " + (low + i));
    ele[low + i].style.background = "orange";
    left[i] = ele[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await waitforme(delay);
    console.log("In merge right loop");
    console.log(ele[mid + 1 + i].style.height + " at " + (mid + 1 + i));
    ele[mid + 1 + i].style.background = "yellow";
    right[i] = ele[mid + 1 + i].style.height;
  }
  await waitforme(delay);
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await waitforme(delay);
    console.log("In merge while loop");
    console.log(parseInt(left[i]), parseInt(right[j]));

    if (parseInt(left[i]) <= parseInt(right[j])) {
      console.log("In merge while loop if");
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "black";
      } else {
        ele[k].style.background = "cyan";
      }

      ele[k].style.height = left[i];
      i++;
      k++;
    } else {
      console.log("In merge while loop else");
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "black";
      } else {
        ele[k].style.background = "cyan";
      }
      ele[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await waitforme(delay);
    console.log("In while if n1 is left");
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "black";
    } else {
      ele[k].style.background = "cyan";
    }
    ele[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await waitforme(delay);
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "black";
    } else {
      ele[k].style.background = "cyan";
    }
    ele[k].style.height = right[j];
    j++;
    k++;
  }
}

async function mergeSort(ele, l, r, x) {
  console.log("In mergeSort()");

  if(document.getElementById("helper") !== null && x === 5) {

    const helper = document.getElementById("helper");
    helper.remove();
  }

  console.log(document.getElementById("codingArea"));

  if(document.getElementById("helper") === null && x === 5){
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
    const insrtn = document.querySelector('m').textContent;
    console.log(document.getElementById("editor"));
    txtAr.textContent= insrtn;

    var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
      mode: "javascript",
      theme: "dracula",
      readOnly: true,
      showCursorWhenSelecting: false,
    });
    
    editor.setSize("100%", "80vh");
    console.log(editor.getValue());
  }
  

  const avg = document.getElementById('avg');
  avg.textContent="O(n logn)";

  const best = document.getElementById('best');
  best.textContent="O(n logn)";

  const worst = document.getElementById('worst');
  worst.textContent="O(n logn)";

  const space = document.getElementById('space');
  space.textContent="O(n)";

  if (l >= r) {
    console.log(`return cause just 1 elemment l=${l}, r=${r}`);
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  console.log(`left=${l} mid=${m} right=${r}`, typeof m);
  await mergeSort(ele, l, m);
  await mergeSort(ele, m + 1, r);
  await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener("click", async function () {
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = parseInt(ele.length) - 1;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await mergeSort(ele, l, r, 5);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
