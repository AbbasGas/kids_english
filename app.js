// ===== VOCABULARY DATA (ALGERIAN MIDDLE SCHOOL SYLLABUS: 1MS - 4MS) =====
const WORDS = {
  // ==================== 1MS (FIRST YEAR) ====================
  '1ms_greetings': [
    {word:'Hello', arabic:'مرحباً', emoji:'👋'}, {word:'Goodbye', arabic:'إلى اللقاء', emoji:'🖐️'},
    {word:'Good morning', arabic:'صباح الخير', emoji:'🌅'}, {word:'Good evening', arabic:'مساء الخير', emoji:'🌆'},
    {word:'Name', arabic:'اسم', emoji:'🏷️'}, {word:'Age', arabic:'عمر', emoji:'🎂'},
    {word:'Friend', arabic:'صديق', emoji:'🤝'}, {word:'Welcome', arabic:'أهلاً بك', emoji:'🤗'},
    {word:'Please', arabic:'من فضلك', emoji:'🙏'}, {word:'Thank you', arabic:'شكراً لك', emoji:'💐'}
  ],
  '1ms_school': [
    {word:'Book', arabic:'كتاب', emoji:'📖'}, {word:'Copybook', arabic:'كراس', emoji:'📓'},
    {word:'Pen', arabic:'قلم جاف', emoji:'🖊️'}, {word:'Pencil', arabic:'قلم رصاص', emoji:'✏️'},
    {word:'Eraser', arabic:'ممحاة', emoji:'🧹'}, {word:'Ruler', arabic:'مسطرة', emoji:'📏'},
    {word:'Schoolbag', arabic:'محفظة', emoji:'🎒'}, {word:'Board', arabic:'سبورة', emoji:'📋'},
    {word:'Desk', arabic:'مكتب', emoji:'🪑'}, {word:'Teacher', arabic:'معلم', emoji:'👩‍🏫'},
    {word:'Pupil', arabic:'تلميذ', emoji:'👨‍🎓'}, {word:'Classroom', arabic:'قسم', emoji:'🏫'},
    {word:'Scissors', arabic:'مقص', emoji:'✂️'}, {word:'Pencil case', arabic:'مقلمة', emoji:'👝'}
  ],
  '1ms_family': [
    {word:'Mother', arabic:'أم', emoji:'👩'}, {word:'Father', arabic:'أب', emoji:'👨'},
    {word:'Brother', arabic:'أخ', emoji:'👦'}, {word:'Sister', arabic:'أخت', emoji:'👧'},
    {word:'Grandmother', arabic:'جدة', emoji:'👵'}, {word:'Grandfather', arabic:'جد', emoji:'👴'},
    {word:'Uncle', arabic:'عم / خال', emoji:'👨‍💼'}, {word:'Aunt', arabic:'عمة / خالة', emoji:'👩‍💼'},
    {word:'Baby', arabic:'رضيع', emoji:'👶'}, {word:'Parents', arabic:'والدان', emoji:'👨‍👩‍👧'}
  ],
  '1ms_routines': [
    {word:'Wake up', arabic:'يستيقظ', emoji:'⏰'}, {word:'Wash face', arabic:'يغسل وجهه', emoji:'🧼'},
    {word:'Pray', arabic:'يصلي', emoji:'🤲'}, {word:'Eat breakfast', arabic:'يتناول الفطور', emoji:'🍳'},
    {word:'Brush teeth', arabic:'ينظف أسنانه', emoji:'🪥'}, {word:'Go to school', arabic:'يذهب للمدرسة', emoji:'🚶‍♂️'},
    {word:'Sleep', arabic:'ينام', emoji:'😴'}, {word:'Read', arabic:'يقرأ', emoji:'📚'},
    {word:'Play', arabic:'يلعب', emoji:'⚽'}, {word:'Watch TV', arabic:'يشاهد التلفاز', emoji:'📺'}
  ],
  '1ms_colors_num': [
    {word:'One', arabic:'واحد', emoji:'1️⃣'}, {word:'Two', arabic:'اثنان', emoji:'2️⃣'},
    {word:'Three', arabic:'ثلاثة', emoji:'3️⃣'}, {word:'Four', arabic:'أربعة', emoji:'4️⃣'},
    {word:'Five', arabic:'خمسة', emoji:'5️⃣'}, {word:'Ten', arabic:'عشرة', emoji:'🔟'},
    {word:'Red', arabic:'أحمر', emoji:'🔴'}, {word:'Blue', arabic:'أزرق', emoji:'🔵'},
    {word:'Green', arabic:'أخضر', emoji:'🟢'}, {word:'Yellow', arabic:'أصفر', emoji:'🟡'},
    {word:'White', arabic:'أبيض', emoji:'⬜'}, {word:'Black', arabic:'أسود', emoji:'⬛'}
  ],

  // ==================== 2MS (SECOND YEAR) ====================
  '2ms_appearance': [
    {word:'Tall', arabic:'طويل', emoji:'📏'}, {word:'Short', arabic:'قصير', emoji:'📐'},
    {word:'Slim', arabic:'نحيف', emoji:'🧍'}, {word:'Fat', arabic:'سمين', emoji:'🚶‍♂️'},
    {word:'Eye', arabic:'عين', emoji:'👁️'}, {word:'Hair', arabic:'شعر', emoji:'💇'},
    {word:'Straight hair', arabic:'شعر أملس', emoji:'👩'}, {word:'Wavy hair', arabic:'شعر موجي', emoji:'👩‍🦱'},
    {word:'Glasses', arabic:'نظارات', emoji:'👓'}, {word:'Smile', arabic:'ابتسامة', emoji:'😊'}
  ],
  '2ms_clothes': [
    {word:'Shirt', arabic:'قميص', emoji:'👕'}, {word:'Pants', arabic:'بنطال', emoji:'👖'},
    {word:'Shoes', arabic:'حذاء', emoji:'👟'}, {word:'Jacket', arabic:'سترة', emoji:'🧥'},
    {word:'Dress', arabic:'فستان', emoji:'👗'}, {word:'Skirt', arabic:'تنورة', emoji:'👗'},
    {word:'Cap', arabic:'قبعة', emoji:'🧢'}, {word:'Socks', arabic:'جوارب', emoji:'🧦'},
    {word:'Coat', arabic:'معطف', emoji:'🧥'}, {word:'Boots', arabic:'حذاء طويل', emoji:'🥾'}
  ],
  '2ms_shopping': [
    {word:'Apple', arabic:'تفاحة', emoji:'🍎'}, {word:'Milk', arabic:'حليب', emoji:'🥛'},
    {word:'Bread', arabic:'خبز', emoji:'🍞'}, {word:'Meat', arabic:'لحم', emoji:'🥩'},
    {word:'Chicken', arabic:'دجاج', emoji:'🍗'}, {word:'Fish', arabic:'سمك', emoji:'🐟'},
    {word:'Price', arabic:'سعر', emoji:'🏷️'}, {word:'Kilo', arabic:'كيلوغرام', emoji:'⚖️'},
    {word:'Money', arabic:'دينار / نقود', emoji:'💵'}, {word:'Supermarket', arabic:'متجر', emoji:'🛒'}
  ],
  '2ms_house': [
    {word:'Living room', arabic:'غرفة المعيشة', emoji:'🛋️'}, {word:'Bedroom', arabic:'غرفة النوم', emoji:'🛏️'},
    {word:'Kitchen', arabic:'مطبخ', emoji:'🍳'}, {word:'Bathroom', arabic:'حمام', emoji:'🛁'},
    {word:'Garden', arabic:'حديقة', emoji:'🏡'}, {word:'Bed', arabic:'سرير', emoji:'🛏️'},
    {word:'Table', arabic:'طاولة', emoji:'🪵'}, {word:'Chair', arabic:'كرسي', emoji:'🪑'},
    {word:'Sofa', arabic:'أريكة', emoji:'🛋️'}, {word:'Fridge', arabic:'ثلاجة', emoji:'🧊'}
  ],
  '2ms_health': [
    {word:'Doctor', arabic:'طبيب', emoji:'👨‍⚕️'}, {word:'Nurse', arabic:'ممرضة', emoji:'👩‍⚕️'},
    {word:'Hospital', arabic:'مستشفى', emoji:'🏥'}, {word:'Fever', arabic:'حمى', emoji:'🤒'},
    {word:'Cough', arabic:'سعال', emoji:'🤧'}, {word:'Headache', arabic:'صداع', emoji:'🤯'},
    {word:'Toothache', arabic:'ألم الأسنان', emoji:'🦷'}, {word:'Medicine', arabic:'دواء', emoji:'💊'}
  ],
  '2ms_travel': [
    {word:'Bus', arabic:'حافلة', emoji:'🚌'}, {word:'Train', arabic:'قطار', emoji:'🚂'},
    {word:'Car', arabic:'سيارة', emoji:'🚗'}, {word:'Airplane', arabic:'طائرة', emoji:'✈️'},
    {word:'Station', arabic:'محطة', emoji:'🚉'}, {word:'Map', arabic:'خريطة', emoji:'🗺️'},
    {word:'Ticket', arabic:'تذكرة', emoji:'🎟️'}, {word:'Hotel', arabic:'فندق', emoji:'🏨'}
  ],

  // ==================== 3MS (THIRD YEAR) ====================
  '3ms_personality': [
    {word:'Smart', arabic:'ذكي', emoji:'🧠'}, {word:'Kind', arabic:'لطيف', emoji:'😊'},
    {word:'Active', arabic:'نشيط', emoji:'⚡'}, {word:'Shy', arabic:'خجول', emoji:'😳'},
    {word:'Helpful', arabic:'خدوم', emoji:'🤝'}, {word:'Honest', arabic:'صادق', emoji:'😇'},
    {word:'Brave', arabic:'شجاع', emoji:'🦁'}, {word:'Creative', arabic:'مبدع', emoji:'🎨'}
  ],
  '3ms_lifestyles': [
    {word:'Past', arabic:'الماضي', emoji:'📜'}, {word:'Present', arabic:'الحاضر', emoji:'⏰'},
    {word:'Traditional', arabic:'تقليدي', emoji:'🏺'}, {word:'Modern', arabic:'حديث', emoji:'📱'},
    {word:'Ancient', arabic:'قديم جداً', emoji:'🏛️'}, {word:'Costume', arabic:'زي تقليدي', emoji:'👘'},
    {word:'Dish', arabic:'أكلة تقليدية', emoji:'🍲'}, {word:'History', arabic:'تاريخ', emoji:'📖'}
  ],
  '3ms_science': [
    {word:'Scientist', arabic:'عالم', emoji:'🔬'}, {word:'Invention', arabic:'اختراع', emoji:'💡'},
    {word:'Discovery', arabic:'اكتشاف', emoji:'🔍'}, {word:'Robot', arabic:'روبوت', emoji:'🤖'},
    {word:'Computer', arabic:'حاسوب', emoji:'💻'}, {word:'Telephone', arabic:'هاتف', emoji:'📞'},
    {word:'Rocket', arabic:'صاروخ', emoji:'🚀'}, {word:'Space', arabic:'فضاء', emoji:'🌌'}
  ],
  '3ms_environment': [
    {word:'Tree', arabic:'شجرة', emoji:'🌳'}, {word:'Forest', arabic:'غابة', emoji:'🌲'},
    {word:'Pollution', arabic:'تلوث', emoji:'🏭'}, {word:'Clean', arabic:'نظيف', emoji:'✨'},
    {word:'Recycle', arabic:'إعادة تدوير', emoji:'♻️'}, {word:'Animal', arabic:'حيوان', emoji:'🐾'},
    {word:'Protect', arabic:'يحمي', emoji:'🛡️'}, {word:'Nature', arabic:'طبيعة', emoji:'🌿'}
  ],

  // ==================== 4MS (FOURTH YEAR / BEM) ====================
  '4ms_landmarks': [
    {word:'Monument', arabic:'معلم تاريخي', emoji:'🏛️'}, {word:'Tower', arabic:'برج', emoji:'🗼'},
    {word:'Bridge', arabic:'جسر', emoji:'🌉'}, {word:'Palace', arabic:'قصر', emoji:'🏰'},
    {word:'Museum', arabic:'متحف', emoji:'🏛️'}, {word:'Mosque', arabic:'مسجد', emoji:'🕌'},
    {word:'Statue', arabic:'تمثال', emoji:'🗿'}, {word:'Landmark', arabic:'معلم شهير', emoji:'📍'}
  ],
  '4ms_figures': [
    {word:'Writer', arabic:'كاتب', emoji:'✍️'}, {word:'Poet', arabic:'شاعر', emoji:'📜'},
    {word:'Hero', arabic:'بطل تاريخي', emoji:'⚔️'}, {word:'Artist', arabic:'فنان', emoji:'🎨'},
    {word:'Leader', arabic:'قائد', emoji:'👑'}, {word:'Scholar', arabic:'باحث / باحثة', emoji:'📚'}
  ],
  '4ms_careers': [
    {word:'Engineer', arabic:'مهندس', emoji:'👷'}, {word:'Pilot', arabic:'طيار', emoji:'🧑‍✈️'},
    {word:'Journalist', arabic:'صحفي', emoji:'🎙️'}, {word:'Judge', arabic:'قاضي', emoji:'⚖️'},
    {word:'Architect', arabic:'مهندس معماري', emoji:'📐'}, {word:'Surgeon', arabic:'جراح', emoji:'🩺'}
  ],
  '4ms_citizenship': [
    {word:'Volunteer', arabic:'متطوع', emoji:'🙋‍♂️'}, {word:'Charity', arabic:'جمعية خيرية', emoji:'❤️'},
    {word:'Donate', arabic:'يتبرع', emoji:'🎁'}, {word:'Peace', arabic:'سلام', emoji:'🕊️'},
    {word:'Citizenship', arabic:'مواطنة', emoji:'🇩🇿'}, {word:'Rights', arabic:'حقوق', emoji:'📜'}
  ]
};

const CATEGORIES = [
  // --- 1MS ---
  {id:'1ms_greetings', name:'Greetings & Basics (1MS)', emoji:'👋'},
  {id:'1ms_school', name:'School & Classroom (1MS)', emoji:'🎒'},
  {id:'1ms_family', name:'Family & Relatives (1MS)', emoji:'👨‍👩‍👧‍👦'},
  {id:'1ms_routines', name:'Daily Routines & Time (1MS)', emoji:'⏰'},
  {id:'1ms_colors_num', name:'Numbers & Colors (1MS)', emoji:'🎨'},

  // --- 2MS ---
  {id:'2ms_appearance', name:'Body & Appearance (2MS)', emoji:'👀'},
  {id:'2ms_clothes', name:'Clothes & Fashion (2MS)', emoji:'👕'},
  {id:'2ms_shopping', name:'Food & Shopping (2MS)', emoji:'🛒'},
  {id:'2ms_house', name:'House & Furniture (2MS)', emoji:'🏠'},
  {id:'2ms_health', name:'Health & Illnesses (2MS)', emoji:'🩺'},
  {id:'2ms_travel', name:'Travel & Directions (2MS)', emoji:'🗺️'},

  // --- 3MS ---
  {id:'3ms_personality', name:'Personality & Abilities (3MS)', emoji:'🧠'},
  {id:'3ms_lifestyles', name:'Past & Present Life (3MS)', emoji:'📜'},
  {id:'3ms_science', name:'Science & Inventions (3MS)', emoji:'🔬'},
  {id:'3ms_environment', name:'Nature & Environment (3MS)', emoji:'🌱'},

  // --- 4MS ---
  {id:'4ms_landmarks', name:'Monuments & Landmarks (4MS)', emoji:'🏛️'},
  {id:'4ms_figures', name:'Outstanding Figures (4MS)', emoji:'📜'},
  {id:'4ms_careers', name:'Professions & Future (4MS)', emoji:'💼'},
  {id:'4ms_citizenship', name:'Citizenship & Charity (4MS)', emoji:'🕊️'}
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
let state = { profile: null };
let selectedAvatar = '👨‍🎓';
let targetProfileName = null;
let currentEnteredPin = '';
let learnState = { category: null, index: 0, timer: null };
let emojiGame = { words: [], round: 0, score: 0, total: 10 };
let spellingGame = { words: [], round: 0, score: 0, total: 8, current: null, filled: [] };
let memoryGame = { cards: [], flipped: [], matched: 0, attempts: 0, busy: false, pairs: 0 };

// ===== HELPERS =====
function shuffle(a) { const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; }
function getAllWords() { const r=[]; for(const c in WORDS) WORDS[c].forEach((w,i)=>r.push({...w,cat:c,idx:i})); return r; }
function renderEmoji(item) { if(item.image) return `<img src="${item.image}" alt="${item.word}">`; return item.emoji; }

function speak(text) {
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text); u.lang='en-US'; u.rate=0.8;
  const voices = window.speechSynthesis.getVoices();
  const goodVoice = voices.find(v => v.name.includes('Google') && v.lang.startsWith('en')) || 
                    voices.find(v => v.name.includes('Samantha') && v.lang.startsWith('en')) ||
                    voices.find(v => v.lang.startsWith('en'));
  if (goodVoice) u.voice = goodVoice;
  window.speechSynthesis.speak(u);
}

// ===== PERSISTENCE =====
function getProfilesList() {
  const list = localStorage.getItem('kids_english_profiles_list');
  return list ? JSON.parse(list) : [];
}

function saveProfilesList(list) {
  localStorage.setItem('kids_english_profiles_list', JSON.stringify(list));
}

function getProgress() {
  if (!state.profile) return { learned:{}, stars:0, badges:[], gamesPlayed:0, perfectGames:0, avatar: '👨‍🎓' };
  const key = `kids_english_user_${state.profile}`;
  const saved = localStorage.getItem(key);
  if(saved) return JSON.parse(saved);
  return { learned:{}, stars:0, badges:[], gamesPlayed:0, perfectGames:0, avatar: '👨‍🎓' };
}

function saveProgress(data) {
  if (!state.profile) return;
  localStorage.setItem(`kids_english_user_${state.profile}`, JSON.stringify(data));
}

function addStars(n) {
  const p=getProgress(); p.stars+=n; saveProgress(p); updateStarsDisplay(p.stars);
}

function markWordLearned(cat, idx) {
  const p=getProgress();
  if(!p.learned[cat]) p.learned[cat]=[];
  if(!p.learned[cat].includes(idx)){ p.learned[cat].push(idx); p.stars++; saveProgress(p); checkBadges(); }
}

function getTotalLearned() {
  const p=getProgress(); let t=0;
  for(const c in p.learned) t+=p.learned[c].length;
  return t;
}

function getTotalWords() { let t=0; for(const c in WORDS) t+=WORDS[c].length; return t; }
function isWordLearned(cat, idx) { const p=getProgress(); return p.learned[cat] && p.learned[cat].includes(idx); }

function checkBadges() {
  const p=getProgress(); p.totalLearned=getTotalLearned();
  let newBadge=false;
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

// ===== INPUT SANITIZATION =====
function sanitizePinInput(input) {
  input.value = input.value.replace(/\D/g, '');
}

// ===== DYNAMIC PROFILES & PIN SYSTEM =====
function setupProfiles() {
  const container = document.getElementById('profiles-container');
  if (!container) return;
  container.innerHTML = '';
  
  const profiles = getProfilesList();

  profiles.forEach(name => {
    const saved = localStorage.getItem(`kids_english_user_${name}`);
    const data = saved ? JSON.parse(saved) : { stars: 0, avatar: '👨‍🎓' };

    const card = document.createElement('div');
    card.className = 'profile-card';
    card.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      attemptSelectProfile(name);
    });

    card.innerHTML = `
      <span class="profile-lock-icon">🔒</span>
      <div class="profile-emoji">${data.avatar || '👨‍🎓'}</div>
      <div class="profile-name">${name}</div>
      <div class="profile-stars">⭐ ${data.stars || 0}</div>
    `;
    container.appendChild(card);
  });

  // "Add Pupil" Card
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

function openProfileModal() {
  document.getElementById('modal-add-profile').classList.add('active');
  document.getElementById('input-pupil-name').value = '';
  document.getElementById('input-pupil-pin').value = '';
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

function confirmAddProfile() {
  const input = document.getElementById('input-pupil-name');
  const pinInput = document.getElementById('input-pupil-pin');
  const name = input.value.trim();
  const pin = pinInput.value.trim();

  if (!name) {
    alert('الرجاء إدخال اسم التلميذ!');
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    alert('الرجاء إدخال رمز مكون من 4 أرقام فقط!');
    return;
  }

  const profiles = getProfilesList();
  if (!profiles.includes(name)) {
    profiles.push(name);
    saveProfilesList(profiles);
  }

  const key = `kids_english_user_${name}`;
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify({
      learned: {},
      stars: 0,
      badges: [],
      gamesPlayed: 0,
      perfectGames: 0,
      avatar: selectedAvatar,
      pin: pin
    }));
  }

  closeProfileModal();
  state.profile = name;
  showScreen('screen-home');
}

function attemptSelectProfile(name) {
  targetProfileName = name;
  currentEnteredPin = '';
  updatePinDots();
  
  const titleEl = document.getElementById('pin-prompt-title');
  if (titleEl) titleEl.textContent = `رمز الدخول الخاص بـ ${name} 🔑`;
  
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

function verifyPin() {
  if (!targetProfileName) return;

  const saved = localStorage.getItem(`kids_english_user_${targetProfileName}`);
  const data = saved ? JSON.parse(saved) : null;

  if (data && data.pin === currentEnteredPin) {
    state.profile = targetProfileName;
    const modal = document.getElementById('modal-pin-prompt');
    if (modal) modal.classList.remove('active');
    
    targetProfileName = null;
    currentEnteredPin = '';
    
    showScreen('screen-home');
  } else {
    alert('رمز الدخول غير صحيح! ❌');
    clearPin();
  }
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
    el.className = 'badge' + (p.badges.includes(b.id) ? ' earned' : '');
    el.textContent = b.emoji;
    el.title = b.name;
    bc.appendChild(el);
  });
}

// ===== LEARNING MODE =====
function startLearning() { showScreen('screen-categories'); }
function setupCategories() {
  const grid=document.getElementById('categories-grid'); grid.innerHTML='';
  CATEGORIES.forEach(cat=>{
    const p=getProgress(), learned=(p.learned[cat.id]||[]).length, total=WORDS[cat.id].length;
    const card=document.createElement('div');
    card.className='category-card';
    card.innerHTML=`<div class="category-emoji">${cat.emoji}</div><div class="category-name">${cat.name}</div><div class="category-progress">${learned}/${total}</div>`;
    card.onclick=()=>openCategory(cat.id);
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
  p.gamesPlayed++; addStars(emojiGame.score);
  if(emojiGame.correct===emojiGame.total){ p.perfectGames++; }
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
  for(const cat in p.learned){
    p.learned[cat].forEach(idx=>{ if(WORDS[cat][idx]) learned.push(WORDS[cat][idx]); });
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
  const p=getProgress(); p.gamesPlayed++; addStars(spellingGame.score); saveProgress(p); checkBadges();
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
  for(const cat in p.learned) p.learned[cat].forEach(idx=>{if(WORDS[cat][idx]) learned.push(WORDS[cat][idx]);});
  if(learned.length<pairs){ const all=getAllWords(); while(learned.length<pairs) learned.push(all[learned.length]); }
  const selected=shuffle(learned).slice(0,pairs);
  const cards=[];
  selected.forEach((w,i)=>{
    cards.push({id:i,type:'emoji',content:w.image?`<img src="${w.image}" alt="${w.word}">`:w.emoji,word:w.word,pairId:i,isImage:!!w.image});
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
    card.innerHTML=`<div class="card-back">❓</div><div class="card-front">${c.type==='emoji'?`<span class="mem-emoji">${c.isImage?c.content:c.content}</span>`:`<span class="mem-text">${c.content}</span>`}</div>`;
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
  const p=getProgress(); p.gamesPlayed++; addStars(stars);
  if(memoryGame.attempts<=memoryGame.pairs+2) p.perfectGames++;
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
