const STORAGE_KEY = "dishes";
let dishes = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (!dishes || dishes.length ===0) {
  dishes = [
      {name:"كباب مشوي", desc:"كباب لحم مشوي مع توابل خاصة.", price:120, img:"images/كباب.jpg", category:"main"},
      {name:"كفتة مشوية", desc:"كفتة لحم مشوية مع البهارات الشرقية اللذيذة.", price:100, img:"images/كفتة لحم.jpg", category:"main"},
      {name:"شاورما دجاج", desc:"شاورما دجاج شهية مع صلصة الطحينة.", price:90, img:"images/شاورما الدجاج.jpg", category:"main"},
      {name:" سلطة", desc:"سلطة خضراء منعشة مع خبز محمص.", price:50, img:"images/سلطة.jpg", category:"salads"},
      {name: "محشي مشكل", desc: "محشي كوسا وباذنجان وفلفل محشو بالأرز واللحم.", price: 110, img: "images/محشي مشكل.jpg", category: "main" },
      {name: "حواوشي", desc: "حواوشي لحم مفروم مع توابل مصرية.", price: 80, img: "images/حواوشي.jpg", category: "main" },
      {name: "كشري",desc: "كشري مصري تقليدي مع العدس والأرز والمكرونة.", price: 60,img:"images/كشري مصري.jpg", category: "main"},
      {name:"كبسة لحم", desc:"كبسة مع اللحم والأرز.", price:85, img:"images/كبسة لحم.jpg", category:"main"},
      {name: "محشي ورق عنب", desc: "محشي ورق عنب محشو بالأرز والخضروات.", price: 70, img: "images/محشي ورق عنب.jpg", category: "main" },
     
     
      {name: "كنافة", desc: "كنافة شرقية محشوة بالجبن ومغطاة بالشربات.", price: 110, img: "images/كنافة.jpg", category: "desserts" },
      {name: "بقلاوة", desc: "بقلاوة محشوة بالمكسرات ومغطاة بالشربات.", price: 115, img: "images/بقلاوة.jpg", category: "desserts" },
      {name: "أم علي", desc: "أم علي حلوى مصرية تقليدية مصنوعة من العجين والحليب والمكسرات.", price: 90, img: "images/ام علي.jpg", category: "desserts" },
     

      {name:"قهوة تركية", desc:"قهوة تركية غنية ومركزة.", price:50, img:"images/قهوة تركية.jpg", category:"drinks"},
      { name:"عصير مانجو", desc:"عصير مانجو طبيعي ومنعش.", price:60, img:"images/عصير مانجو.jpg", category:"drinks"},
      {name:"عصبر فراولة", desc:"عصير فراولة طبيعي ومنعش.", price:60, img:"images/عصير فراولة.jpg", category:"drinks"},
      { name:"شاي بالنعناع", desc:"شاي أخضر مع أوراق النعناع الطازجة.", price:30, img:"images/شاي بالنعناع.jpg", category:"drinks"}, 
      {name:"عصير برتقال", desc:"عصير طبيعي طازج.", price:30, img:"images/عصير برتقال.jpg", category:"drinks"},
      {name:"عصير ليمون", desc:"عصير ليمون منعش مع نعناع.", price:30, img:"images/عصير ليمون.jpg", category:"drinks"},
  
  ];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dishes));
}
function save() {
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dishes));
}