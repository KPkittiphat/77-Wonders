# 77 WONDERS

🚀 77 WONDERS เป็นโปรเจคเว็บหน้าตา (static frontend) ที่รวบรวมข้อมูลสถานที่ท่องเที่ยวทั้ง 77 จังหวัดของประเทศไทย พร้อมหน้าแนะนำฟีเจอร์ต่าง ๆ เช่น AI Trip Planner, Unseen Discovery, Community & Review และหน้าแสดงแพ็กเกจราคาต่าง ๆ

---

## ไฮไลท์
- หน้าเว็บแบบ Responsive ใช้ Bootstrap และ Font Awesome
- ข้อมูลสถานที่จัดเก็บในไฟล์ JavaScript: [`provincesData`](frontend/assets/provinces.js) และแสดงโดยฟังก์ชัน [`displayProvinces`](frontend/assets/provinces.js)
- แยกเพจสำหรับฟีเจอร์สำคัญ: หน้าแรก, AI Planner, Unseen Discovery, Community & Review, และหน้าราคา (Basic / Standard / Premium)

---

## ไฟล์สำคัญ
- หน้าเริ่มต้น: [frontend/index.html](frontend/index.html)  
- AI Trip Planner: [frontend/ai-trip-planner.html](frontend/ai-trip-planner.html)  
- Unseen Discovery: [frontend/unseen-discovery.html](frontend/unseen-discovery.html)  
- Community & Review: [frontend/community-review.html](frontend/community-review.html) — โหลดสคริปต์: [frontend/assets/provinces.js](frontend/assets/provinces.js)  
- หน้าแพ็กเกจราคา:  
  - Basic: [frontend/pricing-basic.html](frontend/pricing-basic.html)  
  - Standard: [frontend/pricing-standard.html](frontend/pricing-standard.html)  
  - Premium: [frontend/pricing-premium.html](frontend/pricing-premium.html)  
- ข้อมูล/สคริปต์จังหวัด: [`provincesData`](frontend/assets/provinces.js) และฟังก์ชัน [`displayProvinces`](frontend/assets/provinces.js) — [frontend/assets/provinces.js](frontend/assets/provinces.js)  
- สไตล์หลัก: [frontend/assets/styles.css](frontend/assets/styles.css)  
- หน้า About: [frontend/about.html](frontend/about.html)

---

## โครงสร้างโฟลเดอร์ (ย่อ)
  - index.html
  - ai-trip-planner.html
  - unseen-discovery.html
  - community-review.html
  - pricing-basic.html
  - pricing-standard.html
  - pricing-premium.html
  - about.html
  - assets/
    - provinces.js
    - styles.css



