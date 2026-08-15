// ===== FIREBASE CONFIGURATION =====
const firebaseConfig = {
  apiKey: "AIzaSyAxJ2lcQRaKtljfUA7opWut0ILD9Gau1ok",
  authDomain: "good-apps-19f17.firebaseapp.com",
  databaseURL: "https://good-apps-19f17-default-rtdb.firebaseio.com",
  projectId: "good-apps-19f17",
  storageBucket: "good-apps-19f17.appspot.com",
  messagingSenderId: "842196882176",
  appId: "1:842196882176:web:06342028a57ba7e3dfd9e5"
};

// Initialize Firebase Realtime Database
if (typeof firebase !== 'undefined' && firebase.initializeApp) {
  firebase.initializeApp(firebaseConfig);
}
const db = typeof firebase !== 'undefined' ? firebase.database() : null;

// Force Firebase to keep reconnecting on network drops
if (db) {
  db.goOnline();
}

// ===== VOCABULARY DATA (ALGERIAN MIDDLE SCHOOL SYLLABUS: 1MS - 4MS / 600 WORDS) =====
const WORDS = {
  // ==================== 1MS (FIRST YEAR) ====================
  '1ms_greetings': [
    {word:'Hello', arabic:'مرحباً', emoji:'👋'}, {word:'Goodbye', arabic:'إلى اللقاء', emoji:'🖐️'},
    {word:'Good morning', arabic:'صباح الخير', emoji:'🌅'}, {word:'Good afternoon', arabic:'مساء الخير', emoji:'☀️'},
    {word:'Good evening', arabic:'مساء الخير', emoji:'🌇'}, {word:'Good night', arabic:'تصبح على خير', emoji:'🌙'},
    {word:'Name', arabic:'اسم', emoji:'🏷️'}, {word:'Age', arabic:'عمر', emoji:'🎂'},
    {word:'Friend', arabic:'صديق', emoji:'🤝'}, {word:'Welcome', arabic:'أهلاً بك', emoji:'🤗'},
    {word:'Please', arabic:'من فضلك', emoji:'🙏'}, {word:'Thank you', arabic:'شكراً لك', emoji:'💐'},
    {word:'Nice to meet you', arabic:'سررت بلقائك', emoji:'😊'}, {word:'How are you', arabic:'كيف حالك', emoji:'❓'},
    {word:'Boy', arabic:'ولد', emoji:'👦'}, {word:'Girl', arabic:'بنت', emoji:'👧'},
    {word:'Man', arabic:'رجل', emoji:'👨'}, {word:'Woman', arabic:'امرأة', emoji:'👩'},
    {word:'Student', arabic:'تلميذ', emoji:'👨‍🎓'}, {word:'Country', arabic:'بلد', emoji:'🌍'}
  ],
  '1ms_school': [
    {word:'Book', arabic:'كتاب', emoji:'📖'}, {word:'Copybook', arabic:'كراس', emoji:'📓'},
    {word:'Pen', arabic:'قلم جاف', emoji:'🖊️'}, {word:'Pencil', arabic:'قلم رصاص', emoji:'✏️'},
    {word:'Eraser', arabic:'ممحاة', emoji:'🧹'}, {word:'Ruler', arabic:'مسطرة', emoji:'📏'},
    {word:'Schoolbag', arabic:'محفظة', emoji:'🎒'}, {word:'Board', arabic:'سبورة', emoji:'📋'},
    {word:'Desk', arabic:'مكتب', emoji:'🪑'}, {word:'Teacher', arabic:'معلم', emoji:'👩‍🏫'},
    {word:'Classroom', arabic:'قسم', emoji:'🏫'}, {word:'Scissors', arabic:'مقص', emoji:'✂️'},
    {word:'Pencil case', arabic:'مقلمة', emoji:'👝'}, {word:'Sharpener', arabic:'مبراة', emoji:'✏️'},
    {word:'Glue', arabic:'غراء', emoji:'🧴'}, {word:'Paper', arabic:'ورقة', emoji:'📄'},
    {word:'Flag', arabic:'علم', emoji:'🇩🇿'}, {word:'Computer', arabic:'حاسوب', emoji:'💻'},
    {word:'Library', arabic:'مكتبة', emoji:'📚'}, {word:'Map', arabic:'خريطة', emoji:'🗺️'},
    {word:'Chalk', arabic:'طبشور', emoji:'🖍️'}, {word:'Lesson', arabic:'درس', emoji:'📝'}
  ],
  '1ms_family': [
    {word:'Mother', arabic:'أم', emoji:'👩'}, {word:'Father', arabic:'أب', emoji:'👨'},
    {word:'Brother', arabic:'أخ', emoji:'👦'}, {word:'Sister', arabic:'أخت', emoji:'👧'},
    {word:'Grandmother', arabic:'جدة', emoji:'👵'}, {word:'Grandfather', arabic:'جد', emoji:'👴'},
    {word:'Uncle', arabic:'عم / خال', emoji:'👨‍💼'}, {word:'Aunt', arabic:'عمة / خالة', emoji:'👩‍💼'},
    {word:'Cousin', arabic:'ابن العم / الخال', emoji:'🧑'}, {word:'Baby', arabic:'رضيع', emoji:'👶'},
    {word:'Parents', arabic:'والدان', emoji:'👨‍👩‍👧'}, {word:'Family', arabic:'عائلة', emoji:'👨‍👩‍👧‍👦'},
    {word:'Son', arabic:'ابن', emoji:'👦'}, {word:'Daughter', arabic:'ابنة', emoji:'👧'},
    {word:'Nephew', arabic:'ابن الأخ / الأخت', emoji:'👦'}, {word:'Niece', arabic:'ابنة الأخ / الأخت', emoji:'👧'},
    {word:'Family tree', arabic:'شجرة العائلة', emoji:'🌳'}, {word:'Twins', arabic:'توأم', emoji:'👯'}
  ],
  '1ms_routines': [
    {word:'Wake up', arabic:'يستيقظ', emoji:'⏰'}, {word:'Wash face', arabic:'يغسل وجهه', emoji:'🧼'},
    {word:'Pray', arabic:'يصلي', emoji:'🤲'}, {word:'Eat breakfast', arabic:'يتناول الفطور', emoji:'🍳'},
    {word:'Eat lunch', arabic:'يتناول الغداء', emoji:'🍲'}, {word:'Eat dinner', arabic:'يتناول العشاء', emoji:'🥗'},
    {word:'Brush teeth', arabic:'ينظف أسنانه', emoji:'🪥'}, {word:'Go to school', arabic:'يذهب للمدرسة', emoji:'🚶‍♂️'},
    {word:'Do homework', arabic:'يفعل الواجب', emoji:'📝'}, {word:'Sleep', arabic:'ينام', emoji:'😴'},
    {word:'Read', arabic:'يقرأ', emoji:'📚'}, {word:'Play', arabic:'يلعب', emoji:'⚽'},
    {word:'Watch TV', arabic:'يشاهد التلفاز', emoji:'📺'}, {word:'Listen to music', arabic:'يستمع للموسيقى', emoji:'🎧'},
    {word:'Comb hair', arabic:'يمشط شعره', emoji:'💇'}, {word:'Get dressed', arabic:'يرتدي ملابسه', emoji:'👔'},
    {word:'Take a shower', arabic:'يستحم', emoji:'🚿'}, {word:'Arrive home', arabic:'يعود للبيت', emoji:'🏠'}
  ],
  '1ms_colors_num': [
    {word:'One', arabic:'واحد', emoji:'1️⃣'}, {word:'Two', arabic:'اثنان', emoji:'2️⃣'},
    {word:'Three', arabic:'ثلاثة', emoji:'3️⃣'}, {word:'Four', arabic:'أربعة', emoji:'4️⃣'},
    {word:'Five', arabic:'خمسة', emoji:'5️⃣'}, {word:'Six', arabic:'ستة', emoji:'6️⃣'},
    {word:'Seven', arabic:'سبعة', emoji:'7️⃣'}, {word:'Eight', arabic:'ثمانية', emoji:'8️⃣'},
    {word:'Nine', arabic:'تسعة', emoji:'9️⃣'}, {word:'Ten', arabic:'عشرة', emoji:'🔟'},
    {word:'Eleven', arabic:'أحد عشر', emoji:'1️⃣1️⃣'}, {word:'Twelve', arabic:'إثنا عشر', emoji:'1️⃣2️⃣'},
    {word:'Red', arabic:'أحمر', emoji:'🔴'}, {word:'Blue', arabic:'أزرق', emoji:'🔵'},
    {word:'Green', arabic:'أخضر', emoji:'🟢'}, {word:'Yellow', arabic:'أصفر', emoji:'🟡'},
    {word:'Pink', arabic:'وردي', emoji:'🩷'}, {word:'Orange', arabic:'برتقالي', emoji:'🟠'},
    {word:'Purple', arabic:'بنفسجي', emoji:'🟣'}, {word:'White', arabic:'أبيض', emoji:'⬜'},
    {word:'Black', arabic:'أسود', emoji:'⬛'}, {word:'Brown', arabic:'بني', emoji:'🟤'}
  ],
  '1ms_calendar': [
    {word:'Monday', arabic:'الإثنين', emoji:'📅'}, {word:'Tuesday', arabic:'الثلاثاء', emoji:'📅'},
    {word:'Wednesday', arabic:'الأربعاء', emoji:'📅'}, {word:'Thursday', arabic:'الخميس', emoji:'📅'},
    {word:'Friday', arabic:'الجمعة', emoji:'🕌'}, {word:'Saturday', arabic:'السبت', emoji:'📅'},
    {word:'Sunday', arabic:'الأحد', emoji:'📅'}, {word:'January', arabic:'جانفي / يناير', emoji:'🗓️'},
    {word:'February', arabic:'فيفري / فبراير', emoji:'🗓️'}, {word:'March', arabic:'مارس', emoji:'🗓️'},
    {word:'April', arabic:'أفريل / أبريل', emoji:'🗓️'}, {word:'May', arabic:'ماي / مايو', emoji:'🗓️'},
    {word:'June', arabic:'جوان / يونيو', emoji:'🗓️'}, {word:'Spring', arabic:'الربيع', emoji:'🌸'},
    {word:'Summer', arabic:'الصيف', emoji:'☀️'}, {word:'Autumn', arabic:'الخريف', emoji:'🍂'},
    {word:'Winter', arabic:'الشتاء', emoji:'❄️'}
  ],
  '1ms_pets_animals': [
    {word:'Cat', arabic:'قطة', emoji:'🐱'}, {word:'Dog', arabic:'كلب', emoji:'🐶'},
    {word:'Rabbit', arabic:'أرنب', emoji:'🐰'}, {word:'Bird', arabic:'عصفور', emoji:'🐦'},
    {word:'Fish', arabic:'سمكة', emoji:'🐟'}, {word:'Horse', arabic:'حصان', emoji:'🐴'},
    {word:'Cow', arabic:'بقرة', emoji:'🐄'}, {word:'Sheep', arabic:'خروف', emoji:'🐑'},
    {word:'Goat', arabic:'ماعز', emoji:'🐐'}, {word:'Chicken', arabic:'دجاجة', emoji:'🐔'},
    {word:'Rooster', arabic:'ديك', emoji:'🐓'}, {word:'Duck', arabic:'بطة', emoji:'🦆'},
    {word:'Donkey', arabic:'حمار', emoji:'🫏'}, {word:'Camel', arabic:'جمل', emoji:'🐪'},
    {word:'Turtle', arabic:'سلحفاة', emoji:'🐢'}, {word:'Parrot', arabic:'ببغاء', emoji:'🦜'}
  ],

  // ==================== 2MS (SECOND YEAR) ====================
  '2ms_appearance': [
    {word:'Tall', arabic:'طويل', emoji:'📏'}, {word:'Short', arabic:'قصير', emoji:'📐'},
    {word:'Slim', arabic:'نحيف', emoji:'🧍'}, {word:'Fat', arabic:'سمين', emoji:'🚶‍♂️'},
    {word:'Eye', arabic:'عين', emoji:'👁️'}, {word:'Ear', arabic:'أذن', emoji:'👂'},
    {word:'Nose', arabic:'أنف', emoji:'👃'}, {word:'Mouth', arabic:'فم', emoji:'👄'},
    {word:'Hair', arabic:'شعر', emoji:'💇'}, {word:'Straight hair', arabic:'شعر أملس', emoji:'👩'},
    {word:'Wavy hair', arabic:'شعر موجي', emoji:'👩‍🦱'}, {word:'Curly hair', arabic:'شعر مجعد', emoji:'👨‍🦱'},
    {word:'Fair hair', arabic:'شعر أشقر', emoji:'👱'}, {word:'Dark hair', arabic:'شعر داكن', emoji:'👨'},
    {word:'Glasses', arabic:'نظارات', emoji:'👓'}, {word:'Smile', arabic:'ابتسامة', emoji:'😊'},
    {word:'Face', arabic:'وجه', emoji:'😀'}, {word:'Beard', arabic:'لحية', emoji:'🧔'},
    {word:'Mustache', arabic:'شارب', emoji:'👨'}, {word:'Handsome', arabic:'وسيم', emoji:'🕺'},
    {word:'Beautiful', arabic:'جميلة', emoji:'💃'}, {word:'Young', arabic:'شاب / صغير', emoji:'🧒'},
    {word:'Old', arabic:'مسن / كبير', emoji:'👴'}
  ],
  '2ms_clothes': [
    {word:'Shirt', arabic:'قميص', emoji:'👕'}, {word:'T-shirt', arabic:'قميص صيفي', emoji:'👕'},
    {word:'Pants', arabic:'بنطال', emoji:'👖'}, {word:'Jeans', arabic:'بنطال جينز', emoji:'👖'},
    {word:'Shoes', arabic:'حذاء', emoji:'👟'}, {word:'Jacket', arabic:'سترة', emoji:'🧥'},
    {word:'Dress', arabic:'فستان', emoji:'👗'}, {word:'Skirt', arabic:'تنورة', emoji:'👗'},
    {word:'Cap', arabic:'قبعة', emoji:'🧢'}, {word:'Hat', arabic:'قبعة دافئة', emoji:'👒'},
    {word:'Socks', arabic:'جوارب', emoji:'🧦'}, {word:'Coat', arabic:'معطف', emoji:'🧥'},
    {word:'Boots', arabic:'حذاء طويل', emoji:'🥾'}, {word:'Scarf', arabic:'وشاح', emoji:'🧣'},
    {word:'Gloves', arabic:'قفازات', emoji:'🧤'}, {word:'Belt', arabic:'حزام', emoji:'🪢'},
    {word:'Tie', arabic:'رباط عنق', emoji:'👔'}, {word:'Suit', arabic:'بدلة', emoji:'👔'},
    {word:'Sneakers', arabic:'حذاء رياضي', emoji:'👟'}, {word:'Pajamas', arabic:'منامة', emoji:'👔'}
  ],
  '2ms_shopping': [
    {word:'Apple', arabic:'تفاحة', emoji:'🍎'}, {word:'Banana', arabic:'موزة', emoji:'🍌'},
    {word:'Orange', arabic:'برتقالة', emoji:'🍊'}, {word:'Lemon', arabic:'ليمون', emoji:'🍋'},
    {word:'Strawberry', arabic:'فراولة', emoji:'🍓'}, {word:'Grapes', arabic:'عنب', emoji:'🍇'},
    {word:'Milk', arabic:'حليب', emoji:'🥛'}, {word:'Water', arabic:'ماء', emoji:'💧'},
    {word:'Bread', arabic:'خبز', emoji:'🍞'}, {word:'Meat', arabic:'لحم', emoji:'🥩'},
    {word:'Chicken', arabic:'دجاج', emoji:'🍗'}, {word:'Fish', arabic:'سمك', emoji:'🐟'},
    {word:'Cheese', arabic:'جبن', emoji:'🧀'}, {word:'Egg', arabic:'بيضة', emoji:'🥚'},
    {word:'Rice', arabic:'أرز', emoji:'🍚'}, {word:'Potato', arabic:'بطاطس', emoji:'🥔'},
    {word:'Tomato', arabic:'طماطم', emoji:'🍅'}, {word:'Carrot', arabic:'جزر', emoji:'🥕'},
    {word:'Price', arabic:'سعر', emoji:'🏷️'}, {word:'Kilo', arabic:'كيلوغرام', emoji:'⚖️'},
    {word:'Money', arabic:'دينار / نقود', emoji:'💵'}, {word:'Supermarket', arabic:'متجر', emoji:'🛒'},
    {word:'Shopping list', arabic:'قائمة التسوق', emoji:'📝'}, {word:'Seller', arabic:'بائع', emoji:'👨‍💼'},
    {word:'Customer', arabic:'زبون', emoji:'🧍'}
  ],
  '2ms_house': [
    {word:'House', arabic:'منزل', emoji:'🏠'}, {word:'Flat', arabic:'شقة', emoji:'🏢'},
    {word:'Living room', arabic:'غرفة المعيشة', emoji:'🛋️'}, {word:'Bedroom', arabic:'غرفة النوم', emoji:'🛏️'},
    {word:'Kitchen', arabic:'مطبخ', emoji:'🍳'}, {word:'Bathroom', arabic:'حمام', emoji:'🛁'},
    {word:'Dining room', arabic:'غرفة الطعام', emoji:'🍽️'}, {word:'Garden', arabic:'حديقة', emoji:'🏡'},
    {word:'Garage', arabic:'مرآب', emoji:'🚗'}, {word:'Bed', arabic:'سرير', emoji:'🛏️'},
    {word:'Table', arabic:'طاولة', emoji:'🪵'}, {word:'Chair', arabic:'كرسي', emoji:'🪑'},
    {word:'Sofa', arabic:'أريكة', emoji:'🛋️'}, {word:'Fridge', arabic:'ثلاجة', emoji:'🧊'},
    {word:'Door', arabic:'باب', emoji:'🚪'}, {word:'Window', arabic:'نافذة', emoji:'🪟'},
    {word:'Mirror', arabic:'مرآة', emoji:'🪞'}, {word:'Clock', arabic:'ساعة حائط', emoji:'🕐'},
    {word:'Lamp', arabic:'مصباح', emoji:'💡'}, {word:'Carpet', arabic:'سجادة', emoji:'🧶'},
    {word:'Armchair', arabic:'كرسي مريح', emoji:'🪑'}, {word:'Balcony', arabic:'شرفة', emoji:'🏢'}
  ],
  '2ms_health': [
    {word:'Doctor', arabic:'طبيب', emoji:'👨‍⚕️'}, {word:'Nurse', arabic:'ممرضة', emoji:'👩‍⚕️'},
    {word:'Hospital', arabic:'مستشفى', emoji:'🏥'}, {word:'Pharmacy', arabic:'صيدلية', emoji:'💊'},
    {word:'Fever', arabic:'حمى', emoji:'🤒'}, {word:'Cough', arabic:'سعال', emoji:'🤧'},
    {word:'Headache', arabic:'صداع', emoji:'🤯'}, {word:'Toothache', arabic:'ألم الأسنان', emoji:'🦷'},
    {word:'Stomachache', arabic:'ألم المعدة', emoji:'🤢'}, {word:'Earache', arabic:'ألم الأذن', emoji:'👂'},
    {word:'Flu', arabic:'أنفلونزا', emoji:'🤧'}, {word:'Medicine', arabic:'دواء', emoji:'💊'},
    {word:'Healthy', arabic:'صحي', emoji:'🥗'}, {word:'Sick', arabic:'مريض', emoji:'😷'},
    {word:'Rest', arabic:'راحة', emoji:'🛌'}, {word:'Water', arabic:'ماء', emoji:'💧'},
    {word:'Syrup', arabic:'دواء شرب', emoji:'🧴'}, {word:'Pill', arabic:'قرص دواء', emoji:'💊'},
    {word:'Pain', arabic:'ألم', emoji:'💥'}, {word:'Checkup', arabic:'فحص طبي', emoji:'🩺'}
  ],
  '2ms_travel': [
    {word:'Bus', arabic:'حافلة', emoji:'🚌'}, {word:'Train', arabic:'قطار', emoji:'🚂'},
    {word:'Car', arabic:'سيارة', emoji:'🚗'}, {word:'Airplane', arabic:'طائرة', emoji:'✈️'},
    {word:'Bicycle', arabic:'دراجة', emoji:'🚲'}, {word:'Taxi', arabic:'سيارة أجرة', emoji:'🚕'},
    {word:'Ship', arabic:'سفينة', emoji:'🚢'}, {word:'Station', arabic:'محطة', emoji:'🚉'},
    {word:'Airport', arabic:'مطار', emoji:'✈️'}, {word:'Map', arabic:'خريطة', emoji:'🗺️'},
    {word:'Ticket', arabic:'تذكرة', emoji:'🎟️'}, {word:'Hotel', arabic:'فندق', emoji:'🏨'},
    {word:'Tourist', arabic:'سائح', emoji:'📸'}, {word:'Street', arabic:'شارع', emoji:'🛣️'},
    {word:'Turn left', arabic:'انعطف يساراً', emoji:'⬅️'}, {word:'Turn right', arabic:'انعطف يميناً', emoji:'➡️'},
    {word:'Straight ahead', arabic:'إلى الأمام مباشرة', emoji:'⬆️'}, {word:'Crossroad', arabic:'مفترق طرق', emoji:'🚦'},
    {word:'Travel', arabic:'يسافر', emoji:'🧳'}, {word:'Passport', arabic:'جواز سفر', emoji:'📕'}
  ],
  '2ms_sports_hobbies': [
    {word:'Football', arabic:'كرة القدم', emoji:'⚽'}, {word:'Basketball', arabic:'كرة السلة', emoji:'🏀'},
    {word:'Handball', arabic:'كرة اليد', emoji:'🤾'}, {word:'Tennis', arabic:'كرة المضرب', emoji:'🎾'},
    {word:'Swimming', arabic:'السباحة', emoji:'🏊'}, {word:'Running', arabic:'الركض', emoji:'🏃'},
    {word:'Cycling', arabic:'ركوب الدراجة', emoji:'🚴'}, {word:'Judo', arabic:'رياضة الجودو', emoji:'🥋'},
    {word:'Drawing', arabic:'الرسم', emoji:'🎨'}, {word:'Reading', arabic:'القراءة', emoji:'📚'},
    {word:'Cooking', arabic:'الطبخ', emoji:'👨‍🍳'}, {word:'Gaming', arabic:'الألعاب الإلكترونية', emoji:'🎮'},
    {word:'Photography', arabic:'التصوير', emoji:'📷'}, {word:'Chess', arabic:'الشطرنج', emoji:'♟️'},
    {word:'Match', arabic:'مباراة', emoji:'🏟️'}, {word:'Team', arabic:'فريق', emoji:'👥'}
  ],

  // ==================== 3MS (THIRD YEAR) ====================
  '3ms_personality': [
    {word:'Smart', arabic:'ذكي', emoji:'🧠'}, {word:'Kind', arabic:'لطيف', emoji:'😊'},
    {word:'Active', arabic:'نشيط', emoji:'⚡'}, {word:'Lazy', arabic:'كسول', emoji:'🦥'},
    {word:'Shy', arabic:'خجول', emoji:'😳'}, {word:'Outgoing', arabic:'اجتماعي', emoji:'🗣️'},
    {word:'Helpful', arabic:'خدوم', emoji:'🤝'}, {word:'Honest', arabic:'صادق', emoji:'😇'},
    {word:'Brave', arabic:'شجاع', emoji:'🦁'}, {word:'Creative', arabic:'مبدع', emoji:'🎨'},
    {word:'Polite', arabic:'مهذب', emoji:'🤝'}, {word:'Patient', arabic:'صبور', emoji:'⏳'},
    {word:'Generous', arabic:'كريم', emoji:'🎁'}, {word:'Friendly', arabic:'ودود', emoji:'😃'},
    {word:'Calm', arabic:'هادئ', emoji:'🧘'}, {word:'Can', arabic:'يستطيع', emoji:'✅'},
    {word:'Cannot', arabic:'لا يستطيع', emoji:'❌'}, {word:'Interest', arabic:'اهتمام / هواية', emoji:'⭐'},
    {word:'Ability', arabic:'قدرة', emoji:'💪'}, {word:'Keen on', arabic:'مهتم بـ', emoji:'❤️'},
    {word:'Fond of', arabic:'مولع بـ', emoji:'😍'}, {word:'Good at', arabic:'جيد في', emoji:'👍'},
    {word:'Bad at', arabic:'سيء في', emoji:'👎'}, {word:'Dream', arabic:'حلم', emoji:'💭'},
    {word:'Goal', arabic:'هدف', emoji:'🎯'}
  ],
  '3ms_lifestyles': [
    {word:'Past', arabic:'الماضي', emoji:'📜'}, {word:'Present', arabic:'الحاضر', emoji:'⏰'},
    {word:'Traditional', arabic:'تقليدي', emoji:'🏺'}, {word:'Modern', arabic:'حديث', emoji:'📱'},
    {word:'Ancient', arabic:'قديم جداً', emoji:'🏛️'}, {word:'Costume', arabic:'زي تقليدي', emoji:'👘'},
    {word:'Dish', arabic:'أكلة تقليدية', emoji:'🍲'}, {word:'History', arabic:'تاريخ', emoji:'📖'},
    {word:'Life', arabic:'حياة', emoji:'🌱'}, {word:'Habit', arabic:'عادة', emoji:'🔄'},
    {word:'Couscous', arabic:'كسكسي', emoji:'🍲'}, {word:'Burnous', arabic:'برنوس', emoji:'🧥'},
    {word:'Karakou', arabic:'كاراكو', emoji:'👗'}, {word:'Chakhchoukha', arabic:'شخشوخة', emoji:'🥘'},
    {word:'Grandparents', arabic:'الأجداد', emoji:'👵👨‍🦳'}, {word:'Memories', arabic:'ذكريات', emoji:'💭'},
    {word:'Clay pot', arabic:'إناء فخاري', emoji:'🏺'}, {word:'Oil lamp', arabic:'مصباح زيتي', emoji:'🪔'},
    {word:'Elders', arabic:'كبار السن', emoji:'👵'}, {word:'Heritage', arabic:'تراث', emoji:'🏛️'},
    {word:'Village', arabic:'قرية', emoji:'🏡'}, {word:'Nomad', arabic:'بدوي رحال', emoji:'⛺'},
    {word:'Tent', arabic:'خيمة', emoji:'⛺'}, {word:'Storytelling', arabic:'رواية الحكايات', emoji:'🗣️'},
    {word:'Wheat', arabic:'قمح', emoji:'🌾'}
  ],
  '3ms_science': [
    {word:'Scientist', arabic:'عالم', emoji:'🔬'}, {word:'Invention', arabic:'اختراع', emoji:'💡'},
    {word:'Discovery', arabic:'اكتشاف', emoji:'🔍'}, {word:'Robot', arabic:'روبوت', emoji:'🤖'},
    {word:'Computer', arabic:'حاسوب', emoji:'💻'}, {word:'Telephone', arabic:'هاتف', emoji:'📞'},
    {word:'Internet', arabic:'إنترنت', emoji:'🌐'}, {word:'Rocket', arabic:'صاروخ', emoji:'🚀'},
    {word:'Space', arabic:'فضاء', emoji:'🌌'}, {word:'Electricity', arabic:'كهرباء', emoji:'⚡'},
    {word:'Engine', arabic:'محرك', emoji:'⚙️'}, {word:'Experiment', arabic:'تجربة علمية', emoji:'🧪'},
    {word:'Technology', arabic:'تكنولوجيا', emoji:'📲'}, {word:'Future', arabic:'مستقبل', emoji:'🔮'},
    {word:'Laboratory', arabic:'مخبر', emoji:'🧪'}, {word:'Research', arabic:'بحث', emoji:'📊'},
    {word:'Device', arabic:'جهاز', emoji:'📱'}, {word:'Inventor', arabic:'مخترع', emoji:'👨‍🔬'},
    {word:'Microscope', arabic:'مجهر', emoji:'🔬'}, {word:'Satellite', arabic:'قمر صناعي', emoji:'🛰️'},
    {word:'Astronaut', arabic:'رائد فضاء', emoji:'👨‍🚀'}, {word:'Medicine science', arabic:'طب', emoji:'🩺'},
    {word:'Physics', arabic:'فيزياء', emoji:'⚛️'}, {word:'Chemistry', arabic:'كيمياء', emoji:'🧪'},
    {word:'Biology', arabic:'علم الأحياء', emoji:'🧬'}
  ],
  '3ms_environment': [
    {word:'Tree', arabic:'شجرة', emoji:'🌳'}, {word:'Forest', arabic:'غابة', emoji:'🌲'},
    {word:'Plant', arabic:'نبات', emoji:'🪴'}, {word:'Flower', arabic:'زهرة', emoji:'🌸'},
    {word:'Pollution', arabic:'تلوث', emoji:'🏭'}, {word:'Clean', arabic:'نظيف', emoji:'✨'},
    {word:'Recycle', arabic:'إعادة تدوير', emoji:'♻️'}, {word:'Animal', arabic:'حيوان', emoji:'🐾'},
    {word:'Protect', arabic:'يحمي', emoji:'🛡️'}, {word:'Nature', arabic:'طبيعة', emoji:'🌿'},
    {word:'Save water', arabic:'توفير الماء', emoji:'💧'}, {word:'Earth', arabic:'كوكب الأرض', emoji:'🌍'},
    {word:'Endangered', arabic:'مهدد بالانقراض', emoji:'⚠️'}, {word:'Trash', arabic:'نفايات', emoji:'🗑️'},
    {word:'Global warming', arabic:'احتباس حراري', emoji:'🌡️'}, {word:'Solar power', arabic:'طاقة شمسية', emoji:'☀️'},
    {word:'Eco-friendly', arabic:'صديق للبيئة', emoji:'🌱'}, {word:'Deforestation', arabic:'قطع الغابات', emoji:'🪓'},
    {word:'Plastic', arabic:'بلاستيك', emoji:'🥤'}, {word:'Ocean pollution', arabic:'تلوث المحيطات', emoji:'🌊'},
    {word:'Plant trees', arabic:'غرس الأشجار', emoji:'🪴'}, {word:'Ecology', arabic:'علم البيئة', emoji:'🍃'},
    {word:'Oxygen', arabic:'أكسجين', emoji:'💨'}, {word:'Park', arabic:'منتزه', emoji:'🏞️'},
    {word:'Save energy', arabic:'توفير الطاقة', emoji:'💡'}
  ],
  '3ms_wildlife': [
    {word:'Lion', arabic:'أسد', emoji:'🦁'}, {word:'Tiger', arabic:'نمر', emoji:'🐅'},
    {word:'Elephant', arabic:'فيل', emoji:'🐘'}, {word:'Giraffe', arabic:'زرافة', emoji:'🦒'},
    {word:'Monkey', arabic:'قرد', emoji:'🐒'}, {word:'Bear', arabic:'دب', emoji:'🐻'},
    {word:'Wolf', arabic:'ذئب', emoji:'🐺'}, {word:'Fox', arabic:'ثعلب', emoji:'🦊'},
    {word:'Fennec fox', arabic:'ثعلب الفنك', emoji:'🦊'}, {word:'Gazelle', arabic:'غزال', emoji:'🦌'},
    {word:'Barbary macaque', arabic:'قرد الماكاك البربري', emoji:'🐒'}, {word:'Eagle', arabic:'نسر', emoji:'🦅'},
    {word:'Falcon', arabic:'صقر', emoji:'🦅'}, {word:'Snake', arabic:'أفعى', emoji:'🐍'},
    {word:'Crocodile', arabic:'تمساح', emoji:'🐊'}, {word:'Dolphin', arabic:'دلفين', emoji:'🐬'},
    {word:'Whale', arabic:'حوت', emoji:'🐋'}, {word:'Shark', arabic:'قرش', emoji:'🦈'},
    {word:'Habitat', arabic:'موطن طبيعي', emoji:'🏞️'}, {word:'Jungle', arabic:'أدغال', emoji:'🌴'},
    {word:'Desert', arabic:'صحراء', emoji:'🏜️'}, {word:'Species', arabic:'فصيلة / أنواع', emoji:'🐾'},
    {word:'Extinct', arabic:'منقرض', emoji:'🦴'}, {word:'Hunt', arabic:'اصطياد', emoji:'🏹'},
    {word:'Protect animals', arabic:'حماية الحيوانات', emoji:'🐾'}
  ],
  '3ms_weather': [
    {word:'Sunny', arabic:'مشمس', emoji:'☀️'}, {word:'Cloudy', arabic:'غائم', emoji:'☁️'},
    {word:'Rainy', arabic:'ماطر', emoji:'🌧️'}, {word:'Windy', arabic:'عاصف', emoji:'💨'},
    {word:'Snowy', arabic:'مثلج', emoji:'❄️'}, {word:'Stormy', arabic:'عاصفي', emoji:'🌩️'},
    {word:'Hot', arabic:'حار', emoji:'🔥'}, {word:'Cold', arabic:'بارد', emoji:'🥶'},
    {word:'Warm', arabic:'دافئ', emoji:'🌤️'}, {word:'Cool', arabic:'معتدل البرودة', emoji:'🍃'},
    {word:'Sun', arabic:'شمس', emoji:'☀️'}, {word:'Cloud', arabic:'غيمة', emoji:'☁️'},
    {word:'Rain', arabic:'مطر', emoji:'🌧️'}, {word:'Snow', arabic:'ثلج', emoji:'❄️'},
    {word:'Wind', arabic:'ريح', emoji:'💨'}, {word:'Rainbow', arabic:'قوس قزح', emoji:'🌈'},
    {word:'Temperature', arabic:'درجة الحرارة', emoji:'🌡️'}, {word:'Forecast', arabic:'النشرة الجوية', emoji:'📺'},
    {word:'Climate', arabic:'مناخ', emoji:'🌍'}, {word:'Degree', arabic:'درجة', emoji:'🌡️'},
    {word:'Humid', arabic:'رطب', emoji:'💧'}, {word:'Dry', arabic:'جاف', emoji:'🏜️'},
    {word:'Foggy', arabic:'ضبابي', emoji:'🌫️'}, {word:'Thunder', arabic:'رعد', emoji:'⚡'},
    {word:'Lightning', arabic:'برق', emoji:'🌩️'}
  ],

  // ==================== 4MS (FOURTH YEAR / BEM) ====================
  '4ms_landmarks': [
    {word:'Monument', arabic:'معلم تاريخي', emoji:'🏛️'}, {word:'Tower', arabic:'برج', emoji:'🗼'},
    {word:'Bridge', arabic:'جسر', emoji:'🌉'}, {word:'Palace', arabic:'قصر', emoji:'🏰'},
    {word:'Museum', arabic:'متحف', emoji:'🏛️'}, {word:'Mosque', arabic:'مسجد', emoji:'🕌'},
    {word:'Statue', arabic:'تمثال', emoji:'🗿'}, {word:'Landmark', arabic:'معلم شهير', emoji:'📍'},
    {word:'Maqam Echahid', arabic:'مقام الشهيد', emoji:'🇩🇿'}, {word:'Big Ben', arabic:'برج بيج بن', emoji:'🕰️'},
    {word:'Eiffel Tower', arabic:'برج إيفل', emoji:'🗼'}, {word:'Pyramids', arabic:'الأهرامات', emoji:'📐'},
    {word:'Kasbah', arabic:'القصبة', emoji:'🏘️'}, {word:'Heritage', arabic:'تراث', emoji:'🏺'},
    {word:'Taj Mahal', arabic:'تاج محل', emoji:'🕌'}, {word:'Colosseum', arabic:'الكولوسيوم', emoji:'🏛️'},
    {word:'Great Wall', arabic:'سور الصين العظيم', emoji:'🧱'}, {word:'Castle', arabic:'قلعة', emoji:'🏰'},
    {word:'Ruins', arabic:'آثار قديمة', emoji:'🏛️'}, {word:'Site', arabic:'موقع أثري', emoji:'📍'},
    {word:'Architectural', arabic:'معماري', emoji:'📐'}, {word:'Design', arabic:'تصميم', emoji:'🎨'},
    {word:'Build', arabic:'يبني', emoji:'🏗️'}, {word:'Location', arabic:'موقع', emoji:'🗺️'},
    {word:'Capital', arabic:'عاصمة', emoji:'🏙️'}
  ],
  '4ms_figures': [
    {word:'Writer', arabic:'كاتب', emoji:'✍️'}, {word:'Poet', arabic:'شاعر', emoji:'📜'},
    {word:'Hero', arabic:'بطل تاريخي', emoji:'⚔️'}, {word:'Artist', arabic:'فنان', emoji:'🎨'},
    {word:'Leader', arabic:'قائد', emoji:'👑'}, {word:'Scholar', arabic:'باحث / باحثة', emoji:'📚'},
    {word:'Kateb Yacine', arabic:'كاتب ياسين', emoji:'📖'}, {word:'Emir Abdelkader', arabic:'الأمير عبد القادر', emoji:'🐴'},
    {word:'Moufdi Zakaria', arabic:'مفدي زكرياء', emoji:'📝'}, {word:'Achievement', arabic:'إنجاز', emoji:'🏆'},
    {word:'Famous', arabic:'مشهور', emoji:'🌟'}, {word:'Biography', arabic:'سيرة ذاتية', emoji:'📖'},
    {word:'Novel', arabic:'رواية', emoji:'📘'}, {word:'Freedom', arabic:'حرية', emoji:'🕊️'},
    {word:'Revolution', arabic:'ثورة', emoji:'✊'}, {word:'Martyr', arabic:'شهيد', emoji:'🇩🇿'},
    {word:'Inspiration', arabic:'إلهام', emoji:'✨'}, {word:'Role model', arabic:'قدوة', emoji:'⭐'},
    {word:'Influence', arabic:'تأثير', emoji:'💫'}, {word:'Pioneer', arabic:'رائد / رائدة', emoji:'🚀'},
    {word:'Award', arabic:'جائزة', emoji:'🥇'}, {word:'Nobel prize', arabic:'جائزة نوبل', emoji:'🏅'},
    {word:'Legacy', arabic:'إرث تاريخي', emoji:'📜'}, {word:'History maker', arabic:'صانع التاريخ', emoji:'📖'},
    {word:'Nation', arabic:'وطن / أمة', emoji:'🇩🇿'}
  ],
  '4ms_careers': [
    {word:'Engineer', arabic:'مهندس', emoji:'👷'}, {word:'Pilot', arabic:'طيار', emoji:'🧑‍✈️'},
    {word:'Journalist', arabic:'صحفي', emoji:'🎙️'}, {word:'Judge', arabic:'قاضي', emoji:'⚖️'},
    {word:'Architect', arabic:'مهندس معماري', emoji:'📐'}, {word:'Surgeon', arabic:'جراح', emoji:'🩺'},
    {word:'Lawyer', arabic:'محامي', emoji:'⚖️'}, {word:'Teacher', arabic:'أستاذ', emoji:'👩‍🏫'},
    {word:'Dream job', arabic:'مهنة الأحلام', emoji:'✨'}, {word:'Success', arabic:'نجاح', emoji:'🎯'},
    {word:'Study', arabic:'يدرس', emoji:'📚'}, {word:'University', arabic:'جامعة', emoji:'🎓'},
    {word:'Degree', arabic:'شهادة جامعية', emoji:'📜'}, {word:'Ambition', arabic:'طموح', emoji:'🚀'},
    {word:'Future', arabic:'مستقبل', emoji:'🔮'}, {word:'Career', arabic:'مسار مهني', emoji:'💼'},
    {word:'Dentist', arabic:'طبيب أسنان', emoji:'🦷'}, {word:'Pharmacist', arabic:'صيدلي', emoji:'💊'},
    {word:'Police officer', arabic:'شرطي', emoji:'👮'}, {word:'Firefighter', arabic:'رجل إطفاء', emoji:'👨‍🚒'},
    {word:'Businessman', arabic:'رجل أعمال', emoji:'💼'}, {word:'Programmer', arabic:'مبرمج', emoji:'💻'},
    {word:'Artist', arabic:'رسام', emoji:'🎨'}, {word:'Musician', arabic:'عازف', emoji:'🎵'},
    {word:'Chef', arabic:'طباخ ماهر', emoji:'👨‍🍳'}
  ],
  '4ms_citizenship': [
    {word:'Volunteer', arabic:'متطوع', emoji:'🙋‍♂️'}, {word:'Charity', arabic:'جمعية خيرية', emoji:'❤️'},
    {word:'Donate', arabic:'يتبرع', emoji:'🎁'}, {word:'Peace', arabic:'سلام', emoji:'🕊️'},
    {word:'Citizenship', arabic:'مواطنة', emoji:'🇩🇿'}, {word:'Rights', arabic:'حقوق', emoji:'📜'},
    {word:'Duties', arabic:'واجبات', emoji:'⚖️'}, {word:'Community', arabic:'مجتمع', emoji:'👥'},
    {word:'Help clean', arabic:'تنظيف المحيط', emoji:'🧹'}, {word:'Plant trees', arabic:'غرس الأشجار', emoji:'🌱'},
    {word:'Solidarity', arabic:'تضامن', emoji:'🤝'}, {word:'Respect', arabic:'احترام', emoji:'🙏'},
    {word:'Responsibility', arabic:'مسؤولية', emoji:'📋'}, {word:'Cleanliness', arabic:'نظافة', emoji:'✨'},
    {word:'Help elderly', arabic:'مساعدة كبار السن', emoji:'👵'}, {word:'Blood donation', arabic:'التبرع بالدم', emoji:'🩸'},
    {word:'Organization', arabic:'منظمة', emoji:'🏢'}, {word:'Support', arabic:'يدعم / يساند', emoji:'🤲'},
    {word:'Active citizen', arabic:'مواطن فعال', emoji:'🌟'}, {word:'Good deeds', arabic:'أعمال صالحة', emoji:'✨'},
    {word:'Kindness', arabic:'طيبة / إحسان', emoji:'💖'}, {word:'Cooperation', arabic:'تعاون', emoji:'🤝'},
    {word:'Environment care', arabic:'العناية بالبيئة', emoji:'🍃'}, {word:'School pride', arabic:'الاعتزاز بالمدرسة', emoji:'🏫'},
    {word:'Patriotism', arabic:'حب الوطن', emoji:'🇩🇿'}
  ],
  '4ms_action_verbs': [
    {word:'Build', arabic:'يبني', emoji:'🏗️'}, {word:'Design', arabic:'يصمم', emoji:'📐'},
    {word:'Discover', arabic:'يكتشف', emoji:'🔍'}, {word:'Invent', arabic:'اخترع', emoji:'💡'},
    {word:'Protect', arabic:'يحمي', emoji:'🛡️'}, {word:'Travel', arabic:'يسافر', emoji:'🧳'},
    {word:'Succeed', arabic:'ينجح', emoji:'🎯'}, {word:'Improve', arabic:'يطور / يتحسن', emoji:'📈'},
    {word:'Help', arabic:'يساعد', emoji:'🤝'}, {word:'Create', arabic:'يبدع / يخلق', emoji:'🎨'},
    {word:'Learn', arabic:'يتعلم', emoji:'🧠'}, {word:'Teach', arabic:'يعلم', emoji:'👩‍🏫'},
    {word:'Share', arabic:'يشارك', emoji:'📤'}, {word:'Save', arabic:'ينقذ / يوفر', emoji:'💾'},
    {word:'Organize', arabic:'ينظم', emoji:'📂'}, {word:'Support', arabic:'يدعم', emoji:'🤲'},
    {word:'Inspire', arabic:'يلهم', emoji:'✨'}, {word:'Achieve', arabic:'يحقق', emoji:'🏆'},
    {word:'Describe', arabic:'يصف', emoji:'📝'}, {word:'Compare', arabic:'يقارن', emoji:'⚖️'},
    {word:'Write', arabic:'يكتب', emoji:'✍️'}, {word:'Speak', arabic:'يتحدث', emoji:'🗣️'},
    {word:'Listen', arabic:'يستمع', emoji:'🎧'}, {word:'Understand', arabic:'يفهم', emoji:'💡'},
    {word:'Participate', arabic:'يشارك / يساهم', emoji:'🙋‍♂️'}
  ],
  '4ms_descriptive_adj': [
    {word:'Famous', arabic:'مشهور', emoji:'🌟'}, {word:'Outstanding', arabic:'بارز / ممتاز', emoji:'⭐'},
    {word:'Historical', arabic:'تاريخي', emoji:'📜'}, {word:'Universal', arabic:'عالمي', emoji:'🌍'},
    {word:'Ancient', arabic:'قديم جداً', emoji:'🏛️'}, {word:'Modern', arabic:'حديث', emoji:'🏙️'},
    {word:'Important', arabic:'هام', emoji:'❗'}, {word:'Wonderful', arabic:'رائع', emoji:'😍'},
    {word:'Beautiful', arabic:'جميل', emoji:'🌸'}, {word:'Brave', arabic:'شجاع', emoji:'🦁'},
    {word:'Generous', arabic:'كريم', emoji:'🎁'}, {word:'Active', arabic:'نشيط', emoji:'⚡'},
    {word:'Successful', arabic:'ناجح', emoji:'🎯'}, {word:'Peaceful', arabic:'سلمي', emoji:'🕊️'},
    {word:'Clean', arabic:'نظيف', emoji:'✨'}, {word:'Safe', arabic:'آمن', emoji:'🔒'},
    {word:'Proud', arabic:'فخور', emoji:'🫡'}, {word:'Responsible', arabic:'مسؤول', emoji:'📋'},
    {word:'Talented', arabic:'موهوب', emoji:'🎨'}, {word:'Inspirational', arabic:'ملهم', emoji:'✨'},
    {word:'Traditional', arabic:'تقليدي', emoji:'🏺'}, {word:'Global', arabic:'عالمي', emoji:'🌐'},
    {word:'Local', arabic:'محلي', emoji:'📍'}, {word:'Valuable', arabic:'قيم / ثمين', emoji:'💎'},
    {word:'Great', arabic:'عظيم', emoji:'👑'}
  ]
};

const CATEGORIES = [
  {id:'1ms_greetings', name:'Greetings & Basics (1MS)', emoji:'👋'},
  {id:'1ms_school', name:'School & Classroom (1MS)', emoji:'🎒'},
  {id:'1ms_family', name:'Family & Relatives (1MS)', emoji:'👨‍👩‍👧‍👦'},
  {id:'1ms_routines', name:'Daily Routines & Time (1MS)', emoji:'⏰'},
  {id:'1ms_colors_num', name:'Numbers & Colors (1MS)', emoji:'🎨'},
  {id:'1ms_calendar', name:'Days, Months & Seasons (1MS)', emoji:'📅'},
  {id:'1ms_pets_animals', name:'Pets & Farm Animals (1MS)', emoji:'🐶'},
  {id:'2ms_appearance', name:'Body & Appearance (2MS)', emoji:'👀'},
  {id:'2ms_clothes', name:'Clothes & Fashion (2MS)', emoji:'👕'},
  {id:'2ms_shopping', name:'Food & Shopping (2MS)', emoji:'🛒'},
  {id:'2ms_house', name:'House & Furniture (2MS)', emoji:'🏠'},
  {id:'2ms_health', name:'Health & Illnesses (2MS)', emoji:'🩺'},
  {id:'2ms_travel', name:'Travel & Directions (2MS)', emoji:'🗺️'},
  {id:'2ms_sports_hobbies', name:'Sports & Hobbies (2MS)', emoji:'⚽'},
  {id:'3ms_personality', name:'Personality & Abilities (3MS)', emoji:'🧠'},
  {id:'3ms_lifestyles', name:'Past & Present Life (3MS)', emoji:'📜'},
  {id:'3ms_science', name:'Science & Inventions (3MS)', emoji:'🔬'},
  {id:'3ms_environment', name:'Nature & Environment (3MS)', emoji:'🌱'},
  {id:'3ms_wildlife', name:'Wild Animals & Habitats (3MS)', emoji:'🦁'},
  {id:'3ms_weather', name:'Weather & Climate (3MS)', emoji:'🌤️'},
  {id:'4ms_landmarks', name:'Monuments & Landmarks (4MS)', emoji:'🏛️'},
  {id:'4ms_figures', name:'Outstanding Figures (4MS)', emoji:'📜'},
  {id:'4ms_careers', name:'Professions & Future (4MS)', emoji:'💼'},
  {id:'4ms_citizenship', name:'Citizenship & Charity (4MS)', emoji:'🕊️'},
  {id:'4ms_action_verbs', name:'Key Verbs & Grammar (4MS)', emoji:'📝'},
  {id:'4ms_descriptive_adj', name:'Descriptive Adjectives (4MS)', emoji:'✨'}
];

const BADGES = [
  {id:'first_word',name:'الكلمة الأولى',emoji:'🌱',threshold:p=>p.totalLearned>=1},
  {id:'ten_words',name:'10 كلمات!',emoji:'🌟',threshold:p=>p.totalLearned>=10},
  {id:'thirty_words',name:'30 كلمة!',emoji:'🏆',threshold:p=>p.totalLearned>=30},
  {id:'first_game',name:'اللعبة الأولى',emoji:'🎮',threshold:p=>p.gamesPlayed>=1},
  {id:'five_games',name:'5 ألعاب!',emoji:'🎯',threshold:p=>p.gamesPlayed>=5},
  {id:'perfect',name:'ممتاز!',emoji:'💎',threshold:p=>p.perfectGames>=1},
  {id:'fifty_stars',name:'نجم التميز',emoji:'👑',threshold:p=>p.stars>=50}
];

// ===== STATE =====
let state = { profile: null, data: null };
let selectedAvatar = '👨‍🎓';
let targetProfileName = null;
let currentEnteredPin = '';
let learnState = { category: null, index: 0, timer: null };
let emojiGame = { words: [], round: 0, score: 0, total: 10 };
let spellingGame = { words: [], round: 0, score: 0, total: 8, current: null, filled: [] };
let memoryGame = { cards: [], flipped: [], matched: 0, attempts: 0, busy: false, pairs: 0 };
let profilesRetryTimer = null;
let leaderboardRetryTimer = null;

// ===== HELPERS =====
function shuffle(a) { const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; }
function getAllWords() { const r=[]; for(const c in WORDS) WORDS[c].forEach((w,i)=>r.push({...w,cat:c,idx:i})); return r; }
function renderEmoji(item) { return item.emoji; }

function speak(text) {
  if (!text) return;

  // 1. If running inside CustomWebView in Niotron / App Inventor
  if (window.AppInventor && typeof window.AppInventor.setWebViewString === 'function') {
    window.AppInventor.setWebViewString(`speak:${text}`);
    return;
  }

  // 2. Fallback for standard web browser / Chrome desktop testing
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.8;
    window.speechSynthesis.speak(u);
  }
}

// Helper to show smooth inline error messages in modals without blocking WebView
function showModalError(elementId, text) {
  let errEl = document.getElementById(elementId);
  if (!errEl) {
    errEl = document.createElement('div');
    errEl.id = elementId;
    errEl.style.cssText = 'color:#e74c3c; font-size:14px; font-weight:700; margin-top:8px; text-align:center; transition: opacity 0.3s;';
    const modalContent = document.querySelector('#modal-add-profile .modal-content');
    if (modalContent) modalContent.appendChild(errEl);
  }
  errEl.textContent = text;
  errEl.style.opacity = '1';
  setTimeout(() => {
    if (errEl) errEl.style.opacity = '0';
  }, 3500);
}

// ===== FIREBASE DATA OPERATIONS =====
function getProgress() {
  if (state.data) return state.data;
  return { learned:{}, stars:0, badges:[], gamesPlayed:0, perfectGames:0, avatar: '👨‍🎓' };
}

function saveProgress(data) {
  if (!state.profile || !db) return;
  state.data = data;
  
  db.ref(`pupils/${state.profile}`).set({
    name: state.profile,
    pin: data.pin || '0000',
    avatar: data.avatar || '👨‍🎓',
    stars: data.stars || 0,
    learned: data.learned || {},
    learnedCount: getTotalLearned(),
    badges: data.badges || [],
    badgesCount: (data.badges || []).length,
    gamesPlayed: data.gamesPlayed || 0,
    perfectGames: data.perfectGames || 0,
    lastUpdated: Date.now()
  });
}

function addStars(n) {
  const p=getProgress(); p.stars+=n; saveProgress(p); updateStarsDisplay(p.stars);
}

function markWordLearned(cat, idx) {
  const p=getProgress();
  if(!p.learned) p.learned = {};
  if(!p.learned[cat]) p.learned[cat]=[];
  if(!p.learned[cat].includes(idx)){ p.learned[cat].push(idx); p.stars++; saveProgress(p); checkBadges(); }
}

function getTotalLearned() {
  const p=getProgress(); let t=0;
  if (!p.learned) return 0;
  for(const c in p.learned) t+=p.learned[c].length;
  return t;
}

function getTotalWords() { let t=0; for(const c in WORDS) t+=WORDS[c].length; return t; }
function isWordLearned(cat, idx) { const p=getProgress(); return p.learned && p.learned[cat] && p.learned[cat].includes(idx); }

function checkBadges() {
  const p=getProgress(); p.totalLearned=getTotalLearned();
  let newBadge=false;
  if (!p.badges) p.badges = [];
  BADGES.forEach(b=>{ if(!p.badges.includes(b.id) && b.threshold(p)){ p.badges.push(b.id); newBadge=true; }});
  if(newBadge) saveProgress(p);
}

// ===== SCREEN NAV =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>{s.classList.remove('active'); s.style.display='none';});
  const el=document.getElementById(id);
  if(el){ el.classList.add('active'); el.style.display='flex'; }
  
  if(id==='screen-home') setupHome();
  if(id==='screen-categories') setupCategories();
  if(id==='screen-games') setupGames();
  if(id==='screen-profiles') setupProfiles();

  if(id!=='screen-learn' && learnState.timer){ clearTimeout(learnState.timer); learnState.timer=null; }
}

function updateStarsDisplay(stars) {
  document.getElementById('home-stars').textContent = `⭐ ${stars}`;
}

function sanitizePinInput(input) {
  input.value = input.value.replace(/\D/g, '');
}

// ===== CONTINUOUS AUTO-RETRY PROFILES SETUP =====
function setupProfiles() {
  const container = document.getElementById('profiles-container');
  if (!container) return;
  
  if (profilesRetryTimer) clearTimeout(profilesRetryTimer);

  function renderAddCard() {
    if (document.querySelector('.profile-card.add-card')) return;

    const addCard = document.createElement('div');
    addCard.className = 'profile-card add-card';
    addCard.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openProfileModal();
    });
    addCard.innerHTML = `
      <div class="profile-emoji">➕</div>
      <div class="profile-name" style="font-size: 20px;">تلميذ جديد</div>
    `;
    container.appendChild(addCard);
  }

  if (container.children.length === 0) {
    container.innerHTML = '<div id="profiles-loading-status" style="color:#888; font-size:18px; width:100%; margin-bottom:15px;">جاري تحميل قائمة التلاميذ... ⏳</div>';
  }

  if (typeof db !== 'undefined' && db !== null) {
    db.ref('pupils').once('value', (snapshot) => {
      if (profilesRetryTimer) clearTimeout(profilesRetryTimer);
      
      container.innerHTML = '';

      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val();
          const card = document.createElement('div');
          card.className = 'profile-card';
          card.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            attemptSelectProfile(data.name);
          });

          card.innerHTML = `
            <span class="profile-lock-icon">🔒</span>
            <div class="profile-emoji">${data.avatar || '👨‍🎓'}</div>
            <div class="profile-name">${data.name}</div>
            <div class="profile-stars">⭐ ${data.stars || 0}</div>
          `;
          container.appendChild(card);
        });
      }

      renderAddCard();
    }).catch(err => {
      console.error("Firebase Read Error:", err);
      handleProfilesFetchFailure();
    });

    profilesRetryTimer = setTimeout(() => {
      if (!document.querySelector('.profile-card:not(.add-card)')) {
        handleProfilesFetchFailure();
      }
    }, 3500);

  } else {
    handleProfilesFetchFailure();
  }

  function handleProfilesFetchFailure() {
    renderAddCard();
    const statusEl = document.getElementById('profiles-loading-status');
    if (statusEl) {
      statusEl.innerHTML = 'ضعف في الاتصال! جاري إعادة المحاولة تلقائياً... 📡 <br><button onclick="setupProfiles()" style="margin-top:8px; padding:6px 16px; border-radius:10px; border:none; background:#3498db; color:#fff; cursor:pointer;">إعادة المحاولة الآن 🔄</button>';
    }
    profilesRetryTimer = setTimeout(setupProfiles, 4000);
  }
}

function openProfileModal() {
  document.getElementById('modal-add-profile').classList.add('active');
  document.getElementById('input-pupil-name').value = '';
  document.getElementById('input-pupil-pin').value = '';
  const errEl = document.getElementById('add-profile-err');
  if (errEl) errEl.style.opacity = '0';
  document.getElementById('input-pupil-name').focus();
}

function closeProfileModal() {
  document.getElementById('modal-add-profile').classList.remove('active');
}

function selectAvatar(emoji, el) {
  selectedAvatar = emoji;
  document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selected'));
  if (el) el.classList.add('selected');
}

// ===== PREVENT OVERWRITING & FRIENDLY WEBVIEW ERRORS =====
function confirmAddProfile() {
  const input = document.getElementById('input-pupil-name');
  const pinInput = document.getElementById('input-pupil-pin');
  const name = input.value.trim();
  const pin = pinInput.value.trim();

  if (!name) {
    showModalError('add-profile-err', 'الرجاء إدخال اسم التلميذ! ✏️');
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    showModalError('add-profile-err', 'الرجاء إدخال رمز مكون من 4 أرقام فقط! 🔑');
    return;
  }

  if (!db) {
    showModalError('add-profile-err', 'جاري الاتصال بالخادم، يرجى المحاولة بعد لحظات... ⏳');
    return;
  }

  db.ref(`pupils/${name}`).once('value', (snapshot) => {
    if (snapshot.exists()) {
      showModalError('add-profile-err', `عذراً! الاسم "${name}" مستعمل من قبل. يرجى اختيار اسم آخر! ⚠️`);
    } else {
      const newProfile = {
        pin: pin,
        learned: {},
        stars: 0,
        badges: [],
        gamesPlayed: 0,
        perfectGames: 0,
        avatar: selectedAvatar
      };

      state.profile = name;
      saveProgress(newProfile);

      closeProfileModal();
      showScreen('screen-home');
    }
  });
}

function attemptSelectProfile(name) {
  targetProfileName = name;
  currentEnteredPin = '';
  updatePinDots();
  
  const titleEl = document.getElementById('pin-prompt-title');
  if (titleEl) {
    titleEl.textContent = `رمز الدخول الخاص بـ ${name} 🔑`;
    titleEl.style.color = '#333';
  }
  
  const modal = document.getElementById('modal-pin-prompt');
  if (modal) modal.classList.add('active');
}

function closePinModal() {
  targetProfileName = null;
  currentEnteredPin = '';
  updatePinDots();
  
  const modal = document.getElementById('modal-pin-prompt');
  if (modal) modal.classList.remove('active');
}

function pressPinKey(digit) {
  if (currentEnteredPin.length < 4) {
    currentEnteredPin += digit;
    updatePinDots();
    if (currentEnteredPin.length === 4) {
      setTimeout(verifyPin, 150);
    }
  }
}

function deletePinKey() {
  if (currentEnteredPin.length > 0) {
    currentEnteredPin = currentEnteredPin.slice(0, -1);
    updatePinDots();
  }
}

function clearPin() {
  currentEnteredPin = '';
  updatePinDots();
}

function updatePinDots() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (dot) {
      if (i < currentEnteredPin.length) dot.classList.add('filled');
      else dot.classList.remove('filled');
    }
  }
}

// ===== NON-BLOCKING PIN VERIFICATION =====
function verifyPin() {
  if (!targetProfileName || !db) return;

  db.ref(`pupils/${targetProfileName}`).once('value', (snapshot) => {
    const data = snapshot.val();

    if (data && data.pin === currentEnteredPin) {
      state.profile = targetProfileName;
      state.data = data;
      
      const modal = document.getElementById('modal-pin-prompt');
      if (modal) modal.classList.remove('active');
      
      targetProfileName = null;
      currentEnteredPin = '';
      
      showScreen('screen-home');
    } else {
      const titleEl = document.getElementById('pin-prompt-title');
      if (titleEl) {
        titleEl.textContent = 'رمز خاطئ! حاول مجدداً ❌';
        titleEl.style.color = '#e74c3c';
        
        setTimeout(() => {
          if (titleEl && targetProfileName) {
            titleEl.textContent = `رمز الدخول الخاص بـ ${targetProfileName} 🔑`;
            titleEl.style.color = '#333';
          }
        }, 2000);
      }
      
      clearPin();
    }
  });
}

// ===== CONTINUOUS AUTO-RETRY LEADERBOARD =====
function showLeaderboard() {
  const container = document.getElementById('leaderboard-list');
  if (!container) return;
  
  if (leaderboardRetryTimer) clearTimeout(leaderboardRetryTimer);
  showScreen('screen-leaderboard');

  container.innerHTML = '<div style="color:#888; font-size:18px;">جاري تحميل لوحة الصدارة... ⏳</div>';

  if (!db) {
    container.innerHTML = '<div style="color:#e74c3c;">خطأ في الاتصال بالسحابة!</div>';
    return;
  }

  function fetchRanks() {
    db.ref('pupils').orderByChild('stars').limitToLast(25).once('value', (snapshot) => {
      if (leaderboardRetryTimer) clearTimeout(leaderboardRetryTimer);
      container.innerHTML = '';
      const leaderboardData = [];

      snapshot.forEach((childSnapshot) => {
        leaderboardData.push(childSnapshot.val());
      });

      leaderboardData.reverse();

      if (leaderboardData.length === 0) {
        container.innerHTML = '<div style="color:#888;">لا يوجد تلاميذ مسجلين في السحابة بعد!</div>';
        return;
      }

      leaderboardData.forEach((pupil, index) => {
        const rank = index + 1;
        let medal = `#${rank}`;
        if (rank === 1) medal = '🥇';
        else if (rank === 2) medal = '🥈';
        else if (rank === 3) medal = '🥉';

        const card = document.createElement('div');
        card.className = `leaderboard-card ${rank <= 3 ? 'rank-' + rank : ''}`;
        card.innerHTML = `
          <div class="leaderboard-rank">${medal}</div>
          <div class="leaderboard-user">
            <span class="leaderboard-avatar">${pupil.avatar || '👨‍🎓'}</span>
            <div>
              <div class="leaderboard-name">${pupil.name}</div>
              <div style="font-size: 12px; color: #888;">📖 تعلم ${pupil.learnedCount || 0} كلمة | 🏆 ${pupil.badgesCount || 0} أوسمة</div>
            </div>
          </div>
          <div class="leaderboard-stats">⭐ ${pupil.stars || 0}</div>
        `;
        container.appendChild(card);
      });
    }).catch(err => {
      container.innerHTML = '<div style="color:#e74c3c; font-size:16px;">ضعف في الاتصال! جاري المحاولة مجدداً... 📡</div>';
      leaderboardRetryTimer = setTimeout(fetchRanks, 4000);
    });
  }

  fetchRanks();
}

// ===== HOME =====
function setupHome() {
  const p = getProgress();
  document.getElementById('home-avatar').textContent = p.avatar || '👨‍🎓';
  document.getElementById('home-name').textContent = state.profile || 'التلميذ';
  
  updateStarsDisplay(p.stars);
  const total = getTotalWords(), learned = getTotalLearned();
  const pct = total > 0 ? Math.round(learned / total * 100) : 0;
  document.getElementById('home-progress-bar').style.width = pct + '%';
  document.getElementById('home-progress-text').textContent = `تم تعلم ${pct}% من الكلمات (${learned}/${total})`;
  
  const bc = document.getElementById('home-badges'); 
  bc.innerHTML = '';
  BADGES.forEach(b => {
    const el = document.createElement('div');
    el.className = 'badge' + (p.badges && p.badges.includes(b.id) ? ' earned' : '');
    el.textContent = b.emoji;
    el.title = b.name;
    bc.appendChild(el);
  });
}

// ===== LEARNING MODE =====
function startLearning() { showScreen('screen-categories'); }
function setupCategories() {
  const grid=document.getElementById('categories-grid'); grid.innerHTML='';
  const p=getProgress();
  CATEGORIES.forEach(cat=>{
    const learned = (p.learned && p.learned[cat.id]) ? p.learned[cat.id].length : 0;
    const total = WORDS[cat.id].length;
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `<div class="category-emoji">${cat.emoji}</div><div class="category-name">${cat.name}</div><div class="category-progress">${learned}/${total}</div>`;
    card.onclick = () => openCategory(cat.id);
    grid.appendChild(card);
  });
}
function openCategory(catId) {
  learnState.category=catId;
  learnState.index=0;
  const cat=CATEGORIES.find(c=>c.id===catId);
  document.getElementById('learn-category-title').textContent=`${cat.emoji} ${cat.name}`;
  showScreen('screen-learn');
  showFlashcard();
}
function showFlashcard() {
  const words=WORDS[learnState.category];
  const w=words[learnState.index];
  document.getElementById('flashcard-emoji').innerHTML=renderEmoji(w);
  document.getElementById('flashcard-word').textContent=w.word;
  document.getElementById('flashcard-arabic').textContent=w.arabic;
  document.getElementById('flashcard-counter').textContent=`${learnState.index+1} / ${words.length}`;
  const badge=document.getElementById('learned-badge');
  badge.style.display=isWordLearned(learnState.category,learnState.index)?'block':'none';
  
  setTimeout(()=>speak(w.word), 400);
  
  if(learnState.timer) clearTimeout(learnState.timer);
  learnState.timer=setTimeout(()=>{
    markWordLearned(learnState.category, learnState.index);
    document.getElementById('learned-badge').style.display='block';
  }, 2000);
}
function speakCurrent() { speak(WORDS[learnState.category][learnState.index].word); }
function nextCard() {
  const words=WORDS[learnState.category];
  learnState.index=(learnState.index+1)%words.length;
  showFlashcard();
}
function prevCard() {
  const words=WORDS[learnState.category];
  learnState.index=(learnState.index-1+words.length)%words.length;
  showFlashcard();
}

// ===== PLAY MODE =====
function startPlaying() { showScreen('screen-games'); }
function setupGames() {
  const grid=document.getElementById('games-grid'); grid.innerHTML='';
  const learned=getTotalLearned();
  const games=[
    {id:'emoji-match',icon:'🎯',name:'طابق الرمز',desc:'جد الرمز التعبيري الصحيح',unlock:0},
    {id:'spelling',icon:'✏️',name:'جد الحرف',desc:'جد الحرف الأول الصحيح',unlock:10},
    {id:'memory',icon:'🧠',name:'لعبة الذاكرة',desc:'طابق الأزواج المتشابهة',unlock:15}
  ];
  games.forEach(g=>{
    const locked=learned<g.unlock;
    const card=document.createElement('div');
    card.className='game-card'+(locked?' locked':'');
    card.innerHTML=`<div class="game-icon">${locked?'🔒':g.icon}</div><div class="game-info"><div class="game-title">${g.name}</div><div class="game-desc">${locked?`تعلم ${g.unlock} كلمات لفتح اللعبة`:g.desc}</div></div>`;
    if(!locked) card.onclick=()=>startGame(g.id);
    grid.appendChild(card);
  });
}

function startGame(id) {
  if(id==='emoji-match') initEmojiMatch();
  else if(id==='spelling') initSpelling();
  else if(id==='memory') initMemory();
}

// ===== EMOJI MATCH GAME =====
function initEmojiMatch() {
  const all=getAllWords();
  emojiGame={words:shuffle(all).slice(0, 10), round:0, score:0, total:10, correct:0};
  showScreen('screen-emoji-match');
  showEmojiRound();
}
function showEmojiRound() {
  if(emojiGame.round>=emojiGame.total){ endEmojiMatch(); return; }
  const w=emojiGame.words[emojiGame.round];
  document.getElementById('emoji-word').textContent=w.word;
  document.getElementById('emoji-score').textContent=`⭐ ${emojiGame.score}`;
  document.getElementById('emoji-round').textContent=`${emojiGame.round+1} / ${emojiGame.total}`;
  document.getElementById('emoji-feedback').textContent='';
  document.getElementById('emoji-feedback').className='game-feedback';
  
  const all=getAllWords().filter(x=>x.word!==w.word);
  const wrongs=shuffle(all).slice(0,3);
  const opts=shuffle([w,...wrongs]);
  const container=document.getElementById('emoji-options'); container.innerHTML='';
  opts.forEach(o=>{
    const btn=document.createElement('button');
    btn.className='emoji-option';
    btn.innerHTML=renderEmoji(o);
    btn.onclick=()=>checkEmojiAnswer(btn, o.word===w.word);
    container.appendChild(btn);
  });
  setTimeout(()=>speak(w.word),300);
}
function speakGameWord() { speak(emojiGame.words[emojiGame.round]?.word||''); }
function checkEmojiAnswer(btn, correct) {
  const fb=document.getElementById('emoji-feedback');
  if(correct){
    btn.classList.add('correct-pop');
    fb.textContent='أحسنت! 🎉';
    fb.className='game-feedback correct';
    emojiGame.score+=2; emojiGame.correct++;
    document.getElementById('emoji-score').textContent=`⭐ ${emojiGame.score}`;
    if(window.confetti) confetti({particleCount:80,spread:60,origin:{y:0.7}});
    document.querySelectorAll('.emoji-option').forEach(b=>b.onclick=null);
    setTimeout(()=>{emojiGame.round++;showEmojiRound();},1500);
  } else {
    btn.classList.add('wrong-shake');
    fb.textContent='حاول مرة أخرى! 😊';
    fb.className='game-feedback wrong';
    setTimeout(()=>btn.classList.remove('wrong-shake'),400);
  }
}
function endEmojiMatch() {
  const p=getProgress();
  p.gamesPlayed = (p.gamesPlayed || 0) + 1;
  addStars(emojiGame.score);
  if(emojiGame.correct===emojiGame.total){ p.perfectGames = (p.perfectGames || 0) + 1; }
  saveProgress(p); checkBadges();
  const fb=document.getElementById('emoji-feedback');
  fb.textContent=`أنهيت اللعبة! أحرزت ${emojiGame.score} نجوم ⭐`;
  fb.className='game-feedback correct';
  document.getElementById('emoji-word').textContent='🎊';
  document.getElementById('emoji-options').innerHTML=`<button class="btn-primary" onclick="showScreen('screen-games')">العودة للألعاب</button>`;
  document.getElementById('emoji-round').textContent='';
  if(window.confetti) confetti({particleCount:150,spread:100,origin:{y:0.6}});
}

// ===== SPELLING GAME =====
function initSpelling() {
  const learned=[];
  const p=getProgress();
  if (p.learned) {
    for(const cat in p.learned){
      p.learned[cat].forEach(idx=>{ if(WORDS[cat][idx]) learned.push(WORDS[cat][idx]); });
    }
  }
  if(learned.length<3){ learned.push(...getAllWords().slice(0,5)); }
  let pool = learned;
  spellingGame={words:shuffle(pool).slice(0,8), round:0, score:0, total:Math.min(8,pool.length), filled:[], current:null};
  showScreen('screen-spelling');
  showSpellingRound();
}
function showSpellingRound() {
  if(spellingGame.round>=spellingGame.total){ endSpelling(); return; }
  const w=spellingGame.words[spellingGame.round];
  spellingGame.current=w; spellingGame.filled=[];
  document.getElementById('spelling-hint').innerHTML=renderEmoji(w);
  document.getElementById('spelling-score').textContent=`⭐ ${spellingGame.score}`;
  document.getElementById('spelling-round').textContent=`${spellingGame.round+1} / ${spellingGame.total}`;
  document.getElementById('spelling-feedback').textContent='';
  document.getElementById('spelling-feedback').className='game-feedback';
  setTimeout(()=>speak(w.word),300);

  setupEasySpelling(w);
}
function setupEasySpelling(w) {
  const slots=document.getElementById('spelling-slots');
  slots.innerHTML=`<div style="font-size:32px;font-weight:700;direction:ltr;letter-spacing:4px">${w.word}</div>`;
  document.querySelector('.btn-undo').style.display='none';
  const first=w.word[0].toUpperCase();
  const letters=[first];
  const alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  while(letters.length<4){ const r=alpha[Math.floor(Math.random()*26)]; if(!letters.includes(r)) letters.push(r); }
  const choices=document.getElementById('letter-choices'); choices.innerHTML='';
  shuffle(letters).forEach(l=>{
    const btn=document.createElement('button');
    btn.className='letter-btn'; btn.textContent=l;
    btn.onclick=()=>{
      if(l===first){
        btn.style.borderColor='var(--correct)'; btn.style.background='#e8f5e9';
        spellingGame.score+=2;
        document.getElementById('spelling-feedback').textContent='صحيح! 🎉';
        document.getElementById('spelling-feedback').className='game-feedback correct';
        if(window.confetti) confetti({particleCount:50,spread:40,origin:{y:0.7}});
        choices.querySelectorAll('.letter-btn').forEach(b=>b.onclick=null);
        setTimeout(()=>{spellingGame.round++;showSpellingRound();},1500);
      } else {
        btn.classList.add('wrong-shake');
        document.getElementById('spelling-feedback').textContent='حاول مرة أخرى! 😊';
        document.getElementById('spelling-feedback').className='game-feedback wrong';
        setTimeout(()=>btn.classList.remove('wrong-shake'),400);
      }
    };
    choices.appendChild(btn);
  });
}
function undoLetter() { }
function speakSpellingWord() { speak(spellingGame.current?.word||''); }
function endSpelling() {
  const p=getProgress(); p.gamesPlayed = (p.gamesPlayed || 0) + 1; addStars(spellingGame.score); saveProgress(p); checkBadges();
  document.getElementById('spelling-hint').textContent='🎊';
  document.getElementById('spelling-feedback').textContent=`أنهيت اللعبة! أحرزت ${spellingGame.score} نجوم ⭐`;
  document.getElementById('spelling-feedback').className='game-feedback correct';
  document.getElementById('spelling-slots').innerHTML=`<button class="btn-primary" onclick="showScreen('screen-games')">العودة للألعاب</button>`;
  document.getElementById('letter-choices').innerHTML='';
  document.querySelector('.btn-undo').style.display='none';
  if(window.confetti) confetti({particleCount:150,spread:100,origin:{y:0.6}});
}

// ===== MEMORY GAME =====
function initMemory() {
  const pairs = 6;
  const learned=[]; const p=getProgress();
  if (p.learned) {
    for(const cat in p.learned) p.learned[cat].forEach(idx=>{if(WORDS[cat][idx]) learned.push(WORDS[cat][idx]);});
  }
  if(learned.length<pairs){ const all=getAllWords(); while(learned.length<pairs) learned.push(all[learned.length]); }
  const selected=shuffle(learned).slice(0,pairs);
  const cards=[];
  selected.forEach((w,i)=>{
    cards.push({id:i,type:'emoji',content:w.emoji,word:w.word,pairId:i});
    cards.push({id:i,type:'word',content:w.word,pairId:i});
  });
  memoryGame={cards:shuffle(cards),flipped:[],matched:0,attempts:0,busy:false,pairs:pairs};
  showScreen('screen-memory');
  const grid=document.getElementById('memory-grid');
  grid.className = 'memory-grid ' + (pairs<=4?'grid-3':'grid-4');
  grid.innerHTML='';
  memoryGame.cards.forEach((c,i)=>{
    const card=document.createElement('div');
    card.className='memory-card'; card.dataset.index=i;
    card.innerHTML=`<div class="card-back">❓</div><div class="card-front">${c.type==='emoji'?`<span class="mem-emoji">${c.content}</span>`:`<span class="mem-text">${c.content}</span>`}</div>`;
    card.onclick=()=>flipCard(i);
    grid.appendChild(card);
  });
  document.getElementById('memory-score').textContent='المحاولات: 0';
  document.getElementById('memory-feedback').textContent='';
}
function flipCard(idx) {
  if(memoryGame.busy) return;
  const cards=document.querySelectorAll('.memory-card');
  const card=cards[idx];
  if(card.classList.contains('flipped')||card.classList.contains('matched')) return;
  card.classList.add('flipped');
  const data=memoryGame.cards[idx];
  if(data.type==='word') speak(data.content);
  memoryGame.flipped.push(idx);
  if(memoryGame.flipped.length===2){
    memoryGame.busy=true; memoryGame.attempts++;
    document.getElementById('memory-score').textContent=`المحاولات: ${memoryGame.attempts}`;
    const [a,b]=memoryGame.flipped;
    const da=memoryGame.cards[a], db=memoryGame.cards[b];
    if(da.pairId===db.pairId){
      setTimeout(()=>{
        cards[a].classList.add('matched'); cards[b].classList.add('matched');
        memoryGame.matched++; memoryGame.flipped=[]; memoryGame.busy=false;
        if(memoryGame.matched===memoryGame.pairs) endMemory();
      },500);
    } else {
      setTimeout(()=>{
        cards[a].classList.remove('flipped'); cards[b].classList.remove('flipped');
        memoryGame.flipped=[]; memoryGame.busy=false;
      },1000);
    }
  }
}
function endMemory() {
  const stars=Math.max(2, 6-Math.floor(memoryGame.attempts/memoryGame.pairs));
  const p=getProgress(); p.gamesPlayed = (p.gamesPlayed || 0) + 1; addStars(stars);
  if(memoryGame.attempts<=memoryGame.pairs+2) p.perfectGames = (p.perfectGames || 0) + 1;
  saveProgress(p); checkBadges();
  const fb=document.getElementById('memory-feedback');
  fb.textContent=`أحسنت! ${stars} نجوم ⭐`;
  fb.className='game-feedback correct';
  if(window.confetti) confetti({particleCount:150,spread:100,origin:{y:0.6}});
  setTimeout(()=>{
    document.getElementById('memory-grid').innerHTML=`<button class="btn-primary" onclick="showScreen('screen-games')">العودة للألعاب</button>`;
  },2000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', ()=>{
  setupProfiles();
  showScreen('screen-profiles');
});
