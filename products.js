// ============================================================
//  รายการสินค้า — แก้ไฟล์นี้ไฟล์เดียวเวลาเพิ่ม/ลบ/ใส่รูปสินค้า
// ============================================================
//  เพิ่มสินค้า : ก๊อปปี้ 1 บรรทัด วางต่อท้าย แล้วแก้ข้อมูล
//  ลบสินค้า   : ลบทั้งบรรทัดทิ้ง
//  ของหมด     : เปลี่ยน soldOut:false เป็น soldOut:true
//  name = ชื่อสินค้า | price = ราคา (ตัวเลข) | img = ชื่อไฟล์รูป เช่น "k1.jpg" (ถ้ายังไม่มีรูปใส่ "")
//  cat  = ชื่อหมวด ต้องสะกดตรงกับรายการ cats ด้านล่างเป๊ะ
//  ท้ายทุกบรรทัดต้องมี ,
// ============================================================

// หมวดที่ขึ้นในหน้า Shop here (เรียงตามนี้)
const cats=["พวงกุญแจ แบบที่ 1", "พวงกุญแจ แบบที่ 2", "กำไล แบบที่ 1", "กำไล แบบที่ 2", "กำไล แบบที่ 3", "เซต", "รีสต็อก"];

const products=[
  // ---------- พวงกุญแจ แบบที่ 1 ----------
  {name:"พวงกุญแจ แบบที่ 1 ชิ้นที่ 1", price:59, cat:"พวงกุญแจ แบบที่ 1", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 1 ชิ้นที่ 2", price:59, cat:"พวงกุญแจ แบบที่ 1", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 1 ชิ้นที่ 3", price:59, cat:"พวงกุญแจ แบบที่ 1", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 1 ชิ้นที่ 4", price:59, cat:"พวงกุญแจ แบบที่ 1", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 1 ชิ้นที่ 5", price:59, cat:"พวงกุญแจ แบบที่ 1", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 1 ชิ้นที่ 6", price:59, cat:"พวงกุญแจ แบบที่ 1", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 1 ชิ้นที่ 7", price:59, cat:"พวงกุญแจ แบบที่ 1", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 1 ชิ้นที่ 8", price:59, cat:"พวงกุญแจ แบบที่ 1", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 1 ชิ้นที่ 9", price:59, cat:"พวงกุญแจ แบบที่ 1", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 1 ชิ้นที่ 10", price:59, cat:"พวงกุญแจ แบบที่ 1", img:"", soldOut:false},
  // ---------- พวงกุญแจ แบบที่ 2 ----------
  {name:"พวงกุญแจ แบบที่ 2 ชิ้นที่ 1", price:59, cat:"พวงกุญแจ แบบที่ 2", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 2 ชิ้นที่ 2", price:59, cat:"พวงกุญแจ แบบที่ 2", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 2 ชิ้นที่ 3", price:59, cat:"พวงกุญแจ แบบที่ 2", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 2 ชิ้นที่ 4", price:59, cat:"พวงกุญแจ แบบที่ 2", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 2 ชิ้นที่ 5", price:59, cat:"พวงกุญแจ แบบที่ 2", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 2 ชิ้นที่ 6", price:59, cat:"พวงกุญแจ แบบที่ 2", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 2 ชิ้นที่ 7", price:59, cat:"พวงกุญแจ แบบที่ 2", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 2 ชิ้นที่ 8", price:59, cat:"พวงกุญแจ แบบที่ 2", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 2 ชิ้นที่ 9", price:59, cat:"พวงกุญแจ แบบที่ 2", img:"", soldOut:false},
  {name:"พวงกุญแจ แบบที่ 2 ชิ้นที่ 10", price:59, cat:"พวงกุญแจ แบบที่ 2", img:"", soldOut:false},
  // ---------- กำไล แบบที่ 1 ----------
  {name:"กำไล แบบที่ 1 ชิ้นที่ 1", price:59, cat:"กำไล แบบที่ 1", img:"", soldOut:false},
  {name:"กำไล แบบที่ 1 ชิ้นที่ 2", price:59, cat:"กำไล แบบที่ 1", img:"", soldOut:false},
  {name:"กำไล แบบที่ 1 ชิ้นที่ 3", price:59, cat:"กำไล แบบที่ 1", img:"", soldOut:false},
  {name:"กำไล แบบที่ 1 ชิ้นที่ 4", price:59, cat:"กำไล แบบที่ 1", img:"", soldOut:false},
  {name:"กำไล แบบที่ 1 ชิ้นที่ 5", price:59, cat:"กำไล แบบที่ 1", img:"", soldOut:false},
  {name:"กำไล แบบที่ 1 ชิ้นที่ 6", price:59, cat:"กำไล แบบที่ 1", img:"", soldOut:false},
  {name:"กำไล แบบที่ 1 ชิ้นที่ 7", price:59, cat:"กำไล แบบที่ 1", img:"", soldOut:false},
  {name:"กำไล แบบที่ 1 ชิ้นที่ 8", price:59, cat:"กำไล แบบที่ 1", img:"", soldOut:false},
  {name:"กำไล แบบที่ 1 ชิ้นที่ 9", price:59, cat:"กำไล แบบที่ 1", img:"", soldOut:false},
  {name:"กำไล แบบที่ 1 ชิ้นที่ 10", price:59, cat:"กำไล แบบที่ 1", img:"", soldOut:false},
  // ---------- กำไล แบบที่ 2 ----------
  {name:"กำไล แบบที่ 2 ชิ้นที่ 1", price:59, cat:"กำไล แบบที่ 2", img:"", soldOut:false},
  {name:"กำไล แบบที่ 2 ชิ้นที่ 2", price:59, cat:"กำไล แบบที่ 2", img:"", soldOut:false},
  {name:"กำไล แบบที่ 2 ชิ้นที่ 3", price:59, cat:"กำไล แบบที่ 2", img:"", soldOut:false},
  {name:"กำไล แบบที่ 2 ชิ้นที่ 4", price:59, cat:"กำไล แบบที่ 2", img:"", soldOut:false},
  {name:"กำไล แบบที่ 2 ชิ้นที่ 5", price:59, cat:"กำไล แบบที่ 2", img:"", soldOut:false},
  {name:"กำไล แบบที่ 2 ชิ้นที่ 6", price:59, cat:"กำไล แบบที่ 2", img:"", soldOut:false},
  {name:"กำไล แบบที่ 2 ชิ้นที่ 7", price:59, cat:"กำไล แบบที่ 2", img:"", soldOut:false},
  {name:"กำไล แบบที่ 2 ชิ้นที่ 8", price:59, cat:"กำไล แบบที่ 2", img:"", soldOut:false},
  {name:"กำไล แบบที่ 2 ชิ้นที่ 9", price:59, cat:"กำไล แบบที่ 2", img:"", soldOut:false},
  {name:"กำไล แบบที่ 2 ชิ้นที่ 10", price:59, cat:"กำไล แบบที่ 2", img:"", soldOut:false},
  // ---------- กำไล แบบที่ 3 ----------
  {name:"กำไล แบบที่ 3 ชิ้นที่ 1", price:59, cat:"กำไล แบบที่ 3", img:"", soldOut:false},
  {name:"กำไล แบบที่ 3 ชิ้นที่ 2", price:59, cat:"กำไล แบบที่ 3", img:"", soldOut:false},
  {name:"กำไล แบบที่ 3 ชิ้นที่ 3", price:59, cat:"กำไล แบบที่ 3", img:"", soldOut:false},
  {name:"กำไล แบบที่ 3 ชิ้นที่ 4", price:59, cat:"กำไล แบบที่ 3", img:"", soldOut:false},
  {name:"กำไล แบบที่ 3 ชิ้นที่ 5", price:59, cat:"กำไล แบบที่ 3", img:"", soldOut:false},
  {name:"กำไล แบบที่ 3 ชิ้นที่ 6", price:59, cat:"กำไล แบบที่ 3", img:"", soldOut:false},
  {name:"กำไล แบบที่ 3 ชิ้นที่ 7", price:59, cat:"กำไล แบบที่ 3", img:"", soldOut:false},
  {name:"กำไล แบบที่ 3 ชิ้นที่ 8", price:59, cat:"กำไล แบบที่ 3", img:"", soldOut:false},
  {name:"กำไล แบบที่ 3 ชิ้นที่ 9", price:59, cat:"กำไล แบบที่ 3", img:"", soldOut:false},
  {name:"กำไล แบบที่ 3 ชิ้นที่ 10", price:59, cat:"กำไล แบบที่ 3", img:"", soldOut:false},
  // ---------- เซต ----------
  {name:"เซต ชิ้นที่ 1", price:59, cat:"เซต", img:"", soldOut:false},
  {name:"เซต ชิ้นที่ 2", price:59, cat:"เซต", img:"", soldOut:false},
  {name:"เซต ชิ้นที่ 3", price:59, cat:"เซต", img:"", soldOut:false},
  {name:"เซต ชิ้นที่ 4", price:59, cat:"เซต", img:"", soldOut:false},
  {name:"เซต ชิ้นที่ 5", price:59, cat:"เซต", img:"", soldOut:false},
  {name:"เซต ชิ้นที่ 6", price:59, cat:"เซต", img:"", soldOut:false},
  {name:"เซต ชิ้นที่ 7", price:59, cat:"เซต", img:"", soldOut:false},
  {name:"เซต ชิ้นที่ 8", price:59, cat:"เซต", img:"", soldOut:false},
  {name:"เซต ชิ้นที่ 9", price:59, cat:"เซต", img:"", soldOut:false},
  {name:"เซต ชิ้นที่ 10", price:59, cat:"เซต", img:"", soldOut:false},
  // ---------- รีสต็อก ----------
  {name:"รีสต็อก ชิ้นที่ 1", price:59, cat:"รีสต็อก", img:"", soldOut:false},
  {name:"รีสต็อก ชิ้นที่ 2", price:59, cat:"รีสต็อก", img:"", soldOut:false},
  {name:"รีสต็อก ชิ้นที่ 3", price:59, cat:"รีสต็อก", img:"", soldOut:false},
  {name:"รีสต็อก ชิ้นที่ 4", price:59, cat:"รีสต็อก", img:"", soldOut:false},
  {name:"รีสต็อก ชิ้นที่ 5", price:59, cat:"รีสต็อก", img:"", soldOut:false},
  {name:"รีสต็อก ชิ้นที่ 6", price:59, cat:"รีสต็อก", img:"", soldOut:false},
  {name:"รีสต็อก ชิ้นที่ 7", price:59, cat:"รีสต็อก", img:"", soldOut:false},
  {name:"รีสต็อก ชิ้นที่ 8", price:59, cat:"รีสต็อก", img:"", soldOut:false},
  {name:"รีสต็อก ชิ้นที่ 9", price:59, cat:"รีสต็อก", img:"", soldOut:false},
  {name:"รีสต็อก ชิ้นที่ 10", price:59, cat:"รีสต็อก", img:"", soldOut:false},
];
