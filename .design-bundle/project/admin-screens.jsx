// ============ ADMIN DESKTOP SCREENS ============

function AdminSide({ active='overview', onNav=()=>{} }) {
  const items = [
    { id:'overview', th:'ภาพรวม',      en:'Overview',     icon:'dashboard' },
    { id:'calendar', th:'ปฏิทิน',      en:'Calendar',     icon:'calendar_month' },
    { id:'sport',    th:'กีฬาสี',      en:'Sport Day',    icon:'emoji_events' },
    { id:'booking',  th:'จองห้อง',     en:'Bookings',     icon:'meeting_room' },
    { id:'lunch',    th:'เมนูอาหาร',   en:'Lunch Menu',   icon:'restaurant' },
    { id:'lost',     th:'ของหาย',      en:'Lost & Found', icon:'search' },
    { id:'port',     th:'Portfolio',   en:'Portfolios',   icon:'work' },
    { id:'pr',       th:'ประชาสัมพันธ์', en:'Announcements',icon:'campaign' },
  ];
  return (
    <aside className="cd-admin-side">
      <div style={{ padding:'20px 22px 16px', borderBottom:'1px solid var(--cd-line)' }}>
        <Wordmark size={13} />
      </div>
      <div style={{ padding:'14px 0', flex:1, overflowY:'auto' }}>
        <div style={{ padding:'0 22px 10px' }} className="cd-label">Admin · จัดการ</div>
        {items.map(it => (
          <button key={it.id} className={`cd-nav-item ${it.id===active?'active':''}`} onClick={()=>onNav(it.id)}>
            <MI name={it.icon} size={18} weight={300} />
            <div style={{ flex:1 }}>
              <div>{it.th}</div>
              <span className="cd-nav-en">{it.en}</span>
            </div>
          </button>
        ))}
      </div>
      <div style={{ padding:16, borderTop:'1px solid var(--cd-line)' }}>
        <div className="cd-card" style={{ padding:12, display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:36, height:36, borderRadius:'50%', background:'var(--cd-surface-3)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:600, color:'var(--cd-ink)', fontSize:13, fontFamily:'var(--cd-mono)' }}>อส</div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:12, fontWeight:500 }}>อ.สุภาวดี ช.</div>
            <div style={{ fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>Admin · ฝ่ายกิจการฯ</div>
          </div>
          <MI name="logout" size={16} weight={300} style={{ color:'var(--cd-ink-4)', cursor:'pointer' }} />
        </div>
      </div>
    </aside>
  );
}

function AdminTopBar({ title, subtitle, actions }) {
  return (
    <header className="cd-admin-topbar">
      <div style={{ flex:1 }}>
        <div style={{ fontSize:17, fontWeight:600, letterSpacing:-0.3, color:'var(--cd-ink)' }}>{title}</div>
        <div className="cd-label" style={{ marginTop:1, fontSize:10 }}>{subtitle}</div>
      </div>
      <div style={{ position:'relative' }}>
        <MI name="search" size={16} weight={300} style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:'var(--cd-ink-4)' }} />
        <input placeholder="Search · ค้นหา..." style={{ width:240, padding:'8px 12px 8px 34px', border:'1px solid var(--cd-line)', borderRadius:8, fontFamily:'inherit', fontSize:12.5, background:'var(--cd-surface-2)', outline:'none' }} />
      </div>
      <button className="cd-btn cd-btn-secondary cd-btn-sm" style={{ width:34, height:34, padding:0, position:'relative' }}>
        <MI name="notifications" size={16} weight={300} />
        <span style={{ position:'absolute', top:6, right:6, width:7, height:7, borderRadius:'50%', background:'var(--cd-danger)' }}></span>
      </button>
      {actions}
    </header>
  );
}

// ════════ OVERVIEW ════════
function AdminOverview() {
  const sparkline = [20,28,22,35,40,38,52,48,58,55,68,72];
  const maxSpark = Math.max(...sparkline);

  return (
    <div className="cd-admin">
      <AdminSide active="overview" />
      <div className="cd-admin-main">
        <AdminTopBar title="ภาพรวมระบบ" subtitle="Overview · Term 1/2569" actions={
          <button className="cd-btn cd-btn-primary cd-btn-sm"><MI name="download" size={14} />Export</button>
        } />
        <div className="cd-admin-content">
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:20 }}>
            <div>
              <div style={{ fontSize:22, fontWeight:600, letterSpacing:-0.5 }}>สวัสดี อ.สุภาวดี</div>
              <div style={{ fontSize:12, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:3, textTransform:'uppercase', letterSpacing:0.6 }}>Wednesday · 22 April 2026 · 09:41</div>
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">7 วัน · 7d</button>
              <button className="cd-btn cd-btn-sm" style={{ background:'var(--cd-ink)', color:'#fff' }}>30 วัน · 30d</button>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">ภาคเรียน · Term</button>
            </div>
          </div>

          {/* KPIs */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14, marginBottom:24 }}>
            {KPI.map((k,i) => (
              <div key={i} className="cd-kpi">
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                  <div>
                    <div className="cd-kpi-label">{k.en}</div>
                    <div className="cd-kpi-value">{k.value}</div>
                    <div style={{ fontSize:11, color:'var(--cd-ink-3)', marginTop:2 }}>{k.label}</div>
                  </div>
                  <span className="cd-chip cd-chip-success" style={{ fontSize:10 }}>{k.delta}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main grid */}
          <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:14, marginBottom:14 }}>
            {/* Activity chart */}
            <div className="cd-card" style={{ padding:20 }}>
              <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:18 }}>
                <div>
                  <div style={{ fontSize:14, fontWeight:600 }}>การใช้งานระบบ</div>
                  <div className="cd-label" style={{ marginTop:2 }}>System engagement · daily active users</div>
                </div>
                <div style={{ display:'flex', gap:12 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:11 }}><span className="cd-dot" style={{ background:'var(--cd-ink)' }}></span><span style={{ color:'var(--cd-ink-3)' }}>นักเรียน</span></div>
                  <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:11 }}><span className="cd-dot" style={{ background:'var(--cd-primary)' }}></span><span style={{ color:'var(--cd-ink-3)' }}>ครู</span></div>
                </div>
              </div>
              <svg viewBox="0 0 480 160" style={{ width:'100%', height:160 }}>
                {/* grid */}
                {[0,1,2,3,4].map(i => <line key={i} x1="0" y1={i*40} x2="480" y2={i*40} stroke="#eef1f6" strokeDasharray="2 3" />)}
                {/* area */}
                <defs>
                  <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0b1a2c" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#0b1a2c" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {(() => {
                  const pts = sparkline.map((v,i) => [i*(480/(sparkline.length-1)), 160-(v/maxSpark*130+10)]);
                  const pts2 = sparkline.map((v,i) => [i*(480/(sparkline.length-1)), 160-((v*0.55)/maxSpark*130+10)]);
                  const line = pts.map(([x,y],i) => (i===0?`M${x},${y}`:`L${x},${y}`)).join(' ');
                  const line2 = pts2.map(([x,y],i) => (i===0?`M${x},${y}`:`L${x},${y}`)).join(' ');
                  const area = line + ` L480,160 L0,160 Z`;
                  return (<>
                    <path d={area} fill="url(#spark)" />
                    <path d={line} fill="none" stroke="#0b1a2c" strokeWidth="2" />
                    <path d={line2} fill="none" stroke="#1a56db" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8" />
                    {pts.map(([x,y],i) => <circle key={i} cx={x} cy={y} r="2.5" fill="#fff" stroke="#0b1a2c" strokeWidth="1.5" />)}
                  </>);
                })()}
              </svg>
              <div style={{ display:'flex', justifyContent:'space-between', fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:8, textTransform:'uppercase' }}>
                {['w1','w2','w3','w4','w5','w6','w7','w8','w9','w10','w11','w12'].map(w => <span key={w}>{w}</span>)}
              </div>
            </div>

            {/* Sport side */}
            <div className="cd-card" style={{ padding:20 }}>
              <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:16 }}>
                <div>
                  <div style={{ fontSize:14, fontWeight:600 }}>กีฬาสี · Live</div>
                  <div className="cd-label" style={{ marginTop:2 }}>Day 2 of 3</div>
                </div>
                <span className="cd-chip cd-chip-danger"><span className="cd-dot" style={{ background:'var(--cd-danger)' }}></span>LIVE</span>
              </div>
              {SPORT_COLORS.map((c,i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:10, marginBottom: i<3?12:0 }}>
                  <div style={{ width:16, fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>#{i+1}</div>
                  <div style={{ width:4, height:22, borderRadius:2, background:c.hex }}></div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:3 }}>
                      <span style={{ fontSize:11.5, fontWeight:500 }}>{c.th}</span>
                      <span style={{ fontSize:12, fontFamily:'var(--cd-mono)', fontWeight:600 }}>{c.score}</span>
                    </div>
                    <div className="cd-score-bar"><div className="cd-score-bar-fill" style={{ background:c.hex, width:`${c.score/245*100}%` }}></div></div>
                  </div>
                </div>
              ))}
              <button className="cd-btn cd-btn-secondary" style={{ width:'100%', marginTop:16 }}><MI name="edit" size={14} weight={300} />บันทึกผลการแข่งขัน</button>
            </div>
          </div>

          {/* Lower grid */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
            {/* Today bookings */}
            <div className="cd-card" style={{ overflow:'hidden' }}>
              <div style={{ padding:'16px 20px', display:'flex', alignItems:'baseline', justifyContent:'space-between', borderBottom:'1px solid var(--cd-line-2)' }}>
                <div>
                  <div style={{ fontSize:14, fontWeight:600 }}>การจองห้องวันนี้</div>
                  <div className="cd-label" style={{ marginTop:2 }}>Today's bookings</div>
                </div>
                <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ color:'var(--cd-primary)', padding:0 }}>ดูทั้งหมด →</button>
              </div>
              <table className="cd-table">
                <thead><tr><th>Room</th><th>User</th><th>Time</th><th style={{ textAlign:'right' }}>Status</th></tr></thead>
                <tbody>
                  {BOOKINGS.map((b,i) => (
                    <tr key={i}>
                      <td style={{ fontWeight:500, color:'var(--cd-ink)' }}>{b.room}</td>
                      <td style={{ fontFamily:'var(--cd-mono)', fontSize:11.5 }}>{b.user}</td>
                      <td style={{ fontFamily:'var(--cd-mono)', fontSize:11.5 }}>{b.start}–{b.end}</td>
                      <td style={{ textAlign:'right' }}>
                        <span className={b.status==='confirmed'?'cd-chip cd-chip-success':b.status==='pending'?'cd-chip cd-chip-warn':'cd-chip'}>
                          {b.status==='confirmed'?'ยืนยัน':b.status==='pending'?'รอ':'ตรวจสอบ'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Upcoming events */}
            <div className="cd-card" style={{ padding:20 }}>
              <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:16 }}>
                <div>
                  <div style={{ fontSize:14, fontWeight:600 }}>กิจกรรมที่จะมาถึง</div>
                  <div className="cd-label" style={{ marginTop:2 }}>Upcoming · this month</div>
                </div>
                <button className="cd-btn cd-btn-primary cd-btn-sm"><MI name="add" size={14} />New</button>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {EVENTS.slice(0,5).map((e,i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'10px 12px', borderRadius:10, background:'var(--cd-surface-2)', border:'1px solid var(--cd-line)' }}>
                    <div style={{ width:36, textAlign:'center' }}>
                      <div className="cd-label" style={{ fontSize:9 }}>APR</div>
                      <div style={{ fontSize:16, fontWeight:600, letterSpacing:-0.4, fontFamily:'var(--cd-mono)', lineHeight:1 }}>{e.day}</div>
                    </div>
                    <MI name={e.icon} size={16} weight={300} style={{ color:'var(--cd-ink-3)' }} />
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontSize:12.5, fontWeight:500 }}>{e.title}</div>
                      <div style={{ fontSize:10.5, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>{e.en}</div>
                    </div>
                    <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding:'4px 6px' }}><MI name="more_horiz" size={14} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════ CALENDAR ADMIN ════════
function AdminCalendar() {
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const firstDay = 3;
  const daysIn = 30;
  const today = 22;
  const eventMap = {};
  EVENTS.forEach(e => eventMap[e.day] = e);

  const cells = [];
  for (let i=0; i<firstDay; i++) cells.push(null);
  for (let d=1; d<=daysIn; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="cd-admin">
      <AdminSide active="calendar" />
      <div className="cd-admin-main">
        <AdminTopBar title="ปฏิทินกิจกรรม" subtitle="Calendar management" actions={
          <button className="cd-btn cd-btn-primary cd-btn-sm"><MI name="add" size={14} />เพิ่มกิจกรรม</button>
        } />
        <div className="cd-admin-content">
          {/* Toolbar */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <button className="cd-btn cd-btn-secondary cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="chevron_left" size={16} /></button>
              <div>
                <div style={{ fontSize:18, fontWeight:600, letterSpacing:-0.3 }}>เมษายน 2569</div>
                <div className="cd-label" style={{ marginTop:2 }}>April 2026</div>
              </div>
              <button className="cd-btn cd-btn-secondary cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="chevron_right" size={16} /></button>
              <button className="cd-btn cd-btn-ghost cd-btn-sm">Today</button>
            </div>
            <div style={{ display:'flex', gap:4, background:'var(--cd-surface-2)', padding:3, borderRadius:8, border:'1px solid var(--cd-line)' }}>
              <button className="cd-btn cd-btn-sm" style={{ background:'#fff', color:'var(--cd-ink)', boxShadow:'var(--cd-shadow-xs)' }}>Month</button>
              <button className="cd-btn cd-btn-sm" style={{ background:'transparent', color:'var(--cd-ink-4)' }}>Week</button>
              <button className="cd-btn cd-btn-sm" style={{ background:'transparent', color:'var(--cd-ink-4)' }}>List</button>
            </div>
          </div>

          {/* Calendar large */}
          <div className="cd-card" style={{ padding:0, overflow:'hidden', marginBottom:18 }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(7, 1fr)', borderBottom:'1px solid var(--cd-line)' }}>
              {days.map((d,i) => (
                <div key={i} className="cd-label" style={{ padding:'10px 14px', textAlign:'left', borderRight: i<6?'1px solid var(--cd-line-2)':'none', fontSize:10 }}>{d}</div>
              ))}
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(7, 1fr)' }}>
              {cells.map((d,i) => {
                const ev = d && eventMap[d];
                const isToday = d === today;
                const col = i % 7;
                const row = Math.floor(i / 7);
                return (
                  <div key={i} style={{
                    minHeight: 96, padding:'8px 10px',
                    borderRight: col<6?'1px solid var(--cd-line-2)':'none',
                    borderBottom: row < Math.floor((cells.length-1)/7) ? '1px solid var(--cd-line-2)' : 'none',
                    background: d===null ? 'var(--cd-surface-2)' : '#fff',
                    position:'relative'
                  }}>
                    {d && (
                      <>
                        <div style={{
                          display:'inline-flex', alignItems:'center', justifyContent:'center',
                          width: isToday?22:'auto', height: isToday?22:'auto',
                          borderRadius: isToday?'50%':0,
                          background: isToday?'var(--cd-ink)':'transparent',
                          color: isToday?'#fff':'var(--cd-ink)',
                          fontSize:12, fontWeight: isToday?600:500, fontFamily:'var(--cd-mono)',
                          padding: isToday?0:'0 4px'
                        }}>{d}</div>
                        {ev && (
                          <div style={{ marginTop:6, padding:'4px 6px', borderRadius:5, background:'var(--cd-primary-soft)', borderLeft:'2px solid var(--cd-primary)' }}>
                            <div style={{ fontSize:10.5, fontWeight:500, color:'var(--cd-primary-2)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{ev.title}</div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Event list */}
          <div className="cd-card" style={{ overflow:'hidden' }}>
            <div style={{ padding:'14px 20px', borderBottom:'1px solid var(--cd-line-2)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <div style={{ fontSize:14, fontWeight:600 }}>รายการกิจกรรม</div>
                <div className="cd-label" style={{ marginTop:2 }}>All events · {EVENTS.length}</div>
              </div>
              <div style={{ display:'flex', gap:6 }}>
                <button className="cd-btn cd-btn-secondary cd-btn-sm"><MI name="filter_list" size={14} />Filter</button>
                <button className="cd-btn cd-btn-secondary cd-btn-sm"><MI name="download" size={14} />Export</button>
              </div>
            </div>
            <table className="cd-table">
              <thead><tr><th>Date</th><th>Event</th><th>Category</th><th>Attendees</th><th style={{ textAlign:'right' }}>Actions</th></tr></thead>
              <tbody>
                {EVENTS.map((e,i) => (
                  <tr key={i}>
                    <td style={{ fontFamily:'var(--cd-mono)', fontSize:11.5 }}>{e.date}</td>
                    <td>
                      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                        <MI name={e.icon} size={14} weight={300} style={{ color:'var(--cd-ink-3)' }} />
                        <div>
                          <div style={{ fontWeight:500, color:'var(--cd-ink)' }}>{e.title}</div>
                          <div style={{ fontSize:11, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>{e.en}</div>
                        </div>
                      </div>
                    </td>
                    <td><span className="cd-chip">{e.cat}</span></td>
                    <td style={{ fontFamily:'var(--cd-mono)' }}>{(120 + i*37) % 300}</td>
                    <td style={{ textAlign:'right' }}>
                      <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding:'4px 6px' }}><MI name="edit" size={14} /></button>
                      <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding:'4px 6px' }}><MI name="delete" size={14} /></button>
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

// ════════ SPORT ADMIN ════════
function AdminSport() {
  return (
    <div className="cd-admin">
      <AdminSide active="sport" />
      <div className="cd-admin-main">
        <AdminTopBar title="จัดการกีฬาสี" subtitle="Sport Day · manage results" actions={
          <>
            <button className="cd-btn cd-btn-secondary cd-btn-sm"><MI name="publish" size={14} />Publish</button>
            <button className="cd-btn cd-btn-primary cd-btn-sm"><MI name="add" size={14} />บันทึกผล</button>
          </>
        } />
        <div className="cd-admin-content">
          {/* Team cards */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14, marginBottom:22 }}>
            {SPORT_COLORS.map((c,i) => (
              <div key={i} className="cd-card" style={{ padding:18, position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:4, background:c.hex }}></div>
                <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginTop:4 }}>
                  <div>
                    <div className="cd-label">#{i+1}</div>
                    <div style={{ fontSize:15, fontWeight:600, marginTop:2 }}>{c.th}</div>
                    <div style={{ fontSize:11, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>{c.en} team</div>
                  </div>
                  <div style={{ width:24, height:24, borderRadius:6, background:c.hex }}></div>
                </div>
                <div style={{ marginTop:16 }}>
                  <div className="cd-label" style={{ fontSize:10 }}>Total points</div>
                  <input value={c.score} readOnly style={{ width:'100%', fontSize:26, fontWeight:600, letterSpacing:-0.6, fontFamily:'var(--cd-mono)', padding:'6px 10px', border:'1px solid var(--cd-line)', borderRadius:8, background:'var(--cd-surface-2)', marginTop:4, color:'var(--cd-ink)' }} />
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop:10, fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', textTransform:'uppercase' }}>
                  <span>🥇 {c.wins} wins</span>
                  <span>+{i===0?12:i===1?8:i===2?5:3} today</span>
                </div>
              </div>
            ))}
          </div>

          {/* Results editor */}
          <div className="cd-card" style={{ overflow:'hidden' }}>
            <div style={{ padding:'14px 20px', borderBottom:'1px solid var(--cd-line-2)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <div style={{ fontSize:14, fontWeight:600 }}>ผลการแข่งขัน</div>
                <div className="cd-label" style={{ marginTop:2 }}>Competition results · day 2</div>
              </div>
              <div style={{ display:'flex', gap:6 }}>
                <button className="cd-btn cd-btn-secondary cd-btn-sm">All days</button>
                <button className="cd-btn cd-btn-sm" style={{ background:'var(--cd-ink)', color:'#fff' }}>Day 2</button>
              </div>
            </div>
            <table className="cd-table">
              <thead><tr><th>Event</th><th>Category</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th style={{ textAlign:'right' }}>Actions</th></tr></thead>
              <tbody>
                {SPORT_EVENTS.map((ev,i) => (
                  <tr key={i}>
                    <td style={{ fontWeight:500, color:'var(--cd-ink)' }}>
                      {ev.sport}
                      <div style={{ fontSize:10.5, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>{ev.en}</div>
                    </td>
                    <td><span className="cd-chip">{ev.cat}</span></td>
                    {ev.results.map((r,ri) => (
                      <td key={ri}>
                        <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                          <span style={{ width:10, height:10, borderRadius:'50%', background:COLOR_MAP[r] }}></span>
                          <span style={{ fontSize:12 }}>{r}</span>
                        </div>
                      </td>
                    ))}
                    <td style={{ textAlign:'right' }}>
                      <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding:'4px 6px' }}><MI name="edit" size={14} /></button>
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

// ════════ BOOKING ADMIN ════════
function AdminBooking() {
  const times = ['08','09','10','11','12','13','14','15','16','17'];
  const rooms = [
    { name:'Practice Room 1', en:'M1', blocks: [[1,3],[6,8]] },
    { name:'Practice Room 2', en:'M2', blocks: [[2,4]] },
    { name:'Vocal Booth',     en:'M3', blocks: [[0,2],[5,7]] },
    { name:'Studio A',        en:'M4', blocks: [[3,6]] },
    { name:'ห้องประชุม A',     en:'A1', blocks: [[1,2],[7,9]] },
    { name:'ห้องประชุม B',     en:'A2', blocks: [[4,8]] },
    { name:'หอประชุมใหญ่',     en:'A3', blocks: [[5,9]] },
  ];
  return (
    <div className="cd-admin">
      <AdminSide active="booking" />
      <div className="cd-admin-main">
        <AdminTopBar title="จัดการการจองห้อง" subtitle="Room bookings · timeline view" actions={
          <>
            <button className="cd-btn cd-btn-secondary cd-btn-sm">วันนี้ · Today</button>
            <button className="cd-btn cd-btn-primary cd-btn-sm"><MI name="add" size={14} />จองใหม่</button>
          </>
        } />
        <div className="cd-admin-content">
          {/* Summary */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:14, marginBottom:18 }}>
            {[
              {l:'Total bookings',t:'การจองทั้งหมด',v:'24',d:'today'},
              {l:'Pending approval',t:'รอยืนยัน',v:'3',d:'action needed'},
              {l:'Utilization',t:'อัตราการใช้',v:'68%',d:'of 10hr window'},
            ].map((x,i) => (
              <div key={i} className="cd-kpi">
                <div className="cd-kpi-label">{x.l}</div>
                <div className="cd-kpi-value">{x.v}</div>
                <div style={{ fontSize:11, color:'var(--cd-ink-3)', marginTop:2 }}>{x.t} <span className="cd-label" style={{ marginLeft:4, fontSize:9 }}>{x.d}</span></div>
              </div>
            ))}
          </div>

          {/* Timeline grid */}
          <div className="cd-card" style={{ overflow:'hidden' }}>
            <div style={{ padding:'14px 20px', borderBottom:'1px solid var(--cd-line-2)' }}>
              <div style={{ fontSize:14, fontWeight:600 }}>ตารางการจอง · 22 Apr 2026</div>
              <div className="cd-label" style={{ marginTop:2 }}>Timeline · wed</div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'180px 1fr', borderBottom:'1px solid var(--cd-line-2)' }}>
              <div style={{ padding:'10px 14px', background:'var(--cd-surface-2)', borderRight:'1px solid var(--cd-line)' }}>
                <span className="cd-label" style={{ fontSize:10 }}>Room</span>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:`repeat(${times.length}, 1fr)`, background:'var(--cd-surface-2)' }}>
                {times.map((t,i) => (
                  <div key={i} className="cd-label" style={{ padding:'10px 0', textAlign:'center', borderLeft: i>0?'1px solid var(--cd-line-2)':'none', fontSize:10 }}>{t}:00</div>
                ))}
              </div>
            </div>
            {rooms.map((r,ri) => (
              <div key={ri} style={{ display:'grid', gridTemplateColumns:'180px 1fr', borderBottom: ri<rooms.length-1?'1px solid var(--cd-line-2)':'none' }}>
                <div style={{ padding:'14px', borderRight:'1px solid var(--cd-line)', display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:28, height:28, borderRadius:6, background:'var(--cd-surface-3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:600, fontFamily:'var(--cd-mono)' }}>{r.en}</div>
                  <div>
                    <div style={{ fontSize:12, fontWeight:500 }}>{r.name}</div>
                  </div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:`repeat(${times.length}, 1fr)`, position:'relative', height:54 }}>
                  {times.map((_,i) => (
                    <div key={i} style={{ borderLeft: i>0?'1px solid var(--cd-line-2)':'none' }}></div>
                  ))}
                  {r.blocks.map((b,bi) => (
                    <div key={bi} style={{
                      position:'absolute',
                      left:`${(b[0]/times.length)*100}%`,
                      width:`${((b[1]-b[0])/times.length)*100}%`,
                      top:10, bottom:10,
                      background: bi%2? 'var(--cd-primary-soft)' : 'var(--cd-ink)',
                      color: bi%2? 'var(--cd-primary-2)' : '#fff',
                      borderRadius:5, fontSize:10.5, fontWeight:500,
                      display:'flex', alignItems:'center', padding:'0 8px',
                      borderLeft: bi%2?'2px solid var(--cd-primary)':'none',
                      fontFamily:'var(--cd-mono)'
                    }}>
                      {times[b[0]]}:00–{times[b[1]]}:00
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AdminOverview, AdminCalendar, AdminSport, AdminBooking, AdminSide, AdminTopBar });
