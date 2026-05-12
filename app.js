  /* ═══════════════════════════════════════════════════════════════
    app.js — WebGIS Bangkok Hospitals
    Basemaps, markers, clusters, filters, sidebar, stats
  ═══════════════════════════════════════════════════════════════ */

  'use strict';

  // ──────────────────────────────────────────────────────────────
  // GEOJSON DATA (inline)
  // ──────────────────────────────────────────────────────────────
  const GEOJSON = {
    "type": "FeatureCollection",
    "features": [
      { "type": "Feature", "properties": { "nama": "Siriraj Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Bangkok Noi", "beds": 2300, "telepon": "+66-2-419-7000", "alamat": "2 Wanglung Rd, Bangkok Noi" }, "geometry": { "type": "Point", "coordinates": [100.4847, 13.7593] } },
      { "type": "Feature", "properties": { "nama": "Ramathibodi Hospital", "jenis": "Rumah Sakit Universitas", "distrik": "Ratchathewi", "beds": 1300, "telepon": "+66-2-201-1000", "alamat": "270 Rama VI Rd, Ratchathewi" }, "geometry": { "type": "Point", "coordinates": [100.5335, 13.7656] } },
      { "type": "Feature", "properties": { "nama": "Bangkok Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Huai Khwang", "beds": 800, "telepon": "+66-2-310-3000", "alamat": "2 Soi Soonvijai 7, New Petchburi Rd" }, "geometry": { "type": "Point", "coordinates": [100.5693, 13.75] } },
      { "type": "Feature", "properties": { "nama": "Bumrungrad International Hospital", "jenis": "Rumah Sakit Swasta Internasional", "distrik": "Watthana", "beds": 580, "telepon": "+66-2-667-1000", "alamat": "33 Sukhumvit 3, Watthana" }, "geometry": { "type": "Point", "coordinates": [100.5564, 13.7408] } },
      { "type": "Feature", "properties": { "nama": "Phramongkutklao Hospital", "jenis": "Rumah Sakit Militer", "distrik": "Ratchathewi", "beds": 1200, "telepon": "+66-2-354-7600", "alamat": "315 Ratchawithi Rd, Ratchathewi" }, "geometry": { "type": "Point", "coordinates": [100.5359, 13.7694] } },
      { "type": "Feature", "properties": { "nama": "Chulalongkorn Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Pathum Wan", "beds": 1400, "telepon": "+66-2-256-4000", "alamat": "1873 Rama IV Rd, Pathum Wan" }, "geometry": { "type": "Point", "coordinates": [100.5345, 13.7333] } },
      { "type": "Feature", "properties": { "nama": "Samitivej Sukhumvit Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Watthana", "beds": 270, "telepon": "+66-2-711-8000", "alamat": "133 Sukhumvit 49, Watthana" }, "geometry": { "type": "Point", "coordinates": [100.5803, 13.725] } },
      { "type": "Feature", "properties": { "nama": "BNH Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Bang Rak", "beds": 200, "telepon": "+66-2-686-2700", "alamat": "9/1 Convent Rd, Bang Rak" }, "geometry": { "type": "Point", "coordinates": [100.5279, 13.7228] } },
      { "type": "Feature", "properties": { "nama": "Bangkok Christian Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Bang Rak", "beds": 300, "telepon": "+66-2-625-9000", "alamat": "124 Silom Rd, Bang Rak" }, "geometry": { "type": "Point", "coordinates": [100.5249, 13.7265] } },
      { "type": "Feature", "properties": { "nama": "Vejthani International Hospital", "jenis": "Rumah Sakit Swasta Internasional", "distrik": "Bang Kapi", "beds": 263, "telepon": "+66-2-734-0000", "alamat": "1 Lat Phrao 111, Lat Phrao" }, "geometry": { "type": "Point", "coordinates": [100.6144, 13.7997] } },
      { "type": "Feature", "properties": { "nama": "Phyathai Phaholyothin Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Lak Si", "beds": 260, "telepon": "+66-2-271-7000", "alamat": "492/1 Phaholyothin Rd, Lak Si" }, "geometry": { "type": "Point", "coordinates": [100.5626, 13.8641] } },
      { "type": "Feature", "properties": { "nama": "Bhumibol Adulyadej Hospital", "jenis": "Rumah Sakit Militer AU", "distrik": "Don Mueang", "beds": 1000, "telepon": "+66-2-534-7000", "alamat": "171 Phaholyothin Rd, Don Mueang" }, "geometry": { "type": "Point", "coordinates": [100.5984, 13.9087] } },
      { "type": "Feature", "properties": { "nama": "Vibhavadi Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Chatuchak", "beds": 220, "telepon": "+66-2-561-1111", "alamat": "Vibhavadi Rangsit Rd, Chatuchak" }, "geometry": { "type": "Point", "coordinates": [100.5613, 13.8256] } },
      { "type": "Feature", "properties": { "nama": "Taksin Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Thon Buri", "beds": 600, "telepon": "+66-2-437-0123", "alamat": "Somdet Phra Chao Tak Sin Rd, Thon Buri" }, "geometry": { "type": "Point", "coordinates": [100.4849, 13.7207] } },
      { "type": "Feature", "properties": { "nama": "Wachira Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Dusit", "beds": 600, "telepon": "+66-2-244-3000", "alamat": "Samsen Rd, Dusit" }, "geometry": { "type": "Point", "coordinates": [100.5101, 13.7823] } },
      { "type": "Feature", "properties": { "nama": "Bangkok Metropolitan General Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Pom Prap Sattru Phai", "beds": 500, "telepon": "+66-2-220-8000", "alamat": "514 Luang Rd, Pom Prap" }, "geometry": { "type": "Point", "coordinates": [100.5121, 13.7506] } },
      { "type": "Feature", "properties": { "nama": "Lerdsin Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Bang Rak", "beds": 450, "telepon": "+66-2-353-9800", "alamat": "190 Si Lom Rd, Bang Rak" }, "geometry": { "type": "Point", "coordinates": [100.5234, 13.7295] } },
      { "type": "Feature", "properties": { "nama": "Hua Chiew Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Samphanthawong", "beds": 500, "telepon": "+66-2-223-1351", "alamat": "665 Bumrung Muang Rd, Samphanthawong" }, "geometry": { "type": "Point", "coordinates": [100.5073, 13.7493] } },
      { "type": "Feature", "properties": { "nama": "Samrong General Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Phra Pradaeng", "beds": 300, "telepon": "+66-2-394-6600", "alamat": "99/1 Sukhumvit Rd, Phra Pradaeng" }, "geometry": { "type": "Point", "coordinates": [100.5974, 13.6585] } },
      { "type": "Feature", "properties": { "nama": "Sikarin Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Bang Na", "beds": 354, "telepon": "+66-2-919-1111", "alamat": "976 Lasalle Rd, Bang Na, Bangkok 10260" }, "geometry": { "type": "Point", "coordinates": [100.6820, 13.6673] } },
      { "type": "Feature", "properties": { "nama": "Nawamintrapat Rachanukhro Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Khlong Sam Wa", "beds": 400, "telepon": "+66-2-919-4040", "alamat": "Nawamin Rd, Khlong Sam Wa" }, "geometry": { "type": "Point", "coordinates": [100.7294, 13.8681] } },
      { "type": "Feature", "properties": { "nama": "Lat Krabang Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Lat Krabang", "beds": 300, "telepon": "+66-2-326-1200", "alamat": "Lat Krabang Rd, Lat Krabang" }, "geometry": { "type": "Point", "coordinates": [100.7888, 13.7238] } },
      { "type": "Feature", "properties": { "nama": "Wetchakarunrasm Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Nong Chok", "beds": 200, "telepon": "+66 2 988 4200", "alamat": "48 Liap Wari Rd, Krathum Rai, Nong Chok, Bangkok 10530" }, "geometry": { "type": "Point", "coordinates": [100.8589, 13.8562] } },
      { "type": "Feature", "properties": { "nama": "Klang Hospital (Bangkhae)", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Bang Khae", "beds": 250, "telepon": "+66-2-803-7200", "alamat": "Bang Khae Rd, Bang Khae" }, "geometry": { "type": "Point", "coordinates": [100.3974, 13.6953] } },
      { "type": "Feature", "properties": { "nama": "Nong Khaem Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Nong Khaem", "beds": 200, "telepon": "+66-2-444-1044", "alamat": "Nong Khaem Rd, Nong Khaem" }, "geometry": { "type": "Point", "coordinates": [100.3826, 13.7069] } },
      { "type": "Feature", "properties": { "nama": "Pracha Uthit Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Thung Khru", "beds": 200, "telepon": "+66-2-427-5111", "alamat": "Pracha Uthit Rd, Thung Khru" }, "geometry": { "type": "Point", "coordinates": [100.4661, 13.6518] } },
      { "type": "Feature", "properties": { "nama": "Bang Na Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Bang Na", "beds": 250, "telepon": "+66-2-361-8000", "alamat": "Bang Na Rd, Bang Na" }, "geometry": { "type": "Point", "coordinates": [100.6737, 13.6661] } },
      { "type": "Feature", "properties": { "nama": "Prawet Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Prawet", "beds": 200, "telepon": "+66-2-726-9925", "alamat": "Prawet Rd, Prawet" }, "geometry": { "type": "Point", "coordinates": [100.7167, 13.6946] } },
      { "type": "Feature", "properties": { "nama": "Bangkok Hospital Bangna", "jenis": "Rumah Sakit Swasta", "distrik": "Bang Na", "beds": 250, "telepon": "+66-2-361-2727", "alamat": "2 Bangna-Trad Rd, Bang Na" }, "geometry": { "type": "Point", "coordinates": [100.6741, 13.656] } },
      { "type": "Feature", "properties": { "nama": "Suankueankhun Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Suan Luang", "beds": 200, "telepon": "+66-2-318-0740", "alamat": "Suan Luang Rd, Suan Luang" }, "geometry": { "type": "Point", "coordinates": [100.6413, 13.7135] } },
      { "type": "Feature", "properties": { "nama": "Rajavithi Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Ratchathewi", "beds": 1200, "telepon": "+66-2-354-8101", "alamat": "2 Ratchawithi Rd, Ratchathewi" }, "geometry": { "type": "Point", "coordinates": [100.5388, 13.7715] } },
      { "type": "Feature", "properties": { "nama": "Police General Hospital", "jenis": "Rumah Sakit Kepolisian", "distrik": "Pathum Wan", "beds": 700, "telepon": "+66-2-207-6000", "alamat": "492/1 Henri Dunant Rd, Pathum Wan" }, "geometry": { "type": "Point", "coordinates": [100.5389, 13.7383] } },
      { "type": "Feature", "properties": { "nama": "Thon Buri Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Thon Buri", "beds": 350, "telepon": "+66-2-487-2000", "alamat": "34/1 Isaraphap Rd, Thon Buri" }, "geometry": { "type": "Point", "coordinates": [100.4794, 13.7271] } },
      { "type": "Feature", "properties": { "nama": "Bangkok Noi Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Bangkok Noi", "beds": 200, "telepon": "+66-2-412-4100", "alamat": "Bangkok Noi Rd, Bangkok Noi" }, "geometry": { "type": "Point", "coordinates": [100.4767, 13.7641] } },
      { "type": "Feature", "properties": { "nama": "Thammasat University Hospital", "jenis": "Rumah Sakit Universitas", "distrik": "Khlong Luang (dekat Bangkok)", "beds": 700, "telepon": "+66-2-926-9999", "alamat": "95 Phahon Yothin Rd, Khlong Luang" }, "geometry": { "type": "Point", "coordinates": [100.6105, 14.0695] } },
      { "type": "Feature", "properties": { "nama": "Phyathai 1 Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Ratchathewi", "beds": 350, "telepon": "+66-2-201-4600", "alamat": "364/1 Sri Ayudhya Rd, Ratchathewi" }, "geometry": { "type": "Point", "coordinates": [100.5372, 13.7599] } },
      { "type": "Feature", "properties": { "nama": "Phyathai 2 Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Ratchathewi", "beds": 300, "telepon": "+66-2-617-2444", "alamat": "943 Phaholyothin Rd, Phaya Thai" }, "geometry": { "type": "Point", "coordinates": [100.5358, 13.7749] } },
      { "type": "Feature", "properties": { "nama": "Samitivej Srinakarin Hospital", "jenis": "Rumah Sakit Swasta", "distrik": "Suan Luang", "beds": 300, "telepon": "+66-2-378-9000", "alamat": "488 Srinakarin Rd, Suan Luang" }, "geometry": { "type": "Point", "coordinates": [100.6522, 13.7004] } },
      { "type": "Feature", "properties": { "nama": "Thawi Watthana Hospital", "jenis": "Rumah Sakit Umum Pemerintah", "distrik": "Taling Chan", "beds": 200, "telepon": "+66-2-888-8140", "alamat": "Taling Chan Rd, Taling Chan" }, "geometry": { "type": "Point", "coordinates": [100.4293, 13.7734] } },
      { "type": "Feature", "properties": { "nama": "Kasemrad Hospital Prachachuen", "jenis": "Rumah Sakit Swasta", "distrik": "Bang Sue", "beds": 200, "telepon": "+66-2-589-0000", "alamat": "22/1 Prachachuen Rd, Bang Sue" }, "geometry": { "type": "Point", "coordinates": [100.5305, 13.8045] } }
    ]
};

  // ──────────────────────────────────────────────────────────────
  // BASEMAP DEFINITIONS
  // ──────────────────────────────────────────────────────────────
  /*
    Each basemap shows full road network, rivers, parks, labels.
    - dark      : Stadia Alidade Smooth Dark (beautiful navy dark, rivers & parks visible)
    - light     : Stadia Alidade Smooth (clean light, all detail)
    - satellite : Esri World Imagery + Esri Reference overlay (roads + labels on satellite)
    - topo      : OpenTopoMap (elevation, rivers, roads, terrain)
  */
  const BASEMAPS = {
    dark: {
      label: 'Dark Detail',
      layers: [
        {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          options: {
            maxZoom: 20,
            attribution: '&copy; OpenStreetMap contributors'
          }
        }
      ],
      uiTheme: 'dark'
    },
    light: {
      label: 'Light Detail',
      layers: [
        {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          options: {
            maxZoom: 20,
            attribution: '&copy; OpenStreetMap contributors'
          }
        }
      ],
      uiTheme: 'light'
    },
    satellite: {
      label: 'Satellite',
      layers: [
        // Base: Esri World Imagery
        {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          options: {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.esri.com/">Esri</a> &copy; contributors',
          }
        },
        // Overlay: roads + labels on top of satellite
        {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}',
          options: { maxZoom: 19, opacity: 0.7, pane: 'overlayPane' }
        },
        {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
          options: { maxZoom: 19, opacity: 0.85, pane: 'overlayPane' }
        }
      ],
      uiTheme: 'dark'
    },
    topo: {
      label: 'Topografi',
      layers: [
        {
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          options: {
            maxZoom: 17,
            attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
          }
        }
      ],
      uiTheme: 'light'
    }
  };

  // ──────────────────────────────────────────────────────────────
  // JENIS CONFIGURATION — color + shape per category
  // ──────────────────────────────────────────────────────────────
  const JENIS_CONFIG = {
    'Rumah Sakit Umum Pemerintah':     { color: '#3d8bff', shape: 'circle',   label: 'RS Umum Pemerintah' },
    'Rumah Sakit Swasta':              { color: '#00d4aa', shape: 'circle',   label: 'RS Swasta' },
    'Rumah Sakit Swasta Internasional':{ color: '#f59e0b', shape: 'diamond',  label: 'RS Swasta Internasional' },
    'Rumah Sakit Universitas':         { color: '#a855f7', shape: 'square',   label: 'RS Universitas' },
    'Rumah Sakit Militer':             { color: '#ef4444', shape: 'triangle', label: 'RS Militer' },
    'Rumah Sakit Militer AU':          { color: '#f97316', shape: 'triangle', label: 'RS Militer AU' },
    'Rumah Sakit Kepolisian':          { color: '#ec4899', shape: 'star',     label: 'RS Kepolisian' },
  };

  // ──────────────────────────────────────────────────────────────
  // MAP INITIALISATION
  // ──────────────────────────────────────────────────────────────
  const map = L.map('map', {
    center: [13.756, 100.540],
    zoom: 11,
    zoomControl: false,
    preferCanvas: true,
  });

  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // Active tile layer references
  let activeTileLayers = [];

  /**
   * Switch basemap tiles. Fades out old layers, fades in new ones.
   * Also syncs the UI theme (dark/light CSS class on <html>).
   */
  function setBasemap(key) {
    const def = BASEMAPS[key];
    if (!def) return;

    // Remove old tile layers
    activeTileLayers.forEach(l => map.removeLayer(l));
    activeTileLayers = [];

    // Add new tile layers (in order)
    def.layers.forEach(({ url, options }) => {
      const layer = L.tileLayer(url, options).addTo(map);
      activeTileLayers.push(layer);
    });

    // Sync UI theme
    document.documentElement.setAttribute('data-theme', def.uiTheme);

    // Update basemap badge
    const badge = document.getElementById('map-theme-badge');
    if (badge) badge.textContent = '🗺 ' + def.label;

    // Highlight active button
    document.querySelectorAll('.bmap-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.map === key);
    });
  }

  // Start with dark
  setBasemap('dark');

  // Basemap badge (shows current map name)
  const badge = document.createElement('div');
  badge.id = 'map-theme-badge';
  badge.className = 'map-theme-badge';
  badge.textContent = '🗺 Dark Detail';
  document.getElementById('map').appendChild(badge);

  // ──────────────────────────────────────────────────────────────
  // SVG ICON FACTORY
  // ──────────────────────────────────────────────────────────────
  function makeSvgIcon(color, shape, size = 20) {
    const s = size;
    let svgInner = '';

    switch (shape) {
      case 'circle':
        svgInner = `<circle cx="${s/2}" cy="${s/2}" r="${s/2-1.5}"
          fill="${color}" stroke="rgba(0,0,0,0.35)" stroke-width="1.5"/>`;
        // Inner white dot
        svgInner += `<circle cx="${s/2}" cy="${s/2}" r="3" fill="rgba(255,255,255,0.55)"/>`;
        break;

      case 'diamond': {
        const m = s / 2;
        svgInner = `<polygon points="${m},2 ${s-2},${m} ${m},${s-2} 2,${m}"
          fill="${color}" stroke="rgba(0,0,0,0.35)" stroke-width="1.5"/>`;
        svgInner += `<circle cx="${m}" cy="${m}" r="2.5" fill="rgba(255,255,255,0.55)"/>`;
        break;
      }

      case 'square': {
        const r = 3;
        svgInner = `<rect x="2" y="2" width="${s-4}" height="${s-4}" rx="${r}"
          fill="${color}" stroke="rgba(0,0,0,0.35)" stroke-width="1.5"/>`;
        svgInner += `<rect x="${s/2-2.5}" y="${s/2-2.5}" width="5" height="5" rx="1"
          fill="rgba(255,255,255,0.55)"/>`;
        break;
      }

      case 'triangle': {
        const cx = s / 2;
        svgInner = `<polygon points="${cx},2 ${s-2},${s-2} 2,${s-2}"
          fill="${color}" stroke="rgba(0,0,0,0.35)" stroke-width="1.5"/>`;
        svgInner += `<circle cx="${cx}" cy="${s*0.62}" r="2.5" fill="rgba(255,255,255,0.55)"/>`;
        break;
      }

      case 'star': {
        const cx = s / 2, cy = s / 2;
        const or = s / 2 - 1.5, ir = s / 4.5;
        let pts = '';
        for (let i = 0; i < 10; i++) {
          const angle = (i * 36 - 90) * Math.PI / 180;
          const r = i % 2 === 0 ? or : ir;
          pts += `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)} `;
        }
        svgInner = `<polygon points="${pts.trim()}"
          fill="${color}" stroke="rgba(0,0,0,0.35)" stroke-width="1.2"/>`;
        break;
      }

      default:
        svgInner = `<circle cx="${s/2}" cy="${s/2}" r="${s/2-1.5}" fill="${color}"/>`;
    }

    const svgHtml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
        ${svgInner}
      </svg>`;

    return L.divIcon({
      html: `<div style="
          filter: drop-shadow(0 3px 8px rgba(0,0,0,0.65)) drop-shadow(0 0 4px ${color}80);
          line-height:0;
        ">${svgHtml}</div>`,
      className: '',
      iconSize:   [s, s],
      iconAnchor: [s / 2, s / 2],
      popupAnchor: [0, -(s / 2 + 5)],
      tooltipAnchor: [s / 2 + 4, 0],
    });
  }

  // ──────────────────────────────────────────────────────────────
  // CLUSTER GROUPS per jenis
  // ──────────────────────────────────────────────────────────────
  const layerGroups  = {};  // jenis → MarkerClusterGroup
  const hiddenLayers = new Set();
  const markerRefs   = [];  // { feature, marker, jenis }

  Object.keys(JENIS_CONFIG).forEach(jenis => {
    const cfg = JENIS_CONFIG[jenis];

    layerGroups[jenis] = L.markerClusterGroup({
      maxClusterRadius: 55,
      showCoverageOnHover: false,
      animate: true,
      iconCreateFunction(cluster) {
        const count = cluster.getChildCount();
        const size = count > 20 ? 46 : count > 10 ? 40 : 34;
        return L.divIcon({
          html: `<div style="
            width:${size}px; height:${size}px; border-radius:50%;
            background: ${cfg.color}20;
            border: 2px solid ${cfg.color};
            display: flex; align-items: center; justify-content: center;
            color: ${cfg.color}; font-weight: 700; font-size: 12px;
            font-family: 'DM Sans', sans-serif;
            box-shadow: 0 2px 10px rgba(0,0,0,0.45), 0 0 12px ${cfg.color}40;
          ">${count}</div>`,
          className: '',
          iconSize:   [size, size],
          iconAnchor: [size / 2, size / 2],
        });
      }
    });

    map.addLayer(layerGroups[jenis]);
  });

  // ──────────────────────────────────────────────────────────────
  // POPUP HTML BUILDER
  // ──────────────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────────────
// POPUP HTML BUILDER (DIPERBAIKI - PAKAI NAMA RS)
// ──────────────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────────────
// POPUP HTML BUILDER (DIPERBAIKI - PAKAI NAMA RS BUKAN KOORDINAT)
// ──────────────────────────────────────────────────────────────
function buildPopupHTML(p, lat, lng) {
    const cfg = JENIS_CONFIG[p.jenis] || { color: '#888', label: p.jenis };
    // 🔥 PERBAIKAN: Gunakan nama rumah sakit, BUKAN koordinat
    const query = encodeURIComponent(`${p.nama} Bangkok Thailand`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

    return `
      <div class="popup-inner">
        <span class="popup-badge"
          style="background:${cfg.color}1a; color:${cfg.color}; border:1px solid ${cfg.color}44;">
          ${cfg.label}
        </span>
        <div class="popup-name">${p.nama}</div>

        <div class="popup-row">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${p.distrik}</span>
        </div>

        <div class="popup-row">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
              A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.38
              a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72
              c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91
              a16 16 0 0 0 6 6l.88-.88a2 2 0 0 1 2.11-.45
              c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
          </svg>
          <span>${p.telepon}</span>
        </div>

        <div class="popup-row">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M9 21V9"/>
          </svg>
          <span><strong style="color:var(--text-primary)">${p.beds}</strong> Beds</span>
        </div>

        <div class="popup-row" style="align-items:flex-start">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top:2px">
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/>
          </svg>
          <span style="font-size:11px; line-height:1.4">${p.alamat}</span>
        </div>

        <div class="popup-divider"></div>

        <div class="popup-actions">
          <a href="${mapsUrl}" target="_blank" rel="noopener" class="popup-btn popup-btn-success">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
            </svg>
            📍 Lihat Review & Foto
          </a>
          <button class="popup-btn popup-btn-secondary" onclick="map.closePopup()">
            Tutup
          </button>
        </div>
      </div>`;
}
  // ──────────────────────────────────────────────────────────────
  // CREATE MARKERS
  // ──────────────────────────────────────────────────────────────
  GEOJSON.features.forEach(feature => {
    const p = feature.properties;
    const [lng, lat] = feature.geometry.coordinates;
    const cfg = JENIS_CONFIG[p.jenis] || { color: '#aaa', shape: 'circle', label: p.jenis };

    const marker = L.marker([lat, lng], {
      icon: makeSvgIcon(cfg.color, cfg.shape, 20),
      riseOnHover: true,
    });

    // Tooltip (hover)
    marker.bindTooltip(`<b>${p.nama}</b>`, {
      direction: 'right',
      opacity: 1,
      offset: [10, 0],
    });

    // Popup (click)
    marker.bindPopup(buildPopupHTML(p, lat, lng), {
      maxWidth: 290,
      className: 'custom-popup',
    });

    // Click: also highlight sidebar item
    marker.on('click', () => highlightSidebarItem(p.nama));

    marker.addTo(layerGroups[p.jenis]);
    markerRefs.push({ feature, marker, jenis: p.jenis });
  });

  // ──────────────────────────────────────────────────────────────
  // LEGEND
  // ──────────────────────────────────────────────────────────────
  const legendList = document.getElementById('legend-list');

  function makeLegendSymbolSVG(color, shape, size = 16) {
    const s = size;
    let inner = '';
    switch (shape) {
      case 'circle':   inner = `<circle cx="${s/2}" cy="${s/2}" r="${s/2-1}" fill="${color}"/>`; break;
      case 'diamond': { const m=s/2; inner=`<polygon points="${m},1 ${s-1},${m} ${m},${s-1} 1,${m}" fill="${color}"/>`; break; }
      case 'square':   inner = `<rect x="1" y="1" width="${s-2}" height="${s-2}" rx="2" fill="${color}"/>`; break;
      case 'triangle': { const cx=s/2; inner=`<polygon points="${cx},1 ${s-1},${s-1} 1,${s-1}" fill="${color}"/>`; break; }
      case 'star': {
        const cx=s/2, cy=s/2, or=s/2-1, ir=s/4;
        let pts='';
        for(let i=0;i<10;i++){
          const a=(i*36-90)*Math.PI/180, r=i%2===0?or:ir;
          pts+=`${cx+r*Math.cos(a)},${cy+r*Math.sin(a)} `;
        }
        inner=`<polygon points="${pts.trim()}" fill="${color}"/>`;
        break;
      }
      default: inner=`<circle cx="${s/2}" cy="${s/2}" r="${s/2-1}" fill="${color}"/>`;
    }
    return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
  }

  function buildLegend() {
    legendList.innerHTML = '';
    Object.entries(JENIS_CONFIG).forEach(([jenis, cfg]) => {
      const count = GEOJSON.features.filter(f => f.properties.jenis === jenis).length;
      const isHidden = hiddenLayers.has(jenis);

      const item = document.createElement('div');
      item.className = 'legend-item' + (isHidden ? ' hidden-layer' : '');
      item.innerHTML = `
        <div class="legend-symbol"
          style="filter: drop-shadow(0 1px 4px ${cfg.color}66)">
          ${makeLegendSymbolSVG(cfg.color, cfg.shape, 16)}
        </div>
        <span class="legend-label">${cfg.label}</span>
        <span class="legend-count">${count}</span>
        <span class="legend-eye" title="${isHidden ? 'Tampilkan' : 'Sembunyikan'}">${isHidden ? '🙈' : '👁'}</span>
      `;
      item.addEventListener('click', () => toggleLayer(jenis));
      legendList.appendChild(item);
    });
  }

  function toggleLayer(jenis) {
    if (hiddenLayers.has(jenis)) {
      hiddenLayers.delete(jenis);
      map.addLayer(layerGroups[jenis]);
    } else {
      hiddenLayers.add(jenis);
      map.removeLayer(layerGroups[jenis]);
    }
    buildLegend();
    applyFilters();
  }

  buildLegend();

  // ──────────────────────────────────────────────────────────────
  // FILTER STATE
  // ──────────────────────────────────────────────────────────────
  let currentSearch  = '';
  let currentJenis   = '';
  let currentMinBeds = 200;

  function applyFilters() {
    const search = currentSearch.toLowerCase();

    const visible = [];

    markerRefs.forEach(({ feature, marker }) => {
      const p = feature.properties;
      const matchSearch  = !search  || p.nama.toLowerCase().includes(search) || p.distrik.toLowerCase().includes(search);
      const matchJenis   = !currentJenis || p.jenis === currentJenis;
      const matchBeds    = p.beds >= currentMinBeds;
      const matchLayer   = !hiddenLayers.has(p.jenis);

      const show = matchSearch && matchJenis && matchBeds && matchLayer;
      marker.setOpacity(show ? 1 : 0);

      if (show) visible.push(feature);
    });

    updateStats(visible);
    buildSidebarList(visible);
  }

  // ──────────────────────────────────────────────────────────────
  // SIDEBAR LIST
  // ──────────────────────────────────────────────────────────────
  const hospitalList = document.getElementById('hospital-list');
  const listCount    = document.getElementById('list-count');

  function buildSidebarList(features) {
    listCount.textContent = features.length;
    hospitalList.innerHTML = '';

    if (!features.length) {
      hospitalList.innerHTML = `
        <div class="no-results">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          Tidak ada rumah sakit<br/>yang sesuai filter
        </div>`;
      return;
    }

    const sorted = [...features].sort((a, b) =>
      a.properties.nama.localeCompare(b.properties.nama));

    sorted.forEach(feature => {
      const p   = feature.properties;
      const [lng, lat] = feature.geometry.coordinates;
      const cfg = JENIS_CONFIG[p.jenis] || { color: '#888' };

      const item = document.createElement('div');
      item.className = 'hospital-item';
      item.dataset.name = p.nama;
      item.innerHTML = `
        <div class="hospital-dot"
          style="background:${cfg.color}; box-shadow: 0 0 5px ${cfg.color}88"></div>
        <div class="hospital-info">
          <div class="hospital-name">${p.nama}</div>
          <div class="hospital-meta">${p.distrik}</div>
        </div>
        <div class="hospital-beds">${p.beds} bed</div>
      `;

      item.addEventListener('click', () => {
    document.querySelectorAll('.hospital-item.active')
        .forEach(el => el.classList.remove('active'));
    item.classList.add('active');

    // Zoom ke marker
    map.setView([lat, lng], 15, { animate: true, duration: 0.8 });

    const ref = markerRefs.find(r => r.feature.properties.nama === p.nama);
    if (ref) {
        setTimeout(() => {
            layerGroups[p.jenis].zoomToShowLayer(ref.marker, () => {
                ref.marker.openPopup();
            });
        }, 450);
    }
    
    // 🔥 TAMBAHKAN INI: BUKA GOOGLE MAPS DENGAN NAMA RS (opsional)
    // const query = encodeURIComponent(`${p.nama} Bangkok Thailand`);
    // window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
});

      hospitalList.appendChild(item);
    });
  }

  function highlightSidebarItem(nama) {
    document.querySelectorAll('.hospital-item').forEach(el => {
      const isMatch = el.dataset.name === nama;
      el.classList.toggle('active', isMatch);
      if (isMatch) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // ──────────────────────────────────────────────────────────────
  // STATISTICS
  // ──────────────────────────────────────────────────────────────
  function updateStats(features) {
    const total     = GEOJSON.features.length;
    const shown     = features.length;
    const beds      = features.reduce((s, f) => s + f.properties.beds, 0);
    const districts = new Set(features.map(f => f.properties.distrik)).size;

    document.getElementById('stat-total').textContent     = total;
    document.getElementById('stat-shown').textContent     = shown;
    document.getElementById('stat-beds').textContent      = beds.toLocaleString('id-ID');
    document.getElementById('stat-districts').textContent = districts;
  }

  // ──────────────────────────────────────────────────────────────
  // EVENT LISTENERS
  // ──────────────────────────────────────────────────────────────

  // Search
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');

  searchInput.addEventListener('input', e => {
    currentSearch = e.target.value;
    searchClear.classList.toggle('visible', currentSearch.length > 0);
    applyFilters();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    searchClear.classList.remove('visible');
    applyFilters();
    searchInput.focus();
  });

  // Jenis filter
  document.getElementById('jenis-filter').addEventListener('change', e => {
    currentJenis = e.target.value;
    applyFilters();
  });

  // Beds slider
  const bedsSlider = document.getElementById('beds-slider');
  const bedsVal    = document.getElementById('beds-val');

  bedsSlider.addEventListener('input', e => {
    currentMinBeds  = parseInt(e.target.value);
    bedsVal.textContent = currentMinBeds.toLocaleString('id-ID') + '+';
    applyFilters();
  });

  // Basemap buttons
  document.querySelectorAll('.bmap-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setBasemap(btn.dataset.map);
    });
  });

  // Sidebar toggle
  document.getElementById('sidebar-toggle-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
    setTimeout(() => map.invalidateSize(), 320);
  });

  // ──────────────────────────────────────────────────────────────
  // INITIAL RENDER
  // ──────────────────────────────────────────────────────────────
  applyFilters();

  // Expose map globally (used in popup close button onclick)
  window.map = map;