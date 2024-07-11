        
 function addComment(){

    //var person = document.getElementById("commentPerson").value;
    
    //获取输入框的值,createTextNode()方法用于创建文本节点
    var person = document.createTextNode(commentForm.commentPerson.value);
    var content = document.createTextNode(commentForm.commentContent.value);
    var time = document.createTextNode(updateTime_2());//获取当前时间

    //创建td元素,createElement()方法用于创建元素节点
    var td_person = document.createElement("td");
    var td_content = document.createElement("td");
    var td_time = document.createElement("td");
    var tr = document.createElement("tr");

    //获取tbody元素，getElementsByTagName()方法用于获取指定标签名的元素列表
    var tbody = document.getElementsByTagName("tbody")[0];

    //向td元素中添加内容，appendChild()方法可以添加一个节点或节点列表到另一个节点的末尾
    td_person.appendChild(person);
    td_content.appendChild(content);
    td_time.appendChild(time);

    tr.appendChild(td_person);
    tr.appendChild(td_content);
    tr.appendChild(td_time);

    tbody.appendChild(tr);

    var tComment = document.getElementById("commentTable");
    tComment.appendChild(tbody);

    commentForm.commentPerson.value = "";
    commentForm.commentContent.value = "";

}

function refreshComment(){
    location.reload();//刷新页面,reload()方法用于重新加载当前页面
}

function deleteComment(){
    var tComment = document.getElementById("commentTable");
    var tbody = tComment.getElementsByTagName("tbody")[0];
    if(tbody.rows.length > 0){
        tbody.deleteRow(tbody.rows.length-1);//删除最后一行,deleteRow()方法用于删除指定行,参数为行索引值,从0开始
    } else{
        alert("没有评论可以删除！");
    }

}

function clearComment(){
    var tComment = document.getElementById("commentTable");
    var tbody = tComment.getElementsByTagName("tbody")[0];
    if(tbody){
        while(tbody.firstChild){
            tbody.removeChild(tbody.firstChild);//removeChild()方法用于删除指定节点
        }
    }
}

function reLogin(){
    window.open("../Login&Register/Login&Register.html");
    setTimeout(() => {console.log("停顿0.01秒后再关闭本页面");}, 10);
    window.close();
}