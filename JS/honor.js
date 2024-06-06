document.addEventListener('DOMContentLoaded', function () {
  var tableRows = document.querySelectorAll('#play-honor table tr');
  tableRows.forEach(function (row) {
    row.addEventListener('click', function () {
      alert('Try to do better！戒骄戒躁，再创辉煌！');
    });
  });
});
// 获取所有的链接和图片元素
const links = document.querySelectorAll('.honor-link');
const popupImage = document.getElementById('popupImage');
const popupContainer=document.getElementById('popupContainer');
const closeBtn=document.getElementById('closeBtn');
// 为每个链接添加点击事件监听器
links.forEach(link => {
    link.addEventListener('click', function(event) {
        
        event.preventDefault(); // 阻止链接默认行为
        const imagePath = this.getAttribute('href'); // 获取图片路径
     
        popupImage.src = imagePath; // 设置弹出图片的路径
        popupContainer.style.display='block';
        popupImage.style.display = 'block'; // 显示图片
    });
});
closeBtn.addEventListener('click',(event)=>{
       popupContainer.style.display='none';
        popupImage.style.display = 'none'; // 显示图片
})
