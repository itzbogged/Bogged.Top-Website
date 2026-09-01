// =========================================================================
// MASTER CONFIGURATION
// Edit anything in this section to update the website without touching HTML
// =========================================================================
const CONFIG = {
  // YouTube Configuration & Trailer
  ytChannelId: 'UCwN8Tuv6eFlqZgXgb3WTQaw',
  ytApiKey: 'AIzaSyCGE6PZSdMzqv6rlo3vnru8-jKccyExN7U', // Optional: Add API key here if available
  trailerVideoId: 'https://www.youtube.com/watch?v=hXsjAv-1Xpg', // Supports video ID or full YouTube URL

  // Asset File Paths
  assets: {
    favicon: 'assets/favicon.png',
    riftBg: 'assets/riftbackgroundpage.png',
    flagshipBanner: 'assets/flagship-banner.png',
    avatar: 'assets/avatar.png'
  },

  // Socials & External Links
  links: {
    youtube: 'https://youtube.com/@itzbogged',
    discord: 'https://discord.gg/HxuwhY424j',
    twitch: 'https://twitch.tv/itzbogged',
    secondyoutube: 'https://youtube.com/@boggeduncut',
    email: 'boggedbusiness@proton.me'
  },

  // Dynamic Cast & Crew Categories
  castCategories: [
    {
      categoryName: 'Creator',
      members: [
        {
          name: 'ItzBogged',
          role: 'Casting-Director / Lead Writer / Editor',
          avatarText: 'IB',
          image: 'assets/avatar.png'
        }
      ]
    },
    {
      categoryName: 'Production',
      members: [
        {
          name: 'FoyQ',
          role: 'Executive Producer / Writer / Director',
          avatarText: 'FQ',
          image: 'assets/foyq.png'
        },
        {
          name: 'Caaligo',
          role: 'Writer',
          avatarText: 'C',
          image: 'assets/caaligo.png'
        }
      ]
    },
    {
      categoryName: 'Main Actors',
      members: [
        {
          name: 'TheSxber',
          role: 'Actor',
          avatarText: 'TS',
          image: 'assets/thesxber.png'
        },
        {
          name: 'CashtonBTV',
          role: 'Actor',
          avatarText: 'CB',
          image: 'assets/cashtonbtv.png'
        },
        {
          name: 'Unspoken_lol',
          role: 'Actor',
          avatarText: 'UL',
          image: 'assets/unspoken_lol.png'
        },
        {
          name: 'ItzBlueShift',
          role: 'Actor',
          avatarText: 'BS',
          image: 'assets/itzblueshift.png'
        },
        {
          name: 'Swiftlost',
          role: 'Actor',
          avatarText: 'ST',
          image: 'assets/swiftlost.png'
        },
        {
          name: 'Ember_',
          role: 'Actor',
          avatarText: 'EM',
          image: 'assets/ember.png'
        },
        {
          name: 'yFury',
          role: 'Actor',
          avatarText: 'YF',
          image: 'assets/yfury.png'
        }
      ]
    }
  ],

  // Lore & Universe Categories
  loreCategories: [
    {
      title: 'Coming Soon',
      content: ''
    },
  ],

  // Media Gallery & Behind The Scenes
  gallery: [

  ],

  // Footer Modal Documents
  modals: {
    creditsHTML: `
      <h2>PRODUCTION CREDITS</h2>
      <hr />
      <p><strong>Creator & Casting-Director:</strong> ItzBogged</p>
      <p><strong>Project:</strong> The Rift (Minecraft Cinematic Series)</p>
      <p><strong>Website Design & Development:</strong> ItzBogged</p>
    `,
    privacyHTML: `
      <h2>PRIVACY POLICY</h2>
      <hr />
      <p>Your privacy is important to us. This site does not collect or track personal information beyond standard web metrics and direct inquiries sent via email.</p>
    `,
    termsHTML: `
      <h2>TERMS OF SERVICE</h2>
      <hr />
      <p>All media, logos, and cinematic content displayed on bogged.top are protected by intellectual property rights. Uncontrolled redistribution or re-uploading without explicit permission is prohibited.</p>
    `
  }
};

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavigation();
  applyConfig();
  renderLore();
  renderCast();
  renderGallery();
  renderModals();
  fetchYouTubeData();
});

// Particle Background Animation
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.8 + 0.2,
    speed: Math.random() * 0.3 + 0.1
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.y -= p.speed;
      if (p.y < 0) p.y = height;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(124, 58, 237, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Apply Central Config to Static Elements & Links
function applyConfig() {
  document.querySelectorAll("link[rel*='icon']").forEach(link => {
    if (CONFIG.assets.favicon) link.href = CONFIG.assets.favicon;
  });

  const flagshipBanner = document.getElementById('flagshipBannerImg');
  if (flagshipBanner && CONFIG.assets.flagshipBanner) {
    flagshipBanner.src = CONFIG.assets.flagshipBanner;
  }

  const avatar = document.getElementById('avatarImg');
  if (avatar && CONFIG.assets.avatar) {
    avatar.src = CONFIG.assets.avatar;
  }

  const hubAvatar = document.getElementById('hubAvatarImg');
  if (hubAvatar && CONFIG.assets.avatar) {
    hubAvatar.src = CONFIG.assets.avatar;
  }

  document.querySelectorAll('.link-yt').forEach((el) => (el.href = CONFIG.links.youtube));
  document.querySelectorAll('.link-secondyt').forEach((el) => (el.href = CONFIG.links.secondyoutube));
  document.querySelectorAll('.link-discord').forEach((el) => (el.href = CONFIG.links.discord));
  document.querySelectorAll('.link-twitch').forEach((el) => (el.href = CONFIG.links.twitch));
  document.querySelectorAll('.link-email').forEach((el) => {
    el.href = `mailto:${CONFIG.links.email}`;
    if (el.classList.contains('email-text')) el.textContent = CONFIG.links.email;
  });
}

// Render Dynamic Lore Categories
function renderLore() {
  const container = document.getElementById('loreContainer');
  if (!container) return;

  container.innerHTML = CONFIG.loreCategories
    .map(
      (item, index) => `
    <details class="accordion-item glass-panel" ${index === 0 ? 'open' : ''}>
      <summary class="accordion-header">
        <h3>${item.title}</h3>
        <span class="accordion-icon">+</span>
      </summary>
      <div class="accordion-content">
        <p>${item.content}</p>
      </div>
    </details>
  `
    )
    .join('');
}

// Render Dynamic Cast & Crew by Category
function renderCast() {
  const container = document.getElementById('castContainer');
  if (!container) return;

  container.innerHTML = CONFIG.castCategories
    .map(
      (cat) => `
    <div class="cast-category-block">
      <h3 class="category-title">${cat.categoryName}</h3>
      <div class="credits-grid">
        ${cat.members
          .map(
            (member) => `
          <div class="credit-card glass-panel">
            <div class="credit-avatar">
              <img src="${member.image}" alt="${member.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <span style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">${member.avatarText || ''}</span>
            </div>
            <h3>${member.name}</h3>
            <p class="role-title">${member.role}</p>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `
    )
    .join('');
}

// Render Dynamic Gallery & BTS
function renderGallery() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  container.innerHTML = CONFIG.gallery
    .map(
      (item) => `
    <div class="gallery-item glass-panel" onclick="openLightbox('${item.image}')">
      <img src="${item.image}" alt="${item.title}" onerror="this.src='${CONFIG.assets.flagshipBanner}'" />
      <div class="gallery-overlay"><span>View Fullscreen</span></div>
    </div>
  `
    )
    .join('');
}

// Render Modals Content
function renderModals() {
  const credits = document.getElementById('creditsModalContent');
  if (credits && CONFIG.modals.creditsHTML) credits.innerHTML = CONFIG.modals.creditsHTML;

  const privacy = document.getElementById('privacyModalContent');
  if (privacy && CONFIG.modals.privacyHTML) privacy.innerHTML = CONFIG.modals.privacyHTML;

  const terms = document.getElementById('termsModalContent');
  if (terms && CONFIG.modals.termsHTML) terms.innerHTML = CONFIG.modals.termsHTML;
}

// Navigation & Tab Switcher
function switchTab(tabId) {
  document.querySelectorAll('.tab-view').forEach((view) => {
    view.classList.remove('active');
  });

  const targetView = document.getElementById(`${tabId}-view`);
  if (targetView) targetView.classList.add('active');

  document.querySelectorAll('.nav-item').forEach((link) => {
    link.classList.remove('active');
    if (link.dataset.tab === tabId) link.classList.add('active');
  });

  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initNavigation() {
  const toggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}

// YouTube Live Data Sync
async function fetchYouTubeData() {
  const subElement = document.getElementById('ytSubscribers');
  const viewsElement = document.getElementById('ytTotalViews');
  const feedElement = document.getElementById('ytVideoFeed');

  try {
    if (CONFIG.ytApiKey) {
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails&id=${CONFIG.ytChannelId}&key=${CONFIG.ytApiKey}`
      );
      const channelData = await channelRes.json();

      if (channelData.items && channelData.items.length > 0) {
        const stats = channelData.items[0].statistics;
        if (subElement) subElement.textContent = formatNumber(stats.subscriberCount);
        if (viewsElement) viewsElement.textContent = formatNumber(stats.viewCount);

        const uploadsListId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
        const playlistRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsListId}&maxResults=3&key=${CONFIG.ytApiKey}`
        );
        const playlistData = await playlistRes.json();

        if (playlistData.items && feedElement) {
          feedElement.innerHTML = playlistData.items
            .map((item) => {
              const snippet = item.snippet;
              const videoId = snippet.resourceId.videoId;
              const title = snippet.title;
              const date = new Date(snippet.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              });
              const thumb = snippet.thumbnails.high ? snippet.thumbnails.high.url : snippet.thumbnails.default.url;

              return `
              <div class="yt-card glass-panel">
                <div class="yt-thumb-wrap">
                  <img src="${thumb}" alt="${title}" />
                  <div class="play-overlay" onclick="openVideoModal('${videoId}')">
                    <div class="play-icon-circle"><div class="play-triangle"></div></div>
                  </div>
                </div>
                <div class="yt-card-body">
                  <span class="yt-card-meta">${date}</span>
                  <h3 class="yt-card-title">${title}</h3>
                  <button class="btn btn-outline full-width btn-animated" onclick="openVideoModal('${videoId}')">WATCH NOW</button>
                </div>
              </div>
            `;
            })
            .join('');
          return;
        }
      }
    }
  } catch (err) {
    console.warn('YouTube API direct sync fallback active.');
  }

  // RSS Fallback Sync
  try {
    const rssRes = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${CONFIG.ytChannelId}`
    );
    const rssData = await rssRes.json();

    if (rssData.status === 'ok' && rssData.items && rssData.items.length > 0) {
      if (subElement && subElement.textContent === '--') subElement.textContent = 'Synced';
      if (viewsElement && viewsElement.textContent === '--') viewsElement.textContent = 'Synced';

      if (feedElement) {
        feedElement.innerHTML = rssData.items
          .slice(0, 3)
          .map((item) => {
            const videoId = item.guid.split(':')[2] || '';
            const title = item.title;
            const date = new Date(item.pubDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            });
            const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

            return `
            <div class="yt-card glass-panel">
              <div class="yt-thumb-wrap">
                <img src="${thumb}" alt="${title}" />
                <div class="play-overlay" onclick="openVideoModal('${videoId}')">
                  <div class="play-icon-circle"><div class="play-triangle"></div></div>
                </div>
              </div>
              <div class="yt-card-body">
                <span class="yt-card-meta">${date}</span>
                <h3 class="yt-card-title">${title}</h3>
                <button class="btn btn-outline full-width btn-animated" onclick="openVideoModal('${videoId}')">WATCH NOW</button>
              </div>
            </div>
          `;
          })
          .join('');
      }
    }
  } catch (err) {
    if (feedElement) {
      feedElement.innerHTML = `<p style="text-align:center; color: var(--text-muted); grid-column: 1/-1;">Visit <a href="${CONFIG.links.youtube}" target="_blank" style="color:var(--purple-main);">YouTube Channel</a> for latest uploads.</p>`;
    }
  }
}

function formatNumber(numStr) {
  const num = parseInt(numStr, 10);
  if (isNaN(num)) return numStr;
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toLocaleString();
}

function switchRiftTab(sectionId, btn) {
  document.querySelectorAll('.sub-link').forEach((b) => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.rift-tab-content').forEach((content) => {
    content.classList.remove('active');
  });

  const target = document.getElementById(`rift-${sectionId}`);
  if (target) target.classList.add('active');
}

// Lightbox & Video Modal Controls
function openLightbox(imgSrc) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (lb && img) {
    img.src = imgSrc;
    lb.classList.add('active');
  }
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('active');
}

function openTrailerModal() {
  let videoId = CONFIG.trailerVideoId;
  if (videoId.includes('v=')) {
    videoId = videoId.split('v=')[1].split('&')[0];
  } else if (videoId.includes('youtu.be/')) {
    videoId = videoId.split('youtu.be/')[1].split('?')[0];
  }
  openVideoModal(videoId);
}

function openVideoModal(videoId) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  if (modal && iframe) {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.classList.add('active');
  }
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  if (modal && iframe) {
    iframe.src = '';
    modal.classList.remove('active');
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function openLinkHub() {
  openModal('linkHubModal');
}

// Contact Form Handler with Requested Formatting
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const categorySubject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const mailtoSubject = encodeURIComponent(categorySubject);
  const mailtoBody = encodeURIComponent(`${name}\n${email}\n\n${message}`);

  window.location.href = `mailto:${CONFIG.links.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const status = document.getElementById('formStatus');
  if (status) {
    status.style.color = '#10B981';
    status.textContent = 'Opening your email client...';
    document.getElementById('contactForm').reset();
  }
}