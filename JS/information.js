var songBlocks = document.querySelectorAll('.information-card');
songBlocks.forEach(function (block, index) {
  block.addEventListener('click', function () {
    switch (index) {
      case 0:
        alert('这是作者的基本信息。');
        break;
      case 1:
        alert('这是作者的联系方式。');
        break;
      default:
        alert('这是作者的教育背景。');
        break;
    }
  });
});