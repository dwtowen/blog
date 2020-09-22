// 使用方法
// /usr/themes/handsome/component/footer.php
// 在</body>后面添加如下一句代码
// <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/dwtowen/blog@master/js/Typecho/blog/public.js"></script>
// 名人名言、座右铭
// 使用方法：
// <p id="hitokoto"><a href="#" id="hitokoto_text"></a></p>

fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
        //   const hitokoto = document.getElementById('hitokoto_text')
        hitokoto.href = data.uuid
        hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)

