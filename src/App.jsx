import React, { useState } from "react";
import Section from "./components/Section.jsx";
import Campfire from "./components/Campfire.jsx";
import SoundToggle from "./components/SoundToggle.jsx";
import SideCampCard from "./components/SideCampCard.jsx";
import Gallery from "./components/Gallery.jsx";
import "./styles/global.css";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <div style={{ background: theme.colors.background, color: theme.colors.text }}>
      <SoundToggle />

      {/* 1. Welcome */}
      <Section id="welcome" style={{ background: theme.colors.background }}>
        <img src="/assets/camp-logo.svg" alt="Camp Network Logo" style={{ width: 120, marginBottom: 24 }} />
        <h1 style={{ fontSize: 40, margin: 0, color: theme.colors.campfire }}>
          Welcome to Camp Network
        </h1>
        <h2 style={{ fontWeight: 400, margin: "16px 0 0 0" }}>
          Where creators pitch their tents, own their IP, and build with AI!
        </h2>
        <Campfire />
        <span style={{ color: theme.colors.accent, fontSize: 18, marginTop: 12 }}>
          Scroll down to join the campfire experience 🔥
        </span>
      </Section>

      {/* 2. Why I Love Camp Network */}
      <Section id="why-love" style={{ background: theme.colors.tent }}>
        <h2 style={{ color: theme.colors.campfire }}>Why I Love Camp Network</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, marginTop: 32 }}>
          <SideCampCard
            icon="/assets/tent.svg"
            title="Layer-1 for Creators"
            desc="Purpose-built blockchain for creative minds. Register, own, and monetize your IP on-chain!"
          />
          <SideCampCard
            icon="/assets/ip-forge.svg"
            title="On-Chain Provenance"
            desc="Every creation is verifiable, traceable, and protected. No more lost credit!"
          />
          <SideCampCard
            icon="/assets/ai-agent.svg"
            title="AI x Blockchain"
            desc="AI agents can train, remix, and create—always respecting your ownership."
          />
          <SideCampCard
            icon="/assets/camp-logo.svg"
            title="Native Royalties"
            desc="Earn CAMP tokens automatically when your work is used, remixed, or licensed."
          />
        </div>
        <div style={{
          marginTop: 36,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 24
        }}>
          <div style={{background:'#ffe29aee',color:'#3e5c3a',borderRadius:16,padding:20,maxWidth:340,margin:8,boxShadow:'0 2px 12px #0001'}}>
            <b>Fair Collaboration:</b> Camp enables creators and AI to work together, ensuring everyone gets credit and rewards.
          </div>
          <div style={{background:'#e07a5fee',color:'#fff8e7',borderRadius:16,padding:20,maxWidth:340,margin:8,boxShadow:'0 2px 12px #0001'}}>
            <b>Transparent Usage:</b> Every use, remix, or license is tracked on-chain. You always know who used your work!
          </div>
        </div>
        <FunFactBox color="#ffe29a" emoji="🔥">Fun Fact: Every remix on Camp is like adding a new log to the campfire—everyone gets warmer (and richer)!</FunFactBox>
      </Section>

      {/* 2.5. How Camp Works (Architecture) */}
      <Section id="how-camp-works" style={{ background: theme.colors.card }}>
        <h2 style={{ color: theme.colors.campfire }}>How Camp Works</h2>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:32,marginTop:32}}>
          <SideCampCard
            icon="/assets/camp-logo.svg"
            title="BaseCAMP & SideCAMPs"
            desc="Main chain (BaseCAMP) for global state & security. SideCAMPs for app-specific speed and freedom."
          />
          <SideCampCard
            icon="/assets/ip-forge.svg"
            title="ABC Stack & Celestia"
            desc="Ultra-fast, modular blockchain stack. Data stored on Celestia for speed and transparency."
          />
          <SideCampCard
            icon="/assets/ai-agent.svg"
            title="EVM & WASM Compatible"
            desc="Build with Solidity or Rust. Port your dApps easily from Ethereum or Cosmos!"
          />
        </div>
        <div style={{marginTop:36,display:'flex',flexWrap:'wrap',justifyContent:'center',gap:24}}>
          <div style={{background:'#ff914dee',color:'#fff8e7',borderRadius:16,padding:20,maxWidth:340,margin:8,boxShadow:'0 2px 12px #0001'}}>
            <b>Dedicated Blockspace:</b> Each app gets its own SideCAMP—no congestion, always fast!
          </div>
          <div style={{background:'#3e5c3aee',color:'#ffe29a',borderRadius:16,padding:20,maxWidth:340,margin:8,boxShadow:'0 2px 12px #0001'}}>
            <b>Shared Security:</b> All SideCAMPs inherit security from BaseCAMP’s validator network (with Ethereum-grade trust!).
          </div>
        </div>
        <DidYouKnowBox color="#e07a5f" emoji="🚀">Did you know? Camp Network can handle up to <b>50,000 transactions per second</b>!</DidYouKnowBox>
        <CelestiaBox color="#ffe29a" emoji="✨">Celestia Magic: All your data is stored on Celestia, making Camp super fast and secure!</CelestiaBox>
      </Section>

      {/* 2.7. IP & AI Magic */}
      <Section id="ip-ai" style={{ background: theme.colors.tent }}>
        <h2 style={{ color: theme.colors.campfire }}>IP & AI Magic</h2>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:32,marginTop:32}}>
          <SideCampCard
            icon="/assets/ip-forge.svg"
            title="Origin Framework"
            desc="Register any content as IP—art, code, music, even tweets! Set your own rules and licenses."
          />
          <SideCampCard
            icon="/assets/ai-agent.svg"
            title="mAItrix Agents"
            desc="On-chain AI agents can train, remix, and create—always respecting your terms and earning you royalties."
          />
          <SideCampCard
            icon="/assets/camp-logo.svg"
            title="Proof of Provenance"
            desc="Every creation and remix is traceable. Attribution and revenue splits are automatic!"
          />
        </div>
        <QuickTipBox color="#3e5c3a" emoji="💡">Quick Tip: You can register not just art, but code, music, even tweets as IP!</QuickTipBox>
        <AIAgentBox color="#ff914d" emoji="🤖">AI Agents: On Camp, AI agents are like digital scouts—they help, remix, and always respect your rules!</AIAgentBox>
      </Section>

      {/* 2.9. Tokenomics & Roadmap */}
      <Section id="tokenomics" style={{ background: theme.colors.card }}>
        <h2 style={{ color: theme.colors.campfire }}>Tokenomics & Roadmap</h2>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:32,marginTop:32}}>
          <SideCampCard
            icon="/assets/camp-logo.svg"
            title="CAMP Token"
            desc="Pay for gas, earn royalties, and govern the network. CAMP is the heart of the Camp economy!"
          />
          <SideCampCard
            icon="/assets/tent.svg"
            title="Native Royalties"
            desc="Every time your IP is used, you get paid—instantly and transparently."
          />
          <SideCampCard
            icon="/assets/ai-agent.svg"
            title="Incentives for All"
            desc="Creators, AI devs, validators—everyone earns for contributing to the ecosystem."
          />
        </div>
        <div style={{marginTop:36,display:'flex',flexWrap:'wrap',justifyContent:'center',gap:24}}>
          <div style={{background:'#ffe29aee',color:'#3e5c3a',borderRadius:16,padding:20,maxWidth:340,margin:8,boxShadow:'0 2px 12px #0001'}}>
            <b>Roadmap:</b> Testnet live now! Mainnet, more AI features, and Web2 integrations coming soon.
          </div>
        </div>
      </Section>

      {/* 3. How Camp Protects Creators */}
      <Section id="protects" style={{ background: theme.colors.card }}>
        <h2 style={{ color: theme.colors.campfire }}>How Camp Protects Creators</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, marginTop: 32 }}>
          <SideCampCard
            icon="/assets/ip-forge.svg"
            title="Verifiable IP"
            desc="Every creation is registered and provable on-chain."
          />
          <SideCampCard
            icon="/assets/tent.svg"
            title="Proof of Ownership"
            desc="Creators can publish and prove their work instantly."
          />
          <SideCampCard
            icon="/assets/ai-agent.svg"
            title="AI Agents Respect Rules"
            desc="AI tools check and respect ownership automatically."
          />
        </div>
      </Section>

      {/* 4. Choose Your SideCamp */}
      <Section id="sidecamp" style={{ background: theme.colors.tent }}>
        <h2 style={{ color: theme.colors.campfire }}>Choose Your SideCamp</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, marginTop: 32 }}>
          <SideCampCard
            icon="/assets/remix-campfire.svg"
            title="Remix Campfire"
            desc="Remix and collaborate around the fire."
          />
          <SideCampCard
            icon="/assets/ip-forge.svg"
            title="IP Forge"
            desc="Mint proof of your creative spark."
          />
          <SideCampCard
            icon="/assets/scout-watch.svg"
            title="Scout Watch"
            desc="Track how your IP is used by AI."
          />
        </div>
      </Section>

      {/* 5. Camp Gallery / TrailHeads Remix Zone */}
      <Section id="remix-info" style={{ background: theme.colors.galleryBg }}>
        <h2 style={{ color: theme.colors.campfire }}>Remix & IP in Action</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 18,
          marginTop: 18,
          alignItems: 'flex-start',
        }}>
          <div style={{
            background: '#ffe29aee',
            color: '#3e5c3a',
            borderRadius: 12,
            padding: 16,
            maxWidth: 320,
            minWidth: 200,
            boxShadow: '0 2px 8px #0001',
            fontSize: 15,
            lineHeight: 1.5,
            margin: 0,
          }}>
            <b>Remix, Share, and Earn:</b><br/>
            On Camp Network, every piece of content you upload—art, music, code, or memes—can be remixed by others <b>with your rules</b>!<br/><br/>
            <b>How it works:</b>
            <ul style={{margin:'10px 0 0 16px',padding:0}}>
              <li>Register your creation as IP on-chain.</li>
              <li>Set remix and license terms (free, paid, attribution, etc.).</li>
              <li>Others can remix or use your work, and you get credited & paid automatically!</li>
              <li>All usage and remix history is <b>public, transparent, and provable</b>.</li>
            </ul>
            <div style={{marginTop:10,background:'#e07a5f22',padding:8,borderRadius:6,fontSize:14}}>
              <b>Example:</b> Upload a drawing → someone remixes it into a meme → you both get credited and share rewards!
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'row',gap:10,alignItems:'flex-start',margin:0}}>
            <RemixImage srcs={['/assets/tent.png','/assets/tent.svg']} alt="User Upload Example" border="#ff914d" />
            <RemixImage srcs={['/assets/remix-campfire.png','/assets/remix-campfire.svg']} alt="Remixed Example" border="#e07a5f" />
            <RemixImage srcs={['/assets/gallery-placeholder.png','/assets/gallery-placeholder.svg']} alt="Gallery Example" border="#ffe29a" />
          </div>
        </div>
      </Section>

      {/* 6. Call to Action */}
      <Section id="cta" style={{ background: theme.colors.background }}>
        <h2 style={{ color: theme.colors.campfire }}>Join the Campfire!</h2>
        <p style={{ fontSize: 20, margin: "16px 0" }}>
          Ready to pitch your tent and build with us? <br />
          Follow us and join the community!
        </p>
        <a
          href="https://twitter.com/campnetworkxyz"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
          style={{
            background: theme.colors.campfire,
            color: theme.colors.text,
            padding: "16px 32px",
            borderRadius: 32,
            fontSize: 22,
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 2px 12px #0003",
            marginTop: 16,
            display: "inline-block",
          }}
        >
          Pitch your tent on Camp Network 🏕️
        </a>
      </Section>
    </div>
  );
}

function RemixImage({ srcs, alt, border }) {
  const [idx, setIdx] = useState(0);
  const [error, setError] = useState(false);
  if (error) {
    return <div style={{width:90,height:90,background:'#333',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',border:`2px solid ${border}`}}><span style={{color:'#fff',fontSize:24}}>?</span></div>;
  }
  return (
    <img
      src={srcs[idx]}
      alt={alt}
      style={{width:90,height:90,borderRadius:8,objectFit:'cover',border:`2px solid ${border}`,background:'#fff2'}}
      onError={() => {
        if (idx+1 < srcs.length) setIdx(idx+1); else setError(true);
      }}
      title={alt}
    />
  );
}

function FunFactBox({ color, emoji, children }) {
  return <div style={{background:color,padding:'12px 18px',borderRadius:12,margin:'28px auto 0 auto',maxWidth:420,boxShadow:'0 2px 8px #0001',fontWeight:600,display:'flex',alignItems:'center',fontSize:16}}><span style={{fontSize:22,marginRight:10}}>{emoji}</span>{children}</div>;
}
function DidYouKnowBox({ color, emoji, children }) {
  return <div style={{background:color,padding:'12px 18px',borderRadius:12,margin:'28px auto 0 auto',maxWidth:420,boxShadow:'0 2px 8px #0001',fontWeight:600,display:'flex',alignItems:'center',fontSize:16}}><span style={{fontSize:22,marginRight:10}}>{emoji}</span>{children}</div>;
}
function CelestiaBox({ color, emoji, children }) {
  return <div style={{background:color,padding:'12px 18px',borderRadius:12,margin:'18px auto 0 auto',maxWidth:420,boxShadow:'0 2px 8px #0001',fontWeight:600,display:'flex',alignItems:'center',fontSize:16}}><span style={{fontSize:22,marginRight:10}}>{emoji}</span>{children}</div>;
}
function QuickTipBox({ color, emoji, children }) {
  return <div style={{background:color,padding:'10px 16px',borderRadius:10,margin:'22px auto 0 auto',maxWidth:380,boxShadow:'0 2px 8px #0001',fontWeight:500,display:'flex',alignItems:'center',fontSize:15,color:'#ffe29a'}}><span style={{fontSize:20,marginRight:8}}>{emoji}</span>{children}</div>;
}
function AIAgentBox({ color, emoji, children }) {
  return <div style={{background:color,padding:'10px 16px',borderRadius:10,margin:'18px auto 0 auto',maxWidth:380,boxShadow:'0 2px 8px #0001',fontWeight:500,display:'flex',alignItems:'center',fontSize:15,color:'#fff8e7'}}><span style={{fontSize:20,marginRight:8}}>{emoji}</span>{children}</div>;
} 