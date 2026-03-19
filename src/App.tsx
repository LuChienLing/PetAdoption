import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Dog, Cat, X, PawPrint, Info, Mail, Phone, User, CheckCircle2, Shield, Home, Gift, CreditCard } from 'lucide-react';

type Pet = {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  gender: 'male' | 'female';
  age: string;
  breed: string;
  imageUrl: string;
  description: string;
};

const pets: Pet[] = [
  { id: '1', name: '波妞 (Ponyo)', type: 'dog', gender: 'female', age: '3歲', breed: '米克斯', imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800', description: '波妞是個活潑親人的小女孩，喜歡在草地上奔跑。' },
  { id: '2', name: '橘子', type: 'cat', gender: 'male', age: '1歲', breed: '米克斯', imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800', description: '愛撒嬌的橘貓，最喜歡吃罐罐和曬太陽。' },
  { id: '3', name: '飛哥 (Phineas)', type: 'dog', gender: 'male', age: '5歲', breed: '黃金獵犬', imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800', description: '穩重溫柔的大男孩，是陪伴家人的好夥伴。' },
  { id: '4', name: '麻糬', type: 'cat', gender: 'female', age: '2個月', breed: '英國短毛貓', imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800', description: '剛出生不久的小毛球，對世界充滿好奇。' },
  { id: '5', name: '弟弟 (Didi)', type: 'dog', gender: 'male', age: '2歲', breed: '柴犬', imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800', description: '有點傲嬌但其實很黏人，最喜歡散步。' },
  { id: '6', name: '露娜 (Luna)', type: 'cat', gender: 'female', age: '4歲', breed: '布偶貓', imageUrl: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=800', description: '優雅的公主，喜歡安靜地陪伴在主人身邊。' },
  { id: '7', name: '湯姆 (Tom)', type: 'cat', gender: 'male', age: '3歲', breed: '美國短毛貓', imageUrl: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=800', description: '活潑好動的男孩，對逗貓棒毫無抵抗力。' },
  { id: '8', name: '可可 (Coco)', type: 'dog', gender: 'female', age: '1歲', breed: '貴賓犬', imageUrl: 'https://images.unsplash.com/photo-1594149929911-78975a43d4f5?auto=format&fit=crop&q=80&w=800', description: '聰明伶俐，已經學會坐下和握手了喔！' },
  { id: '9', name: '黑寶', type: 'dog', gender: 'male', age: '4個月', breed: '台灣犬', imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800', description: '聰明顧家的小黑狗，正在學習各種指令。' },
  { id: '10', name: '花花', type: 'cat', gender: 'female', age: '2歲', breed: '三花貓', imageUrl: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800', description: '個性獨立但偶爾會撒嬌，是個安靜的陪伴者。' },
  { id: '11', name: '阿呆', type: 'dog', gender: 'male', age: '6歲', breed: '米克斯', imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800', description: '憨厚老實的阿呆，最喜歡趴在人的腳邊睡覺。' },
  { id: '12', name: '雪球', type: 'cat', gender: 'female', age: '1.5歲', breed: '波斯貓', imageUrl: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=800', description: '擁有一身雪白長毛，需要有耐心梳毛的主人。' },
  { id: '13', name: '豆豆', type: 'dog', gender: 'male', age: '3個月', breed: '米克斯', imageUrl: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800', description: '充滿活力的小幼犬，對任何事物都感到好奇。' },
  { id: '14', name: '斑斑', type: 'cat', gender: 'male', age: '5歲', breed: '虎斑貓', imageUrl: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&q=80&w=800', description: '穩重的成貓，適合喜歡安靜生活環境的家庭。' },
  { id: '15', name: '拉拉', type: 'dog', gender: 'female', age: '2歲', breed: '拉布拉多', imageUrl: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?auto=format&fit=crop&q=80&w=800', description: '親人親狗，是個永遠充滿熱情的開心果。' },
  { id: '16', name: '奇奇', type: 'cat', gender: 'male', age: '8個月', breed: '米克斯', imageUrl: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?auto=format&fit=crop&q=80&w=800', description: '調皮搗蛋的小男生，每天都在家裡跑酷。' },
  { id: '17', name: '胖虎', type: 'dog', gender: 'male', age: '4歲', breed: '法鬥', imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800', description: '雖然叫胖虎但其實很溫柔，睡覺會打呼。' },
  { id: '18', name: '咪咪', type: 'cat', gender: 'female', age: '3歲', breed: '米克斯', imageUrl: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?auto=format&fit=crop&q=80&w=800', description: '曾經流浪過，現在只想要一個溫暖的紙箱和家。' },
  { id: '19', name: '短腿', type: 'dog', gender: 'male', age: '1歲', breed: '柯基', imageUrl: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&q=80&w=800', description: '擁有迷人的電臀，最喜歡出門散步交朋友。' },
  { id: '20', name: '豹豹', type: 'cat', gender: 'male', age: '2歲', breed: '孟加拉貓', imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=800', description: '擁有美麗的豹紋，活力充沛需要較大活動空間。' }
];

export default function App() {
  const [filter, setFilter] = useState<'all' | 'dog' | 'cat'>('all');
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const filteredPets = pets.filter(pet => filter === 'all' || pet.type === filter);

  const handleAdoptClick = (pet: Pet) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
    setSubmitSuccess(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedPet(null);
      setSubmitSuccess(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => {
      handleCloseModal();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-stone-800 font-sans selection:bg-amber-200 scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-amber-500 p-2 rounded-2xl rotate-3">
                <PawPrint className="text-white w-8 h-8 -rotate-3" />
              </div>
              <span className="text-2xl font-bold text-stone-800 tracking-tight">PA<span className="text-amber-500">Taiwan</span></span>
            </div>
            <div className="hidden md:flex space-x-8 font-bold text-center">
              <a href="#home" className="text-stone-600 hover:text-amber-500 transition-colors">首頁</a>
              <a href="#adopt" className="text-stone-600 hover:text-amber-500 transition-colors">找尋毛孩</a>
              <a href="#about" className="text-stone-600 hover:text-amber-500 transition-colors">關於我們</a>
              <a href="#help" className="text-stone-600 hover:text-amber-500 transition-colors">幫助我們</a>
            </div>
            <a href="#help" className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-600 transition-colors">
              <Heart className="w-4 h-4" /> 贊助我們
            </a>
            <button className="md:hidden p-2 text-stone-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-16 pb-20 lg:pb-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-amber-100/50 blur-3xl"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] rounded-full bg-orange-100/50 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium mb-6">
                <Heart className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>給牠們一個溫暖的家</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-stone-800 leading-tight mb-6">
                帶愛回家，<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">
                  讓生命更完整
                </span>
              </h1>
              <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                我們致力於提升台灣動物福利，為被遺忘的毛孩尋找溫暖的家。每一個生命都值得被愛，來這裡遇見你命中注定的毛小孩吧！
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#adopt" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white bg-amber-500 rounded-full hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30 transition-all active:scale-95">
                  <PawPrint className="w-5 h-5" />
                  尋找你的毛小孩
                </a>
                <a href="#about" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-amber-600 bg-amber-50 rounded-full hover:bg-amber-100 transition-all active:scale-95">
                  了解更多
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Happy dog and cat" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-amber-100 rotate-12"
              >
                <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-amber-100 -rotate-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Dog className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-800">200+</p>
                    <p className="text-xs text-stone-500">成功送養</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Adoption Process Steps */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-extrabold text-stone-800 mb-4">簡單四步驟，帶愛回家</h3>
              <p className="text-stone-500">我們希望確保每個毛孩都能找到最適合的家庭</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <User className="w-8 h-8 text-amber-500" />, title: '1. 線上申請', desc: '瀏覽毛孩資訊，填寫領養意願表單' },
                { icon: <Phone className="w-8 h-8 text-amber-500" />, title: '2. 專人聯繫', desc: '志工將與您電話聯繫，了解飼養環境' },
                { icon: <Shield className="w-8 h-8 text-amber-500" />, title: '3. 互動相處', desc: '安排時間與毛孩見面，確認彼此契合度' },
                { icon: <Home className="w-8 h-8 text-amber-500" />, title: '4. 帶愛回家', desc: '完成手續，迎接家庭新成員' }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-amber-100 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto bg-amber-50 rounded-2xl flex items-center justify-center mb-4 rotate-3">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-stone-800 mb-2">{step.title}</h4>
                  <p className="text-sm text-stone-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pet Listing Section */}
      <section id="adopt" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-stone-800 mb-4">等待一個家</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">這些可愛的毛孩正在尋找永遠的避風港。點擊卡片了解更多關於牠們的故事。</p>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${filter === 'all' ? 'bg-stone-800 text-white shadow-md' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
              <PawPrint className="w-4 h-4" /> 全部
            </button>
            <button 
              onClick={() => setFilter('dog')}
              className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${filter === 'dog' ? 'bg-amber-500 text-white shadow-md' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
              <Dog className="w-4 h-4" /> 狗狗
            </button>
            <button 
              onClick={() => setFilter('cat')}
              className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${filter === 'cat' ? 'bg-orange-400 text-white shadow-md' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
              <Cat className="w-4 h-4" /> 貓咪
            </button>
          </div>

          {/* Pet Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredPets.map(pet => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={pet.id}
                  className="bg-[#FFFBF5] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-amber-100/50 transition-all group flex flex-col h-full"
                >
                  <div className="relative aspect-square overflow-hidden p-3 pb-0">
                    <img 
                      src={pet.imageUrl} 
                      alt={pet.name} 
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-700 shadow-sm flex items-center gap-1">
                      {pet.gender === 'male' ? <span className="text-blue-500">♂ 男孩</span> : <span className="text-rose-400">♀ 女孩</span>}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-stone-800">{pet.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-md font-medium">{pet.breed}</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-md font-medium">{pet.age}</span>
                    </div>
                    <p className="text-stone-500 text-sm mb-6 line-clamp-2 flex-grow">{pet.description}</p>
                    <button 
                      onClick={() => handleAdoptClick(pet)}
                      className="w-full py-3 rounded-xl font-bold text-amber-600 bg-amber-50 hover:bg-amber-500 hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto"
                    >
                      <Heart className="w-4 h-4" />
                      領養我
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-stone-900 text-stone-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/50 skew-x-12 translate-x-32 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-amber-500"></div>
                <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">About Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
                每一個生命，<br/>都值得被溫柔以待
              </h2>
              <div className="space-y-6 text-stone-300 text-lg leading-relaxed">
                <p>
                  在台灣的各個角落，有許多流浪貓狗正忍受著飢餓、疾病與孤獨。我們成立的初衷，就是希望成為這些無助生命的一道曙光。
                </p>
                <p>
                  我們不僅提供庇護所與醫療照護，更致力於推廣「領養代替購買」的理念。我們相信，透過教育與愛心的傳遞，能從根本改善流浪動物的處境。
                </p>
                <p>
                  在這裡，每一隻毛孩都經過細心的照顧與社會化訓練，牠們已經準備好，將滿滿的愛毫無保留地獻給未來的家人。
                </p>
              </div>
              <div className="mt-10 flex gap-8">
                <div>
                  <p className="text-4xl font-black text-amber-500 mb-2">2016</p>
                  <p className="text-sm text-stone-400">成立年份</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-amber-500 mb-2">170+</p>
                  <p className="text-sm text-stone-400">目前收容數量</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Rescue dog" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-amber-500 p-8 rounded-3xl text-white max-w-xs shadow-2xl">
                <p className="text-xl font-bold mb-2">"領養，是改變牠們一生的決定。"</p>
                <p className="opacity-80 text-sm">— 創辦人</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Us Section */}
      <section id="help" className="py-24 bg-[#FFFBF5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-stone-800 mb-4">幫助我們</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">您的每一分愛心，都是支持我們繼續走下去的動力。無論是捐款或物資，都能實質幫助到這些毛孩。</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Donation Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-amber-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-rose-100 p-3 rounded-2xl">
                    <Gift className="w-8 h-8 text-rose-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800">愛心捐款帳戶</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <span className="text-stone-500 font-medium mb-1 sm:mb-0">銀行名稱</span>
                    <span className="text-stone-800 font-bold text-lg">玉山銀行 (808)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <span className="text-stone-500 font-medium mb-1 sm:mb-0">分行名稱</span>
                    <span className="text-stone-800 font-bold text-lg">天母分行</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <span className="text-stone-500 font-medium mb-1 sm:mb-0">帳戶名稱</span>
                    <span className="text-stone-800 font-bold text-lg">喜愛流浪寵物</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <span className="text-amber-700 font-medium mb-1 sm:mb-0">捐款帳號</span>
                    <span className="text-amber-600 font-mono font-bold text-xl tracking-wider">0123-456-789012</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-stone-100 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 py-4 rounded-xl font-bold text-white bg-rose-500 hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/30 flex items-center justify-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    線上信用卡捐款
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=800" 
                  alt="Pet food" 
                  className="w-full h-full object-cover aspect-square"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h4 className="text-2xl font-bold mb-2">物資捐贈</h4>
                  <p className="opacity-90 text-sm leading-relaxed">
                    除了金錢捐助，我們也非常需要乾糧、罐頭、尿布墊等日常消耗品。歡迎與我們聯繫了解目前最缺乏的物資。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PawPrint className="text-amber-500 w-6 h-6" />
                <span className="text-xl font-bold text-white tracking-tight">PA<span className="text-amber-500">Taiwan</span></span>
              </div>
              <p className="text-sm">致力於提升台灣動物福利，為被遺忘的毛孩尋找溫暖的家。</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">聯絡我們</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@packtw.org</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 02-1234-5678</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">快速連結</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-amber-500 transition-colors">關於我們</a></li>
                <li><a href="#adopt" className="hover:text-amber-500 transition-colors">領養毛孩</a></li>
                <li><a href="#help" className="hover:text-amber-500 transition-colors">幫助我們</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-sm text-center">
            &copy; {new Date().getFullYear()} PA Taiwan. All rights reserved. 此為示範網站。
          </div>
        </div>
      </footer>

      {/* Adoption Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPet && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full text-stone-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="overflow-y-auto flex-grow custom-scrollbar">
                {submitSuccess ? (
                  <div className="p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-2">申請已送出！</h3>
                    <p className="text-stone-500">感謝您的愛心，我們將盡快與您聯繫安排與 {selectedPet.name} 的相見歡。</p>
                  </div>
                ) : (
                  <>
                    <div className="h-48 sm:h-64 relative">
                      <img 
                        src={selectedPet.imageUrl} 
                        alt={selectedPet.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-bold mb-1">申請領養 {selectedPet.name}</h3>
                        <p className="opacity-90 flex items-center gap-2">
                          {selectedPet.breed} • {selectedPet.age}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-6 sm:p-8">
                      <div className="bg-amber-50 p-4 rounded-2xl flex gap-3 mb-8 text-amber-800">
                        <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p className="text-sm leading-relaxed">
                          請填寫以下基本資料，送出後我們的志工會透過電話或 Email 與您聯繫，進行後續的評估與面談。
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                            <label className="text-sm font-bold text-stone-700 flex items-center gap-2">
                              <User className="w-4 h-4 text-stone-400" /> 姓名
                            </label>
                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-stone-50 focus:bg-white" placeholder="王小明" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-bold text-stone-700 flex items-center gap-2">
                              <Phone className="w-4 h-4 text-stone-400" /> 聯絡電話
                            </label>
                            <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-stone-50 focus:bg-white" placeholder="0912-345-678" />
                          </div>
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="text-sm font-bold text-stone-700 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-stone-400" /> 電子郵件
                          </label>
                          <input required type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-stone-50 focus:bg-white" placeholder="example@email.com" />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-sm font-bold text-stone-700">是否有飼養寵物經驗？</label>
                          <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="experience" value="yes" className="w-4 h-4 text-amber-500 focus:ring-amber-500" defaultChecked />
                              <span className="text-stone-600">是</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="experience" value="no" className="w-4 h-4 text-amber-500 focus:ring-amber-500" />
                              <span className="text-stone-600">否</span>
                            </label>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-sm font-bold text-stone-700">想對我們說的話 (選填)</label>
                          <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-stone-50 focus:bg-white resize-none" placeholder="分享一下您的居住環境，或是為什麼想領養牠呢？"></textarea>
                        </div>

                        <div className="pt-4">
                          <button type="submit" className="w-full py-4 rounded-xl font-bold text-white bg-amber-500 hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2">
                            <Heart className="w-5 h-5" />
                            送出申請
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
