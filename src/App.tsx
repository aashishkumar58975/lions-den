import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Check,
  Clock3,
  Dumbbell,
  Instagram,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const gallery = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1200&q=85",
];

const facilities = [
  { icon: Dumbbell, title: "Strength Zone", text: "Free weights and strength equipment for serious training." },
  { icon: Trophy, title: "Performance", text: "A focused space for strength, conditioning and progress." },
  { icon: Users, title: "Personal Training", text: "Guidance from experienced trainers to keep you on track." },
  { icon: ShieldCheck, title: "Clean & Safe", text: "A clean, organized and comfortable training environment." },
];

const plans = [
  { name: "STARTER", price: "Contact", features: ["Gym access", "Cardio area", "Basic guidance"] },
  { name: "TRANSFORM", price: "Contact", featured: true, features: ["Gym access", "Strength training", "Trainer guidance", "Progress tracking"] },
  { name: "PERSONAL", price: "Contact", features: ["1-on-1 training", "Custom workout", "Nutrition guidance"] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-kicker", { y: 30, opacity: 0, duration: 0.8, delay: 0.15 });
      gsap.from(".hero-title-line", { y: 90, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out" });
      gsap.from(".hero-copy, .hero-actions", { y: 25, opacity: 0, duration: 0.7, delay: 0.75, stagger: 0.1 });
      gsap.from(".hero-stat", { y: 20, opacity: 0, duration: 0.6, delay: 1, stagger: 0.08 });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 55,
          opacity: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.to(".hero-bg", {
        scale: 1.08,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  const submitEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div ref={appRef} className="site">
      <header className="navbar">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">L</span>
          <span>LIONS <b>DEN</b></span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "facilities", "programs", "gallery", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#enquiry" onClick={() => setMenuOpen(false)}>JOIN NOW</a>
        </nav>

        <button className="menu-btn" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-content container">
            <div className="hero-kicker"><span /> RANCHI'S FITNESS DESTINATION</div>
            <h1>
              <span className="hero-title-line">UNLEASH</span>
              <span className="hero-title-line accent">YOUR STRENGTH.</span>
              <span className="hero-title-line">BUILD YOUR LEGACY.</span>
            </h1>
            <p className="hero-copy">
              Train with purpose. Build strength. Become the strongest version of yourself.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#enquiry">START YOUR JOURNEY <ArrowRight size={18} /></a>
              <a className="btn btn-ghost" href="#gallery">EXPLORE GYM</a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat"><strong>500+</strong><span>Members</span></div>
              <div className="hero-stat"><strong>20+</strong><span>Equipment</span></div>
              <div className="hero-stat"><strong>7 DAYS</strong><span>Open</span></div>
            </div>
          </div>

          <div className="scroll-hint"><span /> SCROLL TO EXPLORE</div>
        </section>

        <section id="about" className="section about">
          <div className="container two-col">
            <div className="reveal section-image">
              <img src={gallery[1]} alt="Gym strength training" />
              <div className="image-badge"><Dumbbell size={20} /><span>TRAIN<br /><b>HARD</b></span></div>
            </div>
            <div className="reveal section-copy">
              <div className="eyebrow">ABOUT LIONS DEN</div>
              <h2>MORE THAN A GYM.<br /><span>IT'S A MINDSET.</span></h2>
              <p>
                Lions Den is built for people who are serious about becoming stronger,
                fitter and more confident. Whether your goal is muscle gain, fat loss
                or better fitness, we give you the space and support to keep moving.
              </p>
              <div className="check-list">
                <div><Check /> Quality training equipment</div>
                <div><Check /> Supportive training environment</div>
                <div><Check /> Guidance for every fitness level</div>
              </div>
              <a className="text-link" href="#facilities">DISCOVER OUR FACILITIES <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section id="facilities" className="section dark-section">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow">WHAT WE OFFER</div>
              <h2>BUILT FOR <span>RESULTS.</span></h2>
              <p>Everything you need for a focused and effective workout.</p>
            </div>
            <div className="facility-grid">
              {facilities.map(({ icon: Icon, title, text }) => (
                <article className="facility-card reveal" key={title}>
                  <div className="card-icon"><Icon /></div>
                  <span className="card-number">0{facilities.findIndex((f) => f.title === title) + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ArrowRight className="card-arrow" size={20} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="section programs">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow">TRAINING PROGRAMS</div>
              <h2>CHOOSE YOUR <span>CHALLENGE.</span></h2>
            </div>
            <div className="program-list">
              {[
                ["01", "STRENGTH TRAINING", "Build real strength with structured workouts and progressive training."],
                ["02", "MUSCLE BUILDING", "Train with purpose and create a consistent path toward muscle growth."],
                ["03", "FAT LOSS", "Combine strength and conditioning to improve fitness and body composition."],
              ].map(([num, title, text]) => (
                <div className="program-row reveal" key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ArrowRight />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow">INSIDE LIONS DEN</div>
              <h2>THE <span>GRIND.</span></h2>
            </div>
            <div className="gallery-grid">
              {gallery.map((src, i) => (
                <div className={`gallery-item reveal g${i + 1}`} key={src}>
                  <img src={src} alt={`Lions Den gym ${i + 1}`} />
                  <div className="gallery-label">LIONS DEN / 0{i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="trainer section">
          <div className="trainer-bg" />
          <div className="container trainer-content reveal">
            <div className="trainer-copy">
              <div className="eyebrow">MEET YOUR TRAINER</div>
              <h2>YOUR GOAL.<br /><span>OUR GUIDANCE.</span></h2>
              <p>
                Replace this section with the trainer's real profile, qualifications,
                experience and training specialties.
              </p>
              <div className="trainer-meta">
                <strong>TRAINER NAME</strong>
                <span>Certified Fitness Trainer</span>
              </div>
              <a className="btn btn-primary" href="#enquiry">TALK TO TRAINER <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="section plans">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow">MEMBERSHIP</div>
              <h2>FIND YOUR <span>LEVEL.</span></h2>
              <p>Replace the placeholder details below with Lions Den's real plans.</p>
            </div>
            <div className="plan-grid">
              {plans.map((plan) => (
                <article className={`plan-card reveal ${plan.featured ? "featured" : ""}`} key={plan.name}>
                  {plan.featured && <div className="popular">MOST POPULAR</div>}
                  <h3>{plan.name}</h3>
                  <div className="price">{plan.price}</div>
                  <div className="plan-divider" />
                  {plan.features.map((feature) => <div className="plan-feature" key={feature}><Check /> {feature}</div>)}
                  <a href="#enquiry" className={plan.featured ? "btn btn-primary full" : "btn btn-outline full"}>ENQUIRE NOW</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="enquiry" className="section enquiry">
          <div className="container enquiry-wrap">
            <div className="enquiry-copy reveal">
              <div className="eyebrow">READY TO START?</div>
              <h2>MAKE YOUR<br /><span>FIRST MOVE.</span></h2>
              <p>Leave your details and the Lions Den team will contact you.</p>
              <div className="contact-mini">
                <a href="tel:+919999999999"><Phone /> +91 99999 99999</a>
                <span><Clock3 /> Mon–Sun · 6:00 AM – 10:00 PM</span>
              </div>
            </div>

            <form className="enquiry-form reveal" onSubmit={submitEnquiry}>
              <label>Your Name<input name="name" required placeholder="Enter your name" /></label>
              <label>Phone Number<input name="phone" required type="tel" placeholder="+91 XXXXX XXXXX" /></label>
              <label>What are you looking for?<select name="goal" defaultValue="Membership enquiry">
                <option>Membership enquiry</option>
                <option>Muscle building</option>
                <option>Fat loss</option>
                <option>Personal training</option>
                <option>General fitness</option>
              </select></label>
              <label>Message <span>(optional)</span><textarea name="message" rows={4} placeholder="Tell us what you want to achieve..." /></label>
              <button className="btn btn-primary submit" type="submit">SEND ENQUIRY <ArrowRight size={18} /></button>
              {sent && <div className="success"><Check size={18} /> Demo enquiry submitted. Connect this form to your backend later.</div>}
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a href="#home" className="brand footer-brand"><span className="brand-mark">L</span><span>LIONS <b>DEN</b></span></a>
              <p>Strength. Discipline. Results.</p>
            </div>
            <div className="footer-contact">
              <div><MapPin /><span><b>ADDRESS</b><br />Replace with Lions Den's complete address<br />Ranchi, Jharkhand</span></div>
              <div><Phone /><span><b>TRAINER / OWNER</b><br /><a href="tel:+919999999999">+91 99999 99999</a></span></div>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="tel:+919999999999" aria-label="Call"><Phone /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Lions Den. All rights reserved.</span>
            <span>Train hard. Stay strong.</span>
          </div>
        </div>
      </footer>

      <div className="lifter" aria-hidden="true">
        <div className="lifter-glow" />
        <svg viewBox="0 0 220 220" role="img">
          <g className="athlete">
            <circle cx="110" cy="42" r="17" />
            <path d="M104 59 L98 104 L113 142 L130 178" />
            <path d="M101 73 L76 103 L55 132" />
            <path d="M105 72 L139 101 L166 130" />
            <path d="M98 104 L75 150 L65 192" />
            <path d="M113 142 L143 166 L164 197" />
            <path d="M45 128 L175 128" />
            <path d="M37 119 L37 137 M183 119 L183 137" />
            <path d="M49 116 L49 140 M171 116 L171 140" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
