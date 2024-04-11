let data = [
    {
        productName: "Bape Full Zip (39-Colorways)",
        category: "bape",
        preciocny: "178.00",
        precioeur: "24.84",
        image: "https://si.geilicdn.com/pcitem1816205840-1b520000018c77dafde70a23132e_800_800.jpg",
        proveedor: "https://weidian.com/item.html?itemID=7001767167&spider_token=4572",
    },
    {
        productName: "Air Force 1 Blancas",
        category: "nike",
        preciocny: "120.00",
        precioeur: "16.75",
        image: "https://si.geilicdn.com/open1673547170-1234478995-70b30000017cd6ab99520a219249_2560_2560.jpg",
        proveedor: "https://weidian.com/item.html?itemID=4438430445&spider_token=4572",
    },
    {
        productName: "Jordan 1 Travis Scott",
        category: "jordan",
        preciocny: "199.00",
        precioeur: "27.77",
        image: "https://si.geilicdn.com/wdseller1551887071-491c000001881c7d77af0a21146b_1170_1170.jpg",
        proveedor: "https://shop1814230492.v.weidian.com/item.html?itemID=4435418252&spider_token=4572",
    },
    {
        productName: "Palm Angels Shorts",
        category: "palmangels",
        preciocny: "45.00",
        precioeur: "5.83",
        image: "https://cbu01.alicdn.com/img/ibank/O1CN011CgEuh1UCLNtVNiCI_!!2920992481-0-cib.jpg",
        proveedor: "https://detail.1688.com/offer/671378802869.html",
    },
    {
        productName: "NBA Shorts",
        category: "nba",
        preciocny: "43.00",
        precioeur: "5.83",
        image: "https://cbu01.alicdn.com/img/ibank/O1CN01L9CCD32LqLYivhMRw_!!2206560409743-0-cib.jpg",
        proveedor: "https://detail.1688.com/offer/610494659403.html",
    },
    {
        productName: "Amiri Polo",
        category: "amiri",
        preciocny: "125.44",
        precioeur: "18.95",
        image: "https://si.geilicdn.com/pcitem1781761601-18c30000018df92556c50a20e284_1080_1080.jpg",
        proveedor: "https://shop1789249809.v.weidian.com/item.html?itemID=7220129981&spider_token=4572",
    },
    {
        productName: "Amiri summer tee",
        category: "amiri",
        preciocny: "24.43",
        precioeur: "161.70",
        image: "https://si.geilicdn.com/pcitem901782690343-58240000018dc585ea6e0a22e433_1080_1080.jpg",
        proveedor: "https://shop1789249809.v.weidian.com/item.html?itemID=7220472479&spider_token=4572",
    },
    {
        productName: "Nike Air Force 1 Negras",
        category: "nike",
        preciocny: "153.00",
        precioeur: "21.22",
        image: "https://si.geilicdn.com/pcitem1781761601-0fa00000018cee9c53240a22d4f5_800_800.jpg",
        proveedor: "https://shop1789249809.v.weidian.com/item.html?itemID=6552526783&spider_token=4572",
    },
    {
        productName: "Airpods Pro 2 Generacion",
        category: "apple",
        preciocny: "195.00",
        precioeur: "27.05",
        image: "https://si.geilicdn.com/pcitem1795456640-5fce0000018afebb7c530a23132e_1440_1920.jpg",
        proveedor: "https://shop1615825713.v.weidian.com/item.html?itemID=6679425668&spider_token=4572",
    },
    {
        productName: "Cinturon Louis Vuitton",
        category: "lv",
        preciocny: "79.00",
        precioeur: "10.96",
        image: "https://si.geilicdn.com/pcitem1795456640-68900000018afee210280a231447_1773_1773.jpg.webp?w=750&h=750&cp=1",
        proveedor: "https://shop1615825713.v.weidian.com/item.html?itemID=6678464185&spider_token=4572",
    },
    {
        productName: "Burberry tee + style",
        category: "burberry",
        preciocny: "125.44",
        precioeur: "18.95",
        image: "https://si.geilicdn.com/pcitem901782690343-457e0000018dada8b02a0a20e273_1200_1200.jpg",
        proveedor: "https://shop1789249809.v.weidian.com/item.html?itemID=6531899047&spider_token=4572",
    },
    {
        productName: "Airforce 1 Blancas",
        category: "nike",
        preciocny: "120.00",
        precioeur: "16.61",
        image: "https://si.geilicdn.com/pcitem1825300622-7ca80000018ce8c8113a0a2104c1_689_377.jpg.webp?w=750&h=750&cp=1",
        proveedor: "https://weidian.com/item.html?itemID=7122591595&spider_token=4572",
    },
    {
        productName: "Trapstar Tracksuit corto",
        category: "trapstar",
        preciocny: "185.00",
        precioeur: "25.61",
        image: "https://si.geilicdn.com/wdseller163498710-15bc00000189aefd68fe0a22d30f_750_750.jpg",
        proveedor: "https://shop1793812577.v.weidian.com/item.html?itemID=6517926475&spider_token=4572",
    },
    {
        productName: "Camiseta Arc'Teryx",
        category: "arcteryx",
        preciocny: "45.00",
        precioeur: "6.23",
        image: "https://si.geilicdn.com/pcitem1420898802-7b4c00000172d5462cfe0a20b7b9_700_700.jpg",
        proveedor: "https://shop1648679456.v.weidian.com/item.html?itemID=3727268851&spider_token=4572",
    },
    {
        productName: "Nike TN",
        category: "nike",
        preciocny: "110.00",
        precioeur: "15.23",
        image: "https://cbu01.alicdn.com/img/ibank/O1CN01wLGVue1uOQ2EXoKTH_!!2217641556027-0-cib.jpg",
        proveedor: "https://detail.1688.com/offer/782167607841.html",
    },
    {
        productName: "Nike X Corteiz",
        category: "nike",
        preciocny: "140.00",
        precioeur: "19.38",
        image: "https://img.alicdn.com/bao/uploaded/i1/2206400253538/O1CN01NdvAC81c0SDv4WVvM_!!2206400253538.png",
        proveedor: "https://item.taobao.com/item.htm?id=726145768645&ft=t",
    },
    {
        productName: "Camiseta Corteiz Verano",
        category: "corteiz",
        preciocny: "45.00",
        precioeur: "6.23",
        image: "https://cbu01.alicdn.com/img/ibank/O1CN01sSRX5y1Gepb82IszM_!!2215432330648-0-cib.jpg",
        proveedor: "https://detail.1688.com/offer/733516577353.html",
    },
    {
        productName: "Pantalones Nike Invierno",
        category: "nike",
        preciocny: "75.00",
        precioeur: "10.38",
        image: "https://si.geilicdn.com/wdseller981500612-615a000001838670d7540a20e273_640_640.jpg",
        proveedor: "https://shop981500612.v.weidian.com/item.html?itemID=5593559065&spider_token=4572",
    },            {
        productName: "Eric Emanuel Shorts",
        category: "ericemanuel",
        preciocny: "29.99",
        precioeur: "4.15",
        image: "https://img.alicdn.com/bao/uploaded/i2/133780852001/O1CN01Ol7ebX1QeVIDgRN5k_!!133780852001.jpg",
        proveedor: "https://detail.tmall.com/item.htm?id=677736694445",
    },
    {
        productName: "Jordan 11 (+25 Colores)",
        category: "jordan",
        preciocny: "249.00",
        precioeur: "34.46",
        image: "https://si.geilicdn.com/wdseller338847680-698a0000018a6af2a31b0a23132e_1296_1296.jpg",
        proveedor: "https://shop338847680.v.weidian.com/item.html?itemID=6015193951&spider_token=4572",
    },
    {
        productName: "Alfombrilla Raton Gaming",
        category: "kaws",
        preciocny: "13.80",
        precioeur: "1.91",
        image: "https://img.alicdn.com/bao/uploaded/i1/3462592616/O1CN0123c8e51VCAuokSy9o_!!3462592616.jpg",
        proveedor: "https://detail.tmall.com/item.htm?id=616117233464",
    },            
    {
        productName: "Vaqueros OverSized",
        category: "jeans",
        preciocny: "8.03",
        precioeur: "58.00",
        image: "https://img.alicdn.com/bao/uploaded/i3/2766286217/O1CN01F18fmA1vnR3fGxpMR_!!2766286217.jpg",
        proveedor: "https://item.taobao.com/item.htm?id=659090513725&ft=t",
    },
    {
        productName: "Cristian Dior TrackSuits",
        category: "dior",
        preciocny: "109.65",
        precioeur: "15.18",
        image: "https://si.geilicdn.com/pcitem901811724134-0a0f0000018e64ef06dc0a21146b_1200_1200.jpg",
        proveedor: "https://shop1804334857.v.weidian.com/item.html?itemID=7222428341&spider_token=4572",
    },
    {
        productName: "Camisetas Polo Ralph Laurent",
        category: "ralphlaurent",
        preciocny: "99.00",
        precioeur: "13.70",
        image: "https://si.geilicdn.com/pcitem901827295368-39160000018dee2321470a2102d0_1200_1200.jpg",
        proveedor: "https://shop1732463785.v.weidian.com/item.html?itemID=7223793431&spider_token=4572",
    },            
    {
        productName: "Louis Vuitton Shorts",
        category: "louisvuitton",
        preciocny: "88.20",
        precioeur: "12.21",
        image: "https://si.geilicdn.com/pcitem901827009666-7dd50000018e64e040490a20e2c5_1200_1200.jpg",
        proveedor: "https://shop1730570793.v.weidian.com/item.html?itemID=7142461263&spider_token=4572",
    },
    {
        productName: "Drake Nocta Tech",
        category: "nocta",
        preciocny: "480.00",
        precioeur: "66.44",
        image: "https://img.alicdn.com/bao/uploaded/i4/2734383507/O1CN016nxVML1bmFu2Kx6HQ_!!2734383507.jpg",
        proveedor: "https://item.taobao.com/item.htm?id=750356171893&ft=t",
    },
    {
        productName: "Jordan Retro 4",
        category: "jordan",
        preciocny: "240.00",
        precioeur: "33.22",
        image: "https://si.geilicdn.com/open1673547170-1234478995-66300000017efcc1008e0a2008af_600_599.jpg",
        proveedor: "https://weidian.com/item.html?itemID=4477393523&spider_token=4572",
    },
];

window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const searchTerm = urlParams.get('q');

    document.getElementById("buscar").value = searchTerm;

    buscar();

    for (let i of data) {
        let card = document.createElement("div");
        card.classList.add("card", i.category);

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");

        let image = document.createElement("img");
        image.setAttribute("src", i.image);
        imgContainer.appendChild(image);

        card.appendChild(imgContainer);

        document.getElementById("productsContainer").appendChild(card);
    }
};

function performSearch(event) {
    event.preventDefault();

    var searchTerm = document.getElementById("search-input").value;

    window.location.href = "productos.html?q=" + encodeURIComponent(searchTerm);
}

function buscar() {
    let query = document.getElementById("buscar").value.toLowerCase().trim();

    if (query === "") {
        return;
    }

    let results = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].productName.toLowerCase().includes(query) || data[i].category.toLowerCase().includes(query)) {
            results.push(data[i]);
        }
    }

    document.getElementById("results").innerHTML = "";

    if (results.length > 0) {
        for (let i = 0; i < results.length; i++) {
            let li = document.createElement("li");
            li.textContent = results[i].productName;
            document.getElementById("results").appendChild(li);
        }
    } else {
        let li = document.createElement("li");
        li.textContent = "No se encontró ninguna coincidencia para " + query;
        document.getElementById("results").appendChild(li);
    }
}

function mostrarInformacionProducto(product) {
    alert("Nombre: " + product.productName + "\nCategoría: " + product.category + "\nPrecio: $" + product.preciocny + " (CNY) / €" + product.precioeur + " (EUR)");
}

window.onload = function() {
    displayProducts();
};

window.onload = function() {
    displayProducts();
};

window.onload = function() {
    displayProducts();
};

function displayProducts() {
    let productsContainer = document.getElementById("productsContainer");

    productsContainer.innerHTML = "";

    data.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        let productName = document.createElement("h2");
        productName.textContent = product.productName;
        productName.style.color = "black";

        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.productName;

        let productInfo = document.createElement("p");
        productInfo.textContent = `Precio CNY: ${product.preciocny}, ${product.precioeur}`;
        productInfo.style.color = "black";

        let providerButton = document.createElement("button");
        providerButton.textContent = "Proveedor";
        providerButton.addEventListener("click", function() {
            window.open(product.proveedor, "_blank");
        });

        productDiv.appendChild(productName);
        productDiv.appendChild(productImage);
        productDiv.appendChild(productInfo);
        productDiv.appendChild(providerButton);

        productsContainer.appendChild(productDiv);
    });
}
