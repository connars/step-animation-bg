// определяем массив фоновых фотографий



var backgrounds = [
    './img/0000.jpg',
    './img/0001.jpg',
    './img/0002.jpg',
    './img/0003.jpg',
    './img/0004.jpg',
    './img/0005.jpg',
    './img/0006.jpg',
    './img/0007.jpg',
    './img/0008.jpg',
    './img/0009.jpg',
    './img/0010.jpg',
    './img/0011.jpg',
    './img/0012.jpg',
    './img/0013.jpg',
    './img/0014.jpg',
    './img/0015.jpg',
    './img/0016.jpg',
    './img/0017.jpg',
    './img/0018.jpg',
    './img/0019.jpg',
    './img/0020.jpg',
    './img/0021.jpg',
    './img/0022.jpg',
    './img/0023.jpg',
    './img/0024.jpg',
    './img/0025.jpg',
    './img/0026.jpg',
    './img/0027.jpg',
    './img/0028.jpg',
    './img/0029.jpg',
    './img/0030.jpg',
    './img/0031.jpg',
    './img/0032.jpg',
    './img/0033.jpg',
    './img/0034.jpg',
    './img/0035.jpg',
    './img/0036.jpg',
    './img/0037.jpg',
    './img/0038.jpg',
    './img/0039.jpg',
    './img/0040.jpg',
    './img/0041.jpg',
    './img/0042.jpg',
    './img/0043.jpg',
    './img/0044.jpg',
    './img/0045.jpg',
    './img/0046.jpg',
    './img/0047.jpg',
    './img/0048.jpg',
    './img/0049.jpg',
    './img/0050.jpg',
    './img/0051.jpg',
    './img/0052.jpg',
    './img/0053.jpg',
    './img/0054.jpg',
    './img/0055.jpg',
    './img/0056.jpg',
    './img/0057.jpg',
    './img/0058.jpg',
    './img/0059.jpg',
    './img/0060.jpg',
    './img/0061.jpg',
    './img/0062.jpg',
    './img/0063.jpg',
    './img/0064.jpg',
    './img/0065.jpg',
    './img/0066.jpg',
    './img/0067.jpg',
    './img/0068.jpg',
    './img/0069.jpg',
    './img/0070.jpg',
    './img/0071.jpg',
    './img/0072.jpg',
    './img/0073.jpg',
    './img/0074.jpg',
    './img/0075.jpg',
    './img/0076.jpg',
    './img/0077.jpg',
    './img/0078.jpg',
    './img/0079.jpg',
    './img/0080.jpg',
    './img/0081.jpg',
    './img/0082.jpg',
    './img/0083.jpg',
    './img/0084.jpg',
    './img/0085.jpg',
    './img/0086.jpg',
    './img/0087.jpg',
    './img/0088.jpg',
    './img/0089.jpg',
    './img/0090.jpg',
    './img/0091.jpg',
    './img/0092.jpg',
    './img/0093.jpg',
    './img/0094.jpg',
    './img/0095.jpg',
    './img/0096.jpg',
    './img/0097.jpg',
    './img/0098.jpg',
    './img/0099.jpg',
    './img/0100.jpg',
    './img/0101.jpg',
    './img/0102.jpg',
    './img/0103.jpg',
    './img/0104.jpg',
    './img/0105.jpg',
    './img/0106.jpg',
    './img/0107.jpg',
    './img/0108.jpg',
    './img/0109.jpg',
    './img/0110.jpg',
    './img/0111.jpg',
    './img/0112.jpg',
    './img/0113.jpg',
    './img/0114.jpg',
    './img/0115.jpg',
    './img/0116.jpg',
    './img/0117.jpg',
    './img/0118.jpg',
    './img/0119.jpg',
    './img/0120.jpg',
    './img/0121.jpg',
    './img/0122.jpg',
    './img/0123.jpg',
    './img/0124.jpg',
    './img/0125.jpg',
    './img/0126.jpg',
    './img/0127.jpg',
    './img/0128.jpg',
    './img/0129.jpg',
    './img/0130.jpg',
    './img/0131.jpg',
    './img/0132.jpg',
    './img/0133.jpg',
    './img/0134.jpg',
    './img/0135.jpg',
    './img/0136.jpg',
    './img/0137.jpg',
    './img/0138.jpg',
    './img/0139.jpg',
    './img/0140.jpg',
    './img/0141.jpg',
    './img/0142.jpg',
    './img/0143.jpg',
    './img/0144.jpg',
    './img/0145.jpg',
    './img/0146.jpg',
    './img/0147.jpg',
    './img/0148.jpg',
    './img/0149.jpg',
    './img/0150.jpg',
    './img/0151.jpg',
    './img/0152.jpg',
    './img/0153.jpg',
    './img/0154.jpg',
    './img/0155.jpg',
    './img/0156.jpg',
    './img/0157.jpg',
    './img/0158.jpg',
    './img/0159.jpg',
    './img/0160.jpg',
    './img/0161.jpg',
    './img/0162.jpg',
    './img/0163.jpg',
    './img/0164.jpg',
    './img/0165.jpg',
    './img/0166.jpg',
    './img/0167.jpg',
    './img/0168.jpg',
    './img/0169.jpg',
    './img/0170.jpg',
    './img/0171.jpg',
    './img/0172.jpg',
    './img/0173.jpg',
    './img/0174.jpg',
    './img/0175.jpg',
    './img/0176.jpg',
    './img/0177.jpg',
    './img/0178.jpg',
    './img/0179.jpg',
    './img/0180.jpg',
    './img/0181.jpg',
    './img/0182.jpg',
    './img/0183.jpg',
    './img/0184.jpg',
    './img/0185.jpg',
    './img/0186.jpg',
    './img/0187.jpg',
    './img/0188.jpg',
    './img/0189.jpg',
    './img/0190.jpg',
    './img/0191.jpg',
    './img/0192.jpg',
    './img/0193.jpg',
    './img/0194.jpg',
    './img/0195.jpg',
    './img/0196.jpg',
    './img/0197.jpg',
    './img/0198.jpg',
    './img/0199.jpg',
    './img/0200.jpg',
    './img/0201.jpg',
    './img/0202.jpg',
    './img/0203.jpg',
    './img/0204.jpg',
    './img/0205.jpg',
    './img/0206.jpg',
  ];

    var images = [];
        for (var i = 0; i < backgrounds.length; i++) {
        images[i] = new Image();
        images[i].src = backgrounds[i];
    }

    var currentBackground = 0;
    var nextBackground = 1;
    var preloadedImage = new Image();
    
    function changeBackground(event) {

        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta < 0) {
            currentBackground = (currentBackground + 1) % backgrounds.length;
            nextBackground = (currentBackground + 1) % backgrounds.length;
        } else {
            currentBackground = (currentBackground - 1 + backgrounds.length) % backgrounds.length;
            nextBackground = (currentBackground - 1 + backgrounds.length) % backgrounds.length;
        }
        preloadedImage.src = backgrounds[nextBackground];
        
        document.body.style.backgroundImage = 'url(' + backgrounds[currentBackground] + ')';
    }
    
    if (document.addEventListener) {
        document.addEventListener('mousewheel', changeBackground, false);
        document.addEventListener('DOMMouseScroll', changeBackground, false);
    } else {
        document.attachEvent('onmousewheel', changeBackground);
  }