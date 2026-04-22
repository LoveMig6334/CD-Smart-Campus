export type SportColor = {
  th: string;
  en: string;
  hex: string;
  score: number;
  wins: number;
};

export type EventItem = {
  date: string;
  day: number;
  title: string;
  en: string;
  cat: string;
  icon: string;
};

export const EVENTS: EventItem[] = [
  { date: "2026-04-03", day: 3, title: "ซ้อมกีฬาสี", en: "Sport color rehearsal", cat: "sport", icon: "directions_run" },
  { date: "2026-04-07", day: 7, title: "วันสงกรานต์โรงเรียน", en: "Songkran Festival", cat: "tradition", icon: "water_drop" },
  { date: "2026-04-10", day: 10, title: "Music Day Concert", en: "Music Day 2026", cat: "music", icon: "graphic_eq" },
  { date: "2026-04-14", day: 14, title: "ปิดเทอม", en: "Term break begins", cat: "admin", icon: "event_available" },
  { date: "2026-04-18", day: 18, title: "ประชุมผู้ปกครอง", en: "Parent–Teacher Meeting", cat: "admin", icon: "groups" },
  { date: "2026-04-22", day: 22, title: "Earth Day Activity", en: "Earth Day", cat: "activity", icon: "eco" },
  { date: "2026-04-25", day: 25, title: "นิทรรศการวิทยาศาสตร์", en: "Science Exhibition", cat: "academic", icon: "science" },
];

export const SPORT_COLORS: SportColor[] = [
  { th: "สีเขียว", en: "Green", hex: "#059669", score: 245, wins: 7 },
  { th: "สีม่วง", en: "Purple", hex: "#7c3aed", score: 232, wins: 6 },
  { th: "สีแสด", en: "Orange", hex: "#ea580c", score: 218, wins: 5 },
  { th: "สีชมพู", en: "Pink", hex: "#db2777", score: 210, wins: 5 },
];

export const SPORT_EVENTS = [
  { sport: "วิ่ง 100 ม.", en: "100m Sprint", cat: "Track", results: ["เขียว", "ม่วง", "แสด", "ชมพู"] },
  { sport: "ฟุตบอล", en: "Football", cat: "Team", results: ["ม่วง", "เขียว", "ชมพู", "แสด"] },
  { sport: "บาสเกตบอล", en: "Basketball", cat: "Team", results: ["แสด", "ชมพู", "เขียว", "ม่วง"] },
  { sport: "ว่ายน้ำ 50 ม.", en: "50m Swim", cat: "Track", results: ["เขียว", "แสด", "ม่วง", "ชมพู"] },
  { sport: "วอลเลย์บอล", en: "Volleyball", cat: "Team", results: ["ชมพู", "ม่วง", "เขียว", "แสด"] },
];

export const COLOR_MAP: Record<string, string> = {
  เขียว: "#059669",
  ม่วง: "#7c3aed",
  แสด: "#ea580c",
  ชมพู: "#db2777",
};

export const PORTFOLIOS = [
  { name: "ปภาวี จ.", year: "ม.6/1", title: "Satellite Imagery AI", th: "AI วิเคราะห์ภาพถ่ายดาวเทียม", tags: ["AI/ML", "Python", "Research"], desc: "Deep learning วิเคราะห์พื้นที่ป่าจากภาพ Sentinel-2" },
  { name: "กันต์ ส.", year: "ม.6/2", title: "Smart Gardening IoT", th: "แอปดูแลสวนอัตโนมัติ", tags: ["IoT", "React Native"], desc: "ระบบรดน้ำอัตโนมัติควบคุมผ่านแอปมือถือ ใช้ sensor วัดความชื้น" },
  { name: "พิมพ์ ล.", year: "ม.6/1", title: "Voices of the Canal", th: "สารคดีสั้น \"เสียงจากคลอง\"", tags: ["Film", "Social"], desc: "สารคดีสั้น 15 นาทีเกี่ยวกับชุมชนริมคลอง" },
  { name: "ธนดล อ.", year: "ม.6/3", title: "Bioplastic Research", th: "พลาสติกชีวภาพจากเปลือกกุ้ง", tags: ["Chemistry", "Research"], desc: "พัฒนา bioplastic จากไคโตซานในเปลือกกุ้ง" },
  { name: "นภัส ก.", year: "ม.5/1", title: "Robot Sumo", th: "หุ่นยนต์ซูโม่", tags: ["Robotics", "C++"], desc: "หุ่นยนต์ซูโม่แข่งขันระดับชาติ รองชนะเลิศ" },
  { name: "วริษา ช.", year: "ม.6/2", title: "CD Library Plus", th: "แอปห้องสมุดโรงเรียน", tags: ["UX/UI", "Flutter"], desc: "ออกแบบระบบห้องสมุดพร้อม prototype" },
];

export const LOST_ITEMS = [
  { title: "กระเป๋าดินสอ", en: "Pencil case", loc: "ตึก 3 ชั้น 2", date: "31 มี.ค.", status: "lost", icon: "draw" },
  { title: "หูฟังไร้สาย", en: "Earbuds", loc: "สนามฟุตบอล", date: "30 มี.ค.", status: "found", icon: "headphones" },
  { title: "แจ็คเก็ตดำ", en: "Black jacket", loc: "โรงอาหาร", date: "29 มี.ค.", status: "lost", icon: "checkroom" },
  { title: "กล่องข้าว", en: "Lunch box", loc: "ห้อง 302", date: "29 มี.ค.", status: "found", icon: "lunch_dining" },
  { title: "กุญแจรถ", en: "Car key", loc: "หน้าห้อง ม.6/1", date: "28 มี.ค.", status: "lost", icon: "key" },
  { title: "ขวดน้ำ", en: "Water bottle", loc: "สนามบาส", date: "28 มี.ค.", status: "found", icon: "water_full" },
  { title: "นาฬิกาข้อมือ", en: "Wristwatch", loc: "ห้องน้ำตึก 2", date: "27 มี.ค.", status: "lost", icon: "watch" },
  { title: "ร่มพับ", en: "Umbrella", loc: "ป้ายรถ", date: "27 มี.ค.", status: "found", icon: "umbrella" },
];

export const ROOMS_MUSIC = [
  { id: "M3", name: "ห้องซ้อมร้อง", en: "Vocal Booth", cap: 2, equip: "ไมค์ condenser, monitor", avail: true },
  { id: "M4", name: "Recording Studio", en: "Studio A", cap: 3, equip: "Full recording setup", avail: true },
];

export const LUNCH_MENU = [
  { day: "จันทร์", en: "MON", menu: "ข้าวมันไก่ + ไข่ต้ม + น้ำซุป", menuEn: "Hainanese chicken rice", dessert: "วุ้นมะพร้าว" },
  { day: "อังคาร", en: "TUE", menu: "ข้าวผัดกะเพรา + ไข่ดาว", menuEn: "Basil stir-fry rice", dessert: "ลอดช่อง" },
  { day: "พุธ", en: "WED", menu: "สปาเก็ตตี้ซอสเนื้อ + สลัด", menuEn: "Spaghetti bolognese", dessert: "ผลไม้รวม" },
  { day: "พฤหัสฯ", en: "THU", menu: "แกงเขียวหวานไก่ + ปลาทอด", menuEn: "Green curry chicken", dessert: "ทับทิมกรอบ" },
  { day: "ศุกร์", en: "FRI", menu: "ราเม็งหมูชาชู + เกี๊ยวซ่า", menuEn: "Chashu ramen + gyoza", dessert: "ไอศกรีม" },
];

export const KPI = [
  { label: "นักเรียน", en: "Students", value: "1,247", delta: "+12" },
  { label: "กิจกรรมเดือนนี้", en: "Events · Apr", value: "12", delta: "+3" },
  { label: "จองห้องวันนี้", en: "Bookings", value: "8", delta: "+2" },
  { label: "ของหาย/เจอ", en: "Lost & Found", value: "15", delta: "+5" },
];

export const BOOKINGS = [
  { room: "Practice Room 1", user: "06233 · ปัณณ์", start: "09:00", end: "10:00", status: "confirmed" },
  { room: "Studio A", user: "06118 · ภูริ", start: "10:00", end: "11:30", status: "confirmed" },
  { room: "หอประชุมใหญ่", user: "อ.สุภาวดี", start: "13:00", end: "15:00", status: "pending" },
  { room: "Practice Room 2", user: "06341 · วนิดา", start: "14:00", end: "15:00", status: "confirmed" },
  { room: "ห้องประชุม B", user: "ชมรม Robotics", start: "15:30", end: "17:00", status: "review" },
];
