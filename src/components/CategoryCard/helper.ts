import { programingDataSVG, programingDataWhiteSVG } from "@assets/index";

interface ImageDictionaryProps {
  [key: string]: string;
}

const imageDicionary = (selected?: boolean): ImageDictionaryProps => {
  if (selected) {
    return {
      PROGRAMING: programingDataWhiteSVG,
    };
  }

  return {
    PROGRAMING: programingDataSVG,
  };
};

export { imageDicionary };
