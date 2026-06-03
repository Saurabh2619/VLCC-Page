export default function HowToApply() {
  const steps = [
    {
      id: '01',
      title: 'Submit Application',
      desc: 'Fill out the initial online form with your basic details and course preference.'
    },
    {
      id: '02',
      title: 'Counseling Session',
      desc: 'Our expert counselors will connect with you to guide you through the process.'
    },
    {
      id: '03',
      title: 'Documentation',
      desc: 'Submit your educational documents and ID proofs securely.'
    },
    {
      id: '04',
      title: 'Enrollment',
      desc: 'Complete the fee payment to confirm your seat in the upcoming batch.'
    }
  ];

  return (
    <section id="apply" className="py-10 md:py-[70px] bg-transparent">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-[60px]">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">Process</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">How to Apply</h2>
          <p className="text-[#666] text-base max-w-[600px] mx-auto font-body">Join the leader in beauty education in 4 simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-[40px_30px] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative transition-all duration-300 ease-out overflow-hidden border-b-4 border-transparent hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:border-vlcc-orange group">
              <div className="text-[4rem] font-bold text-vlcc-orange/10 absolute -top-2.5 right-2.5 font-heading transition-colors duration-300 group-hover:text-vlcc-orange/20">{step.id}</div>
              <h3 className="text-xl text-[#1a1a1a] mb-[15px] relative z-10 font-heading font-semibold">{step.title}</h3>
              <p className="text-[#666] text-sm leading-[1.6] relative z-10 font-body">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
