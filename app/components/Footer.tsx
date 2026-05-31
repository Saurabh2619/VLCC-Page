import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#ddd] pt-[80px] pb-5">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex justify-between flex-wrap gap-[50px] mb-[60px] border-b border-[#333] pb-[60px] flex-col md:flex-row">
          <div className="flex-[2] min-w-[300px] w-full md:w-auto">
            <Image src="/vlcc-logo.png" alt="VLCC Logo" width={140} height={50} className="mb-5 brightness-0 invert" />
            <p className="text-[#999] text-sm leading-[1.8] max-w-[400px] font-body">Empowering individuals with world-class education in beauty, wellness, and nutrition. Join us to transform your passion into a profession.</p>
          </div>
          
          <div className="flex-1 min-w-[200px] w-full md:w-auto">
            <h4 className="text-white text-lg mb-5 font-heading font-semibold">Quick Links</h4>
            <ul className="list-none p-0">
              <li className="mb-3"><a href="#hero" className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">Home</a></li>
              <li className="mb-3"><a href="#about" className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">About Us</a></li>
              <li className="mb-3"><a href="#apply" className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">How to Apply</a></li>
              <li className="mb-3"><a href="#contact" className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="flex-1 min-w-[200px] w-full md:w-auto">
            <h4 className="text-white text-lg mb-5 font-heading font-semibold">Connect With Us</h4>
            <div className="flex gap-[15px]">
              <a href="#" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-vlcc-orange hover:-translate-y-[3px]" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-vlcc-orange hover:-translate-y-[3px]" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.47 1.38.89.42.42.67.82.89 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.47.96-.89 1.38-.42.42-.82.67-1.38.89-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.47-1.38-.89-.42-.42-.67-.82-.89-1.38-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.47-.96.89-1.38.42-.42.82-.67 1.38-.89.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.27.06-2.14.26-2.9.56-.78.3-1.44.73-2.1 1.39-.66.66-1.09 1.32-1.39 2.1-.3.76-.5 1.63-.56 2.9C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.14.56 2.9.3.78.73 1.44 1.39 2.1.66.66 1.32 1.09 2.1 1.39.76.3 1.63.5 2.9.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.14-.26 2.9-.56.78-.3 1.44-.73 2.1-1.39.66-.66 1.09-1.32 1.39-2.1.3-.76.5-1.63.56-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.14-.56-2.9-.3-.78-.73-1.44-1.39-2.1-.66-.66-1.32-1.09-2.1-1.39-.76-.3-1.63-.5-2.9-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm3.85-9.35a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-vlcc-orange hover:-translate-y-[3px]" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path d="M20.45 20.45h-3.56v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-vlcc-orange hover:-translate-y-[3px]" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path d="M24 4.56a9.83 9.83 0 01-2.83.78 4.93 4.93 0 002.17-2.72 9.86 9.86 0 01-3.13 1.2 4.93 4.93 0 00-8.38 4.48A13.98 13.98 0 011.67 3.15 4.93 4.93 0 003.2 9.73a4.9 4.9 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.94 4.94 0 01-2.22.08 4.94 4.94 0 004.6 3.42A9.87 9.87 0 010 19.54a13.94 13.94 0 007.55 2.21c9.06 0 14.01-7.5 14.01-14.01v-.64A10.02 10.02 0 0024 4.56z" /></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-[#666] text-[13px] font-body">&copy; {new Date().getFullYear()} VLCC School of Beauty. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
