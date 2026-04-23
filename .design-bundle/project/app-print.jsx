// ============ CD SMART CAMPUS — PRINT VERSION ============
// Flattens the DesignCanvas into a linear page-per-artboard layout.

function PrintApp(){
  React.useEffect(()=>{
    const root = document.documentElement;
    const a = { primary:'#1a56db', primary2:'#0f3fb0', soft:'rgba(26,86,219,.08)', tint:'rgba(26,86,219,.04)' };
    root.style.setProperty('--cd-primary', a.primary);
    root.style.setProperty('--cd-primary-2', a.primary2);
    root.style.setProperty('--cd-primary-soft', a.soft);
    root.style.setProperty('--cd-primary-tint', a.tint);
    document.body.setAttribute('data-density', 'cozy');
    document.body.setAttribute('data-theme', 'light');
  },[]);

  const Phone = ({ children }) => (
    <div style={{ width:'100%', height:'100%', background:'#0b1220', padding:10, display:'flex', alignItems:'center', justifyContent:'center' }}>
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

  const Cover = () => (
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
          </div>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14, paddingTop:24, borderTop:'1px solid #e4e8ef' }}>
        {[
          {l:'Mobile screens',v:'8',s:'for students'},
          {l:'Admin views',v:'4',s:'for staff'},
          {l:'Font family',v:'Plex',s:'IBM thai/en'},
          {l:'Houses',v:'4',s:'green/purple/orange/pink'},
        ].map((x,i) => (
          <div key={i}>
            <div style={{ fontSize:10, color:'#64748b', fontFamily:'IBM Plex Mono, monospace', textTransform:'uppercase', letterSpacing:0.8 }}>{x.l}</div>
            <div style={{ fontSize:28, fontWeight:600, letterSpacing:-0.8, marginTop:4, fontFamily:'IBM Plex Mono, monospace' }}>{x.v}</div>
            <div style={{ fontSize:11, color:'#475569', marginTop:2 }}>{x.s}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const pages = [
    { label:'Overview · ภาพรวม', w:1100, h:640, el: <Cover/> },
    { label:'Student · 01 · Home · หน้าหลัก', w:380, h:780, el: <Phone><HomeScreen/></Phone> },
    { label:'Student · 02 · Calendar · ปฏิทิน', w:380, h:780, el: <Phone><CalendarScreen/></Phone> },
    { label:'Student · 03 · Sport · กีฬาสี', w:380, h:780, el: <Phone><SportScreen/></Phone> },
    { label:'Student · 04 · Lunch · เมนูอาหาร', w:380, h:780, el: <Phone><LunchScreen/></Phone> },
    { label:'Student · 05 · Booking · จองห้อง', w:380, h:780, el: <Phone><BookingScreen/></Phone> },
    { label:'Student · 06 · Lost & Found', w:380, h:780, el: <Phone><LostScreen/></Phone> },
    { label:'Student · 07 · Portfolio · รุ่นพี่', w:380, h:780, el: <Phone><PortfolioScreen/></Phone> },
    { label:'Student · 08 · Login · เข้าสู่ระบบ', w:380, h:780, el: <Phone><LoginScreen/></Phone> },
    { label:'Admin · 01 · Overview · ภาพรวม', w:1280, h:780, el: <Desktop><AdminOverview/></Desktop> },
    { label:'Admin · 02 · Calendar · จัดการปฏิทิน', w:1280, h:780, el: <Desktop><AdminCalendar/></Desktop> },
    { label:'Admin · 03 · Sport · คะแนนกีฬาสี', w:1280, h:780, el: <Desktop><AdminSport/></Desktop> },
    { label:'Admin · 04 · Bookings · ตารางจอง', w:1280, h:780, el: <Desktop><AdminBooking/></Desktop> },
  ];

  return (
    <div className="print-root">
      {pages.map((p, i) => (
        <section key={i} className="print-page">
          <header className="print-header">
            <span className="print-label">{p.label}</span>
            <span className="print-idx">{String(i+1).padStart(2,'0')} / {String(pages.length).padStart(2,'0')}</span>
          </header>
          <div className="print-frame" style={{ width:p.w, height:p.h }}>
            {p.el}
          </div>
        </section>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PrintApp/>);

// Auto-print once fonts + frame have settled
(async () => {
  try { if (document.fonts && document.fonts.ready) await document.fonts.ready; } catch(e){}
  await new Promise(r => setTimeout(r, 900));
  window.print();
})();
