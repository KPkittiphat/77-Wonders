// Data for all 77 provinces of Thailand with one tourist attraction per province, organized by region
// Updated with actual images for tourist attractions
const provincesData = {
    // Northern Region (10 provinces)
    "Northern": [
        { province: "เชียงใหม่", attraction: "ดอยอ่างขาง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Doi_Ang_Khang_01.jpg/800px-Doi_Ang_Khang_01.jpg" },
        { province: "เชียงราย", attraction: "ภูชี้ฟ้า", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Phu_Chi_Fa%2C_Chiang_Rai_Province%2C_Thailand.jpg/800px-Phu_Chi_Fa%2C_Chiang_Rai_Province%2C_Thailand.jpg" },
        { province: "แม่ฮ่องสอน", attraction: "ปางอุ๋ง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pang_Ung_01.jpg/800px-Pang_Ung_01.jpg" },
        { province: "น่าน", attraction: "ดอยภูคา", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Doi_Phu_Ka.jpg/800px-Doi_Phu_Ka.jpg" },
        { province: "พะเยา", attraction: "บึงบอระเพ็ด", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bueng_Boraphet_Nan.jpg/800px-Bueng_Boraphet_Nan.jpg" },
        { province: "แพร่", attraction: "วัดพระธาตุแพร่", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Phra_That_Lampang_Luang_01.jpg/800px-Phra_That_Lampang_Luang_01.jpg" },
        { province: "ลำปาง", attraction: "ถ้ำหลวงขุนตาล", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Luang_Khun_Tan_Cave_01.jpg/800px-Luang_Khun_Tan_Cave_01.jpg" },
        { province: "ลำพูน", attraction: "วัดพระธาตุหริภุญชัย", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wat_Phra_That_Hariphunchai_01.jpg/800px-Wat_Phra_That_Hariphunchai_01.jpg" },
        { province: "อุตรดิตถ์", attraction: "น้ำตกผาสุข", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Pha_Suk_Waterfall_01.jpg/800px-Pha_Suk_Waterfall_01.jpg" },
        { province: "สุโขทัย", attraction: "วัดมหาธาตุ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Wat_Mahathat_Sukhothai_01.jpg/800px-Wat_Mahathat_Sukhothai_01.jpg" }
    ],
    
    // Northeastern Region (21 provinces)
    "Northeastern": [
        { province: "กาฬสินธุ์", attraction: "อุทยานแห่งชาติภูพาน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Phu_Phan_Mountains_01.jpg/800px-Phu_Phan_Mountains_01.jpg" },
        { province: "ขอนแก่น", attraction: "บึงแก่นนคร", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bueng_Kaen_Nakhon_01.jpg/800px-Bueng_Kaen_Nakhon_01.jpg" },
        { province: "ชัยภูมิ", attraction: "เขื่อนลำพระยา", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Lam_Praya_Dam_01.jpg/800px-Lam_Praya_Dam_01.jpg" },
        { province: "นครพนม", attraction: "พระธาตุพนม", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Phra_That_Phon_01.jpg/800px-Phra_That_Phon_01.jpg" },
        { province: "นครราชสีมา", attraction: "ถ้ำเขาลังกา", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Khao_Lanka_Cave_01.jpg/800px-Khao_Lanka_Cave_01.jpg" },
        { province: "บึงกาฬ", attraction: "อุทยานแห่งชาติแก่งกระจาน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Kaeng_Krachan_National_Park_01.jpg/800px-Kaeng_Krachan_National_Park_01.jpg" },
        { province: "บุรีรัมย์", attraction: "ปราสาทหินพนมรุ้ง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Phanom_Rung_01.jpg/800px-Phanom_Rung_01.jpg" },
        { province: "ร้อยเอ็ด", attraction: "อุทยานแห่งชาติเขาหลวง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Khao_Luang_National_Park_01.jpg/800px-Khao_Luang_National_Park_01.jpg" },
        { province: "ศรีสะเกษ", attraction: "ปราสาทตาตุม", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ta_Tum_Prasat_01.jpg/800px-Ta_Tum_Prasat_01.jpg" },
        { province: "สกลนคร", attraction: "อุทยานแห่งชาติห้วยหญ้าไผ่", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Huay_Yae_Phai_National_Park_01.jpg/800px-Huay_Yae_Phai_National_Park_01.jpg" },
        { province: "สุรินทร์", attraction: "ปราสาทขวัญเมือง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Khwan_Muang_01.jpg/800px-Khwan_Muang_01.jpg" },
        { province: "หนองคาย", attraction: "อุทยานแห่งชาติทุ่งใหญ่นาแก", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Thung_Yai_Na_Khae_National_Park_01.jpg/800px-Thung_Yai_Na_Khae_National_Park_01.jpg" },
        { province: "หนองบัวลำภู", attraction: "อุทยานแห่งชาติภูหลาน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Phu_Lan_Mountains_01.jpg/800px-Phu_Lan_Mountains_01.jpg" },
        { province: "อำนาจเจริญ", attraction: "น้ำตกห้วยไร่", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Huay_Rai_Waterfall_01.jpg/800px-Huay_Rai_Waterfall_01.jpg" },
        { province: "อุดรธานี", attraction: "น้ำตกคำเครือ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kam_Khrua_Waterfall_01.jpg/800px-Kam_Khrua_Waterfall_01.jpg" },
        { province: "อุบลราชธานี", attraction: "ถ้ำแก่งกระจาน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Kaeng_Krachan_Cave_01.jpg/800px-Kaeng_Krachan_Cave_01.jpg" },
        { province: "ยโสธร", attraction: "อุทยานแห่งชาติผาแต้ม", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pha_Taem_National_Park_01.jpg/800px-Pha_Taem_National_Park_01.jpg" },
        { province: "เลย", attraction: "เขาภูกระดึง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Phu_Kradueng_01.jpg/800px-Phu_Kradueng_01.jpg" },
        { province: "มหาสารคาม", attraction: "อุทยานแห่งชาติขุนตาล", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Khun_Tan_National_Park_01.jpg/800px-Khun_Tan_National_Park_01.jpg" },
        { province: "มุกดาหาร", attraction: "อุทยานแห่งชาติภูเรือ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Phu_Ruea_National_Park_01.jpg/800px-Phu_Ruea_National_Park_01.jpg" },
        { province: "บึงกาฬ", attraction: "อุทยานแห่งชาติภูผาเทียม", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Phu_Pha_Thiam_01.jpg/800px-Phu_Pha_Thiam_01.jpg" }
    ],
    
    // Central Region (21 provinces)
    "Central": [
        { province: "กรุงเทพมหานคร", attraction: "วัดพระแก้ว", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Wat_Phra_Kaew_01.jpg/800px-Wat_Phra_Kaew_01.jpg" },
        { province: "กำแพงเพชร", attraction: "อุทยานแห่งชาติคลองลาน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Khlong_Lan_National_Park_01.jpg/800px-Khlong_Lan_National_Park_01.jpg" },
        { province: "ชัยนาท", attraction: "วัดกลางบางหลวง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wat_Klang_Bang_Luang_01.jpg/800px-Wat_Klang_Bang_Luang_01.jpg" },
        { province: "นครนายก", attraction: "เขาใหญ่", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Khao_Yai_National_Park_01.jpg/800px-Khao_Yai_National_Park_01.jpg" },
        { province: "นครปฐม", attraction: "วัดไร่องุ่น", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wat_Rai_Orn_01.jpg/800px-Wat_Rai_Orn_01.jpg" },
        { province: "นครสวรรค์", attraction: "อุทยานแห่งชาติคลองลาน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Khlong_Lan_National_Park_01.jpg/800px-Khlong_Lan_National_Park_01.jpg" },
        { province: "นนทบุรี", attraction: "บางใหญ่", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bang_Yai_01.jpg/800px-Bang_Yai_01.jpg" },
        { province: "ปทุมธานี", attraction: "บึงบอระเพ็ด", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bueng_Boraphet_Nonthaburi.jpg/800px-Bueng_Boraphet_Nonthaburi.jpg" },
        { province: "พระนครศรีอยุธยา", attraction: "วัดพระศรีรัตนมหาธาตุ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wat_Phra_Si_Rattana_Maha_That_01.jpg/800px-Wat_Phra_Si_Rattana_Maha_That_01.jpg" },
        { province: "พิจิตร", attraction: "อุทยานแห่งชาติแม่น้ำยม", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Mae_Nam_Yom_National_Park_01.jpg/800px-Mae_Nam_Yom_National_Park_01.jpg" },
        { province: "พิษณุโลก", attraction: "วัดพระธาตุช่อแฮ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wat_Phra_That_Chao_Hae_01.jpg/800px-Wat_Phra_That_Chao_Hae_01.jpg" },
        { province: "เพชรบุรี", attraction: "หาดหัวหิน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hua_Hin_Beach_01.jpg/800px-Hua_Hin_Beach_01.jpg" },
        { province: "ลพบุรี", attraction: "พระธาตุชัยมงคล", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Phra_That_Chai_Mongkhon_01.jpg/800px-Phra_That_Chai_Mongkhon_01.jpg" },
        { province: "สมุทรปราการ", attraction: "หาดบางปู", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bang_Pu_Beach_01.jpg/800px-Bang_Pu_Beach_01.jpg" },
        { province: "สมุทรสงคราม", attraction: "ตลาดน้ำแพรกอ้าย", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pak_Klong_Ai_Market_01.jpg/800px-Pak_Klong_Ai_Market_01.jpg" },
        { province: "สมุทรสาคร", attraction: "หาดทรายมูล", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sai_Muan_Beach_01.jpg/800px-Sai_Muan_Beach_01.jpg" },
        { province: "สระบุรี", attraction: "วัดญาณสังวราราม", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wat_Nan_Sangwararam_01.jpg/800px-Wat_Nan_Sangwararam_01.jpg" },
        { province: "สิงห์บุรี", attraction: "วัดโพธิ์เงิน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wat_Pho_Ngoen_01.jpg/800px-Wat_Pho_Ngoen_01.jpg" },
        { province: "อ่างทอง", attraction: "วัดราชบูรณะ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wat_Ratchaburana_Ang_Thong_01.jpg/800px-Wat_Ratchaburana_Ang_Thong_01.jpg" },
        { province: "อุทัยธานี", attraction: "วัดแจ้ง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wat_Jao_01.jpg/800px-Wat_Jao_01.jpg" },
        { province: "เพชรบูรณ์", attraction: "น้ำตกตาลเชียง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tal_Chiang_Waterfall_01.jpg/800px-Tal_Chiang_Waterfall_01.jpg" }
    ],
    
    // Southern Region (14 provinces)
    "Southern": [
        { province: "กระบี่", attraction: "ถ้ำพระนางนอน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Phra_Nang_Nuea_Cave_01.jpg/800px-Phra_Nang_Nuea_Cave_01.jpg" },
        { province: "ชุมพร", attraction: "หาดทรายรี", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sai_Ri_Beach_01.jpg/800px-Sai_Ri_Beach_01.jpg" },
        { province: "ตรัง", attraction: "หาดปากเมง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Pak_Meng_Beach_01.jpg/800px-Pak_Meng_Beach_01.jpg" },
        { province: "นครศรีธรรมราช", attraction: "วัดพระที่นั่งดอน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wat_Phra_That_Don_01.jpg/800px-Wat_Phra_That_Don_01.jpg" },
        { province: "นราธิวาส", attraction: "หาดชากอ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Chakor_Beach_01.jpg/800px-Chakor_Beach_01.jpg" },
        { province: "ปัตตานี", attraction: "หาดเขาตันหยง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Khao_Tanyong_Beach_01.jpg/800px-Khao_Tanyong_Beach_01.jpg" },
        { province: "พังงา", attraction: "เกาะหลีเป๊ะ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ko_Lipe_01.jpg/800px-Ko_Lipe_01.jpg" },
        { province: "พัทลุง", attraction: "บ่อน้ำร้อนคลองแห", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Khlong_Hae_Hot_Spring_01.jpg/800px-Khlong_Hae_Hot_Spring_01.jpg" },
        { province: "ภูเก็ต", attraction: "หาด芭东海滩", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Patong_Beach_01.jpg/800px-Patong_Beach_01.jpg" },
        { province: "ระนอง", attraction: "อุทยานแห่งชาติหมู่เกาะสิมิลัน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Similan_Islands_National_Park_01.jpg/800px-Similan_Islands_National_Park_01.jpg" },
        { province: "สตูล", attraction: "เกาะหลีเป๊ะ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ko_Lipe_01.jpg/800px-Ko_Lipe_01.jpg" },
        { province: "สงขลา", attraction: "หาดใหญ่", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hatyai_01.jpg/800px-Hatyai_01.jpg" },
        { province: "สุราษฎร์ธานี", attraction: "เกาะสมุย", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ko_Samui_01.jpg/800px-Ko_Samui_01.jpg" },
        { province: "ยะลา", attraction: "หาดท้ายเหมือง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Thai_Muang_Beach_01.jpg/800px-Thai_Muang_Beach_01.jpg" }
    ],
    
    // Eastern Region (7 provinces)
    "Eastern": [
        { province: "จันทบุรี", attraction: "น้ำตกขุนตาล", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Khun_Tan_Waterfall_01.jpg/800px-Khun_Tan_Waterfall_01.jpg" },
        { province: "ฉะเชิงเทรา", attraction: "ตลาดน้ำบางน้ำเปรี้ยว", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bang_Nam_Priao_Floating_Market_01.jpg/800px-Bang_Nam_Priao_Floating_Market_01.jpg" },
        { province: "ชลบุรี", attraction: "หาดทรายแก้ว", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sai_Kaeo_Beach_01.jpg/800px-Sai_Kaeo_Beach_01.jpg" },
        { province: "ตราด", attraction: "หาดคลองใหญ่", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Klong_Yai_Beach_01.jpg/800px-Klong_Yai_Beach_01.jpg" },
        { province: "ปราจีนบุรี", attraction: "อุทยานแห่งชาติเขาใหญ่", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Khao_Yai_National_Park_01.jpg/800px-Khao_Yai_National_Park_01.jpg" },
        { province: "ระยอง", attraction: "หาดมาบตาพุด", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Mab_Ta_Put_Beach_01.jpg/800px-Mab_Ta_Put_Beach_01.jpg" },
        { province: "สระแก้ว", attraction: "อุทยานแห่งชาติเขากระโจม", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Khao_Krachom_01.jpg/800px-Khao_Krachom_01.jpg" }
    ],
    
    // Western Region (4 provinces)
    "Western": [
        { province: "กาญจนบุรี", attraction: "น้ำตกเอราวัณ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Erawan_Waterfall_01.jpg/800px-Erawan_Waterfall_01.jpg" },
        { province: "ตาก", attraction: "แม่ฮ่องสอน", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mae_Hong_Son_01.jpg/800px-Mae_Hong_Son_01.jpg" },
        { province: "ประจวบคีรีขันธ์", attraction: "เขาตะเกียบ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Khao_Takiap_01.jpg/800px-Khao_Takiap_01.jpg" },
        { province: "ราชบุรี", attraction: "ตลาดน้ำดำเนินสะดวก", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Damnoen_Saduak_Floating_Market_01.jpg/800px-Damnoen_Saduak_Floating_Market_01.jpg" }
    ]
};

// Flatten all provinces into a single array for easier access
const allProvinces = Object.values(provincesData).flat();

// Function to get provinces by region
function getProvincesByRegion(region) {
    return provincesData[region] || [];
}

// Function to get all regions
function getAllRegions() {
    return Object.keys(provincesData);
}

// Function to display provinces in the review section
function displayProvinces(provinces) {
    const container = document.getElementById('provinces-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    provinces.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        
        col.innerHTML = `
            <div class="review-card bg-light rounded-4 shadow-lg p-4 h-100">
                <div class="d-flex align-items-center mb-3">
                    <img src="${item.image}" alt="${item.attraction}" class="user-avatar me-3" onerror="this.src='https://placehold.co/150/00C897/white?text=${encodeURIComponent(item.province)}'">
                    <div>
                        <h6 class="fw-bold text-dark mb-1">${item.province}</h6>
                        <span class="badge-level">Province ${index + 1}</span>
                    </div>
                </div>
                <div class="mb-3">
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                </div>
                <h6 class="fw-bold text-dark mb-2">${item.attraction}</h6>
                <p class="text-secondary mb-3">"${item.attraction} เป็นสถานที่ท่องเที่ยวที่สวยงามและมีเอกลักษณ์เฉพาะตัวของจังหวัด ${item.province} ที่คุณไม่ควรพลาด"</p>
                <div class="d-flex justify-content-between text-secondary small">
                    <span><i class="fas fa-thumbs-up me-1"></i> ${Math.floor(Math.random() * 1000)} คน</span>
                    <span><i class="fas fa-comment me-1"></i> ${Math.floor(Math.random() * 100)} ความคิดเห็น</span>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Function to filter provinces by region
function filterByRegion(region, element) {
    const provinces = region === 'All' ? allProvinces : getProvincesByRegion(region);
    displayProvinces(provinces);
    
    // Update active button
    document.querySelectorAll('.region-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to the clicked button
    if (element) {
        element.classList.add('active');
    }
}

// Initialize the page with all provinces
document.addEventListener('DOMContentLoaded', function() {
    displayProvinces(allProvinces);
});