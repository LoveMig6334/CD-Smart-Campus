// ============ MOBILE SCREENS ============

const MI = ({ name, size=18, weight=400, fill=0, style }) => (
  <span className="material-symbols-outlined" style={{
    fontSize: size,
    fontVariationSettings: `'FILL' ${fill},'wght' ${weight},'GRAD' 0,'opsz' 24`,
    ...style
  }}>{name}</span>
);

const Bi = ({ th, en, size=14, weight=500, color='var(--cd-ink)', enSize, style }) => (
  <div className="cd-bi" style={{ ...style }}>
    <span style={{ fontSize: size, fontWeight: weight, color, letterSpacing: -0.2, display: 'block' }}>{th}</span>
    {en && <span className="cd-bi-en" style={{ fontSize: enSize || Math.round(size*0.68) }}>{en}</span>}
  </div>
);

function StatusBar() {
  return (
    <div className="cd-status">
      <span>9:41</span>
      <div className="cd-status-r">
        <MI name="network_cell" size={15} />
        <MI name="wifi" size={15} />
        <MI name="battery_full" size={16} />
      </div>
    </div>
  );
}

function BottomNav({ active='home', onNav=()=>{} }) {
  const items = [
    { id:'home',     th:'หน้าหลัก', en:'Home',    icon:'home' },
    { id:'calendar', th:'ปฏิทิน',   en:'Calendar', icon:'calendar_month' },
    { id:'booking',  th:'จองห้อง',  en:'Book',    icon:'meeting_room' },
    { id:'lost',     th:'ของหาย',   en:'Lost',    icon:'search' },
    { id:'profile',  th:'โปรไฟล์',  en:'Profile', icon:'person' },
  ];
  return (
    <nav className="cd-bnav">
      {items.map(it => {
        const a = it.id === active;
        return (
          <button key={it.id} className={`cd-bnav-item ${a?'active':''}`} onClick={()=>onNav(it.id)}>
            <MI name={it.icon} size={22} weight={a?500:300} fill={a?1:0} />
            <span className="cd-bnav-label" style={{ marginTop: 3, color: a?'var(--cd-ink)':'var(--cd-ink-4)' }}>{it.th}</span>
          </button>
        );
      })}
    </nav>
  );
}

// ───── LOGO ─────
function Wordmark({ size=14 }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
      <div style={{
        width: size*2.2, height: size*2.2, borderRadius: 8,
        background: 'var(--cd-ink)', color:'#fff',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontWeight: 700, fontSize: size*0.85, letterSpacing: -0.5, fontFamily: 'var(--cd-mono)'
      }}>CD</div>
      <div style={{ lineHeight: 1.1 }}>
        <div style={{ fontSize: size, fontWeight: 600, letterSpacing: -0.3, color:'var(--cd-ink)' }}>Smart Campus</div>
        <div style={{ fontSize: size*0.64, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', textTransform:'uppercase', letterSpacing:1, marginTop:1 }}>Chitralada · CDS</div>
      </div>
    </div>
  );
}

// ═════════ 1. HOME ═════════
function HomeScreen() {
  const grid = [
    { id:'calendar', th:'ปฏิทิน',   en:'Calendar',  icon:'calendar_month' },
    { id:'sport',    th:'กีฬาสี',   en:'Sport Day', icon:'emoji_events' },
    { id:'ports',    th:'Portfolio',en:'Seniors',   icon:'work' },
    { id:'lost',     th:'ของหาย',   en:'Lost&Found',icon:'search' },
    { id:'book',     th:'จองห้อง',  en:'Booking',   icon:'meeting_room' },
    { id:'lunch',    th:'เมนูอาหาร',en:'Lunch',     icon:'restaurant' },
    { id:'music',    th:'Music Day',en:'Concert',   icon:'graphic_eq' },
    { id:'more',     th:'ทั้งหมด',  en:'More',      icon:'apps' },
  ];
  const up = EVENTS.slice(0, 3);

  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner">
        {/* App bar */}
        <div style={{ padding:'6px 20px 18px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <Wordmark size={13} />
          <div style={{ display:'flex', gap:6 }}>
            <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:34, height:34, padding:0 }}><MI name="notifications" size={18} weight={300} /></button>
            <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:34, height:34, padding:0, position:'relative' }}>
              <div style={{ width:24, height:24, borderRadius:'50%', background:'var(--cd-surface-3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:600, color:'var(--cd-ink)', fontFamily:'var(--cd-mono)' }}>น</div>
            </button>
          </div>
        </div>

        {/* Hero greeting */}
        <div style={{ padding:'0 20px 22px' }}>
          <div className="cd-label" style={{ marginBottom:8 }}>พุธ · 22 เมษายน 2569</div>
          <h1 style={{ fontSize:26, fontWeight:600, color:'var(--cd-ink)', letterSpacing:-0.8, lineHeight:1.2 }}>
            สวัสดีตอนเช้า, <span style={{ color:'var(--cd-primary)' }}>ณภัทร</span>
          </h1>
          <p style={{ fontSize:12, color:'var(--cd-ink-4)', marginTop:4, fontFamily:'var(--cd-mono)', textTransform:'uppercase', letterSpacing:0.8 }}>Good morning · term 1 / 2569</p>
        </div>

        {/* Feature — today's event */}
        <div style={{ padding:'0 20px 22px' }}>
          <div className="cd-card" style={{ padding:0, overflow:'hidden' }}>
            <div style={{ display:'flex', alignItems:'stretch' }}>
              <div style={{ flex:1, padding:'16px 16px 16px 18px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:8 }}>
                  <span className="cd-dot" style={{ background:'var(--cd-danger)' }}></span>
                  <span className="cd-label" style={{ color:'var(--cd-danger)' }}>วันนี้ · Today</span>
                </div>
                <div style={{ fontSize:16, fontWeight:600, letterSpacing:-0.3, color:'var(--cd-ink)' }}>Earth Day Activity</div>
                <div style={{ fontSize:12, color:'var(--cd-ink-4)', marginTop:2 }}>08:30 · สวนหย่อมตึก 4</div>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginTop:14 }}>
                  <button className="cd-btn cd-btn-primary cd-btn-sm">ดูรายละเอียด</button>
                  <span style={{ fontSize:11, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>124 เข้าร่วม</span>
                </div>
              </div>
              <div className="cd-ph" style={{ width: 92, borderRadius:0, border:'none', borderLeft:'1px solid var(--cd-line)' }}>
                <MI name="eco" size={28} weight={300} style={{ color:'var(--cd-success)' }} />
                <span>poster</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div style={{ padding:'0 20px 20px' }}>
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:12 }}>
            <div>
              <div style={{ fontSize:14, fontWeight:600, color:'var(--cd-ink)' }}>เมนูลัด</div>
              <div className="cd-label" style={{ marginTop:2 }}>Quick access</div>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:8 }}>
            {grid.map(g => (
              <button key={g.id} className="cd-card cd-card-hov" style={{
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:6,
                padding:'14px 4px', cursor:'pointer', background:'#fff', border:'1px solid var(--cd-line)'
              }}>
                <MI name={g.icon} size={20} weight={300} style={{ color:'var(--cd-ink-2)' }} />
                <span style={{ fontSize:10, color:'var(--cd-ink)', fontWeight:500 }}>{g.th}</span>
                <span style={{ fontSize:8, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', textTransform:'uppercase', letterSpacing:0.4, marginTop:-4 }}>{g.en}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div style={{ padding:'0 20px 20px' }}>
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:12 }}>
            <div>
              <div style={{ fontSize:14, fontWeight:600, color:'var(--cd-ink)' }}>กิจกรรมที่จะมาถึง</div>
              <div className="cd-label" style={{ marginTop:2 }}>Upcoming events</div>
            </div>
            <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding:0, color:'var(--cd-primary)' }}>ดูทั้งหมด →</button>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {up.map((e,i) => (
              <div key={i} className="cd-card" style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 14px' }}>
                <div style={{ width:40, textAlign:'center', borderRight:'1px solid var(--cd-line)', paddingRight:10 }}>
                  <div className="cd-label" style={{ fontSize:9 }}>APR</div>
                  <div style={{ fontSize:18, fontWeight:600, color:'var(--cd-ink)', letterSpacing:-0.5, fontFamily:'var(--cd-mono)' }}>{e.day}</div>
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontSize:13, fontWeight:500, color:'var(--cd-ink)' }}>{e.title}</div>
                  <div style={{ fontSize:11, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:1 }}>{e.en}</div>
                </div>
                <MI name="chevron_right" size={18} weight={300} style={{ color:'var(--cd-ink-4)' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Sport preview */}
        <div style={{ padding:'0 20px 20px' }}>
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:12 }}>
            <div>
              <div style={{ fontSize:14, fontWeight:600, color:'var(--cd-ink)' }}>คะแนนกีฬาสี</div>
              <div className="cd-label" style={{ marginTop:2 }}>Sport Day · live</div>
            </div>
            <span className="cd-chip cd-chip-danger"><span className="cd-dot" style={{ background:'var(--cd-danger)' }}></span>LIVE</span>
          </div>
          <div className="cd-card" style={{ padding:14 }}>
            {SPORT_COLORS.map((c,i) => {
              const max = SPORT_COLORS[0].score;
              return (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:10, marginBottom: i<3?10:0 }}>
                  <div style={{ width:14, textAlign:'center', fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>{i+1}</div>
                  <div style={{ width:8, height:24, borderRadius:2, background:c.hex }}></div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:3 }}>
                      <span style={{ fontSize:12, fontWeight:500 }}>{c.th}</span>
                      <span style={{ fontSize:12, fontWeight:600, fontFamily:'var(--cd-mono)', color:'var(--cd-ink)' }}>{c.score}</span>
                    </div>
                    <div className="cd-score-bar"><div className="cd-score-bar-fill" style={{ background:c.hex, width:`${c.score/max*100}%` }}></div></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
}

// ═════════ 2. CALENDAR ═════════
function CalendarScreen() {
  const days = ['อา','จ','อ','พ','พฤ','ศ','ส'];
  const firstDay = 3; // Apr 1 2026 = Wed
  const daysIn = 30;
  const today = 22;
  const eventDays = EVENTS.map(e => e.day);
  const cells = [];
  for (let i=0; i<firstDay; i++) cells.push(null);
  for (let d=1; d<=daysIn; d++) cells.push(d);

  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner">
        <div className="cd-appbar" style={{ paddingTop:12, paddingBottom:12 }}>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="arrow_back" size={18} /></button>
          <div style={{ flex:1 }}>
            <div className="cd-appbar-title">ปฏิทินกิจกรรม</div>
            <div className="cd-appbar-sub">Calendar · april 2569</div>
          </div>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="filter_list" size={18} /></button>
        </div>

        {/* Month header */}
        <div style={{ padding:'4px 20px 14px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontSize:20, fontWeight:600, letterSpacing:-0.5 }}>เมษายน</div>
            <div className="cd-label">April · 2569 B.E.</div>
          </div>
          <div style={{ display:'flex', gap:4 }}>
            <button className="cd-btn cd-btn-secondary cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="chevron_left" size={18} /></button>
            <button className="cd-btn cd-btn-secondary cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="chevron_right" size={18} /></button>
          </div>
        </div>

        {/* Calendar grid */}
        <div style={{ padding:'0 20px 20px' }}>
          <div className="cd-card" style={{ padding:12 }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:2, marginBottom:4 }}>
              {days.map((d,i) => <div key={i} style={{ textAlign:'center', fontSize:10, fontWeight:500, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', padding:4 }}>{d}</div>)}
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:2 }}>
              {cells.map((d,i) => {
                if (d === null) return <div key={i} />;
                const hasEv = eventDays.includes(d);
                const isToday = d === today;
                return (
                  <div key={i} style={{
                    aspectRatio:'1', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                    borderRadius: 8, fontSize:12, fontWeight: isToday?600:400,
                    background: isToday?'var(--cd-ink)':(hasEv?'var(--cd-primary-soft)':'transparent'),
                    color: isToday?'#fff':(hasEv?'var(--cd-primary-2)':'var(--cd-ink-2)'),
                    fontFamily:'var(--cd-mono)', position:'relative', cursor:'pointer'
                  }}>
                    {d}
                    {hasEv && !isToday && <div style={{ width:4, height:4, borderRadius:'50%', background:'var(--cd-primary)', marginTop:2 }}></div>}
                    {isToday && hasEv && <div style={{ width:4, height:4, borderRadius:'50%', background:'#fff', marginTop:2 }}></div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Event list */}
        <div style={{ padding:'0 20px 20px' }}>
          <div style={{ fontSize:13, fontWeight:600, marginBottom:10 }}>เดือนเมษายน <span className="cd-label" style={{ marginLeft:6 }}>{EVENTS.length} events</span></div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {EVENTS.map((e,i) => (
              <div key={i} className="cd-card" style={{ display:'flex', alignItems:'stretch', overflow:'hidden' }}>
                <div style={{ width:56, padding:'12px 0', textAlign:'center', background:'var(--cd-surface-2)', borderRight:'1px solid var(--cd-line)' }}>
                  <div className="cd-label" style={{ fontSize:9 }}>APR</div>
                  <div style={{ fontSize:20, fontWeight:600, letterSpacing:-0.6, fontFamily:'var(--cd-mono)', lineHeight:1 }}>{e.day}</div>
                </div>
                <div style={{ flex:1, padding:'11px 14px', display:'flex', alignItems:'center', gap:10 }}>
                  <MI name={e.icon} size={18} weight={300} style={{ color:'var(--cd-ink-2)' }} />
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:13, fontWeight:500, color:'var(--cd-ink)' }}>{e.title}</div>
                    <div style={{ fontSize:11, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:1 }}>{e.en}</div>
                  </div>
                  <span className="cd-chip" style={{ fontSize:10 }}>{e.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="calendar" />
    </div>
  );
}

// ═════════ 3. SPORT ═════════
function SportScreen() {
  const max = SPORT_COLORS[0].score;
  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner">
        <div className="cd-appbar" style={{ paddingTop:12, paddingBottom:12 }}>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="arrow_back" size={18} /></button>
          <div style={{ flex:1 }}>
            <div className="cd-appbar-title">กีฬาสี 2569</div>
            <div className="cd-appbar-sub">Sport Day · day 2 of 3</div>
          </div>
          <span className="cd-chip cd-chip-danger"><span className="cd-dot" style={{ background:'var(--cd-danger)' }}></span>LIVE</span>
        </div>

        {/* Hero scoreboard */}
        <div style={{ padding:'4px 20px 20px' }}>
          <div className="cd-card" style={{ padding:18, background:'var(--cd-ink)', border:'none' }}>
            <div className="cd-label" style={{ color:'rgba(255,255,255,.5)', marginBottom:14 }}>Total points · standings</div>
            {SPORT_COLORS.map((c,i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:12, marginBottom: i<3?14:0 }}>
                <div style={{ width:22, fontSize:11, color:'rgba(255,255,255,.5)', fontFamily:'var(--cd-mono)' }}>#{i+1}</div>
                <div style={{ width:4, height:32, borderRadius:2, background:c.hex, flexShrink:0 }}></div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:4 }}>
                    <div>
                      <span style={{ fontSize:13, fontWeight:500, color:'#fff' }}>{c.th}</span>
                      <span style={{ fontSize:10, color:'rgba(255,255,255,.45)', fontFamily:'var(--cd-mono)', marginLeft:6, textTransform:'uppercase' }}>{c.en}</span>
                    </div>
                    <span style={{ fontSize:20, fontWeight:600, fontFamily:'var(--cd-mono)', color:'#fff', letterSpacing:-0.5 }}>{c.score}</span>
                  </div>
                  <div style={{ height:3, background:'rgba(255,255,255,.1)', borderRadius:2, overflow:'hidden' }}>
                    <div style={{ height:'100%', width:`${c.score/max*100}%`, background:c.hex, borderRadius:2 }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div style={{ padding:'0 20px 20px' }}>
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:12 }}>
            <div>
              <div style={{ fontSize:14, fontWeight:600 }}>ผลการแข่งขัน</div>
              <div className="cd-label" style={{ marginTop:2 }}>Results · today</div>
            </div>
            <div style={{ display:'flex', gap:4 }}>
              <button className="cd-btn cd-btn-sm" style={{ background:'var(--cd-ink)', color:'#fff' }}>All</button>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">Track</button>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">Team</button>
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {SPORT_EVENTS.map((ev,i) => (
              <div key={i} className="cd-card" style={{ padding:14 }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
                  <div>
                    <div style={{ fontSize:13, fontWeight:500 }}>{ev.sport}</div>
                    <div style={{ fontSize:11, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:1 }}>{ev.en}</div>
                  </div>
                  <span className="cd-chip">{ev.cat}</span>
                </div>
                <div style={{ display:'flex', gap:6 }}>
                  {ev.results.map((r, ri) => (
                    <div key={ri} style={{ flex:1, padding:'6px 4px', borderRadius:8, background:'var(--cd-surface-2)', border:'1px solid var(--cd-line)', textAlign:'center' }}>
                      <div style={{ fontSize:9, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', fontWeight:600 }}>{ri+1}</div>
                      <div style={{ width:14, height:14, borderRadius:'50%', background:COLOR_MAP[r], margin:'4px auto 2px' }}></div>
                      <div style={{ fontSize:9, color:'var(--cd-ink-2)' }}>{r}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
}

// ═════════ 4. LUNCH ═════════
function LunchScreen() {
  const todayIdx = 2; // Wed
  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner">
        <div className="cd-appbar" style={{ paddingTop:12, paddingBottom:12 }}>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="arrow_back" size={18} /></button>
          <div style={{ flex:1 }}>
            <div className="cd-appbar-title">เมนูอาหารกลางวัน</div>
            <div className="cd-appbar-sub">Lunch menu · this week</div>
          </div>
        </div>

        {/* Today feature */}
        <div style={{ padding:'4px 20px 18px' }}>
          <div className="cd-card" style={{ overflow:'hidden' }}>
            <div className="cd-ph" style={{ height:140, borderRadius:0, border:'none', borderBottom:'1px solid var(--cd-line)' }}>
              <MI name="image" size={28} weight={300} />
              <span>today's meal · photo</span>
            </div>
            <div style={{ padding:'14px 16px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                <span className="cd-chip cd-chip-ink">วันนี้ · TODAY</span>
                <span className="cd-label">พุธ · wed</span>
              </div>
              <div style={{ fontSize:16, fontWeight:600, letterSpacing:-0.3 }}>{LUNCH_MENU[todayIdx].menu}</div>
              <div style={{ fontSize:12, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:2 }}>{LUNCH_MENU[todayIdx].menuEn}</div>
              <div style={{ display:'flex', alignItems:'center', gap:14, marginTop:12, paddingTop:12, borderTop:'1px dashed var(--cd-line)' }}>
                <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                  <MI name="icecream" size={15} weight={300} style={{ color:'var(--cd-ink-4)' }} />
                  <span style={{ fontSize:12, color:'var(--cd-ink-2)' }}>{LUNCH_MENU[todayIdx].dessert}</span>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                  <MI name="schedule" size={15} weight={300} style={{ color:'var(--cd-ink-4)' }} />
                  <span style={{ fontSize:12, color:'var(--cd-ink-2)', fontFamily:'var(--cd-mono)' }}>11:30–12:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding:'0 20px 20px' }}>
          <div style={{ fontSize:13, fontWeight:600, marginBottom:10 }}>ทั้งสัปดาห์ <span className="cd-label" style={{ marginLeft:6 }}>Week</span></div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {LUNCH_MENU.map((m,i) => (
              <div key={i} className="cd-card" style={{ padding:12, display:'flex', alignItems:'center', gap:12, opacity: i<todayIdx?0.55:1 }}>
                <div style={{ width:44, textAlign:'center' }}>
                  <div style={{ fontSize:13, fontWeight:600, color: i===todayIdx?'var(--cd-primary)':'var(--cd-ink)' }}>{m.day}</div>
                  <div className="cd-label" style={{ fontSize:9, color: i===todayIdx?'var(--cd-primary)':'var(--cd-ink-4)' }}>{m.en}</div>
                </div>
                <div style={{ width:1, height:32, background:'var(--cd-line)' }}></div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontSize:12.5, color:'var(--cd-ink)', fontWeight: i===todayIdx?500:400 }}>{m.menu}</div>
                  <div style={{ fontSize:10.5, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:1 }}>{m.menuEn} · {m.dessert}</div>
                </div>
                {i < todayIdx && <MI name="check" size={16} weight={300} style={{ color:'var(--cd-ink-4)' }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
}

// ═════════ 5. BOOKING ═════════
function BookingScreen() {
  // April 2026 — 1st is Wednesday (index 3 when week starts Sunday)
  const [selectedDay, setSelectedDay] = React.useState(22);
  const [selectedPeriod, setSelectedPeriod] = React.useState('midday');
  const [selectedRoom, setSelectedRoom] = React.useState('M3');
  const monthLen = 30;
  const firstDow = 3; // Wed
  const today = 22;
  const fullyBooked = [4, 11, 18, 25]; // Saturdays example
  const weekHeads = ['อา','จ','อ','พ','พฤ','ศ','ส'];
  // Build 6-row grid
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= monthLen; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const periods = [
    { id:'morning', th:'เช้า',  en:'Morning', time:'08:00 – 11:00', icon:'wb_twilight' },
    { id:'midday',  th:'กลางวัน',en:'Midday', time:'11:30 – 14:30', icon:'light_mode' },
    { id:'evening', th:'เย็น',  en:'Evening', time:'15:00 – 18:00', icon:'nights_stay' },
  ];

  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner">
        <div className="cd-appbar" style={{ paddingTop:12, paddingBottom:12 }}>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="arrow_back" size={18} /></button>
          <div style={{ flex:1 }}>
            <div className="cd-appbar-title">จองห้อง</div>
            <div className="cd-appbar-sub">Room booking</div>
          </div>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="history" size={18} /></button>
        </div>

        {/* Tabs */}
        <div style={{ padding:'4px 20px 14px' }}>
          <div style={{ display:'flex', background:'var(--cd-surface-3)', borderRadius:10, padding:3 }}>
            <button className="cd-btn cd-btn-sm" style={{ flex:1, background:'#fff', color:'var(--cd-ink)', boxShadow:'var(--cd-shadow-xs)' }}>
              <MI name="graphic_eq" size={14} weight={300} />ห้องดนตรี
            </button>
            <button className="cd-btn cd-btn-sm" style={{ flex:1, background:'transparent', color:'var(--cd-ink-4)' }}>
              <MI name="groups" size={14} weight={300} />ห้องประชุม
            </button>
          </div>
        </div>

        {/* Month calendar */}
        <div style={{ padding:'0 20px 16px' }}>
          <div className="cd-card" style={{ padding:14 }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
              <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:28, height:28, padding:0 }}><MI name="chevron_left" size={16} /></button>
              <div style={{ textAlign:'center' }}>
                <div style={{ fontSize:14, fontWeight:600, letterSpacing:-0.2 }}>เมษายน 2569</div>
                <div style={{ fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', textTransform:'uppercase', letterSpacing:0.8, marginTop:1 }}>April 2026</div>
              </div>
              <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:28, height:28, padding:0 }}><MI name="chevron_right" size={16} /></button>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:2, marginBottom:4 }}>
              {weekHeads.map((w,i) => (
                <div key={i} style={{ fontSize:9.5, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', textTransform:'uppercase', letterSpacing:0.4, textAlign:'center', padding:'4px 0' }}>{w}</div>
              ))}
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:2 }}>
              {cells.map((d, i) => {
                if (d == null) return <div key={i} style={{ height:34 }} />;
                const isSel = d === selectedDay;
                const isToday = d === today && !isSel;
                const isFull = fullyBooked.includes(d);
                const isPast = d < today;
                return (
                  <button
                    key={i}
                    onClick={() => !isFull && !isPast && setSelectedDay(d)}
                    disabled={isFull || isPast}
                    style={{
                      height:34, border:'none', cursor: (isFull||isPast)?'not-allowed':'pointer',
                      borderRadius:8, fontFamily:'var(--cd-mono)', fontWeight: isSel?700:500, fontSize:12,
                      background: isSel ? 'var(--cd-ink)' : 'transparent',
                      color: isSel ? '#fff' : (isPast ? 'var(--cd-ink-4)' : isFull ? 'var(--cd-ink-4)' : 'var(--cd-ink)'),
                      opacity: isPast ? 0.4 : 1,
                      position:'relative',
                      outline: isToday ? '1px solid var(--cd-line)' : 'none',
                      outlineOffset: -1,
                      textDecoration: isFull ? 'line-through' : 'none',
                    }}
                  >
                    {d}
                    {isFull && !isSel && (
                      <span style={{ position:'absolute', bottom:4, left:'50%', transform:'translateX(-50%)', width:3, height:3, borderRadius:'50%', background:'var(--cd-danger)' }} />
                    )}
                  </button>
                );
              })}
            </div>
            <div style={{ display:'flex', gap:12, marginTop:10, paddingTop:10, borderTop:'1px solid var(--cd-line-2)', fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>
              <span style={{ display:'inline-flex', alignItems:'center', gap:4 }}><span style={{ width:8, height:8, borderRadius:2, background:'var(--cd-ink)' }} /> Selected</span>
              <span style={{ display:'inline-flex', alignItems:'center', gap:4 }}><span style={{ width:3, height:3, borderRadius:'50%', background:'var(--cd-danger)' }} /> Full</span>
            </div>
          </div>
        </div>

        {/* Time period selector */}
        <div style={{ padding:'0 20px 14px' }}>
          <div className="cd-label" style={{ marginBottom:8, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <span>เลือกช่วงเวลา · Select time</span>
            <span style={{ color:'var(--cd-ink)', fontWeight:600 }}>{selectedDay} เม.ย.</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:6 }}>
            {periods.map(p => {
              const isSel = p.id === selectedPeriod;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPeriod(p.id)}
                  style={{
                    padding:'10px 6px', borderRadius:10, cursor:'pointer', border:'1px solid',
                    borderColor: isSel ? 'var(--cd-ink)' : 'var(--cd-line)',
                    background: isSel ? 'var(--cd-ink)' : '#fff',
                    color: isSel ? '#fff' : 'var(--cd-ink)',
                    display:'flex', flexDirection:'column', alignItems:'center', gap:3, fontFamily:'inherit',
                  }}
                >
                  <MI name={p.icon} size={18} weight={300} style={{ opacity: isSel ? 0.9 : 0.7 }} />
                  <div style={{ fontSize:12, fontWeight:600, letterSpacing:-0.1 }}>{p.th}</div>
                  <div style={{ fontSize:9, fontFamily:'var(--cd-mono)', opacity: isSel ? 0.75 : 0.6, letterSpacing:0.3 }}>{p.time}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Confirm CTA */}
        <div style={{ padding:'16px 20px 20px' }}>
          <button className="cd-btn cd-btn-primary" style={{ width:'100%', padding:'12px', fontSize:13 }}>
            <MI name="event_available" size={16} weight={400} />ยืนยันการจอง · Confirm booking
          </button>
        </div>
      </div>
      <BottomNav active="booking" />
    </div>
  );
}

// ═════════ 6. LOST & FOUND ═════════
function LostScreen() {
  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner">
        <div className="cd-appbar" style={{ paddingTop:12, paddingBottom:12 }}>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="arrow_back" size={18} /></button>
          <div style={{ flex:1 }}>
            <div className="cd-appbar-title">ของหาย / ของเจอ</div>
            <div className="cd-appbar-sub">Lost & found board</div>
          </div>
          <button className="cd-btn cd-btn-primary cd-btn-sm" style={{ padding:'7px 10px' }}><MI name="add" size={14} />แจ้ง</button>
        </div>

        {/* Search */}
        <div style={{ padding:'4px 20px 14px' }}>
          <div style={{ position:'relative' }}>
            <MI name="search" size={16} weight={300} style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:'var(--cd-ink-4)' }} />
            <input placeholder="ค้นหาของ · search item..." style={{
              width:'100%', padding:'10px 12px 10px 36px', border:'1px solid var(--cd-line)', borderRadius:10,
              fontFamily:'inherit', fontSize:12.5, background:'#fff', outline:'none'
            }} />
          </div>
        </div>

        {/* Filters */}
        <div style={{ padding:'0 20px 14px', display:'flex', gap:6 }}>
          <button className="cd-btn cd-btn-sm" style={{ background:'var(--cd-ink)', color:'#fff' }}>ทั้งหมด <span style={{ opacity:.5 }}>· 8</span></button>
          <button className="cd-btn cd-btn-secondary cd-btn-sm"><span className="cd-dot" style={{ background:'var(--cd-danger)' }}></span>หาย · 4</button>
          <button className="cd-btn cd-btn-secondary cd-btn-sm"><span className="cd-dot" style={{ background:'var(--cd-success)' }}></span>เจอ · 4</button>
        </div>

        {/* Grid */}
        <div style={{ padding:'0 20px 20px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
            {LOST_ITEMS.map((it,i) => (
              <div key={i} className="cd-card" style={{ overflow:'hidden', cursor:'pointer' }}>
                <div className="cd-ph" style={{ height:76, borderRadius:0, border:'none', borderBottom:'1px solid var(--cd-line)' }}>
                  <MI name={it.icon} size={22} weight={300} />
                </div>
                <div style={{ padding:10 }}>
                  <div style={{ fontSize:12, fontWeight:500, color:'var(--cd-ink)' }}>{it.title}</div>
                  <div style={{ fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:1 }}>{it.en}</div>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:8 }}>
                    <span style={{ fontSize:10, color:'var(--cd-ink-4)' }}>{it.loc}</span>
                    <span className={it.status==='lost'?'cd-chip cd-chip-danger':'cd-chip cd-chip-success'} style={{ fontSize:9 }}>
                      {it.status==='lost'?'หาย':'เจอ'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="lost" />
    </div>
  );
}

// ═════════ 7. PORTFOLIO ═════════
function PortfolioScreen() {
  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner">
        <div className="cd-appbar" style={{ paddingTop:12, paddingBottom:12 }}>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="arrow_back" size={18} /></button>
          <div style={{ flex:1 }}>
            <div className="cd-appbar-title">Portfolio รุ่นพี่</div>
            <div className="cd-appbar-sub">Senior projects · class of 2569</div>
          </div>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width:32, height:32, padding:0 }}><MI name="tune" size={18} /></button>
        </div>

        {/* Stats bar */}
        <div style={{ padding:'0 20px 16px', display:'flex', gap:8 }}>
          {[
            {n:'48',l:'Projects'},
            {n:'12',l:'Awards'},
            {n:'6',l:'Published'},
          ].map((s,i) => (
            <div key={i} className="cd-card" style={{ flex:1, padding:'10px 12px', textAlign:'center' }}>
              <div style={{ fontSize:20, fontWeight:600, letterSpacing:-0.5, fontFamily:'var(--cd-mono)' }}>{s.n}</div>
              <div className="cd-label" style={{ fontSize:9 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div style={{ padding:'0 20px 20px' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {PORTFOLIOS.slice(0,5).map((p,i) => (
              <div key={i} className="cd-card" style={{ overflow:'hidden' }}>
                <div style={{ display:'flex', alignItems:'stretch' }}>
                  <div className="cd-ph" style={{ width:88, borderRadius:0, border:'none', borderRight:'1px solid var(--cd-line)' }}>
                    <MI name="image" size={20} weight={300} />
                  </div>
                  <div style={{ flex:1, padding:'11px 12px' }}>
                    <div style={{ fontSize:12.5, fontWeight:600 }}>{p.title}</div>
                    <div style={{ fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:1 }}>{p.th}</div>
                    <div style={{ fontSize:10.5, color:'var(--cd-ink-3)', marginTop:6, lineHeight:1.35, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{p.desc}</div>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:8 }}>
                      <div style={{ fontSize:10, color:'var(--cd-ink-4)' }}>{p.name} · {p.year}</div>
                      <div style={{ display:'flex', gap:3 }}>
                        {p.tags.slice(0,2).map((t,ti) => <span key={ti} className="cd-chip" style={{ fontSize:9, padding:'2px 6px' }}>{t}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
}

// ═════════ 8. LOGIN ═════════
function LoginScreen() {
  const [mode, setMode] = React.useState('student'); // 'student' | 'admin'
  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner" style={{ paddingBottom:0, display:'flex', flexDirection:'column' }}>
        <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'24px 28px 28px' }}>
          <div style={{ width:56, height:56, borderRadius:14, background:'var(--cd-ink)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:22, letterSpacing:-1, fontFamily:'var(--cd-mono)', marginBottom:14 }}>CD</div>
          <div style={{ fontSize:22, fontWeight:600, letterSpacing:-0.6, textAlign:'center' }}>Smart Campus</div>
          <div className="cd-label" style={{ marginTop:4 }}>Chitralada School · CDS</div>

          {mode === 'student' ? (
            <>
              <div className="cd-card" style={{ width:'100%', padding:20, marginTop:28 }}>
                <div style={{ fontSize:13, fontWeight:600, marginBottom:4 }}>เข้าสู่ระบบ</div>
                <div className="cd-label" style={{ marginBottom:18 }}>Sign in with school account</div>
                <button className="cd-btn cd-btn-secondary" style={{ width:'100%', padding:'12px', fontSize:13 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  Continue with Google
                </button>
                <div style={{ marginTop:14, padding:12, borderRadius:10, background:'var(--cd-primary-tint)', border:'1px solid var(--cd-primary-soft)', display:'flex', gap:8 }}>
                  <MI name="info" size={15} weight={300} style={{ color:'var(--cd-primary-2)', flexShrink:0, marginTop:1 }} />
                  <div>
                    <div style={{ fontSize:11.5, color:'var(--cd-primary-2)', fontWeight:500 }}>ใช้อีเมลโรงเรียนเท่านั้น</div>
                    <div style={{ fontSize:10.5, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', marginTop:1 }}>0xxxxx@cds.ac.th only</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop:22, fontSize:10, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)', textTransform:'uppercase', letterSpacing:0.6 }}>
                v2.0 · © 2569 Chitralada
              </div>

              {/* Admin switch — small button at the bottom */}
              <div style={{ marginTop:'auto', paddingTop:24, width:'100%', display:'flex', justifyContent:'center' }}>
                <button
                  onClick={() => setMode('admin')}
                  className="cd-btn cd-btn-ghost cd-btn-sm"
                  style={{ padding:'7px 12px', fontSize:11, color:'var(--cd-ink-3)', border:'1px solid var(--cd-line)', background:'#fff', fontFamily:'var(--cd-mono)', letterSpacing:0.4 }}
                >
                  <MI name="shield_person" size={12} weight={300} />
                  Administrator login
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="cd-card" style={{ width:'100%', padding:20, marginTop:28 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
                  <div style={{ width:32, height:32, borderRadius:9, background:'var(--cd-ink)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <MI name="shield_person" size={17} weight={300} />
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:13, fontWeight:600 }}>สำหรับเจ้าหน้าที่</div>
                    <div className="cd-label" style={{ marginTop:1 }}>Administrator access</div>
                  </div>
                </div>

                <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:12 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:8, padding:'11px 12px', background:'#fff', border:'1px solid var(--cd-line)', borderRadius:9 }}>
                    <MI name="badge" size={15} weight={300} style={{ color:'var(--cd-ink-4)', flexShrink:0 }} />
                    <input placeholder="Staff ID · รหัสพนักงาน" style={{ border:'none', outline:'none', background:'transparent', flex:1, fontSize:12.5, fontFamily:'var(--cd-mono)', color:'var(--cd-ink)', minWidth:0 }} />
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:8, padding:'11px 12px', background:'#fff', border:'1px solid var(--cd-line)', borderRadius:9 }}>
                    <MI name="lock" size={15} weight={300} style={{ color:'var(--cd-ink-4)', flexShrink:0 }} />
                    <input type="password" placeholder="Password · รหัสผ่าน" style={{ border:'none', outline:'none', background:'transparent', flex:1, fontSize:12.5, fontFamily:'var(--cd-mono)', color:'var(--cd-ink)', minWidth:0 }} />
                    <MI name="visibility_off" size={15} weight={300} style={{ color:'var(--cd-ink-4)', flexShrink:0, cursor:'pointer' }} />
                  </div>
                </div>

                <button className="cd-btn cd-btn-primary" style={{ width:'100%', padding:'12px', fontSize:13 }}>
                  <MI name="login" size={14} weight={400} />เข้าสู่ระบบผู้ดูแล
                </button>

                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:12, fontSize:10.5, color:'var(--cd-ink-4)', fontFamily:'var(--cd-mono)' }}>
                  <span style={{ textDecoration:'underline', cursor:'pointer' }}>Forgot password?</span>
                  <span style={{ display:'inline-flex', alignItems:'center', gap:3 }}><MI name="lock" size={11} weight={400} />SSO · 2FA</span>
                </div>
              </div>

              <div style={{ marginTop:14, padding:'10px 12px', borderRadius:9, background:'var(--cd-surface-2)', border:'1px dashed var(--cd-line)', display:'flex', gap:8, width:'100%' }}>
                <MI name="info" size={14} weight={300} style={{ color:'var(--cd-ink-4)', flexShrink:0, marginTop:1 }} />
                <div style={{ fontSize:10.5, color:'var(--cd-ink-3)', lineHeight:1.45 }}>
                  Staff and teachers only. All access is logged and monitored.
                </div>
              </div>

              <div style={{ marginTop:'auto', paddingTop:24, width:'100%', display:'flex', justifyContent:'center' }}>
                <button
                  onClick={() => setMode('student')}
                  className="cd-btn cd-btn-ghost cd-btn-sm"
                  style={{ padding:'7px 12px', fontSize:11, color:'var(--cd-ink-3)', fontFamily:'var(--cd-mono)', letterSpacing:0.4 }}
                >
                  <MI name="arrow_back" size={12} weight={300} />
                  Back to student login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, CalendarScreen, SportScreen, LunchScreen, BookingScreen, LostScreen, PortfolioScreen, LoginScreen, MI, Bi, StatusBar, BottomNav, Wordmark });
