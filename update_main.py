from pathlib import Path
path = Path('index.html')
text = path.read_text(encoding='utf-8')
start = text.index('    <main')
end = text.index('</main>', start) + len('</main>')
new_main = """    <main class=\"bg-slate-50 text-slate-900\">
        <section class=\"hero-zone\" aria-label=\"Kha Dock & Homes hero\">
            <div class=\"container mx-auto px-4 sm:px-6 lg:px-8\">
                <div class=\"grid gap-10 lg:grid-cols-2 items-start\">
                    <div class=\"space-y-6\">
                        <p class=\"hero-badge\">Precision Remodeling · Tampa to Orlando</p>
                        <h1 class=\"text-4xl sm:text-5xl lg:text-6xl font-black leading-tight\">
                            Refined homes, punctual delivery, and respectful service in Florida.
                        </h1>
                        <p class=\"text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl\">
                            From bespoke kitchen islands to curated waterfront remodels, we choreograph every trade like a concierge service so you can stay focused on living.
                        </p>
                        <div class=\"mt-8 flex flex-wrap gap-4\">
                            <a href=\"contact.html\" class=\"btn-primary\">Get a Free Quote</a>
                            <a href=\"projects.html\" class=\"btn-secondary\">Explore the Portfolio</a>
                        </div>
                        <div class=\"hero-stats grid grid-cols-1 sm:grid-cols-3 gap-4\">
                            <div class=\"stat-card\" data-aos=\"fade-up\" data-aos-delay=\"100\">
                                <span class=\"stat-value\">750+</span>
                                <span class=\"stat-label\">Projects delivered</span>
                            </div>
                            <div class=\"stat-card\" data-aos=\"fade-up\" data-aos-delay=\"200\">
                                <span class=\"stat-value\">9</span>
                                <span class=\"stat-label\">Week average timeline</span>
                            </div>
                            <div class=\"stat-card\" data-aos=\"fade-up\" data-aos-delay=\"300\">
                                <span class=\"stat-value\">100%</span>
                                <span class=\"stat-label\">Licensed & insured</span>
                            </div>
                        </div>
                    </div>
                    <div class=\"contact-card\" data-aos=\"fade-left\" data-aos-delay=\"200\">
                        <div class=\"contact-card-badge\">
                            <span>Trusted in Tampa Bay</span>
                            <span>Licensed · Insured</span>
                        </div>
                        <p>
                            Mr. Kha Do and the Kha Dock & Homes team stay on-site daily, syncing progress updates with your calendar and managing every subcontractor so you stay informed.
                        </p>
                        <div class=\"contact-row\">
                            <i class=\"fas fa-map-marker-alt\" aria-hidden=\"true\"></i>
                            <div>
                                <p class=\"text-xs uppercase tracking-widest\">Office</p>
                                <p class=\"text-base font-semibold\">2055 W Bearss Ave, Tampa, FL 33618</p>
                            </div>
                        </div>
                        <div class=\"contact-row\">
                            <i class=\"fas fa-phone-alt\" aria-hidden=\"true\"></i>
                            <div>
                                <p class=\"text-xs uppercase tracking-widest\">Call</p>
                                <a href=\"tel:+18139393989\" class=\"text-base font-semibold\">+1 813-939-3989</a>
                            </div>
                        </div>
                        <div class=\"contact-row\">
                            <i class=\"fas fa-envelope\" aria-hidden=\"true\"></i>
                            <div>
                                <p class=\"text-xs uppercase tracking-widest\">Email</p>
                                <a href=\"mailto:khallc3989@gmail.com\" class=\"text-base font-semibold\">khallc3989@gmail.com</a>
                            </div>
                        </div>
                        <div class=\"flex flex-wrap gap-3 mt-8\">
                            <a href=\"contact.html\" class=\"btn-primary\">Book a Walkthrough</a>
                            <a href=\"mailto:khallc3989@gmail.com\" class=\"btn-secondary\">Send a Message</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class=\"floating-pill floating-pill-call\" data-aos=\"fade-up\" data-aos-delay=\"350\">
                <a href=\"tel:+18139393989\" aria-label=\"Call Kha Dock & Homes\">
                    <i class=\"fas fa-phone-alt\" aria-hidden=\"true\"></i>
                </a>
            </div>
            <div class=\"floating-pill floating-pill-whatsapp\" data-aos=\"fade-up\" data-aos-delay=\"400\">
                <a href=\"https://wa.me/18139393989\" aria-label=\"WhatsApp Kha Dock & Homes\">
                    <i class=\"fab fa-whatsapp\" aria-hidden=\"true\"></i>
                </a>
            </div>
        </section>

        <section class=\"py-16 lg:py-20\">
            <div class=\"container mx-auto px-4 sm:px-6 lg:px-8\">
                <div class=\"text-center\">
                    <p class=\"section-badge\">Signature Projects</p>
                    <h2 class=\"section-title mt-3\">Furniture-grade craftsmanship for every space.</h2>
                    <p class=\"section-subtitle\">
                        We choreograph architects, artisans, and engineers to deliver spaces that feel curated, calm, and built to last.
                    </p>
                </div>
                <div class=\"projects-grid grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3\">
                    <article class=\"project-card\" data-aos=\"fade-up\" data-aos-delay=\"150\">
                        <div class=\"project-image\">
                            <img src=\"images/projects/kitchenremodel.png\" alt=\"Modern kitchen remodel\" loading=\"lazy\">
                            <span class=\"project-tag\">Kitchen Remodel</span>
                        </div>
                        <div class=\"project-details\">
                            <h3>Open-plan kitchen renewal</h3>
                            <p>We carved an effortless island, grain-matched cabinetry, and ambient lighting for family gatherings.</p>
                            <a href=\"projects.html\" class=\"project-link\">
                                View the transformation <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>
                            </a>
                        </div>
                    </article>
                    <article class=\"project-card\" data-aos=\"fade-up\" data-aos-delay=\"250\">
                        <div class=\"project-image\">
                            <img src=\"images/projects/lux-bathroom.png\" alt=\"Luxury bathroom remodel\" loading=\"lazy\">
                            <span class=\"project-tag\">Luxury Bath Retreat</span>
                        </div>
                        <div class=\"project-details\">
                            <h3>Serene spa-like suite</h3>
                            <p>We layered heated flooring, marble tile, and gentle cove lighting to cultivate a calm escape.</p>
                            <a href=\"projects.html\" class=\"project-link\">
                                Explore the story <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>
                            </a>
                        </div>
                    </article>
                    <article class=\"project-card\" data-aos=\"fade-up\" data-aos-delay=\"350\">
                        <div class=\"project-image\">
                            <img src=\"images/projects/wood-floor.png\" alt=\"Wood flooring installation\" loading=\"lazy\">
                            <span class=\"project-tag\">Natural Wood Flooring</span>
                        </div>
                        <div class=\"project-details\">
                            <h3>Warm oak flooring</h3>
                            <p>Custom sanding and finishing recipes add glow without sacrificing the floor's natural grain.</p>
                            <a href=\"projects.html\" class=\"project-link\">
                                See the before & after <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <section class=\"bg-slate-900 text-white py-16 lg:py-20\">
            <div class=\"container mx-auto px-4 sm:px-6 lg:px-8\">
                <div class=\"text-center\">
                    <p class=\"section-badge text-slate-300\">Our Expertise</p>
                    <h2 class=\"section-title text-white mt-3\">Concept to completion, every step refined.</h2>
                    <p class=\"section-subtitle text-slate-300\">
                        Every trade is overseen by a project manager who keeps your schedule, budget, and design intent in sync.
                    </p>
                </div>
                <div class=\"grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3\">
                    <article class=\"service-panel\" data-aos=\"fade-up\" data-aos-delay=\"150\">
                        <div class=\"service-panel-icon\">
                            <i class=\"fas fa-home\" aria-hidden=\"true\"></i>
                        </div>
                        <h3>Full-scale Renovations</h3>
                        <p>Interior and exterior scope from structural changes to curated millwork, managed by our core crew.</p>
                        <span class=\"service-panel-highlight\">Design + Build</span>
                    </article>
                    <article class=\"service-panel\" data-aos=\"fade-up\" data-aos-delay=\"250\">
                        <div class=\"service-panel-icon\">
                            <i class=\"fas fa-sink\" aria-hidden=\"true\"></i>
                        </div>
                        <h3>Kitchen & Bath Remodeling</h3>
                        <p>Custom cabinetry, lighting, and plumbing are orchestrated with premium fixtures and smart storage.</p>
                        <span class=\"service-panel-highlight\">Curated Spaces</span>
                    </article>
                    <article class=\"service-panel\" data-aos=\"fade-up\" data-aos-delay=\"350\">
                        <div class=\"service-panel-icon\">
                            <i class=\"fas fa-drafting-compass\" aria-hidden=\"true\"></i>
                        </div>
                        <h3>Design & Consultation</h3>
                        <p>Digital renderings, material boards, and budget reviews help you lock decisions early.</p>
                        <span class=\"service-panel-highlight\">Studio-led</span>
                    </article>
                </div>
            </div>
        </section>

        <section class=\"py-16 lg:py-20\">
            <div class=\"container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2\">
                <div class=\"glass-panel contact-panel\" data-aos=\"fade-up\">
                    <p class=\"section-badge text-slate-500\">Direct access</p>
                    <h2 class=\"section-title mt-3\">An account manager for every job.</h2>
                    <p class=\"text-slate-600 mt-3\">
                        We translate your vision into weekly milestones, detailed budgets, and transparent updates so you never wonder where the crew is.
                    </p>
                    <div class=\"space-y-4 mt-6\">
                        <div class=\"contact-row\">
                            <i class=\"fas fa-calendar-check\" aria-hidden=\"true\"></i>
                            <div>
                                <p class=\"text-xs uppercase tracking-widest\">Appointments</p>
                                <p class=\"text-base font-semibold\">On-site consultations & digital reviews</p>
                            </div>
                        </div>
                        <div class=\"contact-row\">
                            <i class=\"fas fa-tools\" aria-hidden=\"true\"></i>
                            <div>
                                <p class=\"text-xs uppercase tracking-widest\">Crew</p>
                                <p class=\"text-base font-semibold\">Licensed craftsmen, project managers, and architects</p>
                            </div>
                        </div>
                        <div class=\"contact-row\">
                            <i class=\"fas fa-envelope\" aria-hidden=\"true\"></i>
                            <div>
                                <p class=\"text-xs uppercase tracking-widest\">Quick reply</p>
                                <a href=\"mailto:khallc3989@gmail.com\" class=\"text-base font-semibold\">khallc3989@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div class=\"flex flex-wrap gap-3 mt-8\">
                        <a href=\"contact.html\" class=\"btn-primary\">Schedule a walkthrough</a>
                        <a href=\"tel:+18139393989\" class=\"btn-secondary\">+1 813-939-3989</a>
                    </div>
                </div>
                <div class=\"process-panel\" data-aos=\"fade-up\" data-aos-delay=\"200\">
                    <p class=\"section-badge text-slate-500\">Refined Process</p>
                    <h2 class=\"section-title mt-3 text-slate-900\">Three purposeful phases</h2>
                    <div class=\"space-y-5 mt-10\">
                        <div class=\"process-step\">
                            <div class=\"process-step-index\">1</div>
                            <div>
                                <p class=\"font-semibold text-slate-900\">Consultation & Ideation</p>
                                <p>We listen to your goals, survey the space, and deliver a scope that honors your lifestyle.</p>
                            </div>
                        </div>
                        <div class=\"process-step\">
                            <div class=\"process-step-index\">2</div>
                            <div>
                                <p class=\"font-semibold text-slate-900\">Design & Visualization</p>
                                <p>Digital renderings, material boards, and phased budgets give you clarity before construction begins.</p>
                            </div>
                        </div>
                        <div class=\"process-step\">
                            <div class=\"process-step-index\">3</div>
                            <div>
                                <p class=\"font-semibold text-slate-900\">Construction & Completion</p>
                                <p>We execute with daily logs, weekly walkthroughs, and smiles when the last detail is refined.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class=\"py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50\">
            <div class=\"container mx-auto px-4 sm:px-6 lg:px-8\">
                <div class=\"text-center\">
                    <p class=\"section-badge\">Testimonials</p>
                    <h2 class=\"section-title mt-3\">Words from homeowners we served</h2>
                </div>
                <div class=\"testimonials-grid grid gap-6 md:grid-cols-2\">
                    <article class=\"testimonial-panel\" data-aos=\"fade-up\" data-aos-delay=\"150\">
                        <p>\"The crew was on time, respectful of our home, and produced an end result that feels elevated yet comfortable. They made a complex remodel feel effortless.\"</p>
                        <div class=\"testimonial-author\">
                            <span>Sarah M.</span>
                            <span>Orlando, FL</span>
                        </div>
                    </article>
                    <article class=\"testimonial-panel\" data-aos=\"fade-up\" data-aos-delay=\"250\">
                        <p>\"Kha Dock & Homes guided us through every decision, from permit talks to paint colors. The finish work is cleaner than anything we expected.\"</p>
                        <div class=\"testimonial-author\">
                            <span>Javier & Lily</span>
                            <span>Tampa, FL</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <section class=\"contact-cta py-16 lg:py-20\" data-aos=\"fade-up\">
            <div class=\"container mx-auto px-4 sm:px-6 lg:px-8 text-center\">
                <p class=\"section-badge text-white/80\">Ready when you are</p>
                <h2 class=\"section-title mt-3 text-white\">Your next chapter starts with a conversation.</h2>
                <p class=\"text-white/80 max-w-3xl mx-auto mt-3\">
                    Share your inspiration, timeline, and budget—we will return a transparent plan and schedule right away.
                </p>
                <div class=\"mt-8 flex flex-wrap justify-center gap-4\">
                    <a href=\"contact.html\" class=\"btn-primary\">Start a project</a>
                    <a href=\"mailto:khallc3989@gmail.com\" class=\"btn-secondary\">Email khallc3989@gmail.com</a>
                </div>
            </div>
        </section>
    </main>
"""
path.write_text(text[:start] + new_main + text[end:], encoding='utf-8')
