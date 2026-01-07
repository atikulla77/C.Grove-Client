"use client";
import Image from "next/image";
import { mockData } from "../components/shared/mock";
import { ExternalLink, Mail, Phone, MapPin, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { profile, skills, bookMockups, testimonials } = mockData;
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
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            {profile.name}
          </div>
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
      <section id="about" className="py-20 px-6 bg-gray-50">
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
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
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
                    <div className="border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-3">
                      {mockup.category}
                    </div>
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
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
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
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">{profile.name}</p>
          <p className="text-sm text-gray-400 mb-4">{profile.title}</p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
