//Bouce
const clr = document.querySelector('.clear').addEventListener('click', clrBtn)

//definition 
const addBtn = document.querySelector('.addBtn').addEventListener('click', addNewToDo)
const toDoList = document.querySelector('.toDoList')
const dataBase = JSON.parse(localStorage.getItem('listItem')) || [];
// console.log(dataBase);

// const conList = 
updateList(dataBase)

//add button can use enter
document.querySelector('.addContent').addEventListener('keypress', function(e){
    if(e.which === 13){
        addNewToDo();
    } 
})

function addNewToDo(e){
    const content = document.querySelector('.addContent').value;
    // console.log(content);
    if(content.trim().length === 0){
        alert("請輸入文字！！！")
        return;
    }
    const toDo = {
        listItem : content
    }
    
    dataBase.push(toDo)
    updateList(dataBase)
    localStorage.setItem('listItem', JSON.stringify(dataBase))

    document.querySelector('.addContent').value = "";
}


//put data to dataBase
function updateList(dataBase){
    // console.log("更新");
    str = ""
    for(i = 0; i < dataBase.length; i++){
        str += `<li class="toDo" data-num = ${i}>
            <label for="" class="toDoTitle">
                <p>${dataBase[i].listItem}</p>
            </label>
            <button class="delBtn${[i]} delBtn">Del</button>
        </li>
        `
    }
    toDoList.innerHTML = str;
}

// get the del button from toLoList
if(dataBase !== []){
    const delBtn = document.getElementsByClassName('.delBtn').each(addEventListener('click', delData))
}

function delData(e){
    // console.log(e.target.nodeName);
    //only nodeName == button can confrim del
    if(e.target.nodeName === "BUTTON"){
        // console.log(e.target.classList);
        const delCheck = confirm("確認刪除嗎？")
        if(delCheck && e.target.nodeName === "BUTTON"){
            const num = e.target.classList.value.split("")
            const num2 = num[6]
        //         console.log(num2)
            if(num2){
                dataBase.splice(num2, 1)
                localStorage.setItem('listItem', JSON.stringify(dataBase))
                updateList(dataBase)
            }
        }
        return
    }
}


function clrBtn() {
    const clearOrNot = confirm("確定要清除嗎?")
    if(clearOrNot){

    if(updateList !== []){
            localStorage.clear()
            updateList(dataBase)
            location.reload();
        }else{
            alert("已經清空囉！！")
        }
    }
}