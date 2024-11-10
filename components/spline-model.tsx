'use client'

interface SplineModelProps {
    imageUrl: string; // URL of the JPEG image
    className?: string;
  }
  
  export default function SplineModel({ imageUrl, className }: SplineModelProps) {
    return (
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
        <div className="w-full h-full">
          <img 
            src={imageUrl} 
            alt="3D Model Preview" 
            style={{ opacity: 0.8, width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      </div>
    );
  }
