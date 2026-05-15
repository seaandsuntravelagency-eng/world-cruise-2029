(function(){
var JSON_URL='https://raw.githubusercontent.com/seaandsuntravelagency-eng/world-cruise-2029/refs/heads/main/silversea-2029-data.json';
var BP='https://robbeluxurytravel.com/begin-planning';
var TJ='https://traveljoy.com/webforms/sR5KQMeYTjRgm35T7M2uwXS7/forms/kRPVqaTVhr9xrMbqPVh7pnZK/link';
var EM='inquiries@robbeluxurytravel.com';

function h(tag,cls,inner){var el=document.createElement(tag);if(cls)el.className=cls;if(inner!==undefined)el.innerHTML=inner;return el;}

function build(d){
var root=document.getElementById('rlt-page');

// HERO
var hero=h('section','hero','<div class="hero-glow"></div><div class="hero-grain"></div>');
var hc=h('div','hero-content');
hc.appendChild(h('span','eyebrow','Robbe Luxury Travel &nbsp;&middot;&nbsp; Silversea &nbsp;&middot;&nbsp; World Cruise 2029 &nbsp;&middot;&nbsp; A Pacific Awakening'));
hc.appendChild(h('h1','hero-h1','This Is Not a&nbsp;Cruise.<br><em>It&rsquo;s a Different<br>Way to&nbsp;Live.</em>'));
hc.appendChild(h('p','hero-sub','125 days. Every suite. Every meal. Every sunrise on the water. No airports. No decisions. Just the world, arriving at your door.'));
var cta=h('a','hero-cta','Let&rsquo;s Talk About Your Journey');cta.href=BP;hc.appendChild(cta);
hero.appendChild(hc);
var aside=h('div','hero-aside');
[['125','Days Aboard'],['60+','Destinations'],['0','Bags to Repack']].forEach(function(s){var st=h('div','hero-stat');st.appendChild(h('span','num',s[0]));st.appendChild(h('span','lbl',s[1]));aside.appendChild(st);});
hero.appendChild(aside);
hero.appendChild(h('div','hero-footer','<div class="scroll-bar"></div><span class="scroll-label">Scroll to explore</span>'));
root.appendChild(hero);

// MANIFESTO
var man=h('section','manifesto');
man.appendChild(h('p','','You have built the career. You have earned the life. You have taken the trips. Now imagine a journey where <em>the journey itself is the destination</em> &mdash; and the only thing left to decide each morning is which wine to enjoy at dinner.'));
man.appendChild(h('div','manifesto-credit','Robbe Luxury Travel &nbsp;&middot;&nbsp; Elevating Your Journey to the Extraordinary'));
root.appendChild(man);

// CONTRAST
var con=h('div','contrast');
[['14 flights across 4 continents','One ship. One unpacking. One seamless journey.'],
['Another hotel that looks like every other hotel','A private suite that travels the world with you.'],
['Checking your calendar when you get home','Four months where the world comes to you.']
].forEach(function(c){var ci=h('div','contrast-item');ci.appendChild(h('div','vs','Instead of'));ci.appendChild(h('div','then',c[0]));ci.appendChild(h('div','now',c[1]));con.appendChild(ci);});
root.appendChild(con);

// PILLARS
var pils=h('section','pillars');
var ph=h('div','section-header');ph.appendChild(h('span','tag','Why People Choose a World Cruise'));ph.appendChild(h('h2','','The Life You Have Earned Deserves <em>A Stage Worthy of It</em>'));ph.appendChild(h('div','rule'));pils.appendChild(ph);
var pg=h('div','pillars-grid');
[['I','The World Without Unpacking','Your suite on Silver Whisper is your home for four months. Everything travels with you &mdash; your routine, your butler, your favorite table at dinner. Tokyo is simply the next port out your window.'],
['II','Time, Finally Spent Well','There are no connecting flights. No transfer logistics. No packing lists to rebuild every few days. For guests who have spent decades optimizing their time, this is what reclaiming it actually feels like.'],
['III','A Private Club That Moves','Silver Whisper carries 388 guests. Not 3,000. You will recognize faces by day two. By week two, you will have a table of friends who have become part of the story of your life.'],
['IV','Slow, Deliberate Immersion','Seventeen overnights in port. Extended calls in regions most travelers only skim. This is the difference between seeing a culture and beginning to understand one.'],
['V','A Chapter Worth Remembering','Not a trip. A chapter. The kind your children ask about for years. The kind you reference when you say, &ldquo;That was the year we crossed the Pacific.&rdquo; Meaning, measured in months.'],
['VI','Access No Itinerary Can Buy','A private evening at Honolulu&rsquo;s royal palace. After-hours entry to the Terracotta Warriors. A full-ship private island in the Philippines. These are not shore excursions. They are singular moments arranged for this voyage alone.']
].forEach(function(p){var c=h('div','pillar');c.appendChild(h('div','pillar-num',p[0]));c.appendChild(h('h3','',p[1]));c.appendChild(h('p','',p[2]));pg.appendChild(c);});
pils.appendChild(pg);root.appendChild(pils);

// SCENES
var sc=h('section','scenes');
var sch=h('div','section-header');sch.appendChild(h('span','tag','Imagine This'));sch.appendChild(h('h2','','What It Actually <em>Feels Like</em>'));sc.appendChild(sch);
var sl=h('div','scenes-list');
[['i.','"You wake up and the skyline of Tahiti is outside your window. You had coffee in the same spot yesterday. Yesterday it was Hawaii."','The Ancestral Isles &mdash; Weeks One &amp; Two'],
['ii.','"There are no airport lines. No checked bag anxiety. No rental car counter. You simply walk off the ship into Fiji, and walk back when you are ready."','Way of the Wayfinder &mdash; South Pacific'],
['iii.','"It is cherry blossom season in Japan. You have been at sea for two months. You know your sommelier&rsquo;s name. The ship knows yours."','Cerulean Shores &amp; Sakura Skies &mdash; Japan in Spring'],
['iv.','"Everyone else is reading about the Terracotta Warriors. You are standing among them, alone, after closing &mdash; because this voyage arranged it."','Spring at the Gates of Empire &mdash; Xi&rsquo;an, China'],
['v.','"Your last night. Singapore harbor lights. Four months ago you were not sure you would do it. Now you cannot imagine who you would be if you had not."','Across Temple Kingdoms &mdash; The Final Chapter']
].forEach(function(s){var sc2=h('div','scene');sc2.appendChild(h('div','scene-i',s[0]));var sb=h('div','scene-body');sb.appendChild(h('p','',s[1]));sb.appendChild(h('small','',s[2]));sc2.appendChild(sb);sl.appendChild(sc2);});
sc.appendChild(sl);root.appendChild(sc);

// WHO
var ww=h('section','who-wrap');var who=h('div','who');
var wl=h('div','who-left');wl.appendChild(h('span','tag','Who Does This'));wl.appendChild(h('h2','','The Kind of People Who <em>Take World Cruises</em>'));
wl.appendChild(h('p','lead','They are not reckless with their time. Quite the opposite. They have spent years being <strong>very deliberate about how they spend it</strong>. And at some point, they decided that collecting days in a life well-traveled was more valuable than collecting things.'));
wl.appendChild(h('p','lead','They have been on Regent. On Seabourn. On Silversea. They have done the Rhine. The Danube. The Douro. And someone &mdash; a friend, a travel advisor, a quiet voice &mdash; finally said: what are you waiting for?'));
var profs=h('div','who-profiles');
['Retired executives who finally have the time they always said they would use','Business owners who know how to delegate &mdash; and are ready to','Affluent empty nesters looking for a shared chapter, not just a trip','Luxury river cruise repeaters ready to go further','Couples who have said &ldquo;we want to do something meaningful while we still can&rdquo;','Travelers who measure trips in meaning, not miles'].forEach(function(p){profs.appendChild(h('div','who-profile',p));});
wl.appendChild(profs);who.appendChild(wl);
var wr=h('div','who-right');
var pq=h('div','pullquote');pq.appendChild(h('blockquote','','"We want to do something meaningful while we still can."'));pq.appendChild(h('cite','','The phrase we hear most &mdash; and the reason we take this voyage seriously.'));wr.appendChild(pq);
var pq2=h('div','pullquote-2');pq2.appendChild(h('p','','For the right traveler, a world cruise is less about indulgence and more about how they choose to spend one of the most meaningful chapters of their life. One fare. One unpacking. Every significant Pacific destination. Nothing left unfinished.'));wr.appendChild(pq2);
who.appendChild(wr);ww.appendChild(who);root.appendChild(ww);

// ALTERNATIVE
var alt=h('section','alternative');
alt.appendChild(h('h2','','The Affluent Alternative to <em>Private Jet Travel</em>'));
alt.appendChild(h('p','','Without the scheduling. Without the terminals. Without nine hotel check-ins. A world cruise offers the same access to extraordinary places &mdash; in a setting that, arguably, private aviation cannot match. Your suite comes with a butler, an open cellar, and a horizon that changes every morning.'));
root.appendChild(alt);

// SEGMENTS
var seg=h('section','segments');seg.id='segments';
var segh=h('div','section-header');segh.appendChild(h('span','tag','A Different Entry Point'));segh.appendChild(h('h2','','Not Ready for 125 Days? <em>Start With a Chapter.</em>'));segh.appendChild(h('div','rule'));segh.appendChild(h('span','seg-intro','The voyage is available as eight individual segments. Each one is a complete journey &mdash; the same ship, the same suite, the same unhurried pace. Just a shorter commitment to a life-changing experience.'));seg.appendChild(segh);
var sg=h('div','seg-grid');
[['18 nights','Chapter I','The Ancestral Isles','San Diego &rarr; Papeete, Tahiti &nbsp;&middot;&nbsp; Jan 5 &ndash; 23','Begin where Polynesian civilization began. Hawaii&rsquo;s royal history, volcanic archipelagos, and the legendary waters of French Polynesia &mdash; all before you have missed more than three weeks at home.','For the traveler who has always wanted to see the South Pacific without piecing together a complicated itinerary.'],
['19 nights','Chapter II','Way of the Wayfinder','Papeete &rarr; Auckland &nbsp;&middot;&nbsp; Jan 23 &ndash; Feb 11','Samoa. Fiji. The ancient wayfinding routes of the Polynesian navigators. Extended overnights in places most travelers never reach &mdash; and a pace that makes you feel them, not just see them.','For the river cruise repeater who wants to go deeper &mdash; and further &mdash; than ever before.'],
['16 nights','Chapter III','The Wild &amp; the Worldly','Auckland &rarr; Melbourne &nbsp;&middot;&nbsp; Feb 11 &ndash; 27','New Zealand&rsquo;s remote southern coastlines give way to the culture and sophistication of Melbourne. A signature event &mdash; the Tasmanian Symphony Orchestra at Hobart&rsquo;s Theatre Royal &mdash; is included.','For the couple who wants nature and city in a single, seamless arc with no logistics.'],
['14 nights','Chapter IV','Currents of Contrast','Melbourne &rarr; Benoa, Bali &nbsp;&middot;&nbsp; Feb 27 &ndash; Mar 13','The extraordinary diversity of Melanesia and Micronesia unfolds northward toward Bali &mdash; including Vigan, a UNESCO World Heritage city few independent travelers ever reach.','For the traveler who has done Southeast Asia before, but never quite like this.'],
['12 nights','Chapter V','Emerald Lands &amp; Golden Coasts','Benoa &rarr; Manila &nbsp;&middot;&nbsp; Mar 13 &ndash; 25','From Bali&rsquo;s sacred terraces through the Indonesian archipelago to the Philippines &mdash; including an exclusive full-ship private island celebration on Kalanggaman Island that guests will describe for the rest of their lives.','For the traveler who wants a singular, unrepeatable experience alongside extraordinary destinations.'],
['12 nights','Chapter VI','Cerulean Shores &amp; Sakura Skies','Manila &rarr; Tokyo &nbsp;&middot;&nbsp; Mar 25 &ndash; Apr 6','Cherry blossom season in Japan, approached by sea. Extended time in Japanese ports during one of the most visually extraordinary periods of the year &mdash; with immersive S.A.L.T. culinary experiences throughout.','For the Japan enthusiast who wants to arrive the way Japan deserves to be arrived &mdash; not through Narita at 6am.'],
['19 nights','Chapter VII','Spring at the Gates of Empire','Tokyo &rarr; Hong Kong &nbsp;&middot;&nbsp; Apr 6 &ndash; 25','Japan. Korea. China. The included overland to Xi&rsquo;an&rsquo;s Terracotta Warriors &mdash; after hours, with the crowds gone &mdash; is reason enough to book this chapter. Imperial history, made intimate.','For the culturally-driven traveler who wants access that no individual itinerary can replicate.'],
['16 nights','Chapter VIII','Across Temple Kingdoms','Hong Kong &rarr; Singapore &nbsp;&middot;&nbsp; Apr 25 &ndash; May 11','Vietnam. Cambodia. Thailand. Ancient temple kingdoms and living culinary traditions culminate in Singapore &mdash; arriving with the quiet satisfaction that only a well-designed journey provides.','For the Southeast Asia lover who wants depth over distance, and a final chapter worth remembering.']
].forEach(function(c){var card=h('div','seg-card');card.appendChild(h('div','seg-duration',c[0]));card.appendChild(h('div','seg-num',c[1]));card.appendChild(h('div','seg-name',c[2]));card.appendChild(h('div','seg-route',c[3]));card.appendChild(h('p','seg-body',c[4]));card.appendChild(h('p','seg-appeal',c[5]));sg.appendChild(card);});
seg.appendChild(sg);
var sctb=h('div','seg-cta-block');sctb.appendChild(h('p','','"A single segment of this voyage will change how you think about travel. The full voyage will change how you think about life."'));var sa=h('a','','Tell Us Which Chapter Speaks to You');sa.href=BP;sctb.appendChild(sa);seg.appendChild(sctb);
root.appendChild(seg);

// DETAILS
var det=h('section','details');det.id='voyage';
var dh=h('div','section-header');dh.appendChild(h('span','tag','The Practical Extraordinary'));dh.appendChild(h('h2','','What You Need to Know'));dh.appendChild(h('div','rule'));det.appendChild(dh);
var dg=h('div','details-grid');
var db1=h('div','detail-block');db1.appendChild(h('h3','','The Voyage'));var ul1=h('ul');['125 days aboard Silver Whisper','Departs San Diego, January 5, 2029','Arrives Singapore, May 11, 2029','60+ destinations across 19 countries','Polynesia &middot; Melanesia &middot; Micronesia &middot; Australia &middot; Asia &middot; New Zealand','Available as the full voyage or individual segments'].forEach(function(i){ul1.appendChild(h('li','',i));});db1.appendChild(ul1);dg.appendChild(db1);
var db2=h('div','detail-block');db2.appendChild(h('h3','','All Inclusive Plus'));var ul2=h('ul');['All-suite ocean-view accommodations','All dining venues, open bar, premium spirits &amp; champagne','Butler service in every suite','Six exclusive signature events','Included overland: Terracotta Warriors, Xi&rsquo;an','Gratuities, Wi-Fi, and port charges throughout','Pre-cruise hotel in San Diego','Business Class Air from select gateways'].forEach(function(i){ul2.appendChild(h('li','',i));});db2.appendChild(ul2);dg.appendChild(db2);
det.appendChild(dg);
var pr=h('div','pricing');var pi=h('div','pricing-inner');var pl=h('div');pl.appendChild(h('span','pricing-from','Full Voyage Starting From'));pl.appendChild(h('div','pricing-num','$99,300'));pl.appendChild(h('span','pricing-qual','per person &nbsp;&middot;&nbsp; All Inclusive Plus &nbsp;&middot;&nbsp; double occupancy'));pi.appendChild(pl);var prr=h('div','pricing-right');prr.appendChild(h('p','','At roughly <strong>$794 per day</strong>, the full voyage includes your suite, butler, every meal, open bar, premium spirits, Wi-Fi, gratuities, six exclusive events, one included overland, pre-cruise hotel, and Business Class Air from select gateways. Individual segment pricing available upon inquiry.'));var prl=h('a','pricing-link','Discuss Pricing &amp; Availability');prl.href=BP;prr.appendChild(prl);pi.appendChild(prr);pr.appendChild(pi);pr.appendChild(h('p','pricing-disclaimer','Pricing shown is per person based on double occupancy in the lowest available suite category with All Inclusive Plus fare. Fares are subject to availability and may change without notice. Individual segment pricing varies. Contact Robbe Luxury Travel for current availability and suite-specific pricing.'));det.appendChild(pr);
var acc=h('div','accordion');acc.appendChild(h('div','accordion-label','The Eight Chapters &mdash; Full Voyage or Individual Segments'));
[['The Ancestral Isles','San Diego &rarr; Papeete','Jan 5 &ndash; 23'],['Way of the Wayfinder','Papeete &rarr; Auckland','Jan 23 &ndash; Feb 11'],['The Wild &amp; the Worldly','Auckland &rarr; Melbourne','Feb 11 &ndash; 27'],['Currents of Contrast','Melbourne &rarr; Benoa','Feb 27 &ndash; Mar 13'],['Emerald Lands &amp; Golden Coasts','Benoa &rarr; Manila','Mar 13 &ndash; 25'],['Cerulean Shores &amp; Sakura Skies','Manila &rarr; Tokyo','Mar 25 &ndash; Apr 6'],['Spring at the Gates of Empire','Tokyo &rarr; Hong Kong','Apr 6 &ndash; 25'],['Across Temple Kingdoms','Hong Kong &rarr; Singapore','Apr 25 &ndash; May 11']].forEach(function(r){var row=h('div','acc-row');row.appendChild(h('div','acc-name',r[0]));row.appendChild(h('div','acc-route',r[1]));row.appendChild(h('div','acc-dates',r[2]));acc.appendChild(row);});
det.appendChild(acc);root.appendChild(det);

// AGENCY CTA
var ag=h('section','agency');ag.id='conversation';
var agl=h('div','agency-left');agl.appendChild(h('span','tag','Robbe Luxury Travel'));agl.appendChild(h('h2','','We Design Journeys So You Never Have to <em>Think About the Details</em>'));agl.appendChild(h('p','','We are not a booking engine. We are the advisors you call when something matters enough to get right. We will help you decide whether this is the right voyage, which segment fits your calendar, and how to make it the chapter your life deserves.'));agl.appendChild(h('p','','No pressure. No pitch. Just a conversation about whether this belongs in your story.'));agl.appendChild(h('p','price-echo','Full voyage from $99,300 per person &middot; All Inclusive Plus<br>Individual segment pricing available upon inquiry.'));agl.appendChild(h('p','lead-filter','This page is designed for travelers considering extended luxury voyages, world cruise segments, or premium cruise experiences. The full voyage starts at $99,300 per person. Individual segments available from approximately $8,000 per person.'));ag.appendChild(agl);
var agr=h('div','agency-right');agr.appendChild(h('div','form-label','Start the Conversation'));
agr.innerHTML+='<div class="form-field"><input type="text" id="rlt-name" placeholder="Your Name"></div><div class="form-row"><div class="form-field"><input type="email" id="rlt-email" placeholder="Email Address"></div><div class="form-field"><input type="tel" id="rlt-phone" placeholder="Phone (optional)"></div></div><div class="form-field"><select id="rlt-interest"><option value="" disabled selected>I am interested in...</option><option>The Full 125-Day Voyage</option><option>A Specific Segment</option><option>Learning More First</option><option>Pricing &amp; Availability</option></select></div><div class="form-field"><textarea id="rlt-notes" placeholder="Any context about you or your travel style? (optional)"></textarea></div><button type="button" class="form-submit" onclick="rltSubmit()">Send My Inquiry</button><p class="direct-email">Or email us at <a href="mailto:'+EM+'">'+EM+'</a></p>';
ag.appendChild(agr);root.appendChild(ag);

// FOOTER
var ft=h('footer');ft.appendChild(h('div','footer-brand','Robbe Luxury Travel &nbsp;&middot;&nbsp; Elevating Your Journey to the Extraordinary'));ft.appendChild(h('div','footer-note','An Independent Travel Agency &nbsp;&middot;&nbsp; All itinerary details subject to change by Silversea Cruises &nbsp;&middot;&nbsp; Pricing available upon inquiry'));root.appendChild(ft);
}

window.rltSubmit=function(){
var n=(document.getElementById('rlt-name')||{}).value||'';
var e=(document.getElementById('rlt-email')||{}).value||'';
var p=(document.getElementById('rlt-phone')||{}).value||'';
var i=(document.getElementById('rlt-interest')||{}).value||'';
var o=(document.getElementById('rlt-notes')||{}).value||'';
if(!n.trim()||!e.trim()){alert('Please enter your name and email.');return;}
var q=new URLSearchParams();
if(n)q.set('name',n);if(e)q.set('email',e);if(p)q.set('phone',p);if(i)q.set('interest',i);if(o)q.set('notes',o);
window.open(TJ+'?'+q.toString(),'_blank');
};

fetch(JSON_URL).then(function(r){return r.json();}).then(build).catch(function(){build({});});
})();
