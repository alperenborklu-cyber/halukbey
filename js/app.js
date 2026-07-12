// Articles Database
const ARTICLES = [
    {
        id: "turkiye-enflasyon-ve-para-politikasi",
        title: "Türkiye'de Enflasyon Dinamikleri ve Para Politikasının Sınırları",
        category: "Para Politikası",
        date: "12 Haziran 2026",
        excerpt: "Fiyat istikrarını sağlamak sadece faiz oranlarıyla oynayarak çözülebilecek basitlikte bir konu mudur? Yapısal reformlar ve mali disiplin ekseninde bir analiz.",
        content: `
            <p>Türkiye ekonomisinin yapısal sorunlarının başında gelen yüksek enflasyon, son yıllarda uygulanan farklı iktisadi teoriler ve geleneksel sıkılaşma politikalarıyla kontrol altına alınmaya çalışılmaktadır. Ancak para politikasının tek başına fiyat istikrarı sağlamada yeterli olup olmadığı sorusu güncelliğini korumaktadır.</p>
            
            <blockquote>"Enflasyon, sadece para arzındaki artışın bir sonucu değil; beklenti yönetimindeki zayıflıkların ve piyasa güveninin sarsılmasının kaçınılmaz bir yansımasıdır."</blockquote>
            
            <h2>Para Politikasının Transmisyon Mekanizması</h2>
            <p>Merkez Bankası'nın faiz kararlarının piyasa faizlerine, kredi hacmine ve en nihayetinde toplam talebe yansıması belirli bir gecikmeyle (transmisyon mekanizması) gerçekleşir. Gelişmekte olan ülkelerde bu mekanizma, dolarizasyon ve risk primindeki oynaklıklar nedeniyle sekteye uğrayabilmektedir. Faiz artışları kredi talebini kıssa da maliyet yönlü baskıları ve ithal girdi bağımlılığını doğrudan düşürememektedir.</p>
            
            <h2>Mali Disiplin ve Koordinasyon</h2>
            <p>Başarılı bir dezenflasyon süreci için para politikası ile maliye politikasının eşgüdüm içerisinde yürütülmesi elzemdir. Kamu harcamalarındaki rasyonelleşme, bütçe açığının GSYH'ye oranının kontrol altında tutulması ve vergi adaletinin sağlanması, piyasa aktörlerine verilecek en güçlü taahhütlerdir. Yapısal dönüşümler gerçekleştirilmeden atılacak adımlar, sadece geçici bir soluklanma yaratacaktır.</p>
        `
    },
    {
        id: "kambiyo-rejimi-ve-serbest-piyasa",
        title: "Kambiyo Rejimi, Rezerv Yönetimi ve Serbest Piyasa Kuralları",
        category: "Finansal Sektör",
        date: "28 Mayıs 2026",
        excerpt: "Hazine Müsteşarlığı Banka ve Kambiyo tecrübelerimiz ışığında; sermaye hareketlerinin serbestliği ve rezerv biriktirme stratejilerinin değerlendirilmesi.",
        content: `
            <p>Kambiyo rejimi, bir ülkenin küresel finansal sistemle entegrasyon biçimini belirler. Türkiye, 1989 yılında aldığı 32 Sayılı Karar ile sermaye hareketlerini büyük ölçüde serbestleştirmiş ve dışa açık bir büyüme modelini benimsemiştir. Günümüzde ise bu serbestliğin getirdiği fırsatlar ile finansal istikrarsızlık riskleri arasındaki dengeyi kurmak hayati öneme sahiptir.</p>

            <h2>Hazine ve Rezerv Yönetiminin Rolü</h2>
            <p>Güçlü merkez bankası rezervleri, dış şoklara karşı en önemli kalkandır. Rezerv biriktirme süreçlerinin şeffaf, piyasa dostu ve öngörülebilir olması gerekir. Rezervlerin kalitesi (swap hariç net rezerv seviyeleri) piyasa aktörleri tarafından yakından izlenmekte ve ülkenin CDS (temerrüt risk primi) oranını doğrudan etkilemektedir.</p>

            <blockquote>"Serbest piyasa kurallarından verilen her küçük taviz, uzun vadede daha büyük makroekonomik dengesizliklere kapı aralar."</blockquote>

            <h2>Bankacılık Sektörünün Dayanıklılığı</h2>
            <p>Kambiyo dengesi ile bankacılık sektörünün aktif kalitesi birbirine doğrudan bağlıdır. Yabancı para cinsi borçlanmanın sınırlandırılması ve bankaların açık pozisyon yönetmeliklerine sıkı sıkıya uyması, geçmiş krizlerden çıkardığımız en önemli derslerdir. Regülasyonların geriye dönük değil, geleceğe yönelik risk senaryolarına göre dizayn edilmesi şarttır.</p>
        `
    },
    {
        id: "iktisat-ve-felsefe-arasinda",
        title: "İktisat ve Felsefe Arasında: Değer Kuramı ve İnsan Davranışı",
        category: "Ekonomi Felsefesi",
        date: "04 Mayıs 2026",
        excerpt: "Rasyonel insan (Homo Economicus) varsayımının çöküşü ve ekonomiyi sadece sayılardan ibaret gören mekanistik yaklaşımın eleştirisi.",
        content: `
            <p>Modern iktisat, uzun süre insanı tamamen rasyonel, sürekli kendi faydasını maksimize etmeye çalışan matematiksel bir model (Homo Economicus) olarak tasvir etti. Ancak felsefi ve psikolojik gerçekler, kararlarımızın arkasındaki dürtülerin, toplumsal normların ve ahlaki değerlerin bu basitleştirilmiş modelden çok daha karmaşık olduğunu göstermektedir.</p>

            <h2>Değer Kuramının Dönüşümü</h2>
            <p>Adam Smith'in 'Ulusların Zenginliği'nden önce yazdığı 'Ahlaki Duygular Kuramı', iktisadın aslında ahlak felsefesinin bir alt dalı olarak doğduğunu kanıtlar. Fiyat ile değer arasındaki fark, sadece arz ve talep kesişiminde belirlenmez; toplumsal fayda, emek ve adalet kavramları juga bu denklemin asli unsurlarıdır.</p>

            <blockquote>"Ekonomi sadece kaynakların dağıtımı değil, aynı zamanda toplumun ortak refah ve adalet tasavvurunun somutlaşmış halidir."</blockquote>

            <h2>Davranışsal İktisat ve Gelecek</h2>
            <p>Bugün davranışsal finans çalışmaları, piyasaların neden her zaman etkin çalışmadığını açıklarken felsefi temellerden yararlanıyor. İnsanın irrasyonelliğini kabullenen ve iktisadi modelleri bu doğrultuda güncelleyen yeni bir paradigmaya ihtiyacımız var.</p>
        `
    },
    {
        id: "kamu-maliyesi-ve-sosyal-refah",
        title: "Kamu Maliyesinde Etkinlik ve Sosyal Refahın Dağılımı",
        category: "Kamu Maliyesi",
        date: "15 Nisan 2026",
        excerpt: "Bütçe politikalarının toplumsal sınıflar üzerindeki etkisi ve vergi adaleti reformlarının makroekonomik dengelerdeki kritik önemi.",
        content: `
            <p>Kamu maliyesi, devletin ekonomik hayata müdahale ettiği en doğrudan alandır. Toplanan vergilerin nerelere harcandığı, bütçe ödeneklerinin öncelikleri bir ülkenin kalkınma vizyonunu ve adalet anlayışını net bir şekilde ortaya koyar.</p>

            <h2>Dolaylı Vergilerin Ağırlığı Sorunu</h2>
            <p>Türkiye bütçe gelirlerinin büyük bir kısmının KDV ve ÖTV gibi dolaylı vergilere dayanması, gelir adaletsizliğini artırıcı bir etki yapmaktadır. Gelir üzerinden alınan doğrudan vergilerin payının artırılması, vergi tabanının genişletilmesi ve kayıt dışılıkla kararlı mücadele, maliye politikasının öncelikli reform alanı olmalıdır.</p>

            <h2>Sosyal Yardımlar ve Yatırım Bütçesi Dengesi</h2>
            <p>Kamu harcamalarında sadece transfer harcamalarına odaklanmak yerine, üretkenliği artıracak altyapı, eğitim ve teknoloji yatırımlarına ağırlık verilmelidir. Refahın kalıcı olması, tüketimin değil üretimin desteklenmesinden geçer.</p>
        `
    }
];

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initRouter();
    initChart();
    initSearchAndFilters();
    initContactForm();
});

// Theme Logic
function initTheme() {
    const themeBtn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";
    
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon(currentTheme);
    
    themeBtn.addEventListener("click", () => {
        const theme = document.documentElement.getAttribute("data-theme");
        const newTheme = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
        updateChartTheme(newTheme);
    });
}

// Update Theme Icon
function updateThemeIcon(theme) {
    const icon = document.querySelector("#theme-toggle i");
    if (theme === "dark") {
        icon.className = "fas fa-sun";
    } else {
        icon.className = "fas fa-moon";
    }
}

// Router Logic
function initRouter() {
    const handleRoute = () => {
        const hash = window.location.hash || "#home";
        
        // Hide all sections
        document.querySelectorAll(".page-section").forEach(sec => {
            sec.classList.remove("active");
        });
        
        // Remove active class from nav links
        document.querySelectorAll("nav a").forEach(link => {
            link.classList.remove("active");
        });
        
        // Route decoding
        if (hash.startsWith("#post/")) {
            const postId = hash.split("/")[1];
            renderPostDetail(postId);
            document.getElementById("post-detail-section").classList.add("active");
        } else {
            const sectionId = hash.substring(1) + "-section";
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add("active");
            }
            
            // Set active class in nav
            const navLink = document.querySelector(`nav a[href="${hash}"]`);
            if (navLink) navLink.classList.add("active");
        }
        
        // Scroll to top on navigation
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener("hashchange", handleRoute);
    handleRoute(); // Run initially
}

// Render dynamic post content
function renderPostDetail(postId) {
    const post = ARTICLES.find(a => a.id === postId);
    const container = document.getElementById("post-detail-content");
    
    if (post) {
        container.innerHTML = `
            <div class="post-header">
                <div class="post-meta">
                    <span class="post-detail-cat"><i class="fas fa-tag"></i> ${post.category}</span>
                    <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                    <span><i class="far fa-clock"></i> 4 dk Okuma</span>
                </div>
                <h1 class="post-title-main">${post.title}</h1>
            </div>
            <div class="post-body-container">
                ${post.content}
                <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                    <div>
                        <strong style="color: var(--text-primary)">Paylaş:</strong>
                        <a href="#" style="margin-left: 10px; color: var(--text-secondary)"><i class="fab fa-twitter"></i></a>
                        <a href="#" style="margin-left: 10px; color: var(--text-secondary)"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <a href="#blog" class="btn btn-secondary"><i class="fas fa-arrow-left"></i> Yazılara Dön</a>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="post-header">
                <h1>Yazı Bulunamadı</h1>
                <p>Aradığınız yazı kaldırılmış veya adresi değişmiş olabilir.</p>
                <a href="#blog" class="btn btn-primary" style="margin-top: 20px;">Yazılara Göz At</a>
            </div>
        `;
    }
}

// Search and Category Filter Logic
let activeCategory = "Tümü";
let searchQuery = "";

function initSearchAndFilters() {
    renderBlogGrid();
    
    // Category chips click handler
    document.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", (e) => {
            document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
            e.target.classList.add("active");
            activeCategory = e.target.textContent.trim();
            renderBlogGrid();
        });
    });
    
    // Search input handler
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderBlogGrid();
        });
    }
}

function renderBlogGrid() {
    const grid = document.getElementById("posts-grid");
    if (!grid) return;
    
    const filtered = ARTICLES.filter(post => {
        const matchesCategory = activeCategory === "Tümü" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery) || 
                              post.excerpt.toLowerCase().includes(searchQuery) ||
                              post.category.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--text-muted);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px;"></i>
                <p>Aramanızla eşleşen bir yazı bulunamadı.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filtered.map(post => `
        <article class="post-card">
            <div class="post-card-visual">
                <span class="post-category-tag">${post.category}</span>
                <i class="fas fa-chart-line" style="font-size: 3.5rem; color: var(--primary-color); opacity: 0.15;"></i>
            </div>
            <div class="post-content">
                <span class="post-date">${post.date}</span>
                <h3>${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-card-footer">
                    <a href="#post/${post.id}" class="read-more">Devamını Oku <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </article>
    `).join("");
}

// Economic indicator chart using Chart.js
let economicChart = null;

function initChart() {
    const ctx = document.getElementById('indicatorsChart');
    if (!ctx) return;
    
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const gridColor = isDark ? '#374151' : '#e2e8f0';
    const textColor = isDark ? '#9ca3af' : '#475569';
    
    const data = {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        datasets: [
            {
                label: 'Enflasyon (TÜFE %)',
                data: [42.1, 41.5, 39.8, 38.2, 36.5, 35.1],
                borderColor: '#14b8a6',
                backgroundColor: 'rgba(20, 184, 166, 0.1)',
                tension: 0.3,
                fill: true
            },
            {
                label: 'Politika Faizi (%)',
                data: [45.0, 45.0, 45.0, 47.5, 47.5, 45.0],
                borderColor: '#f59e0b',
                backgroundColor: 'transparent',
                tension: 0.1,
                borderDash: [5, 5]
            }
        ]
    };
    
    economicChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: textColor,
                        font: {
                            family: 'Outfit'
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: gridColor
                    },
                    ticks: {
                        color: textColor
                    }
                },
                y: {
                    grid: {
                        color: gridColor
                    },
                    ticks: {
                        color: textColor
                    }
                }
            }
        }
    });
}

function updateChartTheme(theme) {
    if (!economicChart) return;
    const isDark = theme === "dark";
    const gridColor = isDark ? '#374151' : '#e2e8f0';
    const textColor = isDark ? '#9ca3af' : '#475569';
    
    economicChart.options.scales.x.grid.color = gridColor;
    economicChart.options.scales.x.ticks.color = textColor;
    economicChart.options.scales.y.grid.color = gridColor;
    economicChart.options.scales.y.ticks.color = textColor;
    economicChart.options.plugins.legend.labels.color = textColor;
    
    economicChart.update();
}

// Contact Form Handling
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("contact-name").value;
        const email = document.getElementById("contact-email").value;
        const message = document.getElementById("contact-message").value;
        
        // Simple mock submission storage
        const submissions = JSON.parse(localStorage.getItem("contact_submissions") || "[]");
        submissions.push({ name, email, message, date: new Date().toISOString() });
        localStorage.setItem("contact_submissions", JSON.stringify(submissions));
        
        // Success animation feedback
        form.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; animation: fadeIn 0.5s ease;">
                <div style="width: 70px; height: 70px; background-color: rgba(20, 184, 166, 0.1); color: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 2rem;">
                    <i class="fas fa-check"></i>
                </div>
                <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Mesajınız Alındı</h3>
                <p style="color: var(--text-secondary); margin-bottom: 25px;">Sayın ${name}, mesajınız başarıyla iletildi. En kısa sürede dönüş sağlanacaktır.</p>
                <button onclick="window.location.reload()" class="btn btn-primary">Yeni Mesaj Gönder</button>
            </div>
        `;
    });
}
