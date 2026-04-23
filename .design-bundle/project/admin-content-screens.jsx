// ============ ADMIN: CONTENT EDITORS (Lunch, Portfolio, Lost&Found, Announcements) ============

// ════════ LUNCH MENU EDITOR ════════
function AdminLunch() {
  const [selWeek, setSelWeek] = React.useState('current');
  return (
    <div className="cd-admin">
      <AdminSide active="lunch" />
      <div className="cd-admin-main">
        <AdminTopBar title="จัดการเมนูอาหาร" subtitle="Lunch menu · weekly editor" actions={
          <>
            <button className="cd-btn cd-btn-secondary cd-btn-sm"><MI name="content_copy" size={14} />Duplicate week</button>
            <button className="cd-btn cd-btn-primary cd-btn-sm"><MI name="publish" size={14} />Publish</button>
          </>
        } />
        <div className="cd-admin-content">
          {/* Week switcher */}
          <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:20 }}>
            <div>
              <div style={{ fontSize:20, fontWeight:600, letterSpacing:-0.4 }}>สัปดาห์ที่ 17 · 20–24 เม.ย.</div>
              <div className="cd-label" style={{ marginTop:2 }}>Week 17 · April 20 – 24, 2026</div>
            </div>
            <div style={{ display:'inline-flex', background:'var(--cd-surface-3)', borderRadius:8, padding:3, fontSize:11, fontFamily:'var(--cd-mono)' }}>
              {[['prev','‹ Prev'],['current','This week'],['next','Next ›']].map(([k,l]) => (
                <button key={k} onClick={()=>setSelWeek(k)} style={{
                  border:'none', padding:'6px 12px', borderRadius:6, cursor:'pointer',
                  background: selWeek===k?'#fff':'transparent',
                  color: selWeek===k?'var(--cd-ink)':'var(--cd-ink-4)',
                  boxShadow: selWeek===k?'var(--cd-shadow-xs)':'none',
                  fontFamily:'inherit',
                }}>{l}</button>
              ))}
            </div>
            <span className="cd-chip cd-chip-warn" style={{ marginLeft:'auto' }}>
              <span className="cd-dot" style={{ background:'#b45309' }}></span>Draft · unpublished
            </span>
          </div>

          {/* Days grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:14, marginBottom:24 }}>
            {LUNCH_MENU.map((d,i) => (
              <div key={i} className="cd-card" style={{ padding:16, display:'flex', flexDirection:'column', gap:12 }}>
                <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
                  <div style={{ fontSize:14, fontWeight:600 }}>{d.day}</div>
                  <div style={{ fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', letterSpacing:0.6 }}>{d.en} · {i+20} เม.ย.</div>
                </div>
                <div className="cd-ph" style={{ height:90, borderRadius:8 }}>
                  <MI name="add_photo_alternate" size={18} weight={300} />
                  <div style={{ fontSize:9 }}>Upload photo</div>
                </div>
                <div>
                  <div className="cd-label" style={{ fontSize:9, marginBottom:4 }}>เมนูหลัก · Main</div>
                  <textarea defaultValue={d.menu} rows={2} style={{
                    width:'100%', fontFamily:'inherit', fontSize:12, border:'1px solid var(--cd-line)',
                    borderRadius:7, padding:'7px 9px', background:'#fff', resize:'none', color:'var(--cd-ink)', outline:'none',
                  }} />
                </div>
                <div>
                  <div className="cd-label" style={{ fontSize:9, marginBottom:4 }}>ของหวาน · Dessert</div>
                  <input defaultValue={d.dessert} style={{
                    width:'100%', fontFamily:'inherit', fontSize:12, border:'1px solid var(--cd-line)',
                    borderRadius:7, padding:'7px 9px', background:'#fff', outline:'none',
                  }} />
                </div>
                <div style={{ display:'flex', gap:4, flexWrap:'wrap' }}>
                  {['🌶️ Spicy','🥗 Veg','🥜 Nuts'].map((t,ti) => (
                    <button key={ti} style={{
                      border:'1px solid var(--cd-line)', background:'var(--cd-surface-2)', color:'var(--cd-ink-3)',
                      padding:'3px 7px', borderRadius:999, fontSize:10, fontFamily:'inherit', cursor:'pointer'
                    }}>{t}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Publish panel */}
          <div className="cd-card" style={{ padding:20, display:'flex', alignItems:'center', gap:16 }}>
            <MI name="schedule" size={20} weight={300} style={{ color:'var(--cd-ink-4)' }} />
            <div style={{ flex:1 }}>
              <div style={{ fontSize:13, fontWeight:600 }}>กำหนดการเผยแพร่</div>
              <div style={{ fontSize:11, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:1 }}>Schedule publish — pushes to mobile app + LINE OA</div>
            </div>
            <input type="date" defaultValue="2026-04-19" style={{ padding:'7px 10px', border:'1px solid var(--cd-line)', borderRadius:8, fontFamily:'var(--cd-mono)', fontSize:12 }} />
            <input type="time" defaultValue="18:00" style={{ padding:'7px 10px', border:'1px solid var(--cd-line)', borderRadius:8, fontFamily:'var(--cd-mono)', fontSize:12 }} />
            <button className="cd-btn cd-btn-primary cd-btn-sm"><MI name="send" size={14} />Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════ PORTFOLIO MANAGER ════════
function AdminPortfolio() {
  const statuses = ['All','Published','Under review','Draft'];
  const [sel, setSel] = React.useState('All');
  const rows = PORTFOLIOS.map((p,i) => ({
    ...p,
    status: i%3===0 ? 'Published' : i%3===1 ? 'Under review' : 'Draft',
    submitted: `${22 - i*2} Apr 2026`,
  }));
  const filtered = sel==='All' ? rows : rows.filter(r => r.status===sel);
  return (
    <div className="cd-admin">
      <AdminSide active="port" />
      <div className="cd-admin-main">
        <AdminTopBar title="Portfolio · โครงงานรุ่นพี่" subtitle="Review, publish, and feature senior projects" actions={
          <>
            <button className="cd-btn cd-btn-secondary cd-btn-sm"><MI name="download" size={14} />Export CSV</button>
            <button className="cd-btn cd-btn-primary cd-btn-sm"><MI name="add" size={14} />New project</button>
          </>
        } />
        <div className="cd-admin-content">
          {/* Stats row */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14, marginBottom:20 }}>
            {[
              {l:'Total',v:'48'},{l:'Published',v:'32'},{l:'Under review',v:'11'},{l:'Featured',v:'6'},
            ].map((s,i) => (
              <div key={i} className="cd-kpi" style={{ padding:14 }}>
                <div className="cd-kpi-label" style={{ fontSize:10 }}>{s.l}</div>
                <div className="cd-kpi-value" style={{ fontSize:26 }}>{s.v}</div>
              </div>
            ))}
          </div>

          {/* Filter tabs */}
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
            {statuses.map(s => (
              <button key={s} onClick={()=>setSel(s)} style={{
                border:'1px solid', borderColor: sel===s?'var(--cd-ink)':'var(--cd-line)',
                background: sel===s?'var(--cd-ink)':'#fff',
                color: sel===s?'#fff':'var(--cd-ink-3)',
                padding:'6px 12px', borderRadius:999, fontSize:12, fontFamily:'inherit',
                cursor:'pointer', fontWeight:500,
              }}>{s}</button>
            ))}
            <div style={{ marginLeft:'auto', position:'relative' }}>
              <MI name="search" size={14} weight={300} style={{ position:'absolute', left:10, top:'50%', transform:'translateY(-50%)', color:'var(--cd-ink-4)' }} />
              <input placeholder="Search by name, tag..." style={{ width:240, padding:'7px 10px 7px 30px', border:'1px solid var(--cd-line)', borderRadius:8, fontSize:12, fontFamily:'inherit', outline:'none' }} />
            </div>
          </div>

          {/* Table */}
          <div className="cd-card" style={{ overflow:'hidden', padding:0 }}>
            <table className="cd-table">
              <thead><tr>
                <th style={{ width:'28%' }}>Project</th>
                <th>Author</th>
                <th>Tags</th>
                <th>Submitted</th>
                <th>Status</th>
                <th style={{ width:120, textAlign:'right' }}>Actions</th>
              </tr></thead>
              <tbody>
                {filtered.map((r,i) => (
                  <tr key={i}>
                    <td>
                      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                        <div className="cd-ph" style={{ width:36, height:36, borderRadius:6 }}><MI name="image" size={14} weight={300} /></div>
                        <div>
                          <div style={{ fontSize:13, fontWeight:500, color:'var(--cd-ink)' }}>{r.title}</div>
                          <div style={{ fontSize:10.5, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>{r.th}</div>
                        </div>
                      </div>
                    </td>
                    <td><div>{r.name}</div><div style={{ fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>{r.year}</div></td>
                    <td>
                      <div style={{ display:'flex', gap:4, flexWrap:'wrap' }}>
                        {r.tags.slice(0,2).map((t,ti) => <span key={ti} className="cd-chip" style={{ fontSize:10, padding:'2px 7px' }}>{t}</span>)}
                      </div>
                    </td>
                    <td style={{ fontFamily:'var(--cd-mono)', fontSize:11, color:'var(--cd-ink-4)' }}>{r.submitted}</td>
                    <td>
                      <span className={
                        r.status==='Published' ? 'cd-chip cd-chip-success' :
                        r.status==='Under review' ? 'cd-chip cd-chip-warn' : 'cd-chip'
                      }>
                        <span className="cd-dot" style={{ background:
                          r.status==='Published' ? 'var(--cd-success)' :
                          r.status==='Under review' ? '#b45309' : 'var(--cd-ink-4)'
                        }}></span>{r.status}
                      </span>
                    </td>
                    <td style={{ textAlign:'right' }}>
                      <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding:'4px 8px' }}><MI name="edit" size={14} weight={300} /></button>
                      <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding:'4px 8px' }}><MI name="visibility" size={14} weight={300} /></button>
                      <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding:'4px 8px' }}><MI name="more_horiz" size={14} weight={300} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════ LOST & FOUND MANAGER ════════
function AdminLost() {
  const rows = LOST_ITEMS.map((it,i) => ({
    ...it,
    reporter: i%2 ? 'อ.ประจำชั้น' : `${60000+i*37} · นักเรียน`,
    claimed: i%3===0,
  }));
  return (
    <div className="cd-admin">
      <AdminSide active="lost" />
      <div className="cd-admin-main">
        <AdminTopBar title="ของหาย–ของเจอ" subtitle="Lost & Found · moderation" actions={
          <>
            <button className="cd-btn cd-btn-secondary cd-btn-sm"><MI name="archive" size={14} />Archive old</button>
            <button className="cd-btn cd-btn-primary cd-btn-sm"><MI name="add" size={14} />New entry</button>
          </>
        } />
        <div className="cd-admin-content">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14, marginBottom:20 }}>
            {[
              {l:'Open',v:'14',c:'var(--cd-danger)'},
              {l:'Found · pending claim',v:'6',c:'#b45309'},
              {l:'Claimed · 7 days',v:'11',c:'var(--cd-success)'},
              {l:'Avg resolve',v:'2.4 d',c:'var(--cd-ink)'},
            ].map((s,i) => (
              <div key={i} className="cd-kpi" style={{ padding:14 }}>
                <div className="cd-kpi-label" style={{ fontSize:10, display:'flex', alignItems:'center', gap:6 }}>
                  <span className="cd-dot" style={{ background:s.c }}></span>{s.l}
                </div>
                <div className="cd-kpi-value" style={{ fontSize:26 }}>{s.v}</div>
              </div>
            ))}
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:14 }}>
            {rows.map((r,i) => (
              <div key={i} className="cd-card" style={{ padding:14, display:'flex', gap:12 }}>
                <div className="cd-ph" style={{ width:80, height:80, borderRadius:8, flexShrink:0 }}>
                  <MI name={r.icon} size={22} weight={300} />
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:8 }}>
                    <div>
                      <div style={{ fontSize:13.5, fontWeight:600 }}>{r.title}</div>
                      <div style={{ fontSize:10.5, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>{r.en}</div>
                    </div>
                    <span className={r.status==='lost'?'cd-chip cd-chip-danger':'cd-chip cd-chip-success'}>
                      <span className="cd-dot" style={{ background: r.status==='lost'?'var(--cd-danger)':'var(--cd-success)' }}></span>
                      {r.status==='lost'?'Lost':'Found'}
                    </span>
                  </div>
                  <div style={{ fontSize:11, color:'var(--cd-ink-3)', marginTop:6, display:'flex', gap:10 }}>
                    <span style={{ display:'inline-flex', alignItems:'center', gap:3 }}><MI name="location_on" size={12} weight={300} />{r.loc}</span>
                    <span style={{ display:'inline-flex', alignItems:'center', gap:3 }}><MI name="schedule" size={12} weight={300} />{r.date}</span>
                  </div>
                  <div style={{ fontSize:10.5, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:4 }}>by {r.reporter}</div>
                  <div style={{ display:'flex', gap:6, marginTop:10 }}>
                    <button className="cd-btn cd-btn-secondary cd-btn-sm"><MI name="check" size={12} />{r.status==='lost'?'Mark found':'Mark claimed'}</button>
                    <button className="cd-btn cd-btn-ghost cd-btn-sm"><MI name="edit" size={12} />Edit</button>
                    <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ marginLeft:'auto', color:'var(--cd-danger)' }}><MI name="delete" size={12} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════ ANNOUNCEMENTS · LINE OA DASHBOARD ════════
function AdminAnnounce() {
  const [msg, setMsg] = React.useState('ประชุมผู้ปกครอง ม.6 วันเสาร์ที่ 25 เม.ย. 09:00 น. ที่หอประชุมใหญ่ กรุณาลงทะเบียนล่วงหน้าผ่านแอป\n\nParent–Teacher Meeting, M.6 · Sat Apr 25, 09:00 · Main auditorium. Please register in advance via app.');
  const [audience, setAudience] = React.useState('all');
  const posts = [
    { when:'22 Apr · 08:12', title:'เมนูอาหารสัปดาห์นี้', audience:'All students', status:'Sent', reach:1247, opens:'78%' },
    { when:'21 Apr · 16:04', title:'แจ้งปิดถนนหน้าโรงเรียน',   audience:'Parents',      status:'Sent', reach:982,  opens:'64%' },
    { when:'20 Apr · 11:30', title:'ประกาศผลกีฬาสี Day 1',     audience:'All',          status:'Sent', reach:1247, opens:'91%' },
    { when:'—',              title:'Draft · Earth Day recap',   audience:'M.4–M.6',     status:'Draft', reach:null, opens:'—' },
  ];
  return (
    <div className="cd-admin">
      <AdminSide active="pr" />
      <div className="cd-admin-main">
        <AdminTopBar title="ประชาสัมพันธ์" subtitle="Announcements · connected to LINE Official Account" actions={
          <>
            <span className="cd-chip cd-chip-success" style={{ fontFamily:'var(--cd-mono)' }}>
              <span className="cd-dot" style={{ background:'#06c755' }}></span>LINE OA · @cdsschool
            </span>
            <button className="cd-btn cd-btn-secondary cd-btn-sm"><MI name="history" size={14} />History</button>
          </>
        } />
        <div className="cd-admin-content">
          <div style={{ display:'grid', gridTemplateColumns:'1.35fr .95fr', gap:18 }}>
            {/* Composer */}
            <div className="cd-card" style={{ padding:18, display:'flex', flexDirection:'column', gap:14 }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div>
                  <div style={{ fontSize:14, fontWeight:600 }}>เขียนประกาศใหม่</div>
                  <div style={{ fontSize:11, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>Compose · will post to LINE OA on publish</div>
                </div>
                <span className="cd-chip"><MI name="draft" size={11} weight={300} />Draft · autosaved 12s ago</span>
              </div>

              <input placeholder="หัวข้อ · Title" defaultValue="ประชุมผู้ปกครอง ม.6 · 25 เม.ย." style={{
                border:'1px solid var(--cd-line)', borderRadius:9, padding:'10px 12px', fontSize:14, fontWeight:500, fontFamily:'inherit', outline:'none',
              }} />

              <textarea value={msg} onChange={e=>setMsg(e.target.value)} rows={7} style={{
                border:'1px solid var(--cd-line)', borderRadius:9, padding:'11px 13px', fontSize:13, fontFamily:'inherit',
                lineHeight:1.55, resize:'vertical', outline:'none', color:'var(--cd-ink)',
              }} />

              {/* Upload drop zone */}
              <div style={{
                border:'1.5px dashed var(--cd-line)', borderRadius:10, padding:'14px', display:'flex', alignItems:'center', gap:12,
                background:'var(--cd-surface-2)',
              }}>
                <MI name="upload_file" size={22} weight={300} style={{ color:'var(--cd-ink-4)' }} />
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:12.5, fontWeight:500 }}>แนบไฟล์หรือรูปภาพ · Attach files or images</div>
                  <div style={{ fontSize:10.5, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:1 }}>Drop here · PDF / JPG / PNG · max 10MB</div>
                </div>
                <button className="cd-btn cd-btn-secondary cd-btn-sm"><MI name="attach_file" size={13} />Browse</button>
              </div>

              {/* Attached pills */}
              <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                {[
                  {n:'parent-meeting-agenda.pdf', i:'picture_as_pdf', s:'218 KB'},
                  {n:'map-auditorium.jpg', i:'image', s:'1.4 MB'},
                ].map((f,i) => (
                  <div key={i} style={{
                    display:'inline-flex', alignItems:'center', gap:6, padding:'5px 9px', borderRadius:7,
                    background:'#fff', border:'1px solid var(--cd-line)', fontSize:11, fontFamily:'var(--cd-mono)',
                  }}>
                    <MI name={f.i} size={13} weight={300} />{f.n}
                    <span style={{ color:'var(--cd-ink-4)' }}>· {f.s}</span>
                    <MI name="close" size={12} weight={300} style={{ color:'var(--cd-ink-4)', cursor:'pointer', marginLeft:4 }} />
                  </div>
                ))}
              </div>

              {/* Audience + actions */}
              <div style={{ display:'flex', alignItems:'center', gap:12, paddingTop:8, borderTop:'1px solid var(--cd-line-2)' }}>
                <div className="cd-label" style={{ fontSize:10 }}>Audience</div>
                <div style={{ display:'inline-flex', background:'var(--cd-surface-3)', borderRadius:8, padding:3, fontSize:11, fontFamily:'var(--cd-mono)' }}>
                  {[['all','All'],['students','Students'],['parents','Parents'],['staff','Staff']].map(([k,l]) => (
                    <button key={k} onClick={()=>setAudience(k)} style={{
                      border:'none', padding:'5px 11px', borderRadius:6, cursor:'pointer',
                      background: audience===k?'#fff':'transparent',
                      color: audience===k?'var(--cd-ink)':'var(--cd-ink-4)',
                      fontFamily:'inherit', fontWeight:500,
                    }}>{l}</button>
                  ))}
                </div>
                <div style={{ marginLeft:'auto', display:'flex', gap:8 }}>
                  <button className="cd-btn cd-btn-secondary cd-btn-sm"><MI name="schedule" size={13} />Schedule</button>
                  <button className="cd-btn cd-btn-secondary cd-btn-sm"><MI name="save" size={13} />Save draft</button>
                  <button className="cd-btn cd-btn-primary cd-btn-sm" style={{ background:'#06c755', borderColor:'#06c755' }}>
                    <MI name="campaign" size={13} />Publish to LINE OA
                  </button>
                </div>
              </div>
            </div>

            {/* LINE preview */}
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <div className="cd-card" style={{ padding:16 }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
                  <div style={{ fontSize:12.5, fontWeight:600 }}>LINE OA Preview</div>
                  <span className="cd-label" style={{ fontSize:9 }}>Live render</span>
                </div>
                <div style={{ background:'#8fa7c2', borderRadius:10, padding:14, position:'relative' }}>
                  {/* OA bubble */}
                  <div style={{ display:'flex', gap:8, alignItems:'flex-start' }}>
                    <div style={{ width:32, height:32, borderRadius:'50%', background:'#06c755', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:11, flexShrink:0, fontFamily:'var(--cd-mono)' }}>CD</div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ color:'#fff', fontSize:10, opacity:0.85, marginBottom:3, fontFamily:'var(--cd-mono)' }}>CDS School · @cdsschool</div>
                      <div style={{ background:'#fff', borderRadius:'4px 14px 14px 14px', padding:'10px 12px', fontSize:12, lineHeight:1.55, color:'#111', whiteSpace:'pre-wrap' }}>
                        <div style={{ fontWeight:600, marginBottom:4 }}>ประชุมผู้ปกครอง ม.6 · 25 เม.ย.</div>
                        {msg}
                        <div style={{ marginTop:8, padding:8, border:'1px solid #e4e8ef', borderRadius:8, display:'flex', alignItems:'center', gap:8, fontSize:11 }}>
                          <MI name="picture_as_pdf" size={16} weight={300} style={{ color:'#dc2626' }} />
                          <div style={{ flex:1 }}>
                            <div style={{ fontWeight:500 }}>parent-meeting-agenda.pdf</div>
                            <div style={{ fontSize:10, color:'#64748b', fontFamily:'var(--cd-mono)' }}>218 KB</div>
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize:10, color:'rgba(255,255,255,.75)', marginTop:4, fontFamily:'var(--cd-mono)' }}>9:41 AM · via CD Smart Campus</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cd-card" style={{ padding:16 }}>
                <div style={{ fontSize:12.5, fontWeight:600, marginBottom:10 }}>ช่องทางการส่ง · Channels</div>
                {[
                  {n:'LINE Official Account',sub:'@cdsschool · 1,247 friends', on:true, c:'#06c755', i:'chat'},
                  {n:'Mobile app push',      sub:'In-app announcement banner', on:true, c:'var(--cd-ink)', i:'notifications_active'},
                  {n:'School website',       sub:'cds.ac.th/announcements',    on:false,c:'var(--cd-ink-4)', i:'language'},
                  {n:'Email (ผู้ปกครอง)',     sub:'SMTP · parents list',         on:false,c:'var(--cd-ink-4)', i:'mail'},
                ].map((ch,i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 0', borderTop: i>0?'1px solid var(--cd-line-2)':'none' }}>
                    <div style={{ width:28, height:28, borderRadius:7, background:'var(--cd-surface-3)', color:ch.c, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <MI name={ch.i} size={15} weight={300} />
                    </div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontSize:12, fontWeight:500 }}>{ch.n}</div>
                      <div style={{ fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>{ch.sub}</div>
                    </div>
                    <div style={{
                      width:30, height:18, borderRadius:10, background: ch.on?'#06c755':'var(--cd-line)',
                      position:'relative', cursor:'pointer', flexShrink:0,
                    }}>
                      <div style={{ position:'absolute', top:2, left: ch.on?14:2, width:14, height:14, borderRadius:'50%', background:'#fff', transition:'left .15s' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent posts */}
          <div style={{ marginTop:22 }}>
            <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:10 }}>
              <div>
                <div style={{ fontSize:15, fontWeight:600, letterSpacing:-0.2 }}>ประกาศล่าสุด</div>
                <div className="cd-label" style={{ marginTop:1, fontSize:10 }}>Recent posts · performance</div>
              </div>
              <button className="cd-btn cd-btn-ghost cd-btn-sm">View all <MI name="arrow_forward" size={13} /></button>
            </div>
            <div className="cd-card" style={{ padding:0, overflow:'hidden' }}>
              <table className="cd-table">
                <thead><tr>
                  <th style={{ width:150 }}>Sent</th>
                  <th>Title</th>
                  <th>Audience</th>
                  <th>Status</th>
                  <th style={{ textAlign:'right' }}>Reach</th>
                  <th style={{ textAlign:'right' }}>Open rate</th>
                </tr></thead>
                <tbody>
                  {posts.map((p,i) => (
                    <tr key={i}>
                      <td style={{ fontFamily:'var(--cd-mono)', fontSize:11, color:'var(--cd-ink-4)' }}>{p.when}</td>
                      <td style={{ fontWeight:500, color:'var(--cd-ink)' }}>{p.title}</td>
                      <td>{p.audience}</td>
                      <td>
                        <span className={p.status==='Sent'?'cd-chip cd-chip-success':'cd-chip'}>
                          <span className="cd-dot" style={{ background: p.status==='Sent'?'var(--cd-success)':'var(--cd-ink-4)' }}></span>{p.status}
                        </span>
                      </td>
                      <td style={{ textAlign:'right', fontFamily:'var(--cd-mono)', fontVariantNumeric:'tabular-nums' }}>{p.reach ?? '—'}</td>
                      <td style={{ textAlign:'right', fontFamily:'var(--cd-mono)', fontVariantNumeric:'tabular-nums', color: p.opens==='—'?'var(--cd-ink-4)':'var(--cd-ink)' }}>{p.opens}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AdminLunch, AdminPortfolio, AdminLost, AdminAnnounce });
