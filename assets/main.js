/**
 * @license
 * پایگاه خبری تحلیلی «اولین خبر» (Avalin Khabar)
 * موتور جاوااسکریپت، تعاملات کاربری و مدیریت داده‌های تحریریه
 */

document.addEventListener('DOMContentLoaded', () => {
  initPersianDateTime();
  initStickyHeader();
  initMobileDrawer();
  initQuickSearchModal();
  initArticleReaderModal();
  initNewsletterForms();
  initBackToTop();

  // اجرای توابع اختصاصی هر صفحه
  const currentPath = window.location.pathname.toLowerCase();
  
  if (document.getElementById('news-grid-target') || currentPath.includes('news.html')) {
    initNewsPage();
  }

  if (document.getElementById('contact-form') || currentPath.includes('contact.html')) {
    initContactPage();
  }
});

/* ==========================================================================
   ۱. تاریخ و ساعت زنده هجری شمسی
   ========================================================================== */
function initPersianDateTime() {
  const dateElements = document.querySelectorAll('.live-persian-date');
  const timeElements = document.querySelectorAll('.live-persian-time');

  try {
    const now = new Date();
    // تقویم هجری شمسی به زبان فارسی
    const persianDateStr = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(now);

    const persianTimeStr = new Intl.DateTimeFormat('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(now);

    dateElements.forEach(el => el.textContent = `امروز، ${persianDateStr}`);
    timeElements.forEach(el => el.textContent = persianTimeStr);
  } catch (e) {
    dateElements.forEach(el => el.textContent = "امروز، دوشنبه ۲۸ اسفند ۱۴۰۴");
    timeElements.forEach(el => el.textContent = "۱۲:۳۰");
  }
}

/* ==========================================================================
   ۲. سربرگ چسبان و تشخیص اسکرول
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   ۳. منوی کشویی موبایل
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.mobile-drawer-backdrop');
  const closeBtn = document.querySelector('.drawer-close-btn');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openDrawer() {
    backdrop.classList.add('show');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    backdrop.classList.remove('show');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   ۴. مودال جستجوی سریع در سربرگ
   ========================================================================== */
function initQuickSearchModal() {
  const openBtns = document.querySelectorAll('.trigger-quick-search');
  const modal = document.getElementById('quick-search-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.close-search-modal');
  const input = modal.querySelector('.search-modal-input');
  const resultsContainer = modal.querySelector('.search-modal-results');

  function openSearch() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (input) input.focus();
    }, 100);
  }

  function closeSearch() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    if (input) input.value = '';
    if (resultsContainer) resultsContainer.innerHTML = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  if (input && resultsContainer && typeof NEWS_DATA !== 'undefined') {
    input.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        resultsContainer.innerHTML = '<p style="padding:16px;text-align:center;color:#667085;font-size:0.875rem;">کلمه مورد نظر خود را تایپ فرمایید...</p>';
        return;
      }

      const matches = NEWS_DATA.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      ).slice(0, 6);

      if (matches.length === 0) {
        resultsContainer.innerHTML = '<p style="padding:16px;text-align:center;color:#E53935;font-size:0.875rem;">نتیجه‌ای برای جستجوی شما پیدا نشد.</p>';
      } else {
        resultsContainer.innerHTML = matches.map(item => `
          <div class="quick-search-result-item" onclick="openArticleModal(${item.id}); document.getElementById('quick-search-modal').classList.remove('show'); document.body.style.overflow='';">
            <div style="display:flex;flex-direction:column;gap:3px;flex:1;">
              <span style="font-size:0.75rem;font-weight:700;color:#1769E0;">${item.category}</span>
              <strong style="font-size:0.9rem;color:#0B1320;">${item.title}</strong>
            </div>
            <span style="font-size:0.75rem;color:#98A2B3;white-space:nowrap;">${item.time}</span>
          </div>
        `).join('');
      }
    });
  }
}

/* ==========================================================================
   ۵. مودال مطالعه کامل مقاله (Article Reader Modal)
   ========================================================================== */
function initArticleReaderModal() {
  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.close-reader-modal');
  const btnInc = modal.querySelector('#reader-inc-font');
  const btnDec = modal.querySelector('#reader-dec-font');
  const btnCopy = modal.querySelector('#reader-copy-link');
  const btnBookmark = modal.querySelector('#reader-bookmark-btn');
  const contentBody = modal.querySelector('.modal-article-text');

  let currentFontSize = 1.0; // rem

  function closeReader() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeReader);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeReader();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeReader();
    }
  });

  if (btnInc && contentBody) {
    btnInc.addEventListener('click', () => {
      if (currentFontSize < 1.35) {
        currentFontSize += 0.08;
        contentBody.style.fontSize = `${currentFontSize}rem`;
        contentBody.style.lineHeight = `${currentFontSize * 1.85}rem`;
      }
    });
  }

  if (btnDec && contentBody) {
    btnDec.addEventListener('click', () => {
      if (currentFontSize > 0.85) {
        currentFontSize -= 0.08;
        contentBody.style.fontSize = `${currentFontSize}rem`;
        contentBody.style.lineHeight = `${currentFontSize * 1.85}rem`;
      }
    });
  }

  if (btnCopy) {
    btnCopy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast("پیوند خبر با موفقیت کپی شد!");
      } catch (err) {
        showToast("پیوند خبر کپی شد.");
      }
    });
  }

  if (btnBookmark) {
    btnBookmark.addEventListener('click', () => {
      btnBookmark.classList.toggle('active-bookmark');
      const isSaved = btnBookmark.classList.contains('active-bookmark');
      btnBookmark.style.color = isSaved ? '#1769E0' : '';
      showToast(isSaved ? "خبر در نشان‌شده‌ها ذخیره شد" : "خبر از نشان‌شده‌ها حذف شد");
    });
  }
}

// تابع سراسری جهت باز کردن مقاله بر اساس شناسه ID
window.openArticleModal = function(id) {
  if (typeof NEWS_DATA === 'undefined') return;
  const article = NEWS_DATA.find(item => item.id === Number(id));
  if (!article) return;

  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  modal.querySelector('#modal-art-category').textContent = article.category;
  modal.querySelector('#modal-art-headline').textContent = article.title;
  modal.querySelector('#modal-art-author').textContent = `${article.author} (${article.authorRole || 'تحریریه'})`;
  modal.querySelector('#modal-art-date').textContent = article.date;
  modal.querySelector('#modal-art-views').textContent = `${article.views} بازدید`;
  
  const imgEl = modal.querySelector('#modal-art-image');
  if (imgEl) {
    imgEl.src = article.image;
    imgEl.alt = article.title;
  }

  const contentEl = modal.querySelector('.modal-article-text');
  if (contentEl) {
    contentEl.innerHTML = article.content || `<p class="lead">${article.description}</p>`;
  }

  const tagsEl = modal.querySelector('#modal-art-tags');
  if (tagsEl) {
    if (article.tags && article.tags.length > 0) {
      tagsEl.innerHTML = article.tags.map(t => `<span class="modal-tag-item">#${t}</span>`).join('');
      tagsEl.style.display = 'flex';
    } else {
      tagsEl.style.display = 'none';
    }
  }

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   ۶. صفحه اختصاصی اخبار (news.html) - فیلتر و جستجو
   ========================================================================== */
function initNewsPage() {
  const container = document.getElementById('news-grid-target');
  const searchInput = document.getElementById('news-search-input');
  const clearBtn = document.getElementById('news-search-clear');
  const filterChips = document.querySelectorAll('.category-filter-chips .filter-chip');
  const noResultsBox = document.getElementById('news-no-results');
  const countBadge = document.getElementById('news-results-count');

  if (typeof NEWS_DATA === 'undefined' || !container) return;

  let activeCategory = 'همه';
  let searchQuery = '';

  // بررسی پارامتر URL در صورت ارجاع از سایر صفحات (مثل news.html?cat=سیاسی یا news.html?q=اقتصاد)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('cat')) {
    activeCategory = decodeURIComponent(urlParams.get('cat'));
    filterChips.forEach(chip => {
      chip.classList.toggle('active', chip.dataset.cat === activeCategory);
    });
  }
  if (urlParams.get('q')) {
    searchQuery = decodeURIComponent(urlParams.get('q'));
    if (searchInput) {
      searchInput.value = searchQuery;
      if (clearBtn) clearBtn.style.display = 'block';
    }
  }

  function renderArticles() {
    let filtered = NEWS_DATA;

    if (activeCategory !== 'همه') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }

    if (countBadge) {
      countBadge.textContent = `${filtered.length} گزارش`;
    }

    if (filtered.length === 0) {
      container.innerHTML = '';
      if (noResultsBox) noResultsBox.style.display = 'block';
    } else {
      if (noResultsBox) noResultsBox.style.display = 'none';
      container.innerHTML = filtered.map(item => `
        <article class="news-item-card" onclick="openArticleModal(${item.id})">
          <div class="news-item-thumb">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
            <span class="news-item-badge">${item.category}</span>
          </div>
          <div class="news-item-body">
            <h3 class="news-item-headline">${item.title}</h3>
            <p class="news-item-desc">${item.description}</p>
            <div class="news-item-footer">
              <span>${item.date} • ${item.time}</span>
              <span class="read-more-btn">
                مطالعه گزارش
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </span>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  // رویدادهای فیلتر دسته‌بندی
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.cat || 'همه';
      renderArticles();
    });
  });

  // رویدادهای فیلد جستجو
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
      }
      renderArticles();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      renderArticles();
    });
  }

  renderArticles();
}

/* ==========================================================================
   ۷. صفحه تماس با ما (contact.html) - آکاردئون FAQ و ارسال فرم
   ========================================================================== */
function initContactPage() {
  // آکاردئون سوالات متداول
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // بستن سایر آیتم‌ها
      document.querySelectorAll('.accordion-item').forEach(other => {
        if (other !== item) other.classList.remove('open');
      });

      item.classList.toggle('open', !isOpen);
    });
  });

  // ارسال فرم تماس با ما
  const contactForm = document.getElementById('contact-form');
  const successBanner = document.getElementById('contact-form-success');

  if (contactForm && successBanner) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const btn = contactForm.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'در حال ارسال پیام...';
        btn.disabled = true;
      }

      setTimeout(() => {
        contactForm.reset();
        if (btn) {
          btn.textContent = 'ارسال پیام';
          btn.disabled = false;
        }
        successBanner.style.display = 'block';
        showToast("پیام شما با موفقیت ثبت شد.");
        
        setTimeout(() => {
          successBanner.style.display = 'none';
        }, 6000);
      }, 700);
    });
  }
}

/* ==========================================================================
   ۸. عضویت در خبرنامه تحریریه
   ========================================================================== */
function initNewsletterForms() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      const alertBox = form.parentElement.querySelector('.newsletter-alert');

      if (input && input.value.trim() !== '') {
        input.value = '';
        if (alertBox) {
          alertBox.style.display = 'block';
          alertBox.textContent = 'عضویت شما در خبرنامه اولین خبر با موفقیت انجام شد.';
          setTimeout(() => {
            alertBox.style.display = 'none';
          }, 4500);
        }
        showToast("عضویت در خبرنامه ثبت شد ✓");
      }
    });
  });
}

/* ==========================================================================
   ۹. دکمه بازگشت به بالا
   ========================================================================== */
function initBackToTop() {
  const btns = document.querySelectorAll('.back-to-top-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}

/* ==========================================================================
   ۱۰. اعلان توست (Toast Notification)
   ========================================================================== */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
