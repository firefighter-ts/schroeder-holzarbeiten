// Sticky Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("glass");
    } else {
        navbar.classList.remove("glass");
    }
});

// Fade-Up Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section, .project-card, .stat, .contact-box").forEach(el => {
    el.classList.add("fade-up");
    observer.observe(el);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Aktiven Menüpunkt markieren
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

}); 
/* ==========================
   COOKIE BANNER
========================== */

const cookieBanner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("acceptCookies");
const declineCookies = document.getElementById("declineCookies");

// Prüfen, ob bereits eine Entscheidung gespeichert wurde
if (localStorage.getItem("cookieConsent")) {
    cookieBanner.style.display = "none";
}

acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    cookieBanner.style.display = "none";
});

declineCookies.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "necessary");
    cookieBanner.style.display = "none";
}); 
/* ===== Projektstories ===== */
(() => {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  const gallery = document.getElementById('projectModalGallery');
  const title = document.getElementById('projectModalTitle');
  const kicker = document.getElementById('projectModalKicker');
  const text = document.getElementById('projectModalText');
  const count = document.getElementById('projectStepCount');
  const projects = {
    'runder-tisch': {
      title:'Runder Epoxidharztisch', kicker:'Eiche · Epoxidharz · LED',
      text:'Von der rohen Eiche über Schalung, Harzguss und Planfräsen bis zur beleuchteten Tischplatte. Die natürliche Baumkante bleibt sichtbar und wird Teil des Designs.',
      images:[
        ['images/projekte/runder-tisch/1000250914.jpg','01 · Vorbereitung'],
        ['images/projekte/runder-tisch/1000251024.jpg','02 · Harz & Holz'],
        ['images/projekte/runder-tisch/1000248911.jpg','03 · Gussform'],
        ['images/projekte/runder-tisch/1000251252.jpg','04 · Unterseite'],
        ['images/projekte/runder-tisch/1000251724.jpg','05 · Bearbeitung'],
        ['images/projekte/runder-tisch/1000251723.jpg','06 · Aufbau'],
        ['images/projekte/runder-tisch/1000251711.jpg','07 · Lichttest'],
        ['images/projekte/runder-tisch/1000255181.jpg','08 · Fertig']
      ]
    },
    'vw-bus': {
      title:'Klappbett für einen VW-Bus', kicker:'Fahrzeugausbau · Multiplex · Klappmechanik',
      text:'Eine maßgefertigte Schlafplattform, die sich kompakt zusammenfalten lässt. Aussparungen reduzieren Gewicht und sorgen für Luftzirkulation, während die Stützen im zusammengeklappten Zustand sauber anliegen.',
      images:[
        ['images/projekte/vw-bus-bett/1000222898.jpg','01 · Fräsungen'],
        ['images/projekte/vw-bus-bett/1000222914.jpg','02 · Probeaufbau'],
        ['images/projekte/vw-bus-bett/1000222913.jpg','03 · Stützen'],
        ['images/projekte/vw-bus-bett/1000222915.jpg','04 · Faltmechanik'],
        ['images/projekte/vw-bus-bett/1000223303.jpg','05 · Einbau'],
        ['images/projekte/vw-bus-bett/1000223304.jpg','06 · Liegefläche']
      ]
    },
    'waschtisch': {
      title:'Waschtisch aus Eiche & Epoxidharz', kicker:'Eiche · Goldharz · Maßanfertigung',
      text:'Eichenbohlen werden in der Form ausgerichtet, mit goldfarbenem Epoxidharz verbunden und anschließend plan gefräst. Nach Schleifen und Bohren entsteht eine warme, robuste Ablage für die Badarmaturen.',
      images:[
        ['images/projekte/waschtisch/1000244729.jpg','01 · Harzguss'],
        ['images/projekte/waschtisch/1000244730.jpg','02 · Aushärten'],
        ['images/projekte/waschtisch/1000245477.jpg','03 · Planfräsen'],
        ['images/projekte/waschtisch/1000245682.jpg','04 · Fertigteil ungeschliffen'],
        ['images/projekte/waschtisch/1000255184.png','05 · Eingebaut']
      ]
    }
  };
  const open = key => {
    const p = projects[key]; if (!p) return;
    title.textContent=p.title; kicker.textContent=p.kicker; text.textContent=p.text;
    count.textContent=String(p.images.length).padStart(2,'0');
    gallery.innerHTML=p.images.map(([src,cap])=>`<figure class="project-shot"><button class="project-shot-open" type="button" data-lightbox-src="${src}" data-lightbox-alt="${p.title} - ${cap}" aria-label="${cap} groß ansehen"><img src="${src}" alt="${p.title} - ${cap}" loading="lazy"><figcaption>${cap}</figcaption></button></figure>`).join('');
    modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-lock');
    modal.querySelector('.project-modal-panel').scrollTop=0;
  };
  const close=()=>{modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-lock')};
  document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>open(b.dataset.project)));
  modal.querySelectorAll('[data-project-close]').forEach(b=>b.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('is-open'))close()});
})();


/* ===== Universal Bild-Lightbox ===== */
(() => {
  const lightbox = document.getElementById('imageLightbox');
  const img = document.getElementById('imageLightboxImg');
  const caption = document.getElementById('imageLightboxCaption');
  if (!lightbox || !img) return;

  const openLightbox = (src, alt='') => {
    if (!src) return;
    img.src = src;
    img.alt = alt;
    caption.textContent = alt;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-lock');
  };
  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-lock');
    img.src = '';
  };

  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-lightbox-src]');
    if (trigger) {
      e.preventDefault();
      openLightbox(trigger.dataset.lightboxSrc, trigger.dataset.lightboxAlt || trigger.querySelector('img')?.alt || '');
    }
  });
  lightbox.querySelectorAll('[data-lightbox-close]').forEach(el => el.addEventListener('click', closeLightbox));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
})();
