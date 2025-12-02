
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ImageContextType {
  images: Record<string, string>;
  texts: Record<string, string>;
  updateImage: (key: string, url: string) => void;
  updateText: (key: string, text: string) => void;
  resetImages: () => void;
  resetTexts: () => void;
  resetAll: () => void;
  getAllConfig: () => { images: Record<string, string>, texts: Record<string, string> };
  isEditing: boolean;
  toggleEditing: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [texts, setTexts] = useState<Record<string, string>>({});
  const [isEditing, setIsEditing] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedImages = localStorage.getItem('honor_kings_images');
    const savedTexts = localStorage.getItem('honor_kings_texts');
    
    if (savedImages) {
      try {
        setImages(JSON.parse(savedImages));
      } catch (e) {
        console.error("Failed to parse saved images", e);
      }
    }

    if (savedTexts) {
        try {
          setTexts(JSON.parse(savedTexts));
        } catch (e) {
          console.error("Failed to parse saved texts", e);
        }
      }
  }, []);

  const updateImage = (key: string, url: string) => {
    const newImages = { ...images, [key]: url };
    setImages(newImages);
    localStorage.setItem('honor_kings_images', JSON.stringify(newImages));
  };

  const updateText = (key: string, text: string) => {
    const newTexts = { ...texts, [key]: text };
    setTexts(newTexts);
    localStorage.setItem('honor_kings_texts', JSON.stringify(newTexts));
  };

  const resetImages = () => {
    setImages({});
    localStorage.removeItem('honor_kings_images');
  };

  const resetTexts = () => {
    setTexts({});
    localStorage.removeItem('honor_kings_texts');
  };

  const resetAll = () => {
      resetImages();
      resetTexts();
  }

  const getAllConfig = () => {
      return { images, texts };
  };

  const toggleEditing = () => setIsEditing(prev => !prev);

  return (
    <ImageContext.Provider value={{ 
        images, 
        texts, 
        updateImage, 
        updateText, 
        resetImages, 
        resetTexts, 
        resetAll,
        getAllConfig,
        isEditing, 
        toggleEditing 
    }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

// Helper hook to easily get the current image URL
export const useImage = (key: string, defaultUrl: string) => {
  const { images } = useImageContext();
  return images[key] || defaultUrl;
};
