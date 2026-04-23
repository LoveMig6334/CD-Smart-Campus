// ============ CD SMART CAMPUS — DESIGN CANVAS ============

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "blue",
  "density": "cozy",
  "theme": "light",
  "showLabels": true
}/*EDITMODE-END*/;

const ACCENTS = {
  blue:   { primary:'#1a56db', primary2:'#0f3fb0', soft:'rgba(26,86,219,.08)', tint:'rgba(26,86,219,.04)' },
  indigo: { primary:'#4338ca', primary2:'#312e81', soft:'rgba(67,56,202,.08)', tint:'rgba(67,56,202,.04)' },
  teal:   { primary:'#0f766e', primary2:'#0a524c', soft:'rgba(15,118,110,.08)', tint:'rgba(15,118,110,.04)' },
  amber:  { primary:'#b45309', primary2:'#8a3f06', soft:'rgba(180,83,9,.08)', tint:'rgba(180,83,9,.04)' },
  rose:   { primary:'#be185d', primary2:'#831843', soft:'rgba(190,24,93,.08)', tint:'rgba(190,24,93,.04)' },
};

function applyTweaks(t){
  const root = document.documentElement;
  const a = ACCENTS[t.accent] || ACCENTS.blue;
  root.style.setProperty('--cd-primary', a.primary);
  root.style.setProperty('--cd-primary-2', a.primary2);
  root.style.setProperty('--cd-primary-soft', a.soft);
  root.style.setProperty('--cd-primary-tint', a.tint);
  document.body.setAttribute('data-density', t.density);
  document.body.setAttribute('data-theme', t.theme);
}

function TweaksPanel({ tweaks, setTweaks }){
  const [open, setOpen] = React.useState(false);
  React.useEffect(()=>{
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') setOpen(true);
      if (e.data?.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  },[]);

  const update = (patch) => {
    const next = {...tweaks, ...patch};
    setTweaks(next);
    window.parent.postMessage({type:'__edit_mode_set_keys', edits: patch}, '*');
  };

  if (!open) return null;
  return (
    <div className="tweaks-panel open">
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
        <div>
          <div style={{ fontSize:13, fontWeight:600 }}>Tweaks</div>
          <div className="cd-label" style={{ marginTop:1, fontSize:9 }}>Design controls</div>
        </div>
        <button className="cd-btn cd-btn-ghost cd-btn-sm" onClick={()=>setOpen(false)} style={{ padding:'2px 6px' }}><MI name="close" size={14} /></button>
      </div>
      <div className="tweaks-row">
        <span style={{ color:'var(--cd-ink-3)' }}>Accent</span>
        <div className="tweaks-swatches">
          {Object.entries(ACCENTS).map(([k,v]) => (
            <button key={k} className={`tweaks-sw ${tweaks.accent===k?'on':''}`} style={{ background:v.primary }} onClick={()=>update({accent:k})} title={k} />
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <span style={{ color:'var(--cd-ink-3)' }}>Density</span>
        <div className="tweaks-seg">
          {['compact','cozy','comfy'].map(d => (
            <button key={d} className={tweaks.density===d?'on':''} onClick={()=>update({density:d})}>{d}</button>
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <span style={{ color:'var(--cd-ink-3)' }}>Theme</span>
        <div className="tweaks-seg">
          {['light','dark'].map(d => (
            <button key={d} className={tweaks.theme===d?'on':''} onClick={()=>update({theme:d})}>{d}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function App(){
  const [tweaks, setTweaks] = React.useState(DEFAULTS);
  React.useEffect(()=>{ applyTweaks(tweaks); }, [tweaks]);

  const Phone = ({ children }) => (
    <div style={{ width:'100%', height:'100%', background:'#0b1220', padding:10, borderRadius:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ width:360, height:760, background:'#000', borderRadius:38, padding:8, boxShadow:'0 0 0 2px #1a1f2e, 0 20px 60px rgba(0,0,0,.3)', position:'relative' }}>
        <div style={{ width:'100%', height:'100%', borderRadius:30, overflow:'hidden', position:'relative', background:'#fff' }}>
          {children}
        </div>
      </div>
    </div>
  );

  const Desktop = ({ children }) => (
    <div style={{ width:'100%', height:'100%', background:'#e7e5e0', padding:12, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ width:'100%', height:'100%', borderRadius:10, overflow:'hidden', background:'#fff', boxShadow:'0 20px 60px rgba(0,0,0,.12)', border:'1px solid #d8dde7' }}>
        {/* Browser chrome */}
        <div style={{ height:32, background:'#f1f3f8', borderBottom:'1px solid #d8dde7', display:'flex', alignItems:'center', padding:'0 12px', gap:8 }}>
          <div style={{ display:'flex', gap:6 }}>
            <div style={{ width:10, height:10, borderRadius:'50%', background:'#ef4444' }}></div>
            <div style={{ width:10, height:10, borderRadius:'50%', background:'#f59e0b' }}></div>
            <div style={{ width:10, height:10, borderRadius:'50%', background:'#10b981' }}></div>
          </div>
          <div style={{ marginLeft:12, flex:1, background:'#fff', borderRadius:6, padding:'3px 10px', fontSize:10, color:'#64748b', fontFamily:'IBM Plex Mono, monospace', border:'1px solid #e4e8ef' }}>
            admin.cds.ac.th/overview
          </div>
        </div>
        <div style={{ width:'100%', height:'calc(100% - 32px)' }}>{children}</div>
      </div>
    </div>
  );

  return (
    <>
      <DesignCanvas minScale={0.1} maxScale={3}>

        <DCSection id="intro" title="CD Smart Campus · Design Review" subtitle="Refined glass/editorial direction · IBM Plex Sans Thai · bilingual · monochrome iconography">
          <DCArtboard id="cover" label="Overview · ภาพรวม" width={1100} height={640}>
            <div style={{ width:'100%', height:'100%', background:'linear-gradient(180deg,#fbfcfe 0%,#fff 100%)', padding:48, fontFamily:'IBM Plex Sans Thai, IBM Plex Sans, sans-serif', color:'#0b1a2c', display:'flex', flexDirection:'column', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, right:0, width:400, height:400, background:'radial-gradient(circle,rgba(26,86,219,.08) 0%,transparent 70%)', pointerEvents:'none' }}></div>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ width:42, height:42, borderRadius:10, background:'#0b1a2c', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:16, letterSpacing:-0.8, fontFamily:'IBM Plex Mono, monospace' }}>CD</div>
                <div>
                  <div style={{ fontSize:16, fontWeight:600, letterSpacing:-0.3 }}>Smart Campus</div>
                  <div style={{ fontSize:10, color:'#64748b', fontFamily:'IBM Plex Mono, monospace', textTransform:'uppercase', letterSpacing:1 }}>Chitralada · CDS · v2.0</div>
                </div>
              </div>

              <div style={{ flex:1, display:'flex', alignItems:'center', marginTop:20 }}>
                <div style={{ maxWidth:640 }}>
                  <div style={{ fontSize:11, color:'#64748b', fontFamily:'IBM Plex Mono, monospace', textTransform:'uppercase', letterSpacing:1, marginBottom:18 }}>Design review · 22 apr 2026</div>
                  <div style={{ fontSize:56, fontWeight:600, letterSpacing:-2, lineHeight:1.05, color:'#0b1a2c' }}>
                    ระบบจัดการโรงเรียน<br/>
                    <span style={{ color:'#64748b' }}>ที่เบาและคมขึ้น</span>
                  </div>
                  <div style={{ fontSize:14, color:'#475569', marginTop:18, lineHeight:1.6, maxWidth:520 }}>
                    A refined take on the CD Smart Campus prototype — tighter typography, clearer information hierarchy,
                    monochrome iconography, and editorial rhythm. Bilingual Thai/English throughout.
                    <br/><br/>
                    <span style={{ color:'#64748b', fontFamily:'IBM Plex Mono, monospace', fontSize:11, textTransform:'uppercase', letterSpacing:0.8 }}>
                      Swipe right → 8 mobile screens + 4 admin desktop views
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14, paddingTop:24, borderTop:'1px solid #e4e8ef' }}>
                {[
                  {l:'Mobile screens',v:'8',s:'for students'},
                  {l:'Admin views',v:'4',s:'for staff'},
                  {l:'Font family',v:'Plex',s:'IBM thai/en'},
                  {l:'Accent tweaks',v:'5',s:'see panel ↘'},
                ].map((x,i) => (
                  <div key={i}>
                    <div style={{ fontSize:10, color:'#64748b', fontFamily:'IBM Plex Mono, monospace', textTransform:'uppercase', letterSpacing:0.8 }}>{x.l}</div>
                    <div style={{ fontSize:28, fontWeight:600, letterSpacing:-0.8, marginTop:4, fontFamily:'IBM Plex Mono, monospace' }}>{x.v}</div>
                    <div style={{ fontSize:11, color:'#475569', marginTop:2 }}>{x.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </DCArtboard>
        </DCSection>

        <DCSection id="student" title="Student · Mobile" subtitle="Primary experience · iOS 390×844 equivalent · bilingual TH/EN">
          <DCArtboard id="home"      label="01 · Home · หน้าหลัก"       width={380} height={780}><Phone><HomeScreen/></Phone></DCArtboard>
          <DCArtboard id="calendar"  label="02 · Calendar · ปฏิทิน"     width={380} height={780}><Phone><CalendarScreen/></Phone></DCArtboard>
          <DCArtboard id="sport"     label="03 · Sport · กีฬาสี"        width={380} height={780}><Phone><SportScreen/></Phone></DCArtboard>
          <DCArtboard id="lunch"     label="04 · Lunch · เมนูอาหาร"     width={380} height={780}><Phone><LunchScreen/></Phone></DCArtboard>
          <DCArtboard id="booking"   label="05 · Booking · จองห้อง"     width={380} height={780}><Phone><BookingScreen/></Phone></DCArtboard>
          <DCArtboard id="lost"      label="06 · Lost & Found"          width={380} height={780}><Phone><LostScreen/></Phone></DCArtboard>
          <DCArtboard id="portfolio" label="07 · Portfolio · รุ่นพี่"    width={380} height={780}><Phone><PortfolioScreen/></Phone></DCArtboard>
          <DCArtboard id="login"     label="08 · Login · เข้าสู่ระบบ"    width={380} height={780}><Phone><LoginScreen/></Phone></DCArtboard>
        </DCSection>

        <DCSection id="admin" title="Admin · Desktop" subtitle="Teacher/staff dashboard · 1280×780 · content-first tables and timelines">
          <DCArtboard id="overview" label="01 · Overview · ภาพรวม"        width={1280} height={780}><Desktop><AdminOverview/></Desktop></DCArtboard>
          <DCArtboard id="calendar" label="02 · Calendar · จัดการปฏิทิน"  width={1280} height={780}><Desktop><AdminCalendar/></Desktop></DCArtboard>
          <DCArtboard id="sport"    label="03 · Sport · คะแนนกีฬาสี"      width={1280} height={780}><Desktop><AdminSport/></Desktop></DCArtboard>
          <DCArtboard id="booking"  label="04 · Bookings · ตารางจอง"     width={1280} height={780}><Desktop><AdminBooking/></Desktop></DCArtboard>
          <DCArtboard id="lunch"    label="05 · Lunch Menu · เมนูอาหาร"  width={1280} height={780}><Desktop><AdminLunch/></Desktop></DCArtboard>
          <DCArtboard id="port"     label="06 · Portfolio · โครงงาน"     width={1280} height={780}><Desktop><AdminPortfolio/></Desktop></DCArtboard>
          <DCArtboard id="lost"     label="07 · Lost & Found · ของหาย"   width={1280} height={780}><Desktop><AdminLost/></Desktop></DCArtboard>
          <DCArtboard id="pr"       label="08 · Announcements · LINE OA" width={1280} height={780}><Desktop><AdminAnnounce/></Desktop></DCArtboard>
        </DCSection>

      </DesignCanvas>
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
