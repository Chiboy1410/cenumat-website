// ============================================================
// Olopade Neuroscience & Comparative Anatomy Lab — site behaviour
// ============================================================

document.getElementById('year').textContent = new Date().getFullYear();

/* Mobile nav toggle */
const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.main-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    if (!isOpen) {
      mainNav.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
    }
  });
}

/* Dropdown submenu toggle (tap-to-open on mobile; hover handles desktop via CSS) */
document.querySelectorAll('.nav-item').forEach(item => {
  const caret = item.querySelector('.nav-caret');
  if (!caret) return;
  caret.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = item.classList.toggle('open');
    caret.setAttribute('aria-expanded', String(isOpen));
  });
});

/* ---------------- Team data ----------------
   The PI has his own spotlight card in the About section.
   Order below the PI: Collaborators -> Postdoctoral Associates -> PhD Students -> Lab Members.
*/
const collaborators = [
  {
    name: "Prof. Daniel O. Oluwayelu",
    role: "Collaborator — Veterinary Microbiology",
    focus: "Viral & zoonotic disease surveillance",
    img: "oluwayelu.jpg"
  },
  {
    name: "Dr. Funmilayo Olopade",
    role: "Collaborator",
    focus: "Cross-disciplinary research support",
    img: "funmilayo_olopade.jpg"
  },
  {
    name: "Prof. Paul Manger",
    role: "Collaborator — School of Anatomical Sciences, University of the Witwatersrand",
    focus: "Comparative neuroanatomy & brain evolution in African mammals",
    img: "paul_manger.jpg"
  },
  {
    name: "Prof. Amadi Ihunwo",
    role: "Collaborator - School of Anatomical Sciences, University of the Witwatersrand",
    focus: "Comparative adult neurogenesis",
    img: "amadi_ihunwo.jpg"
  },
  {
    name: "Prof. Adeboye Adejare",
    role: "Collaborator - Dept. of Pharmaceutical Sciences, St. Joseph University, Philadelphia",
    focus: "Medicinal chemistry & blood-brain-barrier drug design",
    img: "adeboye_adejare.jpg"
  },
  {
    name: "Prof. Christian Happi",
    role: "Collaborator —-Director, IGH / Institute of Genomics and Global Health, Redeemer's University",
    focus: "Genomics of infectious diseases — Lassa fever, Ebola, malaria, COVID-19",
    img: "christian_happi.jpg"
  },
   {
    name: "Prof. Tiago Outeiro",
    role: "Collaborator — Director of Department of Experimental Neurodegeneration University Medical centre Gottingen",
    focus: "Molecular mechanisms of neurodegeneration in Parkinson's, Huntington's, and Alzheimer's disease",
    img: "tiago_outeiro.jpg"
  },

];

const postdocAssociates = [
  {
    name: "Dr. Amany D. Ladagu",
    role: "Postdoctoral Associate",
    focus: "Neuropharmacology & neurotoxicology",
    img: "ladagu_amany.jpg",
    contact: "ladaguamany@gmail.com"
  },
  {
    name: "Dr. Adedunsola A. Obasa",
    role: "Postdoctoral Associate",
    focus: "Neuropathology & heavy-metal toxicology",
    img: "adedunsola_obasa.jpg",
    contact: "dunsolaobasa@gmail.com"
  },
  {
    name: "Dr. Oluwabusayo R. Folarin",
    role: "Postdoctoral Associate",
    focus: "Heavy metal neurotoxicity & neuropathology",
    img: "folarin_oluwabusayo.jpg",
    contact: "oluwabusayorachael@gmail.com"
  }
];

const phdStudents = [
  {
    name: "Dr. Francis Olaolorun",
    role: "PhD Student",
    focus: "Iron chelation and  heavy metal neurotoxicity",
    img: "olaolorun_francis.jpg",
    contact: "afolaolorun@outlook.com"
  },
  {
    name: "Dr. Gilbert Taidinda",
    role: "Current PhD Student",
    focus: "Chronic Vanadium neurotoxicity & neuroinflammation ",
    img: "gilbert_taldin.jpg",
    contact: "gilberttashara@gmail.com"
  },

  {
    name: "Dr. Iheanyi Ajuzie Peter",
    role: "Current PhD Student",
    focus: "West Nile Virus surveillance in wildlife ",
    img: "iheanyi_ajuzie_peter.jpg",
    contact: "iheanyi.peter-ajuzie@unn.edu.ng"
  },
   
  {
    name: "Dr. Chinonyerem Chinyere",
    role: "PhD Student",
    focus: "West Nile Virus surveillance in wildlife, humans, and vectors.",
    img: "chinyere_chinonyerem.jpg",
    contact: "chinoscnc@gmail.com"
  },
  {
    name: "Dr. Harun Galadima",
    role: "PhD Student",
    focus: "West Nile Virus surveillance in wildlife.",
    img: "galadima_haruna.jpg",
    contact: "hbgaladima@unimaid.edu.ng"
  }
   

];

const team = [
   {
    name: "Dr.Augustine Ajaebili",
    role: "Research Assistant",
    focus: "Molecular detection of West Nile virus in Synanthropic birds in Nigeria",
    img: "ajaebili_augustine.jpg",
    contact: "ajaebiliaugustine@gmail.com"
  },
   {
    name: "Dr.Kpasham Luimommei",
    role: "Research Assistant",
    focus: "Vanadium and the peripheral nerve",
    img: "kpasham_Luimommei.jpg",
    contact: "kzluimommei@gmail.com"
  },
  {
    name: "Dr.Isaac Arowolo",
    role: "Research Assistant",
    focus: "Reproductive biology",
    img: "arowolo_Isaac.jpg",
    contact: "arowoloisaac344@gmail.com"
  },
  {
    name: "Joshua Yusuf",
    role: "Research Assistant",
    focus: "Parkinson's disease, neurodegeneration, phytotherapy",
    img: "joshua_yusuf.jpg",
    contact: "yusufjoshuaayodele@gmail.com"
  },
  {
    name: "Dr. James Oludare",
    role: "M.Sc. Student",
    focus: "Environmental sentinel research",
    img: "james_oludare.jpg",
    contact: "jamesbabatunde99@outlook.com"
  },
 
  {
    name: "Dr. Chibuzo Obiechefu",
    role: "Mvsc. Student",
    focus: "Toxicant-induced testicular dysfunction & oxidative stress pathways",
    img: "obiechefu_chibuzo.jpg",
    contact: "obiechefuchibuzo@gmail.com"
  },
  {
    name: "Dr. Kolade Aribisala",
    role: "M.Sc. Student",
    focus: "Vanadium-Induced Neurotoxicity and Motor Dysfunction",
    img: "aribisala_kolade.jpg",
    contact: "Aribisalachristopher@gmail.com"
  },
  {
    name: "Dr. Samantha Alawode",
    role: "M.Sc. Student",
    focus: "Environmental sentinel research",
    img: "alawonde_samantha.jpg",
    contact: ""
  },
  
  {
    name: "Ayomide Isaac",
    role: "Research Intern",
    focus: "",
    img: "ayomide_isaac.jpg",
    contact: "Isaacayomide175@gmail.com"
  },
  {
    name: "Oluwapelumi Alabadan",
    role: "Research Intern",
    focus: "",
    img: "alabadan_Oluwapelumi.jpg",
    contact: "alabadanpelumi@gmail.com"
  },
  {
    name: "Bernice Asha",
    role: "Research Intern",
    focus: "",
    img: "asha_bernice.jpg",
    contact: "berniceasha88@gmail.com"
  },
  {
    name: "Omolade Atolagbe",
    role: "Research Intern",
    focus: "",
    img: "atolagbe_omolade.jpg",
    contact: "atolagbeomolade25@gmail.com"
  },
  {
    name: "kehinde Adedokun",
    role: "Research Intern",
    focus: "",
    img: "adedokun_kehinde.jpg",
    contact: "adedokunkehinde@gmail.com"
  },
  {
    name: "Deborah Fatokun",
    role: "Research Intern",
    focus: "",
    img: "fatokun_Deborah.jpg",
    contact: "debbiefat2000@gmail.com"
  },
  {
    name: "Jemima Olasoji",
    role: "Administrative officer",
    focus: "",
    img: "olasoji_Jemima.jpg",
    contact: "jemimaolasoji@gmail.com"
  }
  
];

/* Generates a monogram avatar (ink background, brass initials) for any
   team photo that fails to load, so a missing file never shows a broken
   image icon. */
function initialsAvatar(name) {
  const initials = name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="#10182B"/>
    <text x="100" y="112" font-family="Fraunces, Georgia, serif" font-size="72"
      font-weight="600" fill="#C9A227" text-anchor="middle">${initials}</text>
  </svg>`;
  return "data:image/svg+xml;base64," + btoa(svg);
}

function withFallback(person) {
  return `onerror="this.onerror=null;this.src='${initialsAvatar(person.name)}';"`;
}

function renderCollaborators() {
  const grid = document.getElementById('collabGrid');
  if (!grid) return;

  grid.innerHTML = collaborators.map(person => `
    <article class="collab-card">
      <div class="collab-photo">
        <img src="${person.img}" alt="${person.name}" loading="lazy" ${withFallback(person)}>
      </div>
      <div class="collab-body">
        <p class="collab-role">${person.role}</p>
        <h3 class="collab-name">${person.name}</h3>
        <p class="collab-focus">${person.focus}</p>
      </div>
    </article>
  `).join('');
}

function renderGrid(elementId, people) {
  const grid = document.getElementById(elementId);
  if (!grid) return;

  grid.innerHTML = people.map(person => `
    <article class="team-card">
      <div class="team-photo">
        <img src="${person.img}" alt="${person.name}" loading="lazy" ${withFallback(person)}>
      </div>
      <div class="team-body">
        <p class="team-role">${person.role}</p>
        <h3 class="team-name">${person.name}</h3>
        <p class="team-focus">${person.focus}</p>
        ${person.contact
          ? `<a class="team-contact" href="mailto:${person.contact}">${person.contact}</a>`
          : `<p class="team-contact team-contact-empty">Contact details coming soon</p>`}
      </div>
    </article>
  `).join('');
}

/* Past team members. No photo slot for this section, by design — names
   and roles only. Add entries in the same shape once you send more names. */
const pastPostdocFellows = [
  { name: "Dr. Fanta Yadang", country: "Cameroon", role: "Country-Cameroon, Postdoctoral trainee" },
  { name: "Dr. Zemo Gamo Franklin", country: "Cameroon",role: "Country-Cameroon, Postdoctoral trainee" },
  { name: "Dr.El Hafedh El Mouhab",country: "Mauritania",  role: "Country-Mauritania, Postdoctoral trainee" },
];

const pastMembers = [
  { name: "Prof. Ahmed Yahaya", role: "Alumnus - DVM, MSc, PhD" },
  { name: "Dr. Omowunmi Akinlosotu", role: "Alumnus - BDs,MSc, PhD" },
  { name: "Prof. Olude Matthew", role: "Alumnus -DVM, MSc, PhD" },
  { name: "Dr. Michael Okandeji", role: "Alumnus - DVM, MSc, PhD" },
   { name: "Prof. Babagana Gambo", role: "Alumnus -DVM, MSc, PhD" },
  { name: "Dr. Olamide Adebiyi", role: "Alumnus - DVM, MSc, PhD" },
  { name: "Dr. Olumayowa Igado", role: "Alumnus - DVM, MSc, PhD" },
  { name: "Dr. Hafsat Jagun", role: "Alumna - DVM, MSc, PhD" },
  { name: "Dr. Oluwaseun Mustapha", role: "Alumnus -DVM, MSc, PhD" },
   { name: "Dr. Olarenwaju Fatola", role: "Alumnus - DVM, MSc, PhD" },
  { name: "Dr. Ayodeji Lijoka", role: "Alumnus - DVM, MSc" },
  { name: "Dr.Levi Usende", role: "AlumnusDVM, MSc, PhD" },
  { name: "Dr.Idris Azeez", role: "Alumnus -DVM, MSc, PhD" },
  { name: "Oluwadarasimi Otunla", role: "Alumnus" },
  { name: "Ejiro Ighorodje", role: "Alumnus" },
  { name: "Irene Omile", role: "Alumnus" },
  { name: "Jude Abeje", role: "Alumnus" },
  { name: "Iyanuoluwa Ajiferuke", role: "Alumnus" },
  { name: "Munachi Njasi", role: "Alumnus" },
];

function renderPastList(elementId, list, emptyMessage) {
  const grid = document.getElementById(elementId);
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `<div class="past-empty"><p>${emptyMessage}</p></div>`;
    return;
  }

  grid.innerHTML = list.map(person => `
    <li class="past-row">
      <span class="past-name">${person.name}</span>
      <span class="past-role">${person.role}</span>
    </li>
  `).join('');
}

function renderPastMembers() {
  renderPastList('pastPostdocGrid', pastPostdocFellows, 'Past postdoctoral fellow entries will appear here once added.');
  renderPastList('pastGrid', pastMembers, 'Past team member entries will appear here once added.');
}

renderCollaborators();
renderGrid('postdocGrid', postdocAssociates);
renderGrid('phdGrid', phdStudents);
renderGrid('teamGrid', team);
renderPastMembers();

/* Scroll-reveal animation for .reveal and .reveal-group elements */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('.reveal, .reveal-group');
if (revealTargets.length && !reduceMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => revealObserver.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

/* Count-up animation for stat numbers, e.g. <span class="stat-num" data-count-to="200" data-suffix="+">0</span> */
const statEls = document.querySelectorAll('.stat-num[data-count-to]');
if (statEls.length) {
  const animateStat = (el) => {
    const target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    if (reduceMotion) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1400;
    el.textContent = '0' + suffix;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    statEls.forEach(el => statObserver.observe(el));
  } else {
    statEls.forEach(animateStat);
  }
}

/* Homepage hero tagline rotator */
const taglineEl = document.getElementById('heroTagline');
if (taglineEl) {
  const lines = Array.from(taglineEl.querySelectorAll('.tagline'));
  if (lines.length > 1 && !reduceMotion) {
    let active = 0;
    setInterval(() => {
      lines[active].classList.remove('is-active');
      active = (active + 1) % lines.length;
      lines[active].classList.add('is-active');
    }, 4200);
  }
}
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      mainNav.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
    }
  });
});
