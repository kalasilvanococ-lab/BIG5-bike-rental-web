'use strict';
/* ════════════════════════════════════
   CONFIG
════════════════════════════════════ */
const SHOP_LAT=7.0707, SHOP_LNG=125.6087;
const SHOP_NAME='BIG5 Bicycle Rentals — Cagayan de Oro';
const MIN_HOURS=1;

/* ════════════════════════════════════
   BIKE SVG GENERATOR
════════════════════════════════════ */
function mkBikeSvg(color1,color2,style){
  const styles={
    side:`<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" width="100%">
      <circle cx="90" cy="170" r="62" fill="none" stroke="${color1}" stroke-width="6" opacity=".3"/>
      <circle cx="90" cy="170" r="62" fill="none" stroke="${color1}" stroke-width="2.5"/>
      <circle cx="90" cy="170" r="42" fill="none" stroke="${color1}" stroke-width="1.2" stroke-dasharray="6 6" opacity=".35"/>
      <circle cx="90" cy="170" r="9" fill="${color1}"/>
      <line x1="90" y1="108" x2="90" y2="232" stroke="${color1}" stroke-width="1.5" opacity=".35"/>
      <line x1="28" y1="170" x2="152" y2="170" stroke="${color1}" stroke-width="1.5" opacity=".35"/>
      <line x1="46" y1="108" x2="134" y2="232" stroke="${color1}" stroke-width="1.5" opacity=".35"/>
      <line x1="134" y1="108" x2="46" y2="232" stroke="${color1}" stroke-width="1.5" opacity=".35"/>
      <circle cx="290" cy="170" r="62" fill="none" stroke="${color1}" stroke-width="6" opacity=".3"/>
      <circle cx="290" cy="170" r="62" fill="none" stroke="${color1}" stroke-width="2.5"/>
      <circle cx="290" cy="170" r="42" fill="none" stroke="${color1}" stroke-width="1.2" stroke-dasharray="6 6" opacity=".35"/>
      <circle cx="290" cy="170" r="9" fill="${color1}"/>
      <line x1="290" y1="108" x2="290" y2="232" stroke="${color1}" stroke-width="1.5" opacity=".35"/>
      <line x1="228" y1="170" x2="352" y2="170" stroke="${color1}" stroke-width="1.5" opacity=".35"/>
      <path d="M90 170 L180 88 L290 170" fill="none" stroke="${color2}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 88 L158 170" fill="none" stroke="${color2}" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M158 170 L90 170" fill="none" stroke="${color2}" stroke-width="3.5" stroke-linecap="round" opacity=".8"/>
      <path d="M158 170 L290 170" fill="none" stroke="${color2}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
      <path d="M180 88 L195 54" fill="none" stroke="${color2}" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M290 170 L272 104 L195 54" fill="none" stroke="${color2}" stroke-width="4" stroke-linecap="round"/>
      <path d="M186 52 Q195 42 210 46 Q219 48 217 57" fill="none" stroke="${color2}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M190 90 Q196 80 208 82 Q218 84 215 90" fill="none" stroke="${color2}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="158" cy="170" r="14" fill="none" stroke="${color1}" stroke-width="2.5"/>
      <circle cx="158" cy="170" r="5" fill="${color1}"/>
      <circle cx="158" cy="170" r="20" fill="none" stroke="${color1}" stroke-width="1" opacity=".2" stroke-dasharray="4 3"/>
    </svg>`,
    detail:`<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="60" y="60" width="260" height="120" rx="4" fill="none" stroke="${color1}" stroke-width="1" opacity=".15" stroke-dasharray="4 4"/>
      <text x="190" y="28" text-anchor="middle" font-family="Anton,sans-serif" font-size="11" fill="${color1}" opacity=".4" letter-spacing="4">FRAME DETAIL</text>
      <circle cx="90" cy="170" r="55" fill="none" stroke="${color1}" stroke-width="5" opacity=".25"/>
      <circle cx="90" cy="170" r="55" fill="none" stroke="${color1}" stroke-width="2"/>
      <circle cx="90" cy="170" r="8" fill="${color1}"/>
      <circle cx="290" cy="170" r="55" fill="none" stroke="${color1}" stroke-width="5" opacity=".25"/>
      <circle cx="290" cy="170" r="55" fill="none" stroke="${color1}" stroke-width="2"/>
      <circle cx="290" cy="170" r="8" fill="${color1}"/>
      <path d="M90 170 L185 90 L290 170" fill="none" stroke="${color2}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M185 90 L160 170" fill="none" stroke="${color2}" stroke-width="5" stroke-linecap="round"/>
      <path d="M185 90 L200 55" fill="none" stroke="${color2}" stroke-width="5" stroke-linecap="round"/>
      <path d="M290 170 L270 100 L200 55" fill="none" stroke="${color2}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="155" cy="170" r="16" fill="none" stroke="${color1}" stroke-width="3"/>
      <circle cx="155" cy="170" r="6" fill="${color1}"/>
      <path d="M195 55 Q200 44 215 46 Q225 48 222 57" fill="none" stroke="${color2}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="155" y1="154" x2="168" y2="183" stroke="${color1}" stroke-width="3" stroke-linecap="round"/>
      <line x1="140" y1="183" x2="168" y2="183" stroke="${color1}" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="90" cy="170" r="30" fill="none" stroke="${color1}" stroke-width="1" opacity=".2" stroke-dasharray="3 3"/>
      <circle cx="290" cy="170" r="30" fill="none" stroke="${color1}" stroke-width="1" opacity=".2" stroke-dasharray="3 3"/>
    </svg>`,
    angle:`<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" width="100%">
      <text x="190" y="28" text-anchor="middle" font-family="Anton,sans-serif" font-size="11" fill="${color1}" opacity=".4" letter-spacing="4">3/4 VIEW</text>
      <ellipse cx="100" cy="175" rx="65" ry="22" fill="none" stroke="${color1}" stroke-width="2.5"/>
      <ellipse cx="100" cy="175" rx="44" ry="14" fill="none" stroke="${color1}" stroke-width="1.2" stroke-dasharray="5 5" opacity=".35"/>
      <ellipse cx="100" cy="175" rx="10" ry="5" fill="${color1}"/>
      <ellipse cx="290" cy="175" rx="65" ry="22" fill="none" stroke="${color1}" stroke-width="2.5"/>
      <ellipse cx="290" cy="175" rx="44" ry="14" fill="none" stroke="${color1}" stroke-width="1.2" stroke-dasharray="5 5" opacity=".35"/>
      <ellipse cx="290" cy="175" rx="10" ry="5" fill="${color1}"/>
      <path d="M100 175 L190 95 L290 175" fill="none" stroke="${color2}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M190 95 L165 175" fill="none" stroke="${color2}" stroke-width="5" stroke-linecap="round"/>
      <path d="M165 175 L100 175" fill="none" stroke="${color2}" stroke-width="3.5" opacity=".7" stroke-linecap="round"/>
      <path d="M190 95 L205 60" fill="none" stroke="${color2}" stroke-width="5" stroke-linecap="round"/>
      <path d="M290 175 L272 108 L205 60" fill="none" stroke="${color2}" stroke-width="4" stroke-linecap="round"/>
      <path d="M196 58 Q205 47 220 50 Q230 53 228 62" fill="none" stroke="${color2}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M193 97 Q200 87 214 90 Q223 93 220 98" fill="none" stroke="${color2}" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="165" cy="175" rx="15" ry="7" fill="none" stroke="${color1}" stroke-width="2.5"/>
      <ellipse cx="165" cy="175" rx="6" ry="4" fill="${color1}"/>
      <line x1="165" y1="168" x2="176" y2="192" stroke="${color1}" stroke-width="3" stroke-linecap="round"/>
      <line x1="154" y1="192" x2="176" y2="192" stroke="${color1}" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    spec:`<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" width="100%">
      <text x="190" y="28" text-anchor="middle" font-family="Anton,sans-serif" font-size="11" fill="${color1}" opacity=".4" letter-spacing="4">SPEC SHEET</text>
      <rect x="20" y="40" width="340" height="170" rx="2" fill="none" stroke="${color1}" stroke-width=".8" opacity=".12"/>
      <circle cx="96" cy="172" r="56" fill="none" stroke="${color1}" stroke-width="4.5" opacity=".2"/>
      <circle cx="96" cy="172" r="56" fill="none" stroke="${color1}" stroke-width="2"/>
      <circle cx="96" cy="172" r="8" fill="${color1}"/>
      <circle cx="288" cy="172" r="56" fill="none" stroke="${color1}" stroke-width="4.5" opacity=".2"/>
      <circle cx="288" cy="172" r="56" fill="none" stroke="${color1}" stroke-width="2"/>
      <circle cx="288" cy="172" r="8" fill="${color1}"/>
      <path d="M96 172 L186 93 L288 172" fill="none" stroke="${color2}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M186 93 L162 172" fill="none" stroke="${color2}" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M186 93 L200 58" fill="none" stroke="${color2}" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M288 172 L270 103 L200 58" fill="none" stroke="${color2}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="162" cy="172" r="14" fill="none" stroke="${color1}" stroke-width="2.5"/>
      <circle cx="162" cy="172" r="5" fill="${color1}"/>
      <line x1="40" y1="52" x2="40" y2="202" stroke="${color1}" stroke-width=".5" opacity=".15"/>
      <line x1="70" y1="52" x2="70" y2="202" stroke="${color1}" stroke-width=".5" opacity=".15"/>
      <line x1="20" y1="80" x2="360" y2="80" stroke="${color1}" stroke-width=".5" opacity=".1"/>
      <line x1="20" y1="140" x2="360" y2="140" stroke="${color1}" stroke-width=".5" opacity=".1"/>
    </svg>`
  };
  return styles[style]||styles.side;
}


/* ════════════════════════════════════
   BIKE DATA
════════════════════════════════════ */
const BIKES=[
  {
    id:1,name:'Marlin 7',brand:'Trek',type:'mountain',emoji:'🚵',
    priceHr:120,priceDay:750,available:true,
    desc:'The Trek Marlin 7 is a confidence-inspiring trail destroyer built for all-day adventures. With a lightweight Alpha Silver aluminum frame and Shimano hydraulic disc brakes, it handles Cagayan de Oro\'s mountain trails and technical descents with authority.',
    specs:[
      {icon:'img/kani(1).png',label:'Frame',val:'Alpha Silver Aluminum'},
      {icon:'img/kani2(1).png',label:'Fork',val:'SR Suntour XCT, 100mm'},
      {icon:'img/kani3(1).png',label:'Drivetrain',val:'Shimano Deore 1x10'},
      {icon:'img/kani4(1).png',label:'Brakes',val:'Hydraulic Disc'},
      {icon:'img/kani5(1).png',label:'Wheels',val:'29" TLR Ready'},
      {icon:'img/specs/weight.png',label:'Weight',val:'13.6 kg'},
    ],
    features:['Hydraulic Disc Brakes','Dropper Post Ready','Tubeless Ready Tires','Trail Geometry','29" Wheels','Shimano Alivio'],
    colors:['#4a7c59','#2d5a3d'],
    images:['img/123-removebg-preview.png']
  },
  {
    id:2,name:'CAAD13',brand:'Cannondale',type:'road',emoji:'🚴',
    priceHr:150,priceDay:950,available:true,
    desc:'The Cannondale CAAD13 is the fastest aluminum road bike money can buy. Refined geometry, stiff SmartForm alloy, and race-ready components make this the go-to for anyone who wants to feel the wind at speed on Cagayan de Oro\'s roads.',
    specs:[
      {icon:'img/TY(1).png',label:'Frame',val:'SmartForm C1 Alloy'},
      {icon:'img/RO(1).png',label:'Fork',val:'CAAD13 Full Carbon'},
      {icon:'img/N(1).png',label:'Drivetrain',val:'Shimano 105 2x11'},
      {icon:'img/AL(1).png',label:'Brakes',val:'Shimano 105 Flat-mount'},
      {icon:'img/CA(1).png',label:'Wheels',val:'700c Mavic Aksium'},
      {icon:'⚖️',label:'Weight',val:'8.5 kg'},
    ],
    features:['Carbon Fork','Shimano 105 11-speed','Flat-mount Disc','Race Geometry','Aero Tubing','Mavic Aksium Wheels'],
    colors:['#c4522a','#8b2000'],
    images:['img/2.png']
  },
  {
    id:3,name:'Sirrus X 4.0',brand:'Specialized',type:'hybrid',emoji:'🚲',
    priceHr:100,priceDay:600,available:true,
    desc:'The Specialized Sirrus X 4.0 blurs the line between speed and versatility. Equally at home on paved roads, gravel paths, and light trails, it\'s the ideal bike for exploring Cagayan de Oro by any means necessary.',
    specs:[
      {icon:'img/over(2).png',label:'Frame',val:'A1 Premium Aluminum'},
      {icon:'img/over(4).png',label:'Fork',val:'Specialized Body Geometry'},
      {icon:'img/over(3).png',label:'Drivetrain',val:'Shimano Deore 1x10'},
      {icon:'img/over(1).png',label:'Brakes',val:'Tektro Hydraulic Disc'},
      {icon:'img/over(5).png',label:'Wheels',val:'700c x 38c Gravel'},
      {icon:'⚖️',label:'Weight',val:'10.8 kg'},
    ],
    features:['Versatile Geometry','Wide Gravel Tires','Fender Mounts','Rack Compatible','Hydraulic Disc','Body Geometry Saddle'],
    colors:['#6aad7e','#4a7c59'],
    images:['img/10-removebg-preview.png']
  },
  {
    id:4,name:'Roam E+ 2',brand:'Giant',type:'electric',emoji:'⚡',
    priceHr:220,priceDay:1400,available:true,
    desc:'The Giant Roam E+ brings electric assist to the hybrid category. With Giant\'s SyncDrive Sport motor and 500Wh battery, you can cover incredible distances without breaking a sweat — perfect for all-day Cagayan de Oro explorations.',
    specs:[
      {icon:'img/sge1(1).png',label:'Motor',val:'Giant SyncDrive Sport 80Nm'},
      {icon:'img/sge2(1).png',label:'Battery',val:'500Wh EnergyPak'},
      {icon:'img/sge3(1).png',label:'Range',val:'Up to 130 km'},
      {icon:'img/sge4(1).png',label:'Brakes',val:'Shimano BR-MT520 Hyd.'},
      {icon:'img/sge5(1).png',label:'Frame',val:'AluxX SL Aluminum'},
      {icon:'⚖️',label:'Weight',val:'24.5 kg'},
    ],
    features:['SyncDrive Sport Motor','500Wh Battery','EnergyPak Display','5 Assist Modes','Walk Assist','USB Charging Port'],
    colors:['#2563eb','#1e40af'],
    images:['img/3-removebg-preview.png']
  },
  {
    id:5,name:'Escape 3',brand:'Giant',type:'city',emoji:'🏙️',
    priceHr:80,priceDay:480,available:false,
    desc:'The Giant Escape 3 is the essential city companion — lightweight, comfortable, and perfectly geared for Cagayan de Oro\'s urban streets. Upright geometry keeps you relaxed and visible in traffic.',
    specs:[
      {icon:'img/oke(1).png',label:'Frame',val:'AluxX Aluminum'},
      {icon:'img/oke(1).png',label:'Fork',val:'Advanced-Grade Composite'},
      {icon:'img/oke(3).png',label:'Drivetrain',val:'Shimano Acera 3x8'},
      {icon:'img/oke(4).png',label:'Brakes',val:'Tektro Mechanical Disc'},
      {icon:'img/oke(5).png',label:'Wheels',val:'700c x 32c City'},
      {icon:'⚖️',label:'Weight',val:'9.8 kg'},
    ],
    features:['Upright Ergonomics','Fender & Rack Ready','Reflective Tires','City Geometry','Kickstand Included','Lightweight Alloy'],
    colors:['#b8a98e','#7a6a55'],
    images:['img/4-removebg-preview.png']
  },
  {
    id:6,name:'Rockhopper Pro',brand:'Specialized',type:'mountain',emoji:'🏔️',
    priceHr:130,priceDay:800,available:true,
    desc:'The Specialized Rockhopper Pro is a hardtail built to exceed expectations. Its FACT 9m carbon fiber fork soaks up trail chatter while the agile geometry enables precise cornering on Cagayan de Oro\'s rugged terrain.',
    specs:[
      {icon:'img/pwede(1).png',label:'Frame',val:'A1 Premium Aluminum'},
      {icon:'img/goods(1).png',label:'Fork',val:'FACT 9m Carbon, 120mm'},
      {icon:'img/goods(3).png',label:'Drivetrain',val:'SRAM SX Eagle 1x12'},
      {icon:'img/goods(4).png',label:'Brakes',val:'SRAM DB8 Hydraulic'},
      {icon:'img/goods(5).png',label:'Wheels',val:'29" Slaughter Tires'},
      {icon:'⚖️',label:'Weight',val:'12.3 kg'},
    ],
    features:['Carbon Fork','SRAM Eagle 12-speed','SRAM Hydraulic Brakes','29" Trail Tires','Trail Geometry','Boost Spacing'],
    colors:['#4a7c59','#8b2000'],
    images:['img/5.png']
  },
  {
    id:7,name:'SuperSix EVO',brand:'Cannondale',type:'road',emoji:'🚴',
    priceHr:180,priceDay:1150,available:true,
    desc:'A race-bred machine that translates to an unforgettable road experience. The SuperSix EVO\'s aerodynamic carbon frame slices through wind, while its balanced geometry keeps longer rides comfortable.',
    specs:[
      {icon:'⚙️',label:'Frame',val:'BallisTec Carbon'},
      {icon:'🔧',label:'Fork',val:'HollowGram KNØT'},
      {icon:'⛓',label:'Drivetrain',val:'Shimano Ultegra R8000'},
      {icon:'🛑',label:'Brakes',val:'Ultegra R8070 Hyd.'},
      {icon:'🔩',label:'Wheels',val:'WheelSystem 45'},
      {icon:'⚖️',label:'Weight',val:'7.1 kg'},
    ],
    features:['BallisTec Carbon Frame','Ultegra 11-speed','Carbon Wheels','Aero Tubing','Race Geometry','Integrated Cockpit'],
    colors:['#c4522a','#1a1a1a'],
    images:['img/6-removebg-preview.png']
  },
  {
    id:8,name:'Fastroad E+ EX',brand:'Giant',type:'electric',emoji:'⚡',
    priceHr:240,priceDay:1500,available:false,
    desc:'The Giant Fastroad E+ EX is an electric road speed machine. Its slim, integrated battery and powerful motor are hidden within a sleek frame that looks and handles just like a premium road bike.',
    specs:[
      {icon:'⚡',label:'Motor',val:'Giant SyncDrive Core'},
      {icon:'🔋',label:'Battery',val:'400Wh Integrated'},
      {icon:'📏',label:'Range',val:'Up to 100 km'},
      {icon:'🛑',label:'Brakes',val:'Shimano RS505 Hyd.'},
      {icon:'⚙️',label:'Frame',val:'Advanced Grade Composite'},
      {icon:'⚖️',label:'Weight',val:'11.2 kg'},
    ],
    features:['Integrated Battery Design','3 Assist Modes','Road Geometry','Carbon Frame','Hydraulic Disc','Anti-theft Lock'],
    colors:['#2563eb','#6aad7e'],
    images:['img/7-removebg-preview.png']
  },
  {
    id:9,name:'FX 3 Disc',brand:'Trek',type:'city',emoji:'🏙️',
    priceHr:90,priceDay:540,available:true,
    desc:'The Trek FX 3 is the urban commuter perfected. Fast, comfortable, and equipped with disc brakes for all-weather confidence. Perfect for Cagayan de Oro city rides, markets, and casual coastal cruises.',
    specs:[
      {icon:'⚙️',label:'Frame',val:'Alpha Silver Aluminum'},
      {icon:'🔧',label:'Fork',val:'Chromoly Steel'},
      {icon:'⛓',label:'Drivetrain',val:'Shimano Alivio 1x9'},
      {icon:'🛑',label:'Brakes',val:'Shimano Mechanical Disc'},
      {icon:'🔩',label:'Wheels',val:'700c x 35c'},
      {icon:'⚖️',label:'Weight',val:'10.2 kg'},
    ],
    features:['Disc Brakes','Internal Cable Routing','Rack & Fender Mounts','City-tuned Gearing','Flat Bar','Ergon Grips'],
    colors:['#4a7c59','#1a1a1a'],
    images:['img/8.png']
  },
  {
    id:10,name:'Sirrus 4.0',brand:'Specialized',type:'hybrid',emoji:'🚲',
    priceHr:110,priceDay:680,available:true,
    desc:'The Specialized Sirrus 4.0 is purpose-built for fitness riding. Its carbon fork, lightweight alloy frame, and performance components deliver a genuinely fast experience on any paved or light-gravel surface.',
    specs:[
      {icon:'⚙️',label:'Frame',val:'A1 Premium Aluminum'},
      {icon:'🔧',label:'Fork',val:'FACT Carbon'},
      {icon:'⛓',label:'Drivetrain',val:'Shimano Tiagra 2x10'},
      {icon:'🛑',label:'Brakes',val:'TRP Spyke Disc'},
      {icon:'🔩',label:'Wheels',val:'700c x 32c'},
      {icon:'⚖️',label:'Weight',val:'9.4 kg'},
    ],
    features:['FACT Carbon Fork','Fitness Geometry','Shimano Tiagra','Body Geometry Saddle','Fender Mounts','Quick-release Wheels'],
    colors:['#6aad7e','#b8a98e'],
    images:['img/9.png']
  },
];

/* ════════════════════════════════════
   BOOKINGS (demo data)
════════════════════════════════════ */
const BOOKINGS={
  'PBK-2025-001':{rider:'Alexistamol Bastatas',bike:'Trek Marlin 7',phone:'+63 912 000 0001',email:'alek@email.com',dest:'Eden Nature Park',start:Date.now()-3600000,end:Date.now()+7200000,lat:7.080,lng:125.612,status:'active'},
  'PBK-2025-002':{rider:'Zean Anthony Adajar',bike:'Giant Roam E+ 2',phone:'+63 912 000 0002',email:'bio@email.com',dest:'Samal Island',start:Date.now()-1800000,end:Date.now()+5400000,lat:7.063,lng:125.601,status:'active'},
  'PBK-2025-003':{rider:'Ryan Palac',bike:'Cannondale CAAD13',phone:'+63 912 000 0003',email:'carlos@email.com',dest:'Malagos Garden',start:Date.now()-7200000,end:Date.now()-600000,lat:7.075,lng:125.630,status:'overdue'},
  'PBK-2025-004':{rider:'Tyron Karim Silvano',bike:'Specialized Sirrus X 4.0',phone:'+63 912 000 0004',email:'maria@email.com',dest:'Philippine Eagle Center',start:Date.now()+3600000,end:Date.now()+86400000,lat:SHOP_LAT,lng:SHOP_LNG,status:'pending'},
};

/* ════════════════════════════════════
   STATE
════════════════════════════════════ */
let maps={},markers={},dirRend=null,placeSvc=null;
let acTimer=null,trackInt=null,admTrackInt=null;
let selDest=null,lastRef=null,fData={};
let curBike=null,galIdx=0;

/* ════════════════════════════════════
   INIT
════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  initCursor(); initHeader(); initMarquee();
  renderFleet('all'); initFilters();
  populateSelect(); setMinDates(); initScrollFade();
  loadMaps();
  buildWeekChart(); buildMonthChart(); buildAdmFleet();
  renderRentalsTable('ovActiveTable');
  renderRentalsTable('rentalsTable');
  renderAllBookings();
  buildActivity();
  buildUtil();
  startClock();
});

/* ── CLOCK ── */
function startClock(){
  const el=document.getElementById('admClock');
  setInterval(()=>{el.textContent=new Date().toLocaleTimeString('en-PH');},1000);
}

/* ── MARQUEE ── */
function initMarquee(){
  const items=['Mountain Bikes','Road Bikes','Electric Bikes','Hybrid Bikes','City Bikes','Safety Helmets Included','24/7 Support','Starting ₱80/hr','Cagayan de Oro City'];
  let html='';
  for(let i=0;i<4;i++) items.forEach(it=>{html+=`<span class="marquee-item">${it}<span class="marquee-sep">✦</span></span>`;});
  document.getElementById('marqueeInner').innerHTML=html;
}

/* ════════════════════════════════════
   FLEET RENDER
════════════════════════════════════ */
function renderFleet(filter){
  const grid=document.getElementById('fleetGrid'); grid.innerHTML='';
  const list=filter==='all'?BIKES:BIKES.filter(b=>b.type===filter);
  list.forEach((b,i)=>{
    const card=document.createElement('div');
    card.className='bike-card';
    card.style.animationDelay=(i*.06)+'s';
    card.innerHTML=`
      <div class="card-vis" onclick="openBikeModal(${b.id})">
        <div class="card-vis-bg">${b.emoji}</div>
        ${b.images && b.images[0]
          ? `<img src="${b.images[0]}" alt="${b.brand} ${b.name}"
               style="width:85%;max-height:170px;object-fit:contain;position:relative;z-index:2;
                      transition:transform .4s;filter:drop-shadow(0 4px 16px rgba(0,0,0,.15))"
               class="bike-card-img"/>`
          : `<div class="bike-svg-wrap">${mkBikeSvg(b.colors[0],b.colors[1],'side')}</div>`
        }
        <div class="card-tag tag-${b.type}">${b.type}</div>
        <div class="card-avail ${b.available?'yes':'no'}" title="${b.available?'Available':'Rented'}"></div>
        <div class="card-hover-cta"><span>View Details</span></div>
      </div>
      <div class="card-body">
        <div class="card-name">${b.name}</div>
        <div class="card-brand">${b.brand}</div>
        <div class="card-spec-row">
          <span class="cspec"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>₱${b.priceHr}/hr</span>
          <span class="cspec"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>${b.available?'Available':'Rented'}</span>
        </div>
        <div class="card-foot">
          <div class="card-price">₱${b.priceHr}<sub>/hr</sub></div>
          <div class="card-btns">
            <button class="cbtn" onclick="openBikeModal(${b.id})">Details</button>
            <button class="cbtn primary" onclick="bookBike(${b.id})">Book</button>
          </div>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function initFilters(){
  document.querySelectorAll('.flt-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.flt-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active'); renderFleet(btn.dataset.f);
    });
  });
}

function bookBike(id){
  scrollTo('book');
  setTimeout(()=>{document.getElementById('bikeSelect').value=id;calcPrice();},600);
}

function populateSelect(){
  const sel=document.getElementById('bikeSelect');
  BIKES.forEach(b=>{
    const o=document.createElement('option');
    o.value=b.id;
    o.textContent=`${b.brand} ${b.name} — ₱${b.priceHr}/hr${b.available?'':' (Rented)'}`;
    sel.appendChild(o);
  });
}

/* ════════════════════════════════════
   BIKE DETAIL MODAL
════════════════════════════════════ */
function openBikeModal(id){
  const b=BIKES.find(x=>x.id===id); if(!b)return;
  curBike=b; galIdx=0;
  const main=document.getElementById('bgMain');
  main.innerHTML='';
  const thumbs=document.getElementById('bgThumbs');

  if(b.images && b.images.length){
    // Use real photos
    b.images.forEach((src,i)=>{
      const slide=document.createElement('div');
      slide.className='gallery-slide'+(i===0?' active':'');
      slide.innerHTML=`
        <div class="gallery-slide-bg">${b.emoji}</div>
        <img src="${src}" alt="${b.brand} ${b.name} view ${i+1}"
             style="max-height:85%;width:auto;max-width:90%;object-fit:contain;
                    position:relative;z-index:2;
                    filter:drop-shadow(0 8px 32px rgba(0,0,0,.18))"/>`;
      main.appendChild(slide);
    });
    thumbs.innerHTML=b.images.map((src,i)=>`
      <div class="gthumb${i===0?' active':''}" onclick="setGalIdx(${i})"
           style="background-image:url('${src}');background-size:cover;background-position:center">
      </div>`).join('');
  } else {
    // Fallback to SVG views
    const views=['side','detail','angle','spec'];
    const viewNames=['Side View','Frame Detail','3/4 View','Spec Sheet'];
    views.forEach((v,i)=>{
      const slide=document.createElement('div');
      slide.className='gallery-slide'+(i===0?' active':'');
      slide.innerHTML=`<div class="gallery-slide-bg">${b.emoji}</div>${mkBikeSvg(b.colors[0],b.colors[1],v)}`;
      main.appendChild(slide);
    });
    thumbs.innerHTML=views.map((v,i)=>`
      <div class="gthumb${i===0?' active':''}" onclick="setGalIdx(${i})">
        ${viewNames[i].split(' ')[0].charAt(0)}
      </div>`).join('');
  }

  document.getElementById('bdAvail').className=`avail-pill ${b.available?'ap-yes':'ap-no'}`;
  document.getElementById('bdAvail').innerHTML=b.available
    ?'<span style="width:5px;height:5px;border-radius:50%;background:var(--moss);display:inline-block;margin-right:5px;"></span>Available Now'
    :'<span style="width:5px;height:5px;border-radius:50%;background:var(--rust);display:inline-block;margin-right:5px;"></span>Currently Rented';
  document.getElementById('bdName').textContent=b.name;
  document.getElementById('bdBrand').textContent=b.brand+' · '+b.type.charAt(0).toUpperCase()+b.type.slice(1);
  document.getElementById('bdPriceHr').textContent='₱'+b.priceHr+' /hr';
  document.getElementById('bdPriceDay').textContent='₱'+b.priceDay+' / full day';
  document.getElementById('bdDesc').textContent=b.desc;
  document.getElementById('bdSpecs').innerHTML=b.specs.map(s=>`
    <div class="spec-box">
      <div class="sb-icon"><img src="${s.icon}" alt="${s.label}"></div>
      <div class="sb-lbl">${s.label}</div>
      <div class="sb-val">${s.val}</div>
    </div>`).join('');
  document.getElementById('bdFeats').innerHTML=b.features.map(f=>`<span class="feat-tag">${f}</span>`).join('');
  document.getElementById('bikeOv').classList.add('open');
  document.body.style.overflow='hidden';
}

function setGalIdx(i){
  galIdx=i;
  document.querySelectorAll('.gallery-slide').forEach((s,idx)=>s.classList.toggle('active',idx===i));
  document.querySelectorAll('.gthumb').forEach((t,idx)=>t.classList.toggle('active',idx===i));
}

function galleryNav(dir){
  const slides=document.querySelectorAll('.gallery-slide');
  galIdx=(galIdx+dir+slides.length)%slides.length;
  setGalIdx(galIdx);
}

function closeBikeModal(){
  document.getElementById('bikeOv').classList.remove('open');
  document.body.style.overflow='';
}

function bookFromModal(){
  closeBikeModal();
  if(curBike){
    scrollTo('book');
    setTimeout(()=>{document.getElementById('bikeSelect').value=curBike.id;calcPrice();},700);
  }
}

document.getElementById('bikeOv').addEventListener('click',e=>{if(e.target===e.currentTarget)closeBikeModal();});

/* ════════════════════════════════════
   MAP
════════════════════════════════════ */
function loadMaps(){
  const link=document.createElement('link');
  link.rel='stylesheet';link.href='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
  document.head.appendChild(link);
  const s=document.createElement('script');
  s.src='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
  s.onload=initLeaflet;
  document.head.appendChild(s);
}

function initLeaflet(){
  document.getElementById('mapPh').style.display='none';
  maps.book=L.map('bookMap',{zoomControl:true,attributionControl:false});
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{maxZoom:19}).addTo(maps.book);
  maps.book.setView([SHOP_LAT,SHOP_LNG],13);
  L.marker([SHOP_LAT,SHOP_LNG],{icon:gIcon()}).addTo(maps.book).bindPopup(SHOP_NAME);
  document.getElementById('trackMapPh').style.display='none';
  maps.track=L.map('trackMap',{zoomControl:true,attributionControl:false});
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{maxZoom:19}).addTo(maps.track);
  maps.track.setView([SHOP_LAT,SHOP_LNG],13);
  maps.ok=true;
}

function gIcon(){return L.divIcon({html:'<div style="width:13px;height:13px;background:#4a7c59;border:2px solid #fff;border-radius:50%;box-shadow:0 0 8px #4a7c59"></div>',iconSize:[13,13],iconAnchor:[6,6],className:''});}
function oIcon(){return L.divIcon({html:'<div style="width:15px;height:15px;background:#c4522a;border:2px solid #fff;border-radius:50%;box-shadow:0 0 10px #c4522a"></div>',iconSize:[15,15],iconAnchor:[7,7],className:''});}
function bIcon(){return L.divIcon({html:'<div style="width:13px;height:13px;background:#2563eb;border:2px solid #fff;border-radius:50%;box-shadow:0 0 8px #2563eb"></div>',iconSize:[13,13],iconAnchor:[6,6],className:''});}

/* ── AUTOCOMPLETE ── */
window.onDestIn=function(){
  const val=document.getElementById('dest').value.trim();
  clearTimeout(acTimer);
  if(val.length<3){closeAC();return;}
  acTimer=setTimeout(()=>nomAC(val),380);
};

function nomAC(q){
  fetch('https://nominatim.openstreetmap.org/search?q='+encodeURIComponent(q+' Philippines')+'&format=json&limit=5&countrycodes=ph')
    .then(r=>r.json()).then(res=>{
      if(!res.length){closeAC();return;}
      showAC(res.map(r=>({name:r.display_name,lat:parseFloat(r.lat),lng:parseFloat(r.lon)})));
    }).catch(()=>closeAC());
}

function showAC(items){
  const l=document.getElementById('acList');l.innerHTML='';
  items.slice(0,5).forEach(item=>{
    const d=document.createElement('div');d.className='ac-item';
    d.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg><span>${trim60(item.name)}</span>`;
    d.onclick=()=>selDestFn(item);l.appendChild(d);
  });l.classList.add('open');
}

function closeAC(){document.getElementById('acList').classList.remove('open');}
function trim60(s){return s.length>62?s.slice(0,59)+'...':s;}

function selDestFn(item){
  document.getElementById('dest').value=trim60(item.name);
  setVS2('dest',true);document.getElementById('sDest').textContent=trim60(item.name);closeAC();
  selDest={lat:item.lat,lng:item.lng,name:item.name};
  if(maps.ok)drawRoute(item.lat,item.lng,item.name);
}

function drawRoute(lat,lng,name){
  document.getElementById('routeInfo').style.display='flex';
  if(markers.destB)maps.book.removeLayer(markers.destB);
  markers.destB=L.marker([lat,lng],{icon:bIcon()}).addTo(maps.book).bindPopup(name);
  maps.book.fitBounds([[SHOP_LAT,SHOP_LNG],[lat,lng]],{padding:[24,24]});
  fetch('https://router.project-osrm.org/route/v1/cycling/'+SHOP_LNG+','+SHOP_LAT+';'+lng+','+lat+'?overview=full&geometries=geojson')
    .then(r=>r.json()).then(d=>{
      if(d.code!=='Ok')return;
      const r=d.routes[0];
      document.getElementById('routeDist').textContent=(r.distance/1000).toFixed(1)+' km';
      document.getElementById('routeTime').textContent=Math.round(r.duration/60)+' min cycling';
      if(markers.routeB)maps.book.removeLayer(markers.routeB);
      markers.routeB=L.geoJSON(r.geometry,{style:{color:'#4a7c59',weight:4,opacity:.8}}).addTo(maps.book);
    });
}

/* ════════════════════════════════════
   TRACKER
════════════════════════════════════ */
window.doTrack=function(){
  const code=document.getElementById('trackCode').value.trim().toUpperCase();
  const err=document.getElementById('err-track');err.textContent='';
  if(!code){err.textContent='Enter a booking reference.';return;}
  if(!BOOKINGS[code]){err.textContent='Not found. Try: PBK-2025-001 or PBK-2025-002';return;}
  stopTrack();
  const bk=BOOKINGS[code];
  document.getElementById('rip').style.display='block';
  document.getElementById('trackLeg').style.display='flex';
  document.getElementById('ripRider').textContent=bk.rider;
  document.getElementById('ripBike').textContent=bk.bike;
  document.getElementById('ripStart').textContent=fmtDT(bk.start);
  document.getElementById('ripEnd').textContent=fmtDT(bk.end);
  if(maps.ok){
    if(markers.tP)maps.track.removeLayer(markers.tP);
    if(markers.tM)maps.track.removeLayer(markers.tM);
    markers.tP=L.marker([SHOP_LAT,SHOP_LNG],{icon:gIcon()}).addTo(maps.track).bindPopup(SHOP_NAME);
    markers.tM=L.marker([bk.lat,bk.lng],{icon:oIcon()}).addTo(maps.track).bindPopup(bk.bike);
    maps.track.setView([bk.lat,bk.lng],14);
  }
  tickTrack(bk);
  trackInt=setInterval(()=>tickTrack(bk),2000);
};

function tickTrack(bk){
  bk.lat+=(Math.random()-.5)*.001;bk.lng+=(Math.random()-.5)*.001;
  const spd=(Math.random()*25+4).toFixed(1);
  const left=bk.end-Date.now();
  document.getElementById('ripSpeed').textContent=spd+' km/h';
  document.getElementById('ripUpdate').textContent=new Date().toLocaleTimeString('en-PH');
  document.getElementById('ripLeft').textContent=left>0?fmtDur(left):'OVERDUE';
  if(maps.ok&&markers.tM)markers.tM.setLatLng([bk.lat,bk.lng]);
}

window.stopTrack=function(){
  clearInterval(trackInt);trackInt=null;
  document.getElementById('rip').style.display='none';
  document.getElementById('trackLeg').style.display='none';
  if(maps.ok){
    if(markers.tP){maps.track.removeLayer(markers.tP);markers.tP=null;}
    if(markers.tM){maps.track.removeLayer(markers.tM);markers.tM=null;}
  }
};

/* ════════════════════════════════════
   DATES & PRICING
════════════════════════════════════ */
function setMinDates(){
  const now=new Date();now.setMinutes(now.getMinutes()-now.getTimezoneOffset());
  const iso=now.toISOString().slice(0,16);
  document.getElementById('startDt').min=iso;document.getElementById('endDt').min=iso;
}

window.onDtChange=function(){
  const sEl=document.getElementById('startDt'),eEl=document.getElementById('endDt');
  if(!sEl.value)return;
  eEl.min=sEl.value;
  if(sEl.value&&eEl.value){
    const start=new Date(sEl.value),minE=new Date(start.getTime()+MIN_HOURS*3600000),end=new Date(eEl.value);
    if(end<minE){
      const adj=new Date(minE.getTime()-minE.getTimezoneOffset()*60000).toISOString().slice(0,16);
      eEl.value=adj;document.getElementById('minWarn').style.display='flex';
    } else document.getElementById('minWarn').style.display='none';
  }
  calcPrice();
};

window.calcPrice=function(){
  const bid=parseInt(document.getElementById('bikeSelect').value);
  const sv=document.getElementById('startDt').value,ev=document.getElementById('endDt').value;
  const bike=BIKES.find(b=>b.id===bid);
  let durTxt='--',durH=0,cost=0,rateT='Select a bike';
  if(sv&&ev){
    const ms=new Date(ev)-new Date(sv);
    if(ms>0){
      durH=ms/3600000;durTxt=mkDurTxt(ms);
      document.getElementById('durDisp').style.display='flex';
      document.getElementById('durDispTxt').textContent='Duration: '+durTxt;
      document.getElementById('durBadge').style.display='flex';
      document.getElementById('durText').textContent=durTxt;
    }
  }
  if(bike){
    rateT='₱'+bike.priceHr+'/hr  |  ₱'+bike.priceDay+'/day';
    if(durH>0){
      if(durH>=8){const d=Math.floor(durH/8),h=Math.ceil(durH%8);cost=d*bike.priceDay+(h>0?h*bike.priceHr:0);}
      else{cost=Math.max(1,Math.ceil(durH))*bike.priceHr;}
    }
  }
  document.getElementById('priceRate').textContent=rateT;
  document.getElementById('priceDur').textContent=durTxt;
  document.getElementById('priceTotal').textContent=cost>0?'₱'+cost.toLocaleString():'--';
  const fn=document.getElementById('firstName').value.trim(),ln=document.getElementById('lastName').value.trim();
  if(fn||ln)document.getElementById('sName').textContent=(fn+' '+ln).trim();
  if(bike)document.getElementById('sBike').textContent=bike.brand+' '+bike.name;
  document.getElementById('sFrom').textContent=sv?fmtDT(new Date(sv)):'--';
  document.getElementById('sTo').textContent=ev?fmtDT(new Date(ev)):'--';
  document.getElementById('sDur').textContent=durTxt;
  document.getElementById('sTotal').textContent=cost>0?'₱'+cost.toLocaleString():'--';
  return cost;
};

function mkDurTxt(ms){
  const t=Math.ceil(ms/60000),d=Math.floor(t/1440),h=Math.floor((t%1440)/60),m=t%60;
  const p=[];if(d)p.push(d+'d');if(h)p.push(h+'h');if(m&&!d)p.push(m+'m');
  return p.join(' ')||'0m';
}
function fmtDur(ms){const h=Math.floor(ms/3600000),m=Math.floor((ms%3600000)/60000);return h+'h '+m+'m';}
function fmtDT(d){if(typeof d==='number')d=new Date(d);return d.toLocaleString('en-PH',{month:'short',day:'numeric',year:'numeric',hour:'2-digit',minute:'2-digit'});}

/* ════════════════════════════════════
   VALIDATION
════════════════════════════════════ */
const VALS={
  firstName:v=>{if(!v)return'Required.';if(!/^[A-Za-z\u00C0-\u024F\s'-]+$/.test(v))return'Letters only.';if(v.length<2)return'Min 2 chars.';return'';},
  lastName:v=>{if(!v)return'Required.';if(!/^[A-Za-z\u00C0-\u024F\s'-]+$/.test(v))return'Letters only.';if(v.length<2)return'Min 2 chars.';return'';},
  phone:v=>{if(!v)return'Required.';if(!/^9\d{9}$/.test(v))return'Format: 9XXXXXXXXX';return'';},
  email:v=>{if(!v)return'Required.';if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))return'Invalid email.';return'';},
};

window.lv=function(f){
  const el=document.getElementById(f);if(!el||!VALS[f])return;
  const v=el.value.trim(),e=VALS[f](v);
  document.getElementById('err-'+f).textContent=v?e:'';
  if(!v){el.classList.remove('valid','invalid');setVS2(f,null);return;}
  if(e){el.classList.add('invalid');el.classList.remove('valid');setVS2(f,false);}
  else{el.classList.add('valid');el.classList.remove('invalid');setVS2(f,true);}
};

function setVS2(f,ok){
  const el=document.getElementById('vs-'+f);if(!el)return;
  if(ok===null){el.textContent='';el.className='vs';}
  else if(ok){el.textContent='✓';el.className='vs ok';}
  else{el.textContent='✕';el.className='vs err';}
}

function vStep(step){
  let ok=true;
  const fail=(id,msg)=>{document.getElementById('err-'+id).textContent=msg;const el=document.getElementById(id);if(el){el.classList.add('invalid');el.classList.remove('valid');}ok=false;};
  const clr=id=>{document.getElementById('err-'+id).textContent='';const el=document.getElementById(id);if(el)el.classList.remove('invalid');};
  if(step===1){
    ['firstName','lastName','phone','email'].forEach(clr);
    const fn=document.getElementById('firstName').value.trim(),ln=document.getElementById('lastName').value.trim();
    const ph=document.getElementById('phone').value.trim(),em=document.getElementById('email').value.trim();
    const e1=VALS.firstName(fn);if(e1)fail('firstName',e1);
    const e2=VALS.lastName(ln);if(e2)fail('lastName',e2);
    const e3=VALS.phone(ph);if(e3)fail('phone',e3);
    const e4=VALS.email(em);if(e4)fail('email',e4);
  }
  if(step===2){
    ['bike','startDt','endDt'].forEach(clr);
    const bk=document.getElementById('bikeSelect').value;
    const sv=document.getElementById('startDt').value,ev=document.getElementById('endDt').value;
    if(!bk)fail('bike','Select a bicycle.');
    if(!sv)fail('startDt','Required.');
    if(!ev)fail('endDt','Required.');
    if(sv&&ev&&(new Date(ev)-new Date(sv))/3600000<MIN_HOURS)fail('endDt','Minimum 1 hour.');
  }
  return ok;
}

/* ════════════════════════════════════
   FORM STEPS
════════════════════════════════════ */
window.ns=function(cur){
  if(!vStep(cur))return;
  if(cur===1){
    fData.fn=document.getElementById('firstName').value.trim();
    fData.ln=document.getElementById('lastName').value.trim();
    fData.ph='+63'+document.getElementById('phone').value.trim();
    fData.em=document.getElementById('email').value.trim();
    document.getElementById('sName').textContent=fData.fn+' '+fData.ln;
  }
  if(cur===2)calcPrice();
  document.getElementById('fs'+cur).classList.remove('active');
  document.getElementById('fs'+(cur+1)).classList.add('active');
  document.getElementById('fs'+(cur+1)).scrollIntoView({behavior:'smooth',block:'start'});
};

window.ps=function(cur){
  document.getElementById('fs'+cur).classList.remove('active');
  document.getElementById('fs'+(cur-1)).classList.add('active');
};

/* ════════════════════════════════════
   SUBMIT
════════════════════════════════════ */
document.getElementById('rentForm').addEventListener('submit',e=>{
  e.preventDefault();
  const dest=document.getElementById('dest').value.trim();
  if(!dest){document.getElementById('err-dest').textContent='Enter a destination.';document.getElementById('dest').classList.add('invalid');return;}
  const btn=document.getElementById('subBtn'),sp=document.getElementById('subTxt');
  btn.disabled=true;sp.textContent='Submitting...';
  setTimeout(()=>{
    btn.disabled=false;sp.textContent='Submit Inquiry';
    const ref='PBK-'+new Date().getFullYear()+'-'+String(Math.floor(Math.random()*999)+5).padStart(3,'0');
    lastRef=ref;
    const bid=parseInt(document.getElementById('bikeSelect').value);
    const bike=BIKES.find(b=>b.id===bid);
    const sv=document.getElementById('startDt').value,ev=document.getElementById('endDt').value;
    const total=calcPrice();
    BOOKINGS[ref]={
      rider:fData.fn+' '+fData.ln,bike:bike?bike.brand+' '+bike.name:'--',
      phone:fData.ph,email:fData.em,dest:dest,
      start:sv?new Date(sv).getTime():Date.now(),
      end:ev?new Date(ev).getTime():Date.now()+3600000,
      lat:SHOP_LAT+(Math.random()-.5)*.02,lng:SHOP_LNG+(Math.random()-.5)*.02,
      status:'pending'
    };
    document.getElementById('succRef').textContent=ref;
    document.getElementById('succMsg').textContent='Hey '+fData.fn+'! We\'ll call '+fData.ph+' within the hour to confirm.';
    document.getElementById('succDets').innerHTML=
      '<strong>Name:</strong> '+fData.fn+' '+fData.ln+'<br>'+
      '<strong>Phone:</strong> '+fData.ph+'<br>'+
      '<strong>Bike:</strong> '+(bike?bike.brand+' '+bike.name:'--')+'<br>'+
      '<strong>From:</strong> '+(sv?fmtDT(new Date(sv)):'--')+'<br>'+
      '<strong>To:</strong> '+(ev?fmtDT(new Date(ev)):'--')+'<br>'+
      '<strong>Destination:</strong> '+dest+'<br>'+
      '<strong>Total:</strong> ₱'+(total||0).toLocaleString();
    document.getElementById('succModal').classList.add('open');
    renderRentalsTable('ovActiveTable');
    renderRentalsTable('rentalsTable');
    renderAllBookings();
  },1500);
});

window.closeSucc=function(){
  document.getElementById('succModal').classList.remove('open');
  document.getElementById('rentForm').reset();
  document.querySelectorAll('.fstep').forEach(s=>s.classList.remove('active'));
  document.getElementById('fs1').classList.add('active');
  ['durDisp','durBadge','routeInfo','minWarn'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});
  document.getElementById('priceRate').textContent='Select a bike';
  document.getElementById('priceDur').textContent='--';
  document.getElementById('priceTotal').textContent='--';
  selDest=null;window.scrollTo({top:0,behavior:'smooth'});
};

window.goTrack=function(){
  closeSucc();if(lastRef)document.getElementById('trackCode').value=lastRef;
  setTimeout(()=>document.getElementById('track').scrollIntoView({behavior:'smooth'}),350);
};

document.getElementById('succModal').addEventListener('click',e=>{if(e.target===e.currentTarget)closeSucc();});

/* ════════════════════════════════════
   ADMIN
════════════════════════════════════ */
window.showLogin=()=>{document.getElementById('adminLogin').classList.add('vis');document.getElementById('adminUser').focus();};
window.hideLogin=()=>{document.getElementById('adminLogin').classList.remove('vis');document.getElementById('loginErr').classList.remove('show');};

window.doLogin=function(){
  const u=document.getElementById('adminUser').value.trim();
  const p=document.getElementById('adminPass').value;
  if(u==='admin'&&p==='pedal2025'){
    document.getElementById('adminLogin').classList.remove('vis');
    document.getElementById('adminDash').classList.add('vis');
    document.getElementById('mainSite').style.display='none';
  } else {
    document.getElementById('loginErr').classList.add('show');
    document.getElementById('adminPass').value='';
  }
};

window.doLogout=function(){
  document.getElementById('adminDash').classList.remove('vis');
  document.getElementById('mainSite').style.display='';
  admStopTrack();
};

window.showPanel=function(name,el){
  document.querySelectorAll('.adm-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.adm-nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('panel-'+name).classList.add('active');
  el.classList.add('active');
  const titles={overview:'Overview',rentals:'Active Rentals',fleet:'Fleet Status',bookings:'All Bookings',revenue:'Revenue',tracker:'Live Tracker'};
  document.getElementById('admTitle').textContent=titles[name]||name;
};

function renderRentalsTable(targetId){
  const active=Object.entries(BOOKINGS).filter(([,v])=>v.status==='active'||v.status==='overdue'||v.status==='pending');
  const html=`<div class="tbl-wrap"><table class="adm-tbl">
    <thead><tr><th>Reference</th><th>Rider</th><th>Bike</th><th>Destination</th><th>Returns</th><th>Status</th><th>Action</th></tr></thead>
    <tbody>${active.map(([ref,b])=>`
      <tr>
        <td style="font-family:var(--font-m);font-size:.72rem;color:var(--moss-light)">${ref}</td>
        <td style="color:var(--chalk)">${b.rider}</td>
        <td>${b.bike}</td>
        <td>${b.dest||'--'}</td>
        <td style="font-family:var(--font-m);font-size:.72rem">${fmtDT(b.end)}</td>
        <td><span class="pill ${b.status==='active'?'pill-active':b.status==='overdue'?'pill-overdue':'pill-pending'}">${b.status.toUpperCase()}</span></td>
        <td><button class="tact" onclick="admQuickTrackSwitch('${ref}')">Track</button></td>
      </tr>`).join('')}
    </tbody></table></div>`;
  const el=document.getElementById(targetId);if(el)el.innerHTML=html;
}

function renderAllBookings(){
  const html=`<div class="tbl-wrap"><table class="adm-tbl">
    <thead><tr><th>Reference</th><th>Rider</th><th>Phone</th><th>Bike</th><th>Destination</th><th>Start</th><th>End</th><th>Status</th></tr></thead>
    <tbody>${Object.entries(BOOKINGS).map(([ref,b])=>`
      <tr>
        <td style="font-family:var(--font-m);font-size:.72rem;color:var(--moss-light)">${ref}</td>
        <td style="color:var(--chalk)">${b.rider}</td>
        <td style="font-family:var(--font-m);font-size:.68rem">${b.phone||'--'}</td>
        <td>${b.bike}</td>
        <td>${b.dest||'--'}</td>
        <td style="font-family:var(--font-m);font-size:.68rem">${fmtDT(b.start)}</td>
        <td style="font-family:var(--font-m);font-size:.68rem">${fmtDT(b.end)}</td>
        <td><span class="pill ${b.status==='active'?'pill-active':b.status==='overdue'?'pill-overdue':b.status==='pending'?'pill-pending':'pill-done'}">${b.status.toUpperCase()}</span></td>
      </tr>`).join('')}
    </tbody></table></div>`;
  const el=document.getElementById('allBookingsTable');if(el)el.innerHTML=html;
}

function buildAdmFleet(){
  const rented=['Giant Roam E+ 2','Cannondale CAAD13','Giant Fastroad E+ EX'];
  const el=document.getElementById('admFleetGrid');if(!el)return;
  el.innerHTML=BIKES.map(b=>{
    const out=rented.includes(b.brand+' '+b.name)||!b.available;
    return`<div class="afc">
      <div class="afc-top">
        ${mkBikeSvg(b.colors[0],b.colors[1],'side').replace('width="100%"','width="80%" style="max-height:110px"')}
        <div class="afc-pill"><span class="pill ${out?'pill-overdue':'pill-active'}">${out?'RENTED':'AVAIL'}</span></div>
      </div>
      <div class="afc-body">
        <div class="afc-name">${b.name}</div>
        <div class="afc-brand">${b.brand} · ${b.type}</div>
        <div class="afc-row"><span>Hourly</span><span>₱${b.priceHr}</span></div>
        <div class="afc-row"><span>Daily</span><span>₱${b.priceDay}</span></div>
      </div>
    </div>`;
  }).join('');
}

function buildWeekChart(){
  const data=[{l:'Mon',v:5},{l:'Tue',v:8},{l:'Wed',v:6},{l:'Thu',v:11},{l:'Fri',v:14},{l:'Sat',v:18},{l:'Sun',v:12}];
  const max=Math.max(...data.map(d=>d.v));
  const el=document.getElementById('weekChart');if(!el)return;
  el.innerHTML=data.map(d=>`
    <div class="bar-col">
      <span class="bar-val-lbl">${d.v}</span>
      <div class="bar-fill${d.v===max?' hi':''}" style="height:${(d.v/max)*100}%"></div>
      <span class="bar-lbl">${d.l}</span>
    </div>`).join('');
}

function buildMonthChart(){
  const data=[{l:'Jan',v:22},{l:'Feb',v:18},{l:'Mar',v:31},{l:'Apr',v:28},{l:'May',v:35},{l:'Jun',v:42},{l:'Jul',v:38}];
  const max=Math.max(...data.map(d=>d.v));
  const el=document.getElementById('monthChart');if(!el)return;
  el.innerHTML=data.map(d=>`
    <div class="bar-col">
      <span class="bar-val-lbl">${d.v}</span>
      <div class="bar-fill" style="height:${(d.v/max)*100}%"></div>
      <span class="bar-lbl">${d.l}</span>
    </div>`).join('');
}

function buildActivity(){
  const activities=[
    {dot:'var(--moss-light)',text:'PBK-2025-001 — Alexistamol Bastatas started rental. Trek Marlin 7.',time:'2 hrs ago'},
    {dot:'var(--moss-light)',text:'PBK-2025-002 — Biolexist Tamaki picked up Giant Roam E+.',time:'1 hr ago'},
    {dot:'#fbbf24',text:'PBK-2025-004 — New booking received. Specialized Sirrus X 4.0.',time:'45 min ago'},
    {dot:'var(--rust)',text:'PBK-2025-003 — OVERDUE. Carlos Reyes, Cannondale CAAD13.',time:'10 min ago'},
    {dot:'var(--moss-light)',text:'New customer registered: Maria Santos (maria@email.com)',time:'Just now'},
  ];
  const el=document.getElementById('actFeed');if(!el)return;
  el.innerHTML=activities.map(a=>`
    <div class="af-item">
      <div class="af-dot" style="background:${a.dot}"></div>
      <div class="af-content"><div class="af-text">${a.text}</div><div class="af-time">${a.time}</div></div>
    </div>`).join('');
}

function buildUtil(){
  const bikes=[
    {name:'Trek Marlin 7',pct:84},
    {name:'Giant Roam E+ 2',pct:76},
    {name:'Specialized Sirrus X',pct:62},
    {name:'Cannondale CAAD13',pct:55},
    {name:'Trek FX 3 Disc',pct:48},
  ];
  const el=document.getElementById('utilBars');if(!el)return;
  el.innerHTML=bikes.map(b=>`
    <div class="prog-item">
      <div class="prog-head"><span>${b.name}</span><span>${b.pct}%</span></div>
      <div class="prog-bar"><div class="prog-fill" style="width:${b.pct}%"></div></div>
    </div>`).join('');
}

/* ── ADMIN TRACKER ── */
window.admQuick=code=>{document.getElementById('admTrackCode').value=code;};

window.admQuickTrackSwitch=function(code){
  document.querySelectorAll('.adm-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.adm-nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('panel-tracker').classList.add('active');
  document.querySelectorAll('.adm-nav-item')[5].classList.add('active');
  document.getElementById('admTitle').textContent='Live Tracker';
  document.getElementById('admTrackCode').value=code;
  setTimeout(admTrack,200);
};

window.admTrack=function(){
  const code=document.getElementById('admTrackCode').value.trim().toUpperCase();
  const err=document.getElementById('admTrackErr');err.textContent='';
  if(!code){err.textContent='Enter a reference.';return;}
  if(!BOOKINGS[code]){err.textContent='Not found.';return;}
  admStopTrack();
  const bk=BOOKINGS[code];
  document.getElementById('admRip').style.display='block';
  document.getElementById('admTLeg').style.display='flex';
  document.getElementById('aRipRider').textContent=bk.rider;
  document.getElementById('aRipBike').textContent=bk.bike;
  document.getElementById('aRipStart').textContent=fmtDT(bk.start);
  document.getElementById('aRipEnd').textContent=fmtDT(bk.end);
  if(maps.ok){
    if(!maps.admTrack){
      document.getElementById('admTMapPh').style.display='none';
      maps.admTrack=L.map('admTMap',{zoomControl:true,attributionControl:false});
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{maxZoom:19}).addTo(maps.admTrack);
    }
    if(markers.atP)maps.admTrack.removeLayer(markers.atP);
    if(markers.atM)maps.admTrack.removeLayer(markers.atM);
    markers.atP=L.marker([SHOP_LAT,SHOP_LNG],{icon:gIcon()}).addTo(maps.admTrack).bindPopup(SHOP_NAME);
    markers.atM=L.marker([bk.lat,bk.lng],{icon:oIcon()}).addTo(maps.admTrack).bindPopup(bk.bike);
    maps.admTrack.setView([bk.lat,bk.lng],14);
  }
  admTickTrack(bk);
  admTrackInt=setInterval(()=>admTickTrack(bk),2000);
};

function admTickTrack(bk){
  bk.lat+=(Math.random()-.5)*.001;bk.lng+=(Math.random()-.5)*.001;
  const spd=(Math.random()*28+3).toFixed(1);
  const left=bk.end-Date.now();
  document.getElementById('aRipSpeed').textContent=spd+' km/h';
  document.getElementById('aRipUpdate').textContent=new Date().toLocaleTimeString('en-PH');
  document.getElementById('aRipLeft').textContent=left>0?fmtDur(left):'OVERDUE';
  if(maps.admTrack&&markers.atM)markers.atM.setLatLng([bk.lat,bk.lng]);
}

window.admStopTrack=function(){
  clearInterval(admTrackInt);admTrackInt=null;
  document.getElementById('admRip').style.display='none';
  document.getElementById('admTLeg').style.display='none';
};

/* ════════════════════════════════════
   CURSOR
════════════════════════════════════ */
function initCursor(){
  const c=document.getElementById('cur'),r=document.getElementById('curRing');
  let tx=0,ty=0;
  document.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';});
  (function loop(){const rect=c.getBoundingClientRect();tx+=(rect.left-tx)*.14;ty+=(rect.top-ty)*.14;r.style.left=tx+'px';r.style.top=ty+'px';requestAnimationFrame(loop);})();
  document.addEventListener('mouseleave',()=>{c.style.opacity='0';r.style.opacity='0';});
  document.addEventListener('mouseenter',()=>{c.style.opacity='1';r.style.opacity='1';});
}

/* ════════════════════════════════════
   HEADER / MISC
════════════════════════════════════ */
function initHeader(){
  const hdr=document.getElementById('hdr');
  window.addEventListener('scroll',()=>{hdr.style.background=window.scrollY>50?'rgba(26,26,26,.98)':'var(--ink)';},{passive:true});
  document.getElementById('ham').addEventListener('click',()=>{
    document.getElementById('ham').classList.toggle('open');
    document.getElementById('mobNav').classList.toggle('open');
  });
}

window.closeMob=()=>{document.getElementById('ham').classList.remove('open');document.getElementById('mobNav').classList.remove('open');};
window.scrollTo=function(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});};

function initScrollFade(){
  const s=document.createElement('style');
  s.textContent='.how-step,.ccard{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}.how-step.vis,.ccard.vis{opacity:1!important;transform:translateY(0)!important}';
  document.head.appendChild(s);
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');}),{threshold:.1});
  document.querySelectorAll('.how-step,.ccard').forEach(el=>obs.observe(el));
}

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeBikeModal();
    closeSucc();
    if(document.getElementById('adminLogin').classList.contains('vis'))hideLogin();
  }
});

{
// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    
    const btn = document.getElementById("openAbout");
    const modal = document.getElementById("aboutModal");
    const close = document.querySelector(".close-btn");

    // 1. Open when clicking BIG5
    if(btn) {
        btn.onclick = function() {
            modal.style.display = "flex";
        }
    }

    // 2. Close when clicking the X
    if(close) {
        close.onclick = function() {
            modal.style.display = "none";
        }
    }

    // 3. Close if user clicks the dark background
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


}