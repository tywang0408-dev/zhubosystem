
import React, { useRef } from 'react';
import { useImageContext } from '../contexts/ImageContext';
import { Camera, Upload } from 'lucide-react';

interface ImageUploaderProps {
  imageKey: string;
  className?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ imageKey, className = "top-4 right-4" }) => {
  const { isEditing, updateImage } = useImageContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isEditing) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateImage(imageKey, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`absolute z-50 ${className}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          fileInputRef.current?.click();
        }}
        className="bg-yellow-500 hover:bg-yellow-400 text-black p-2 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center gap-2 px-4 font-bold text-sm"
        title="Replace Image"
      >
        <Camera size={18} />
        <span>换图</span>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default ImageUploader;
