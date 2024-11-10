import SplineModel from "@/components/spline-model";



export default async function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="spline_background.jpg" 
          alt="background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Container */}
      <div className="relative z-10 w-full px-4">
        <div className="flex items-center justify-center">
          <h1 className="text-[15vw] font-bold flex items-center justify-center w-full">
            {/* First part */}
            <span className="text-right flex-1" style={{ letterSpacing: '0.13em' }}>
              .open
            </span>
            
            {/* Centered X */}
            <span className="text-center mx-0">X</span>
            
            {/* Last part */}
            <span className="text-left flex-1" style={{ letterSpacing: '0.13em' }}>
              ploit
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
