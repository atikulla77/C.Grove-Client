"use client";
import Image from "next/image";
import { mockData } from "../components/shared/mock";
import { ExternalLink, Mail, Phone, MapPin, Star, Quote } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  const { profile, skills, bookMockups, testimonials } = mockData;
  const [hoveredBook, setHoveredBook] = useState();
  const handleMockupClick = (amazonLink: any) => {
    window.open(amazonLink, "_blank", "noopener,noreferrer");
  };

  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center select-none">
              <div className="flex items-center text-black tracking-[-0.02em]">
                <Image
                  src={"/logo_.png"}
                  alt={"C.grove Logo"}
                  width={244}
                  height={244}
                  className="w-7.5"
                />
                <span className="mt-1 -ml-px text-[#848991] text-[17px] text-sm font-medium tracking-[0.02em]">
                  Grove
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href={"#about"}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              About
            </Link>
            <Link
              href={"#portfolio"}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href={"/gallery"}
              target="_blank"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href={"#testimonials"}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href={"#contact"}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              href={"/login"}
              target="_blank"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Admin
            </Link>
          </nav>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-light">
            {profile.title}
          </p>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {profile.tagline}
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold">
                {profile.projectsCompleted}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Projects Completed
              </div>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold">{profile.experience}</div>
              <div className="text-sm text-gray-500 mt-1">Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Story</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {profile.bio}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-4 py-2 text-sm border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* About Section - Unique Layout */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                About My
                <span className="block text-gray-400 italic">Work</span>
              </h2>
            </div>
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {profile.bio2}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Mockup Designs
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Happy Clients
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Design Styles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Portfolio</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Explore my collection of book cover mockups. Click any design to
            view it on Amazon KDP.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookMockups.map((mockup) => {
              return (
                <div
                  key={mockup.id}
                  className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2  rounded-xl border border-[#e5e5e5] bg-[#ffffff] text-[#0a0a0a] shadow"
                  onClick={() => handleMockupClick(mockup.amazonLink)}
                >
                  <div className="relative overflow-hidden aspect-3/4 bg-gray-100">
                    <Image
                      src={mockup.image}
                      alt={mockup.title}
                      width={320}
                      height={427}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        size={32}
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {mockup.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {mockup.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      {/* Gallery Section - Asymmetric Grid */}
      <section id="portfolio" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
              My Work
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Book Cover <span className="text-gray-400 italic">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any mockup to visit the Amazon KDP product page
            </p>
          </div>

          {/* Uniform Grid Layout - All Same Size */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookMockups.map((book) => {
              return (
                <Link
                  key={book.id}
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer"
                  // onMouseEnter={() => setHoveredBook(book.id)}
                  // onMouseLeave={() => setHoveredBook("")}
                >
                  <div className="aspect-2/3 relative overflow-hidden">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={1800}
                      height={2700}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">
                          {book.title}
                        </h3>
                        <p className="text-sm text-gray-200 mb-4">
                          {book.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <span>View on Amazon</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Corner Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="flex justify-center text-center mt-12">
            <Link href="/gallery">
              <button className="text-[15px] font-medium text-gray-700 hover:text-gray-600 group flex items-center cursor-pointer transition-colors">
                View All Book Cover
                <FaArrowRight className="w-3.75 ml-2 text-gray-600 group-hover:text-gray-500 group-hover:translate-x-1.25 transition-all" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Don't just take my word for it - hear from authors and publishers
            I've worked with.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] text-[#0a0a0a] shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              What Clients <span className="text-gray-400 italic">Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 rounded-xl border text-card-foreground shadow ${index === 1 ? 'md:mt-8' : ''}`}
              >
                <div className="p-8">
                  <Quote className="w-10 h-10 text-gray-400 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to create an amazing book cover? Get in touch and let's bring
            your vision to life.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="hover:shadow-lg transition-shadow duration-300 rounded-xl border border-[#e5e5e5] bg-[#ffffff] text-[#0a0a0a] shadow">
              <div className="p-8">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600 text-sm">{profile.email}</p>
              </div>
            </div>
            <div className="hover:shadow-lg transition-shadow duration-300 rounded-xl border border-[#e5e5e5] bg-[#ffffff] text-[#0a0a0a] shadow">
              <div className="p-8">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">{profile.phone}</p>
              </div>
            </div>
            <div className="hover:shadow-lg transition-shadow duration-300 rounded-xl border border-[#e5e5e5] bg-[#ffffff] text-[#0a0a0a] shadow">
              <div className="p-8">
                <MapPin className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600 text-sm">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-gray-600 uppercase">Contact</span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                Let's Create
                <span className="block text-gray-400 italic">Together</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to bring your book cover to life? Get in touch and let's discuss your project!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border border-gray-200 hover:border-gray-900 transition-colors duration-300 rounded-xl bg-white text-[#0a0a0a] shadow">
                <div className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Email</div>
                    <div className="text-[16px] font-medium text-gray-900">{profile.email}</div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 hover:border-gray-900 transition-colors duration-300 rounded-xl bg-white text-[#0a0a0a] shadow">
                <div className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Phone</div>
                    <div className="text-[16px] font-medium text-gray-900">{profile.phone}</div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 hover:border-gray-900 transition-colors duration-300 rounded-xl bg-white text-[#0a0a0a] shadow">
                <div className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Location</div>
                    <div className="text-[16px] font-medium text-gray-900">{profile.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg font-semibold mb-2">{profile.name}</h3>
          <p className="text-gray-400 mb-4">{profile.title}</p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved. Book Cover Mockups Portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
}



const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center select-none">
              <div className="flex items-center text-black tracking-[-0.02em]">
                <Image
                  src={"/logo_.png"}
                  alt={"C.grove Logo"}
                  width={244}
                  height={244}
                  className="w-7.5"
                />
                <span className="mt-1 -ml-px text-[#848991] text-[17px] text-sm font-medium tracking-[0.02em]">
                  Grove
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href={"#about"}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              About
            </Link>
            <Link
              href={"#portfolio"}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href={"/gallery"}
              target="_blank"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href={"#testimonials"}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href={"#contact"}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              href={"/login"}
              target="_blank"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Admin
            </Link>
          </nav>
        </div>
      </header>
  )
}
