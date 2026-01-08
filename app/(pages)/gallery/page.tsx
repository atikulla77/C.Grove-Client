
const Gallery = () => {
  return (
    // <div className="min-h-screen bg-white">
    //   {/* Navbar */}
    //   <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    //     <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    //       <div className="flex items-center justify-between h-20">
    //         {/* Logo */}
    //         <Link href="/" className="flex items-center gap-2">
    //           <div className="flex items-center">
    //             <span className="text-2xl font-light text-gray-900">c.</span>
    //             <span className="text-2xl font-bold text-gray-900">grove</span>
    //           </div>
    //         </Link>

    //         {/* Desktop Navigation */}
    //         <div className="hidden md:flex items-center gap-8">
    //           <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
    //             Home
    //           </Link>
    //           <Link href="/#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
    //             About
    //           </Link>
    //           <Link href="/mockups" className="text-gray-900 font-semibold border-b-2 border-gray-900">
    //             Gallery
    //           </Link>
    //           <Link href="/#testimonials" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
    //             Testimonials
    //           </Link>
    //           <Link href="/#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
    //             Contact
    //           </Link>
    //           <Button 
    //             className="bg-gray-900 hover:bg-gray-800 text-white"
    //             onClick={() => window.location.href = '/#contact'}
    //           >
    //             Get Started
    //           </Button>
    //         </div>

    //         {/* Mobile Menu Button */}
    //         <button 
    //           className="md:hidden p-2"
    //           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    //         >
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             {mobileMenuOpen ? (
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    //             ) : (
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    //             )}
    //           </svg>
    //         </button>
    //       </div>

    //       {/* Mobile Menu */}
    //       {mobileMenuOpen && (
    //         <div className="md:hidden py-4 border-t border-gray-200">
    //           <div className="flex flex-col gap-4">
    //             <Link href="/" className="text-left text-gray-700 hover:text-gray-900 font-medium py-2">
    //               Home
    //             </Link>
    //             <Link href="/#about" className="text-left text-gray-700 hover:text-gray-900 font-medium py-2">
    //               About
    //             </Link>
    //             <Link href="/mockups" className="text-left text-gray-900 font-semibold py-2">
    //               Gallery
    //             </Link>
    //             <Link href="/#testimonials" className="text-left text-gray-700 hover:text-gray-900 font-medium py-2">
    //               Testimonials
    //             </Link>
    //             <Link href="/#contact" className="text-left text-gray-700 hover:text-gray-900 font-medium py-2">
    //               Contact
    //             </Link>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </nav>

    //   {/* Hero Section */}
    //   <section className="pt-32 pb-12 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
    //     <div className="max-w-7xl mx-auto">
    //       <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
    //         <ArrowLeft className="w-5 h-5" />
    //         <span className="font-medium">Back to Home</span>
    //       </Link>
          
    //       <div className="text-center">
    //         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
    //           Complete <span className="text-gray-400 italic">Collection</span>
    //         </h1>
    //         <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
    //           Explore our entire library of professional book cover mockups. Click any mockup to view on Amazon KDP.
    //         </p>
    //         <div className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">
    //           {filteredMockups.length} Mockups Available
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Filter Section */}
    //   <section className="py-8 px-4 md:px-8 lg:px-16 border-b border-gray-200 sticky top-20 bg-white/95 backdrop-blur-sm z-40">
    //     <div className="max-w-7xl mx-auto space-y-6">
    //       {/* Search Bar */}
    //       <div className="flex items-center gap-4">
    //         <div className="relative flex-1 max-w-md">
    //           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    //           <Input
    //             type="text"
    //             placeholder="Search mockups by title..."
    //             value={searchQuery}
    //             onChange={handleSearchChange}
    //             className="pl-10 pr-4 py-6 text-base border-2 border-gray-200 focus:border-gray-900 rounded-lg"
    //           />
    //         </div>
    //         {searchQuery && (
    //           <Button
    //             variant="outline"
    //             onClick={() => setSearchQuery('')}
    //             className="whitespace-nowrap"
    //           >
    //             Clear Search
    //           </Button>
    //         )}
    //       </div>

    //       {/* Category Filter */}
    //       <div className="flex items-center justify-between flex-wrap gap-4">
    //         <div className="flex items-center gap-2 text-gray-700">
    //           <Filter className="w-5 h-5" />
    //           <span className="font-semibold">Filter by Category:</span>
    //         </div>
    //         <div className="flex flex-wrap gap-3">
    //           {categories.map((category) => (
    //             <button
    //               key={category}
    //               onClick={() => handleCategoryChange(category)}
    //               className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
    //                 selectedCategory === category
    //                   ? 'bg-gray-900 text-white shadow-lg'
    //                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    //               }`}
    //             >
    //               {category}
    //             </button>
    //           ))}
    //         </div>
    //       </div>

    //       {/* Results Count */}
    //       <div className="text-center">
    //         <p className="text-gray-600">
    //           Showing <span className="font-semibold text-gray-900">{currentMockups.length}</span> of{' '}
    //           <span className="font-semibold text-gray-900">{filteredMockups.length}</span> mockups
    //           {searchQuery && (
    //             <span className="text-gray-500"> for "{searchQuery}"</span>
    //           )}
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Gallery Grid */}
    //   <section className="py-16 px-4 md:px-8 lg:px-16">
    //     <div className="max-w-7xl mx-auto">
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    //         {currentMockups.map((book) => (
    //           <a
    //             key={book.id}
    //             href={book.amazonLink}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    //             onMouseEnter={() => setHoveredBook(book.id)}
    //             onMouseLeave={() => setHoveredBook(null)}
    //           >
    //             <div className="aspect-[3/4] relative overflow-hidden">
    //               <img
    //                 src={book.image}
    //                 alt={book.title}
    //                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    //               />
                  
    //               {/* Overlay */}
    //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
    //                   <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-3">
    //                     {book.category}
    //                   </div>
    //                   <h3 className="text-xl font-bold mb-2">{book.title}</h3>
    //                   <p className="text-sm text-gray-200 mb-4">{book.description}</p>
    //                   <div className="flex items-center gap-2 text-sm font-semibold">
    //                     <span>View on Amazon</span>
    //                     <ExternalLink className="w-4 h-4" />
    //                   </div>
    //                 </div>
    //               </div>

    //               {/* Corner Badge */}
    //               <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
    //                 <ExternalLink className="w-5 h-5 text-gray-900" />
    //               </div>
    //             </div>
    //           </a>
    //         ))}
    //       </div>

    //       {/* No Results */}
    //       {filteredMockups.length === 0 && (
    //         <div className="text-center py-20">
    //           <p className="text-2xl text-gray-400 mb-4">
    //             {searchQuery 
    //               ? `No mockups found for "${searchQuery}"`
    //               : 'No mockups found in this category'
    //             }
    //           </p>
    //           <Button 
    //             onClick={() => {
    //               setSelectedCategory('All')
    //               setSearchQuery('')
    //             }} 
    //             className="bg-gray-900 hover:bg-gray-800 text-white"
    //           >
    //             Clear All Filters
    //           </Button>
    //         </div>
    //       )}

    //       {/* Pagination */}
    //       {filteredMockups.length > 0 && totalPages > 1 && (
    //         <div className="mt-12 flex items-center justify-center gap-2">
    //           {/* Previous Button */}
    //           <Button
    //             variant="outline"
    //             size="icon"
    //             onClick={() => goToPage(currentPage - 1)}
    //             disabled={currentPage === 1}
    //             className="disabled:opacity-50"
    //           >
    //             <ChevronLeft className="w-5 h-5" />
    //           </Button>

    //           {/* Page Numbers */}
    //           <div className="flex gap-2">
    //             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
    //               // Show first page, last page, current page, and pages around current
    //               const showPage = 
    //                 page === 1 || 
    //                 page === totalPages || 
    //                 (page >= currentPage - 1 && page <= currentPage + 1)
                  
    //               // Show ellipsis
    //               const showEllipsisBefore = page === currentPage - 2 && currentPage > 3
    //               const showEllipsisAfter = page === currentPage + 2 && currentPage < totalPages - 2

    //               return (
    //                 <div key={page}>
    //                   {showEllipsisBefore && (
    //                     <span className="px-3 py-2 text-gray-400">...</span>
    //                   )}
    //                   {showPage && (
    //                     <Button
    //                       variant={currentPage === page ? 'default' : 'outline'}
    //                       onClick={() => goToPage(page)}
    //                       className={`min-w-[40px] ${
    //                         currentPage === page 
    //                           ? 'bg-gray-900 text-white hover:bg-gray-800' 
    //                           : 'hover:bg-gray-100'
    //                       }`}
    //                     >
    //                       {page}
    //                     </Button>
    //                   )}
    //                   {showEllipsisAfter && (
    //                     <span className="px-3 py-2 text-gray-400">...</span>
    //                   )}
    //                 </div>
    //               )
    //             })}
    //           </div>

    //           {/* Next Button */}
    //           <Button
    //             variant="outline"
    //             size="icon"
    //             onClick={() => goToPage(currentPage + 1)}
    //             disabled={currentPage === totalPages}
    //             className="disabled:opacity-50"
    //           >
    //             <ChevronRight className="w-5 h-5" />
    //           </Button>
    //         </div>
    //       )}
    //     </div>
    //   </section>

    //   {/* CTA Section */}
    //   <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
    //     <div className="max-w-4xl mx-auto text-center">
    //       <h2 className="text-4xl md:text-5xl font-bold mb-6">
    //         Ready to Get <span className="text-gray-400 italic">Started?</span>
    //       </h2>
    //       <p className="text-xl text-gray-300 mb-8">
    //         Contact me to discuss your book cover mockup needs and let's create something amazing together.
    //       </p>
    //       <Link href="/#contact">
    //         <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg">
    //           Get in Touch
    //         </Button>
    //       </Link>
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <footer className="py-12 px-4 md:px-8 lg:px-16 bg-gray-950 text-white">
    //     <div className="max-w-7xl mx-auto text-center">
    //       <h3 className="text-2xl font-bold mb-2">Book Cover Mockups</h3>
    //       <p className="text-gray-400 mb-6">Professional Graphic Design Portfolio</p>
    //       <p className="text-sm text-gray-500">
    //         © {new Date().getFullYear()} All rights reserved. Book Cover Mockups Portfolio.
    //       </p>
    //     </div>
    //   </footer>
    // </div>
    <div></div>
  )
}

export default Gallery